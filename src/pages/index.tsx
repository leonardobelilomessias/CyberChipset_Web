import Head from 'next/head'

import { Inter } from '@next/font/google'
import { stripe } from '../utils/stripe'
import Stripe from 'stripe'
import { Comments } from '../Components/Home/Comments'
import { ConsultHome } from '../Components/Home/ConsultHome'
import { FeatureBusiness } from '../Components/Home/FeaturesBusiness'
import { Hero } from '../Components/Home/Hero'
import { InfoAbouteSites } from '../Components/Home/InfoAboutSites'
import { MobileProduct } from '../Components/Home/MobileProduct'
import { Process } from '../Components/Home/Process'
import { QuestionAnswers } from '../Components/Home/QuentionsAnswers'
import { SolutionCustumer } from '../Components/Home/SolutionCustumer'
import { PricesPremiumHome } from '../Components/Home/PricesPremiumHome'
import { PricesPopHome } from '../Components/Home/PricesPopHome'
import { GetServerSideProps, GetStaticProps } from 'next'
const inter = Inter({ subsets: ['latin'] })

export interface ProductsProps{
  products:{
    idProduct:string
    idPrice:string
    name:string
    price: number
  }[]
}

interface FormatStripe {
  default_price:{
    id?:string
  }
} 

export default function Index({products}:ProductsProps) {

  return (
    <>
      <Head>
      <meta name="google-site-verification" content="qVqrRp8FIhZgp0IQ77TSSkw00XOa2o_NXO1XiGxM5co" />
        <title>Cyber Chipset</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
     <main >

      <Hero/>
      <Process/>
      <ConsultHome/>
      
   <FeatureBusiness/>
    
    <SolutionCustumer/>
    <InfoAbouteSites/>
    <PricesPremiumHome products={products} />
    <PricesPopHome  products={products}/>
    <MobileProduct/>
    <Comments/>
      <QuestionAnswers/>
      </main>
    </>
  )
}
export const getStaticProps: GetStaticProps= async ()=> {
  const response = await stripe.products.list({expand:["data.default_price"]})
  const products = response.data.map(product=>{
    
    const prices = product.default_price as Stripe.Price
    return{
      id:product.id,
      name:product.name,
      price: prices.unit_amount as number/100,
      idPrice:prices.id
    }
  })
  
  return {
    props: {
     products
    },  
    revalidate:60*60*2
  }
}