import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Doc3 - 가볍고 무료인 혁신적인 워드프로세서 대안',
  description: 'HWP, DOCX, ODT 주요 문서 포맷을 지원하는 가볍고 무료인 오픈 워드프로세서 Doc3를 만나보세요.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}