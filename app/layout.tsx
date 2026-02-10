import "./globals.css";

export const metadata = {
  title: "China Medical Advisory",
  description:
    "Professional medical advisory and patient accompaniment services in China",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
