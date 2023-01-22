import { Col, Container, Grid,Card, styled, Text,Row, Button } from "@nextui-org/react"
import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/router"
import PhotoProduct from '../../../public/images/bic.jpg'

const InfoSites = [
  {
    id:"1",
    title:"Site instituncional Premium",
    price:"1290,00",
    idPrice:"price_1MSQ9ACVpoIEs3Kjrl5BflAQ",
    description:
    `
    Criação de site institucional ou landing page.Desenvolvimento e configurações para lançamento de projeto pessoal 
    criação de layout.
    compra e configuração de dominio(Dominios são renovados anualmente).
    hospedagem duração anual.
    Configuração certificado ssl.
    Manutenção simples(Garantia de site online)

    `
  },
  {
    id:"2",
    title:"Ecommerce Premium",
    price:"4.990,00",
    idPrice:"price_1MSQ9ACVpoIEs3Kjrl5BflAQ",
    description:
    `
    Criação de site institucional ou landing page.Desenvolvimento e configurações para lançamento de projeto pessoal 
    criação de layout.
    compra e configuração de dominio(Dominios são renovados anualmente).
    hospedagem duração anual.
    Configuração certificado ssl.
    Manutenção simples(Garantia de site online)
`
  },
  {
    id:"3",
    title:"Site instituncional POP",
    price:"790,00",
    idPrice:"price_1MSQ9OCVpoIEs3KjjP42eQUF",
    description:
    `
    Criação de site institucional ou landing page.Desenvolvimento e configurações para lançamento de projeto pessoal 
    criação de layout.
    compra e configuração de dominio(Dominios são renovados anualmente).
    hospedagem duração anual.
    Configuração certificado ssl.
    Manutenção simples(Garantia de site online)
`
  },
  {
    id:"4",
    title:"Ecommerce POP",
    price:"1890,00",
    idPrice:"price_1MSQ9ACVpoIEs3Kjrl5BflAQ",
    description:
    `
    Criação de site institucional ou landing page.Desenvolvimento e configurações para lançamento de projeto pessoal 
     Criação de layout. 
    Compra e configuração de dominio(Dominios são renovados anualmente).
    Hospedagem duração anual.
    Configuração certificado ssl.
    Manutenção simples(Garantia de site online)
`
  },
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
  const router =useRouter()
  const idPrice = router.query.idPrice as string
  async function BuyProduct(priceId:string){
    try{

      const response = await  axios.post('/api/checkout',{priceId})
      const {checkoutUrl} = response.data
      
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
                Descrição:
              </Row>
              <Row>
                <Text>{foundSite?.description}</Text>
              </Row>

              <Row css={{mt:20,mb:20}}>
                <Text b color="success" size={"$4xl"}>
                  R$ {foundSite?.price}
                </Text>
              </Row>
              <Row>
                <Button  shadow onPress={()=>{BuyProduct(idPrice)}}>
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

