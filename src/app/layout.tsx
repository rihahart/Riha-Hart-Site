import '../styles/global.css'
import Navigation from '@/components/Navigation'
import { VideoProvider } from '@/contexts/VideoContext'
import { MenuProvider } from '@/contexts/MenuContext'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Riha Hart - Product Designer',
  description: 'Product Designer based in New York City. I design products that solve problems and bring joy.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/zpt8xte.css" />
      </head>
      <body style={{ backgroundColor: 'var(--black)', position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <VideoProvider>
          <MenuProvider>
            <Navigation />
            <main style={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', marginTop: 'var(--nav-h)' }}>
              {children}
            </main>
            <Footer />
            <Menu />
          </MenuProvider>
        </VideoProvider>
      </body>
    </html>
  )
}

