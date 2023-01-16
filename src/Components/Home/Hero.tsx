import { Container, Card, Row, Text ,Button, Spacer, styled} from "@nextui-org/react";
import { ApiError } from "next/dist/server/api-utils";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import Banner from '../../../public/images/client.webp'
import { api } from "../../utils/api";

const Box = styled("div",{
  height:"40vh",
  maxWidth:"100%",
  position:"relative",
  backgroundColor:"$purple200",

  "@md":{

    position:"relative",

  }
})

const BoxText = styled("div",{
  
  
  background: "rgba(255, 255, 255, 0.4)",

  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(15px)",
  webkitBackdropFilter: "blur(5px)",
  border:" 1px solid rgba(255, 255, 255, 0.1)",
  px:"$10",
  "@md":{
    position:"absolute",
    top:110,
    left:50,
    width:"45%",
    borderRadius: "16px",
  }
})

const BoxImage = styled("div",{
  height:"40vh",
  maxWidth:"100%",
  position:"relative",
  

  "@md":{
    backgroundColor:"$purple200",
    minHeight:"100vh"

  }
})

export  function Hero(){


  return(
    <Box>


      <BoxImage >
        <Image src={Banner} fill alt="banner" />
      </BoxImage>
  
    <BoxText css={{  }} >

      <Spacer/>
      <Row>
        <Text  span weight={"bold"} color={"$purple700"}  size={"$2xl"}  css={{"@md":{
          
            fontSize:"$3xl"
          }}}>
              Aumente seus Resultados.
        </Text>
        </Row>
      <Row align="center" justify="center">

      <Text
        h1
        
        css={{
          color:"white",
          
          alignContent:"center",
          justifyContent:"center",
          alignItems:"center",
          lineHeight:"$xs",
          textShadow: "5px 8px 15px rgba(0, 0, 0, 0.7)",
          "@md":{
            fontSize:"$6xl",
            textShadow: "5px 5px 15px rgba(0,0, 0, 0.0)",
          }
        }}
        weight="bold"
        
      >
        Criando projetos com 
        <Text as={"span"} css={{ color:"$purple600", fontSize:"$5xl", fontWeight:"$bold" ,"@md":{fontSize:"$6xl"}}}> tecnologias </Text> mais  
        <Text as={"span"}  css={{color:"$purple600",fontSize:"$5xl", fontWeight:"$bold","@md":{fontSize:"$6xl"}}}> avançadas </Text> do mercado.
        <Spacer y={0.5}/>
      </Text>

      </Row>
      <Row align="center">
      <Text
       b  size={"$base"} 
       color={"$white"}
       css={{fontSize:"1.25rem", textShadow: "3px 2px 3px rgba(0, 0, 0, 0.6)", textAlign:"left" , "@md":{
            fontSize:34,
            
        }}}>
        Tenha em suas mãos as mesmas ferramentas de <Text transform="uppercase" weight={"bold"} color="secondary" span>bigtecs</Text>  com Apple, Intagram, Amazon e Netflix.
      </Text>
      </Row>
      <Spacer y={2}/>
      <Row align="center" justify="center">
        <Button  shadow  color={"secondary"}   size="xl" >VER EXEMPLOS </Button>
      </Row>

      <Spacer  />
    </BoxText >
 
    </Box>
  )
}