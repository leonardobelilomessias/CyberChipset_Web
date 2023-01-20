import { Avatar, Col, Container, Grid, Row,Text,Table } from "@nextui-org/react";
import { AsidePainelClient } from "../../Components/PainelClient/AsidePainelClient";

export default function ProjeticsClient(){
  const projetics =[]
  return(
    <Container css={{minHeight:"80vh",pt:'1rem'}}>
        <Grid.Container justify="center">
          <Grid sm={12} justify="center" alignContent="center">
            <AsidePainelClient/>
          </Grid>
          <Grid xs={12}>
            <Col>
            <Text b size={"$3xl"} > Meus Projetos</Text>
                {projetics.length===0 && <Text>Você ainda não tem projetos</Text>}
    <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Column>Nome</Table.Column>
        <Table.Column>ESTÁGIO</Table.Column>
        <Table.Column>STATUS</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Tony Reichert</Table.Cell>
          <Table.Cell>CEO</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Zoey Lang</Table.Cell>
          <Table.Cell>Technical Lead</Table.Cell>
          <Table.Cell>Paused</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Jane Fisher</Table.Cell>
          <Table.Cell>Senior Developer</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>William Howard</Table.Cell>
          <Table.Cell>Community Manager</Table.Cell>
          <Table.Cell>Vacation</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
            </Col>
          </Grid>
        </Grid.Container>
      </Container>
    
  )
}