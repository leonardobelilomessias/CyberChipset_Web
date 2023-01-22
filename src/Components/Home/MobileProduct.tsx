import { Container,  Text ,Row, Col, Spacer, Grid, styled} from "@nextui-org/react";
import Android from '../../../public/images/android.png'
import Apple from '../../../public/images/apple.png'
import Phone from '../../../public/images/phone.jpg'
import Image from "next/image";

const BoxImage = styled("div",{
  
  width: "90vw",

  height:"40vh",
  position:"relative",
  justifyContent:"center",
  justifyItems:"center",
  "@md":{
    width:"100vw",
    height:"90vh",
    alignContent:"center",
    alignItems:"center", 
    alignSelf:"center"
  }


})


const BoxSmallImage = styled("div",{
  
  width: "50px",

  height:"50px",
  position:"relative", 
  justifyContent:"center",
  justifyItems:"center",
  justifySelf:"center",
  alignSelf:"center",
  "@md":{

    alignContent:"center",
    alignItems:"center", 
    alignSelf:"center"
  }


})

export function MobileProduct(){
 return(
  <>
  <Container justify="center" alignContent="center">
    <Grid.Container alignContent="center" alignItems="center">
      <Grid md={6} xs={12}>
        <BoxImage>

        <Image priority src={Phone} fill sizes="100vw" alt="phone"></Image>
        </BoxImage>
      </Grid>
    <Grid xs={12} md={6}>
  <Container alignItems="center" alignContent="center" justify="center" >
    <Row justify="center">
    <Text h1 css={{textAlign:"center"}}> Desenvolvimento Mobile </Text>
    </Row>
  <Row justify="center">
  <Text b size={"$2xl"} css={{textAlign:"center"}}> Criamos seu aplicativo de acordo com a nessecidade de seus clientes </Text>
  </Row>
  <Row justify="center">
  <Text  css={{textAlign:"center"}}> Alcance mais clientes automatize tarefas e cresça no mercado com aplicaçoes mobile. </Text>
  </Row>
  <Spacer />

  <Row justify="center">
  <Text  css={{textAlign:"center"}} b> Plataformas </Text>

  </Row>
  <Spacer y={1} />
<Row justify="center">

<Row  css={{width:"200px"}} align={"center"} justify="center" >
  
    <Col >
      <Row justify="center">

    <BoxSmallImage>
    <Image  src={Apple} sizes="100vw" fill alt="apple"/>
    </BoxSmallImage>
      </Row>
    <Row justify="center">
        <Text b>Apple</Text>

        </Row>
    </Col>
    <Col>
    <Row justify="center">

    <BoxSmallImage>
        <Image  src={Android} fill sizes="100vw" alt="android"/>
    </BoxSmallImage>
    </Row>
        <Row justify="center">
        <Text b>Android</Text>

        </Row>
    </Col>
</Row>
</Row>





  </Container>
    </Grid>
    </Grid.Container>
  <Spacer y={8}/>
    <hr />
  </Container>
</>
 )
}