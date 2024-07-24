import { Open_Sans, Source_Sans_3 } from 'next/font/google'

export const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
})