
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import { AppNavbar } from '../Components/AppNavBar';
import { Footer } from '../Components/Footer';
import { ButtonWhatsapp } from '../Components/ButtonWhatsapp';


export default function App({ Component, pageProps }: AppProps) {
  return (
  <NextUIProvider >
    <AppNavbar/>
    <Component {...pageProps} />
    <ButtonWhatsapp/>
    <Footer /> 
  </NextUIProvider>
  )
}
