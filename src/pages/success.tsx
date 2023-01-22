import { Button, Col, Container,Row,Spacer,Text } from "@nextui-org/react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Stripe from "stripe";
import { stripe } from "../utils/stripe";

interface SuccessProps{
  custumerName:string ,
  product:{
    name:string,
    payment_status:string
  }

}
export default function Success({custumerName,product}:SuccessProps){
  if(product.payment_status ==="paid"){
    
  }
  const {push} = useRouter()
  return(
    <Container css={{minHeight:'100vh',textAlign:"center"}}>
      <Col css={{h:'100vh', alignItems:"center",alignContent:"center", justifyItems:"center",justifyContent:"center"}}>
        <Row  justify="center" align="center"  css={{h:"40%"}}>
            <Col  css={{ alignItems:"center",alignContent:"center", justifyItems:"center",justifyContent:"center"}}>
            <Row justify="center" align="center">

              <Text h1>Sucesso</Text>
            </Row>
            <Row justify="center">

              <Text h3>
                Parabens  {custumerName} !
              </Text>
            </Row>
            <Row justify="center">
              
              <Text h4>
              Sua compra de  {product.name} foi feita com sucesso
              </Text>
            </Row>
            <Row justify="center">
              <Text>Nossa equipe irá entrar em contato com vocÊ para as proximas fases de desenvolvimento</Text>
            </Row>
            <Spacer y={4}/>
            <Row justify="center" wrap="wrap" >
               <Button css={{m:'1rem'}} color={"secondary"} onPress={()=>{ push('/login')}} shadow size={"md"}>
                Enviar uma mensagem
               </Button>
               
               <Button bordered color="secondary" css={{m:'1rem'}}  onPress={()=>{ push('/')}} shadow size={"md"}>
                voltar para pagina inicial
               </Button>
            </Row>
            </Col>
        </Row>
      </Col>
    </Container>
  )
}

export  const getServerSideProps:GetServerSideProps = async({query}) => {
  const sessionId = String(query.session_id)
  const session = await stripe.checkout.sessions.retrieve(sessionId,{
    expand:['line_items', 'line_items.data.price.product'],
    
  })

  const custumerName = session.customer_details?.name 
  const product = session.line_items?.data[0].price?.product as Stripe.Product
  const payment_status = session.payment_status
  return{
    props:{
      custumerName,
      product:{
        name:product.name,
        payment_status
      }
    }
  }
}