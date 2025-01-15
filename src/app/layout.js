// 'use client';

import './globals.css';

import localFont from 'next/font/local';

const pretendard = localFont({
  src: '../style/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const montserrat = localFont({
  src: '../style/fonts/Montserrat-Bold.ttf',
  display: 'swap',
  weight: '700',
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Advance Solution',
  description: 'Advance Solution Official Website',
  openGraph: {
    title: 'Advance Solution',
    description: 'Advance Solution Official Website',
    images: ['/img/adsol.png'],
  },
};


export default function RootLayout({ children }) {
  return (
    <>
      <html
        lang="en"
        className={`${pretendard.className} ${montserrat.className}`}
      >
        <head>
          <meta name="naver-site-verification" content="e3c944298beaef6abc99bb93ec087976e256be06" />
        </head>
        <body>
          <script
            type="text/javascript"
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNBxTatAowreaA0jgD4IqFy741UJnCL0&loading=async&region=EN&language=en"
            async
            defer
          ></script>
          {children}
        </body>
      </html>
    </>
  );
}
