import { Container, Grid } from "@nextui-org/react";
import { AsidePainelClient } from "../../Components/PainelClient/AsidePainelClient";

export default function PainelCliente(){
  return(
    <>
      <Container css={{minHeight:"80vh",pt:'1rem'}}>
        <Grid.Container justify="center">
          <Grid sm={12} justify="center" alignContent="center">
            <AsidePainelClient/>
          </Grid>
          <Grid>

          </Grid>
        </Grid.Container>
      </Container>
    </>
  )
}