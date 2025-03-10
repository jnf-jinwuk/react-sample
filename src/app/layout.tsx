import StoreProvider from '../provider/StoreProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  )
}
