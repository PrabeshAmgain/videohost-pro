import './globals.css';

export const metadata = {
  title: 'VideoHost Pro',
  description: 'Professional video hosting platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div id="root">
          {children}
        </div>
        <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
      </body>
    </html>
  );
}
