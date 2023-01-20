import { Col, Container, Grid,Card, styled, Text,Row, Button } from "@nextui-org/react"
import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/router"
import PhotoProduct from '../../../public/images/bic.jpg'

const InfoSites = [
  {
    id:"1",
    title:"Site instituncional",
    price:"590",
    idPrice:"price_1MR049CVpoIEs3KjOexMTM4s"
  },
  {
    id:"2",
    title:"Ecommerce",
    price:"1599",
    idPrice:"price_1MR060CVpoIEs3Kjdx4hThIw",
  },
  {
    id:"3",
    title:"Ecommerce",
    price:"1599",
    idPrice:"price_1MR060CVpoIEs3Kjdx4hThIw"
  }
] 

interface InfoSiteProps{
  id:string
  title:string
}

const BoxImage = styled("div",{
  display:"flex",
  minWidth:"20rem",
  position:"relative",
  minHeight:"20rem",
  backgroundColor:"$blue200",
  "@md":{
    minWidth:"40rem",
    minHeight:"40rem"
  }
})



export default function Product(){
  async function BuyProduct(priceId:string){
    try{

      const response = await  axios.post('/api/checkout',{priceId})
      const {checkoutUrl} = response.data
      console.log(response.data)
      window.location.href = checkoutUrl
    }catch{
        alert("falha ao direcionar para o check out")
    }
  }
  const { query } = useRouter()
  const foundSite =InfoSites.find((site:InfoSiteProps)=>(site.id === query.id?.toString()))
  return(
    <>
      <Container css={{minHeight:"100vh",pt:"2rem",mb:20}}>
        <Col>
        <Grid.Container alignContent="center" justify="center">
          <Grid md={6} sm={12} justify="center">
            <BoxImage >
       
          <Image src={PhotoProduct} alt="product" fill></Image>
            </BoxImage>
          </Grid>
          <Grid md={6} sm={12} justify="center">
            <Col css={{pt:"$12",mw:"40rem"}}>
              <Row >
                <Text h1> {foundSite?.title}</Text>
              </Row>
              <Row>
                Descriptio:
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi veniam neque, earum ullam rem quia, officiis ut adipisci eaque culpa quod aliquam beatae? Laboriosam, asperiores. Nesciunt inventore eum facilis?
              </Row>

              <Row css={{mt:20,mb:20}}>
                <Text b color="success" size={"$4xl"}>
                  R$ {foundSite?.price}
                </Text>
              </Row>
              <Row>
                <Button  shadow onPress={()=>{BuyProduct(foundSite?.idPrice as string)}}>
                  Comprar
                </Button>
              </Row>
            </Col>
          </Grid>
        </Grid.Container>
        </Col>
      </Container>
    </>
  )
}

