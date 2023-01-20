import { Avatar, Col, Container, Grid, Row,Text,Table, Card } from "@nextui-org/react";
import { Trash } from "phosphor-react";
import { AsidePainelClient } from "../../Components/PainelClient/AsidePainelClient";

export default function ProfileClient(){
  return(
    <Container css={{minHeight:"80vh",pt:'1rem'}}>
        <Grid.Container justify="center">
          <Grid sm={12} justify="center" alignContent="center">
            <AsidePainelClient/>
          </Grid>
          <Grid xs={12}>
            <Col>
            <Text b size={"$3xl"} > Mensagens</Text>
            <Row css={{mt:"3rem",mb:"1rem"}}>

            Recebidas
            </Row>
              <Card>
                <Card.Header>
                  <Row justify="space-between">
                <Text>Titulo da mensagem</Text>
                <Trash size={25}></Trash>

                  </Row>
                </Card.Header>
                <Card.Footer>
                  01/12/1990
                </Card.Footer>
              </Card>


              <Row css={{mt:"3rem",mb:"1rem"}}>
                Enviadas
              </Row>
              <Card>
                <Card.Header>
                <Row justify="space-between">
                <Text>Titulo da mensagem</Text>
                <Trash size={25}></Trash>

                  </Row>
                </Card.Header>
                <Card.Footer>
                  01/12/1990
                </Card.Footer>
              </Card>
            </Col>
          </Grid>
        </Grid.Container>
      </Container>
    
  )
}