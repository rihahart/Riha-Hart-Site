import '../styles/global.css'
import Navigation from '@/components/Navigation'
import { VideoProvider } from '@/contexts/VideoContext'
import LoadingState from '@/components/loading-state/LoadingState'

export const metadata = {
  title: 'Riha Hart - Product Designer',
  description: 'Product Designer based in New York City. I design products that solve problems and bring joy.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: 'var(--darkblack)' }}>
        <VideoProvider>
          <Navigation />
          <main>{children}</main>
          <LoadingState />
        </VideoProvider>
      </body>
    </html>
  )
}

