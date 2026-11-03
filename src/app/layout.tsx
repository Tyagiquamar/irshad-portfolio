import type { Metadata } from 'next';
import { Outfit, Source_Sans_3, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const display = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
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

const themeBoot = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light';}catch(e){}})();`;

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
        <meta name="theme-color" content="#0b1220" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230b1220'/><text y='70' x='28' font-size='56' fill='%2360a5fa' font-family='sans-serif'>I</text></svg>"
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
