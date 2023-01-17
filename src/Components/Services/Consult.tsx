import { Button, Card, Col, Container, Grid, Image, Row, Spacer, Text } from "@nextui-org/react";
import ConsultImage from '../../../public/images/bic.jpg'

export function Consult(){
  return(
    <Container>
        <Col>
        <Spacer y={8}/>
        
          <Row justify="center">
            <Text h1 css={{textAlign:"center"}} >
              Consultoria
            </Text>
          </Row>
          <Row justify="center">
            <Text h3 css={{textAlign:"center"}}>
              Entre em contato com nosco e garanta a consultoria que seu negocio precisa.
            </Text>
          </Row>
          <Row wrap="wrap" justify="center" >
            <Button bordered color={"secondary"} css={{m:10}}>
              Saiba mais
            </Button>
      
            <Button color={"secondary"} css={{m:10}}>
              Entrar em contato
            </Button>
          </Row>
          <Spacer y={8}/>
          
        </Col>
    </Container>
  )
}