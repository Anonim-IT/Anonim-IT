import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Karla } from "next/font/google"

const karla = Karla({
  weight: "400",
  subsets: ["latin"]
})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={karla.className}><Component {...pageProps} /></main>
}
