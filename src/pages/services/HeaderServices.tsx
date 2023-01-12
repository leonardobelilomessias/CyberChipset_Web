import { Col, Container, Row,Text } from "@nextui-org/react";
import Back from '../../../public/images/backLine.jpg'
export function HeaderServices(){
  return(

 <Container css={{p:0,}}>

<Row align="center" justify="center" css={{backgroundColor:"$purple900"
,backgroundImage:`url(${Back.src})`, backgroundSize:"cover",width:"100%",minHeight:400,}}>
    <Col   css={{ p:0}}>
          <Row justify="center"  css={{ p:0}}>
            <Text color="white" b > Nossos Serviços </Text>
          </Row>
          <Row justify="center" css={{}}>
            <Text color="white" css={{textAlign:"center",textShadow:"15px 22px 15px  black"}} h1> Tudo que seu negocio precisa. </Text>
          </Row>
          <Row justify="center">
            <Text color="white"  h3  css={{textAlign:"center",textShadow:"10px 10px 15px  black"}}> Temos as ferramentas mais atualizadas do mercado a sua disposição.</Text>
          </Row>
      </Col>
  </Row>
  </Container>

      
  )
}