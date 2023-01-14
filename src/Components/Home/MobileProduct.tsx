import { Container, Image, Text ,Row, Col, Spacer, Grid} from "@nextui-org/react";
import Android from '../../../public/images/android.png'
import Apple from '../../../public/images/apple.png'
import Phone from '../../../public/images/phone.jpg'



export function MobileProduct(){
 return(
  <>
  <Container justify="center" alignContent="center">
    <Grid.Container alignContent="center" alignItems="center">
      <Grid md={6} xs={12}>
        <Image src={Phone.src}></Image>
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
  
    <Col>
    
    <Image  src={Apple.src} height={40} />
    <Row justify="center">
        <Text b>Apple</Text>

        </Row>
    </Col>
    <Col>
        <Image  src={Android.src} height={40} />
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