import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja-jp" style={{
      //backgroundImage: `url(/bg2.png)`,
      //backgroundSize: "cover",
      //backgroundRepeat: "repeat",
      //backgroundColor: "#9b7998"
    }}>
      <body style={{
        margin: 0,
        padding: 0
      }}>
        {children}
      </body>
    </html>
  )
}
