import { deflateSync, inflateSync } from "node:zlib";
import { readFileSync, writeFileSync } from "node:fs";

const resumePaths = [
  "Jacob_Fetty_Executive_Resume_v2.pdf",
  "public/Jacob-Fetty-Resume.pdf",
];

const green = "0.09411764705882353 0.8274509803921568 0.07450980392156863 scn";
const black = "0 0 0 scn";

function updateResume(path) {
  const source = readFileSync(path);
  const streamMarker = Buffer.from("stream\n");
  const streamStart = source.indexOf(streamMarker);
  const streamEnd = source.indexOf(Buffer.from("\nendstream"), streamStart);

  if (streamStart < 0 || streamEnd < 0) {
    throw new Error(`Could not locate the content stream in ${path}`);
  }

  const contentStart = streamStart + streamMarker.length;
  const content = inflateSync(source.subarray(contentStart, streamEnd)).toString("latin1");
  const matches = content.split(green).length - 1;

  if (matches !== 6) {
    throw new Error(`Expected 6 green text declarations in ${path}, found ${matches}`);
  }

  const updatedStream = deflateSync(Buffer.from(content.replaceAll(green, black), "latin1"));
  let body = Buffer.concat([
    source.subarray(0, contentStart),
    updatedStream,
    source.subarray(streamEnd),
  ]).toString("latin1");

  body = body.replace(/\/Length \d+\n\/Filter \/FlateDecode/, `/Length ${updatedStream.length}\n/Filter /FlateDecode`);
  body = body.slice(0, body.indexOf("xref\n"));

  const offsets = new Map();
  for (const match of body.matchAll(/^(\d+) 0 obj$/gm)) {
    offsets.set(Number(match[1]), Buffer.byteLength(body.slice(0, match.index), "latin1"));
  }

  const xrefOffset = Buffer.byteLength(body, "latin1");
  const xrefEntries = Array.from({ length: 17 }, (_, index) => {
    const objectNumber = index + 1;
    const offset = offsets.get(objectNumber);
    if (offset === undefined) throw new Error(`Missing PDF object ${objectNumber} in ${path}`);
    return `${String(offset).padStart(10, "0")} 00000 n `;
  });

  const idMatch = source.toString("latin1").match(/\/ID \[(<[^>]+>) (<[^>]+>)\]/);
  if (!idMatch) throw new Error(`Could not locate the document ID in ${path}`);

  const xref = [
    "xref",
    "0 18",
    "0000000000 65535 f ",
    ...xrefEntries,
    "trailer",
    "<<",
    "/Size 18",
    "/Root 3 0 R",
    "/Info 11 0 R",
    `/ID [${idMatch[1]} ${idMatch[2]}]`,
    ">>",
    "startxref",
    String(xrefOffset),
    "%%EOF",
    "",
  ].join("\n");

  writeFileSync(path, Buffer.from(body + xref, "latin1"));
  return matches;
}

for (const path of resumePaths) {
  const updated = updateResume(path);
  console.log(`${path}: changed ${updated} bold green text elements to black`);
}
