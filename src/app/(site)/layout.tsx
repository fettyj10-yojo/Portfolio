import '@/styles/tailwind.css';
import type { Metadata } from 'next';
import { Sora } from 'next/font/google';

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jacob Fetty | Systems, Software & Intelligence',
  description:
    'Portfolio of Jacob Fetty, an industrial engineer and intelligence analyst building software and data solutions.',
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={sora.className}>
      <body className='bg-background text-foreground overflow-x-clip antialiased'>
        {children}
      </body>
    </html>
  );
}
