
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import { AppNavbar } from '../Components/LayoutComponets/AppNavBar';
import { ButtonWhatsapp } from '../Components/LayoutComponets/ButtonWhatsapp';
import { Footer } from '../Components/LayoutComponets/Footer';



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
