import { Comfortaa } from 'next/font/google'


export const comfortaa = Comfortaa({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  fallback: ['system-ui'],
  display: 'swap'
})