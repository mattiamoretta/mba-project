import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://turn-up-mba.mattiamoretta.chatgpt.site"),
  title: "Turn-Up — Il lavoro giusto. Senza giri.",
  description:
    "Match verificati, opportunità trasparenti e assunzioni più semplici per l’ospitalità italiana.",
  openGraph: {
    title: "Turn-Up — Il lavoro giusto. Senza giri.",
    description:
      "Match verificati e assunzioni più semplici per l’ospitalità italiana.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Turn-Up — Il lavoro giusto. Senza giri.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turn-Up — Il lavoro giusto. Senza giri.",
    description:
      "Match verificati e assunzioni più semplici per l’ospitalità italiana.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased">{children}</body>
    </html>
  );
}
