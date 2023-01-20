import { Col, Grid, Row, Text,styled } from "@nextui-org/react";
import Link from "next/link";

const Box = styled("div",{padding:"0.6rem", bg:"$purple100",m:"0.2rem", minWidth:"5rem"})

export function AsidePainelClient(){
  return(
  <>
    <Grid.Container justify="center">
      <Grid>
        <Box>
          <Link href={'/painelClient/profile'}>
            <Text>Perfil</Text>
          </Link>
        </Box>
      </Grid>
      <Grid>  
        <Box>
        <Link href={'/painelClient/projetics'}>
          <Text>Meus Projetos</Text>
          </Link>
        </Box>
      </Grid>
      <Grid>
          <Box>
          <Link href={'/painelClient/messages'}>
            <Text>Mensagens</Text>
            </Link>
          </Box>
      </Grid>

    </Grid.Container>
  </>
  )
}