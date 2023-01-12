import { Container, Card, Row, Text ,Button, Spacer,Image, styled} from "@nextui-org/react";
import Banner from '../../../public/images/client.jpg'

const Box = styled("div",{
  width:"100%",
  minHeight:"100vh",
  backgroundColor:"$purple200",

  "@md":{

    position:"relative",
    height:"20vh",
    display:"block"
  }
})

const BoxText = styled("div",{
  backgroundColor:"white",
  
  background: "rgba(255, 255, 255, 0.4)",

  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  webkitBackdropFilter: "blur(5px)",
  border:" 1px solid rgba(255, 255, 255, 0.3)",
  px:"$10",
  "@md":{
    position:"absolute",
    top:110,
    left:100,
    width:"45%",
    borderRadius: "16px",
  }
})

const BoxImage = styled("div",{
  height:"50vh",
  backgroundColor:"Yellow",
  maxWidth:"100%",
  "@md":{
    backgroundColor:"yellow",
    height:"100vh"

  }
})

export  function Hero(){
  const collapseItems = [
    "Inicio",
    "Exemplos",
    "Preços",
    "Sobre",
    "Contato",
    "Consultoria",
    "Seo",
    "Camapanhas de marketing",
    "Desenvolvimento de sites e apps",
  ];

  return(
    <Box>
    
      <BoxImage>
      <Image css={{"@md":{minHeight:"100vh"}}} src={Banner.src}
                      objectFit="cover"
                      height={"100%"}
                      
                      alt="Relaxing app background">
                      
        </Image>
      </BoxImage>

    <BoxText css={{  }} >

      <Spacer/>
      <Row>
        <Text  span   css={{"@md":{
          color:"white",
            fontSize:24
          }}}>
              Desbrave Um universo de oportunidades.
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
          textShadow: "5px 8px 15px rgba(0, 0, 0, 0.5)",
          "@md":{
            fontSize:80,
            textShadow: "5px 5px 15px rgba(0, 0, 0, 0.7)",
          }
        }}
        weight="bold"
        
      >
        Acelere seus negócios com as 
        <Text as={"span"} css={{textGradient: "45deg, $blue900 -20%, $purple600 50%",fontSize:50, fontWeight:"$bold" ,"@md":{fontSize:90}}}> tecnologias </Text> mais  
        <Text as={"span"} css={{textGradient: "45deg, $blue900 -20%, $purple600 50%",fontSize:80, fontWeight:"$bold","@md":{fontSize:90}}}> avançadas </Text> do mercado.
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
      <Spacer y={3}/>

    </BoxText >
 
    </Box>
  )
}