import { Avatar, Card,Text,Col, Row, Container,  Spacer, Grid, styled } from "@nextui-org/react";
import Back from '../../../public/images/risk.jpg'
import FiveStars from '../../../public/images/fivestars.webp'
import Image from "next/image";
const BoxImage = styled("div",{
  
  width: "60%",

  height:"70px",
  position:"relative",
  justifyContent:"center",
  justifyItems:"center",
  "@md":{
    width:"50%",
    height:"70px",
    alignContent:"center",
    alignItems:"center", 
    alignSelf:"center"
  }


})

export  function Comments(){
  const img = "https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg"
  return(
    <Container justify="center" alignItems="center" css={{paddingTop:100, paddingBottom:100}} >
      <Col>
      <Row justify="center">
        
      <Text span  weight={"bold"}   css={{textAlign:"center",fontSize:"$5xl"}}> Veja o Comentário de nossos clientes</Text>
      </Row>
      <Spacer y={6}/>
      <Grid.Container gap={2} justify="center">

        <Grid md={3}>
                  <Card >
                    <Card.Body>
                    <Col  > 
                    <Row justify="center" >
                      <BoxImage>

                        <Image fill alt="fivestars" sizes="100vw" src={FiveStars}/>
                      </BoxImage>
                    </Row>
                    <Row justify="center">
                    <Avatar   size={"lg"}
                                  src="https://i.pravatar.cc/150?u=a032581f4e29026734d"
                                  css={{ size: "" }}
                      />
                    </Row>      
                    <Row>
                        <Col >
                      <Row justify="center">
                          <Text b  size={20}>
                              Lucas Bastos
                            </Text>
                        </Row>
                            <Text blockquote i >
                              "Profissionais do começo ao fim. Realmente Tem dominio na area. Estou muito satisfeito com o resultado."
                            </Text>
                        </Col>

                      </Row>
                    </Col>
                    </Card.Body>
                  </Card>
            </Grid>
            <Spacer y={2}/>
            <Grid
            md={3}>
                  <Card >
                    <Card.Body>
                    <Col  > 
                    <Row justify="center" >
                      <BoxImage>

                        <Image fill alt="fivestars" sizes="100vw" src={FiveStars}/>
                      </BoxImage>
                    </Row>
                    <Row justify="center">
                    <Avatar   size={"lg"}
                                  src="https://i.pravatar.cc/150?u=a44258114e29026702d"
                                  css={{ size: "" }}
                                  />
                    </Row>      
                    <Row>
                        <Col >
                      <Row justify="center">
                          <Text b  size={20}>
                              Silvana Sorine
                            </Text>
                        </Row>
                            <Text blockquote i>
                            "Nunca me senti tão bem atendida. Percebi que a empresa realmente estava interessada no sucesso do meu projeto. Recomento!""
                            </Text>
                        </Col>

                      </Row>
                    </Col>
                    </Card.Body>
                  </Card>
             </Grid>
            <Spacer y={2}/>

            <Grid md={3}>

                  <Card >
                    <Card.Body>
                    <Col  > 
                    <Row justify="center" >
                      <BoxImage>

                        <Image fill alt="fivestars" sizes="100vw" src={FiveStars}/>
                      </BoxImage>
                    </Row>
                    <Row justify="center">
                    <Avatar   size={"lg"}
                                  src="https://i.pravatar.cc/150?u=a14258144e29026702d"
                                  css={{ size: "" }}
                                  />
                    </Row>      
                    <Row>
                        <Col >
                      <Row justify="center">
                          <Text b  size={20}>
                              Carla Rocha
                            </Text>
                        </Row>
                            <Text blockquote i>
                              "Com a consultoria da Cyber chipset eu tive uma aula
                              sobre negocio digital. Criei minha loja online e agora aumentei em 73% meu faturamento."
                            </Text>
                        </Col>

                      </Row>
                    </Col>
                    </Card.Body>
                  </Card>
                </Grid>
      </Grid.Container>
      <Spacer y={10}/>
    <hr />
    </Col>
    </Container>
  )
}