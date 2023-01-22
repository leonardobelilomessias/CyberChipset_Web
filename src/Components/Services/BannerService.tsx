import { Button, Col, Container, Grid, Row, Spacer, Text } from "@nextui-org/react";
import BackBanner from '../../../public/images/infinite.jpg'
export function BannerServices(){
  return(

    <Col css={{padding:0}}>
    <Col  css={{backgroundImage:`url(${BackBanner.src})`, backgroundSize:"cover", backgroundColor:"$purple900", p:20}}>
        <Grid.Container gap={2} justify="space-around">
          <Grid>
          <Text  color="white" h3 css={{textAlign:"center"}}> Desfrute Tecnologias usadas pelas maiore marcas</Text>

          </Grid>
          <Grid>

          <Button color={"secondary"}>Saiba mais</Button>
          </Grid>
        </Grid.Container>

      </Col>
    </Col>
  )
}