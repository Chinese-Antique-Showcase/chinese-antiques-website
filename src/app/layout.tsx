import "./globals.css";
import NavBar from "@/_components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center px-6">
        <NavBar />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
