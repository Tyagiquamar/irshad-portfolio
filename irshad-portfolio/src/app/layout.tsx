import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mohd Irshad - Full-Stack Developer & Competitive Programmer',
  description:
    'Portfolio of Mohd Irshad - Full-stack developer specializing in Android, Spring Boot, and React. Top 3% on LeetCode with strong problem-solving skills.',
  keywords: [
    'Full-stack Developer',
    'Competitive Programmer',
    'Android Developer',
    'Spring Boot',
    'React',
    'LeetCode',
    'Web Developer',
    'System Design',
  ],
  authors: [{ name: 'Mohd Irshad' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Mohd Irshad - Full-Stack Developer',
    description: 'Explore my projects and achievements in full-stack development and competitive programming',
    url: 'https://irshad.dev',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%233b82f6'>I</text></svg>" />
      </head>
      <body className="bg-white">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
