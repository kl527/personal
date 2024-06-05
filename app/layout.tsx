import "./ui/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/tah0pes.css" />
      </head>
      <body className={"font-bold"}>{children}</body>
    </html>
  );
}
