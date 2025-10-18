
import '../styles/globals.scss'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/general-sans" rel="stylesheet"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
