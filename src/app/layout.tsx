import "./globals.css"
import NavBar from "@/_components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center">
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
