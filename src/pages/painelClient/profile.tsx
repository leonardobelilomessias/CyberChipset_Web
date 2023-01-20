import { Avatar, Col, Container, Grid, Row,Text } from "@nextui-org/react";
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
            <Text b size={"$3xl"} > Meu Perfil</Text>
              <Row justify="center">
              <Avatar size={"xl"}>Avatar</Avatar>
              </Row>
              <Row justify="center">
                Full name
              </Row>
              <Row justify="center">
                Email
              </Row>
              <Row justify="center">
                Whatsapp
              </Row>

            </Col>
          </Grid>
        </Grid.Container>
      </Container>
    
  )
}