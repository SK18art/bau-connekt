import './globals.css';

export const metadata = {
  title: 'Bau-Connekt GmbH | Tiefbau, Glasfaser & Telekommunikationsnetze',
  description:
    'Bau-Connekt GmbH aus Köln: Tiefbauarbeiten, Glasfaserverlegung, Telekommunikationsnetze, Montage, Wartung, Reparatur und Infrastrukturtechnik.',
  alternates: {
    canonical: 'https://bau-connekt.com/',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f3557',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
