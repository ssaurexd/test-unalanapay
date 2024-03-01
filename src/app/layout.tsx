import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { Metadata, Viewport } from 'next'
/*  */
import { ThemeProvider } from '@/layouts'
import { baseURL, comfortaa } from '@/config'
import '../styles/globals.css'


const DEFAULT_TITLE = 'UNALANAPAY - Test App'
const DEFAULT_DESCRIPTION = 'UNALANAPAY - Test App'
export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	userScalable: false
}
export const metadata: Metadata = {
	metadataBase: new URL( baseURL ),
	title: DEFAULT_TITLE,
	description: DEFAULT_DESCRIPTION,
	icons: {
		icon: '/favicon.ico'
	},
	openGraph: {
		title: DEFAULT_TITLE,
		description: DEFAULT_DESCRIPTION,
		url: baseURL,
		/* images: [
			{
				url: `${ baseURL }`
			}
		] */
	},
	twitter: {
		card: 'summary_large_image',
		title: DEFAULT_TITLE,
		description: DEFAULT_DESCRIPTION,
		/* images: [ `${ baseURL }` ] */
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		}
	}
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='es'>
      <body className={ comfortaa.className }>
				<AppRouterCacheProvider>
					<ThemeProvider>
						{children}
					</ThemeProvider>
				</AppRouterCacheProvider>
      </body>
    </html>
  )
}
