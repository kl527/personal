import "./ui/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="!scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/tah0pes.css" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={"font-bold"}>{children}</body>
    </html>
  );
}
