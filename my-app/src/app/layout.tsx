import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <h1>Teste teste</h1>
        {children}
      </body>
    </html>
  );
}
