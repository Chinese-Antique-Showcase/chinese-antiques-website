import { Metadata } from "next";
import "./globals.css";
import NavBar from "@/_components/navbar";
import ReactDOM from "react-dom";

// ReactDOM.preconnect("https://fonts.googleapis.com", { crossOrigin?: string })

ReactDOM.preconnect("https://fonts.googleapis.com", {
  crossOrigin: "anonymous",
});
ReactDOM.preconnect("https://fonts.gstatic.com", { crossOrigin: "anonymous" });

export const metadata: Metadata = {
  title: "Yang Antiques",
  description: "Discover exquisite antiques from Yang Antiques.",
  // link: [
  //   { rel: "preconnect", href: "https://fonts.googleapis.com" },
  //   { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  //   {
  //     rel: "stylesheet",
  //     href: "https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap",
  //   },
  // ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="flex flex-col items-center justify-center px-2">
        <NavBar />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
