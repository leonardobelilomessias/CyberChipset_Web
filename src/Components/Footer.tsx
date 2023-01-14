import { Col, Container, Grid,Image,Row,Spacer,Text } from "@nextui-org/react";
import LogoBlack from '../../public/images/logo-black.png'
import {InstagramLogo} from 'phosphor-react'
import {YoutubeLogo} from 'phosphor-react'
import {FacebookLogo} from 'phosphor-react'
export function Footer(){
  return(

  <Row as="footer" css={{padding:0, backgroundColor:"#242424"}}>

      <Grid.Container css={{padding:0,mb:0, backgroundColor:"#242424", }} justify="center" gap={2}  >
        <Grid xs={12}  justify={"center"}>
          <Image
            src={LogoBlack.src}
            width={200}
            />
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