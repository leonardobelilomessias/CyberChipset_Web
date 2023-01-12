
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import { AppNavbar } from '../Components/AppNavBar';
import { Footer } from '../Components/Footer';


export default function App({ Component, pageProps }: AppProps) {
  return (
  <NextUIProvider>
    <AppNavbar/>
    <Component {...pageProps} />
    <Footer/>
  </NextUIProvider>
  )
}
