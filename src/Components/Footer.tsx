import { Col, Container, Grid,Row,Spacer,Text,styled } from "@nextui-org/react";
import LogoBlack from '../../public/images/logo-black.png'
import {InstagramLogo} from 'phosphor-react'
import {YoutubeLogo} from 'phosphor-react'
import {FacebookLogo} from 'phosphor-react'
import Image from "next/image";

const BoxImage = styled("div",{
  height:"5rem",
  width:"19rem",
  position:"relative",
  marginTop:50,
})
export function Footer(){
  return(

  <Row justify="center" as="footer" css={{backgroundColor:"#242424", display:"flex",flex:1,maxWidth:"100vw"}} >
      <Grid.Container  css={{p:0, backgroundColor:"#242424",maxWidth:"90vw" }} justify="center"   >
        
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


      <Grid xs={12} md={6}>

      <Grid.Container css={{p:20}} justify="space-around">


                          <Grid  >
                            <Text color="white">
                              Serviços
                            </Text>
                          </Grid>
                          <Grid  >
                            <Text color="white">
                              Contato
                            </Text>
                          </Grid>
                          <Grid  >
                            <Text color="white">
                              Preços
                            </Text>
                      </Grid>
        </Grid.Container>
      </Grid>
      </Grid.Container>
    </Row>

  )
}