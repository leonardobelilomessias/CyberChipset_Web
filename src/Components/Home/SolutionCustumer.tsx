import {  Col, Image, Text, Container, Spacer, Grid,Row, Button } from "@nextui-org/react";
import Colage from '../../../public/images/colage.png'
export function SolutionCustumer(){
  return(
    <Container>
      <Grid.Container>
        <Grid xs={12} md={6} >
          <Col css={{}}>
          <Row justify="center">

                <Text transform="capitalize" as={"p"}  css={{fontWeight:"bolder",lineHeight:"1", textGradient: "45deg, $blue900 -20%, $purple600 50%",
                  
                  
                  color: "#4e2bcc",
                  backgroundImage: "-webkit-linear-gradient(0deg, #4e2bcc 58%,#a12ee8 98%,#ffffff 11%)",
                  backgroundClip: "text",
                  padding:18,
                  fontSize:50,
                  "@md":{
                    fontSize:100,
                    paddingTop:90
                  }
                  
                }}>
                            modelage
                    </Text>
          </Row>
          <Row justify="center">

           <Text transform="capitalize"   as={"p"}  css={{fontWeight:"bolder",lineHeight:"1", textGradient: "45deg, $blue900 -20%, $purple600 50%",
          color: "#4e2bcc",
          backgroundImage: "-webkit-linear-gradient(0deg, #4e2bcc 58%,#a12ee8 98%,#ffffff 11%)",
          backgroundClip: "text",
          padding:10,
          fontSize:50,
          "@md":{
            fontSize:100
          }
          
        }}>
               personalizada.
            </Text>
          </Row>
          <Row>
            <Text css={{
              fontWeight:"$semibold",
              textAlign:"center", 
              color:"$accents8",
              "@md":{
                fontSize:28,
                padding:40,
              }
            }}>
              Criamos seu projeto de acordo com sua necessidade. Em nossa modelagem de negócio vamos entendere  sua idea desenhar com 
              estrategias com as ferramentas adequadas para atender cada requerimento, para o sucesso de seu projeto.
            </Text>
          </Row>

          </Col>
        </Grid>
        <Grid xs={12} md={6} css={{ backgroundImage:`url(${Colage})`}}>
          <Col>
            <Row>
              <Image 
            height={"100%"}
            width={"100%"}
            src={Colage.src} 
            css={{"@md":{
              height:"70vh"
            }}}></Image>
             </Row>
          </Col>
        </Grid>
      </Grid.Container>
    </Container>
  )
}