import '../styles/global.css'
import Navigation from '@/components/Navigation'
import { VideoProvider } from '@/contexts/VideoContext'

export const metadata = {
  title: 'Riha Hart - Product Designer',
  description: 'Product Designer based in New York City. I design products that solve problems and bring joy.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/zpt8xte.css" />
      </head>
      <body style={{ backgroundColor: 'var(--black)', position: 'relative', minHeight: '100vh' }}>
        <VideoProvider>
          <Navigation />
          <main>{children}</main>
        </VideoProvider>
      </body>
    </html>
  )
}

