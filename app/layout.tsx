import "./ui/globals.css";

export const LeftBar = (): JSX.Element => {
  return (
    <div className="fixed left-0 top-0 h-[100vh] w-[12px] bg-melo-blue" />
  )
}

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
      <body className={"font-bold"}>{children} <LeftBar /></body>
    </html>
  );
}
