import { Card, Col, Container, Grid, Image, Row, Spacer, Text } from "@nextui-org/react";
import Video from "../../../public/images/video4.jpg"

export function Learn(){
  return(
    <Container>
      <Col>
      <Spacer y={4}/>
        <Grid.Container >
          <Grid md={6}>
            <Row justify="center" align="center">

                <Col >
                  <Text css={{textAlign:"center","@md":{fontSize:"$6xl"}}} size={"$4xl"} weight={"bold"} color="$purple700">Aprenda com a Cyber</Text>
                  <Text css={{textAlign:"center","@md":{fontSize:"$4xl"}}} size={"$2xl"} weight={"bold"} > Venha conosco aprender como utilizar as ferramentas tecnologicas e extrair o maximo do potencial para seu beneficio.</Text>
                </Col>
            </Row>
                

          </Grid>

          <Grid md={6}>
            <Card>
              <Card.Body>
                <Image src={Video.src} alt=""/>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
        <Spacer y={6}/>
      </Col>
    </Container>
  )
}