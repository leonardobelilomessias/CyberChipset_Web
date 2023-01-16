import { Col, Container, Grid,Row,Spacer,Text,styled } from "@nextui-org/react";
import LogoBlack from '../../public/images/logo-black.png'
import {InstagramLogo} from 'phosphor-react'
import {YoutubeLogo} from 'phosphor-react'
import {FacebookLogo} from 'phosphor-react'
import Image from "next/image";

const BoxImage = styled("div",{
  height:"5rem",
  width:"15rem",
  position:"relative"
})
export function Footer(){
  return(

  <Row as="footer" css={{padding:0, backgroundColor:"#242424"}}>

      <Grid.Container css={{ backgroundColor:"#242424", }} justify="center"   >
        <Grid xs={12}  justify={"center"}>
          <BoxImage>

          <Image
            fill
            src={LogoBlack}
            alt="logo"
            />
        </BoxImage>
        </Grid>
        <Grid justify="center"   xs={12} >
          <Grid.Container justify="center" gap={3}>
          <Grid>
          <InstagramLogo  size={32} color="white"/>
          </Grid>
          <Grid>

          <YoutubeLogo   size={32} color="white"/>
          </Grid>
          <Grid>

          <FacebookLogo  size={32} color="white"/>
          </Grid>
 
          </Grid.Container>

        </Grid>
        <Grid  >
            <Text color="white">
              Sobre
            </Text>
          </Grid>

          <Grid  >
            <Text color="white">
              Links uteis
            </Text>
          </Grid>
          <Grid  >
            <Text color="white">
              Contato
            </Text>
          </Grid>
          <Grid  >
            <Text color="white">
              Politicas de privacidade
            </Text>
          </Grid>

      </Grid.Container>
    </Row>

  )
}