import type { Metadata } from 'next';
import { Instrument_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://irshad-portfolio-seven.vercel.app'),
  title: 'Mohd Irshad — Software Engineer',
  description:
    'Portfolio of Mohd Irshad, a software engineer building durable workflow systems and coding-agent evaluation platforms with Java, Spring Boot, and React.',
  keywords: [
    'Mohd Irshad',
    'Software Engineer',
    'Spring Boot',
    'Java',
    'React',
    'Stepwise',
    'Benchwright',
    'Competitive Programmer',
  ],
  authors: [{ name: 'Mohd Irshad' }],
  openGraph: {
    title: 'Mohd Irshad — Software Engineer',
    description:
      'Durable workflow orchestration, coding-agent evaluation, and backend systems.',
    url: 'https://irshad-portfolio-seven.vercel.app',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohd Irshad — Software Engineer',
    description:
      'Durable workflow orchestration, coding-agent evaluation, and backend systems.',
  },
  alternates: {
    canonical: 'https://irshad-portfolio-seven.vercel.app',
  },
};

const themeBoot = `(function(){try{var t=localStorage.getItem('theme');var d=t!=='light';document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light';}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#14120b" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='8' fill='%2314120b'/><text y='70' x='30' font-size='56' fill='%23f54e00' font-family='serif'>I</text></svg>"
        />
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body className="min-h-screen bg-bg text-fg antialiased">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
