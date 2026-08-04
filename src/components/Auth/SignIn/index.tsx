"use client";

import SocialSignup from "../SocialSignup";

export default function Signin() {
  return (
    <section className="pb-17.5 pt-17.5 lg:pb-22.5 xl:pb-27.5 xl:pt-22.5">
      <div className="mx-auto w-full max-w-[570px] px-4 sm:px-8 xl:px-0">
        <div className="rounded-xl bg-white/[0.05] p-7.5 sm:p-12.5">
          <h1 className="mb-2.5 text-center text-2xl font-bold text-white">
            Sign in to your account
          </h1>
          <p className="mb-7.5 text-center text-white/70">
            Continue with one of the connected providers.
          </p>
          <SocialSignup />
        </div>
      </div>
    </section>
  );
}
