import '../styles/global.css'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'Riha Hart - Product Designer',
  description: 'Product Designer based in New York City. I design products that solve problems and bring joy.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}

