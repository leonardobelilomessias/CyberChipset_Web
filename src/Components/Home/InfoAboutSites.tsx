import { Button, Col, Container, Grid, Row, Spacer, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
 
import { useEffect, useState } from "react";
import { clearInterval } from "timers";
import Background from '../../../public/images/back.jpg'
export function InfoAbouteSites(){
  const {push} = useRouter()
  return(
    <>
    <Container id="viu">
      <Col css={{p:"$0"}}>
       <Spacer y={3}/>
      <Row justify="center">
        <Text transform="capitalize" color="white" weight={"bold"} size={"$5xl"} css={{lineHeight:1.1, textGradient: "45deg, $pink500 -20%, $purple600 50%",textAlign:"center"}} >
          Crescimento  do mercado.
       <Spacer y={2}/>

        </Text>
        
        </Row>
        <Grid.Container alignItems="center" gap={4} >
                <Grid css={{backgroundColor:""}} xs={12} justify={"center"} >
                    <Col >  
                      <Row  justify="center" css={{mb:10}}>
                        <Text data-aos="fade-up" data-aos-once="true" size={"$5xl"} weight={"bold"} color="$purple700"  css={{lineHeight:1, textShadow:"10px 10px 10px gray","@md":{
                          fontSize:"$8xl"
                        }}} >
                         18%
                        </Text>
                      </Row>
                      <Row justify="center">
                      <Text data-aos="fade-up" data-aos-once="true" size={"$2xl"} b color="$purple500"  css={{lineHeight:1, backgroundColor:""}}  >
                      E-commerce brasileiro terá um crescimento anual
                      </Text>
                      </Row>
                    </Col>
              </Grid>
              <Grid css={{backgroundColor:""}} xs={12} justify={"center"} >
                    <Col >  
                      <Row  justify="center" css={{mb:10}}>
                        <Text data-aos="fade-up" data-aos-once="true" size={"$5xl"} weight={"bold"} color="$purple700"  css={{lineHeight:1, textShadow:"10px 10px 10px gray","@md":{
                          fontSize:"$8xl"
                        }}} >
                        13,2 milhões
                        </Text>
                      </Row>
                      <Row justify="center">
                      <Text data-aos="fade-up" data-aos-once="true" size={"$2xl"}  b color="$purple500"  css={{lineHeight:1, backgroundColor:""}}  >
                        Novos Cliente comprando online
                      </Text>
                      </Row>
                    </Col>
              </Grid>
              <Grid css={{backgroundColor:""}} xs={12} justify={"center"} >
                    <Col >  
                      <Row  justify="center" css={{mb:10}}>
                        <Text data-aos="fade-up" data-aos-once="true" size={"$5xl"} weight={"bold"} color="$purple700" css={{lineHeight:1, textShadow:"10px 10px 10px gray","@md":{
                          fontSize:"$8xl"
                        }}} >
                        R$182 bilhões
                        </Text>
                      </Row>
                      <Row justify="center">
                      <Text data-aos="fade-up" data-aos-once="true" size={"$2xl"} b color="$purple500" css={{lineHeight:1, backgroundColor:""}}  >
                        Em vendas em 2022 
                      </Text>
                      </Row>
                    </Col>
              </Grid>

      <Grid xs={12} justify={"center"} css={{backgroundColor:""}}>
        <Col>
        

        <Row justify="center">

        <Text  b size={"$3xl"} css={{lineHeight:1.1, backgroundColor:"",textAlign:"center"}} >
         <Spacer y={2}/>

          Tendência mundial Um levantamento interno da Linx revela que as vendas omnichannel cresceram 20% no primeiro semestre de 2022, em comparação com o mesmo período do ano anterior. 
        </Text>
        </Row>
        </Col>
      </Grid>

      <Grid xs={12}>
      <Row css={{ p:5}} justify={"center"}>
        <Button shadow color="secondary" bordered size={"lg"} onPress={()=>{push("https://pagar.me/blog/ecommerce-no-brasil")}} css={{}}>
          Saiba mais
        </Button>
      </Row>
      </Grid>
      </Grid.Container>

      <Spacer y={5}/>
      <hr />
      </Col>
      </Container>
    </>
  )
}