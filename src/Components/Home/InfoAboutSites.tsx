import { Button, Col, Container, Grid, Row, Spacer, Text } from "@nextui-org/react";
import Background from '../../../public/images/back.jpg'
export function InfoAbouteSites(){
  return(
    <>
    <Container >
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
                      <Row  justify="center" css={{}}>
                        <Text size={"$5xl"} weight={"bold"} color="$purple700"  css={{lineHeight:1, backgroundColor:""}} >
                          87% 
                        </Text>
                      </Row>
                      <Row justify="center">
                      <Text size={"$2xl"} b color="$purple500"  css={{lineHeight:1, backgroundColor:""}}  >
                        Novos usuarios online
                      </Text>
                      </Row>
                    </Col>
              </Grid>
              <Grid css={{backgroundColor:""}} xs={12} justify={"center"} >
                    <Col >  
                      <Row  justify="center" css={{}}>
                        <Text size={"$5xl"} weight={"bold"} color="$purple700"  css={{lineHeight:1, backgroundColor:""}} >
                        R$2,8 bilhoes
                        </Text>
                      </Row>
                      <Row justify="center">
                      <Text size={"$2xl"}  b color="$purple500"  css={{lineHeight:1, backgroundColor:""}}  >
                        Novos usuarios online
                      </Text>
                      </Row>
                    </Col>
              </Grid>
              <Grid css={{backgroundColor:""}} xs={12} justify={"center"} >
                    <Col >  
                      <Row  justify="center" css={{}}>
                        <Text size={"$5xl"} weight={"bold"} color="$purple700" css={{lineHeight:1, backgroundColor:""}} >
                        R$6,7 trilhões
                        </Text>
                      </Row>
                      <Row justify="center">
                      <Text size={"$2xl"} b color="$purple500" css={{lineHeight:1, backgroundColor:""}}  >
                        Em vendas em 2022
                      </Text>
                      </Row>
                    </Col>
              </Grid>

      <Grid xs={12} justify={"center"} css={{backgroundColor:""}}>
        <Col>
        

        <Row justify="center">

        <Text  b css={{lineHeight:1.1, backgroundColor:"",textAlign:"center"}} >
         <Spacer y={2}/>

          Tendencia mundial espera-se um crescimento em  R$2,8 bilhoes em vendas.  
        </Text>
        </Row>
        </Col>
      </Grid>

      <Grid xs={12}>
      <Row css={{ p:5}} justify={"center"}>
        <Button shadow color="secondary" bordered size={"lg"} css={{}}>
          Click aqui
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