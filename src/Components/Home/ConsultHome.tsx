import { Button, Col, Container, Grid, Image, Input,  Spacer,  Text, Textarea } from "@nextui-org/react";
import Back from '../../../public/images/consult.jpg'
export function ConsultHome(){

  return(
    <>
      <Container css={{pb:100}} >
        <Grid.Container justify="space-around">

                
                    <Grid md={5} >
                      <Image src={Back.src} />
                    </Grid>
                

                  <Grid  md={5}>
                              <Grid.Container gap={3}>
                                  <Grid>

                                      <Text color="secondary" b size={"$2xl"}>
                                        Vagas limitadas
                                    </Text>
                                    <Text h1>
                                      Consultoria GRÁTIS para seu Projeto Decolar
                                    </Text>
                                    
                                    <Text h3 >
                                        Site institucional Ecommerce leadin page
                                    </Text>
                                  </Grid>
                                    
                          
                                    <Grid xs={12} >
                                      <Input   width="100%" labelPlaceholder="Nome"
                                    />
                                    </Grid>
                                    <Grid xs={12}>
                                      <Input  status="default" width="100%"   labelPlaceholder="Email"/>
                                    </Grid>
                                    <Grid xs={12}>
                                      <Input  status="default" width="100%"  labelPlaceholder="Whatsapp"/>
                                      
                                    </Grid>
                                    <Grid xs={12}>
                                    <Textarea
                                      labelPlaceholder="Descreva seu projeto ou duvida"  minRows={5} width="100%"
                                      status="default"
                                      />
                                    </Grid>
                                    <Grid xs={12}>
                                      <Button  color={"secondary"}>
                                        Enviar para Consultoria
                                      </Button>
                                    </Grid>
                      
                    </Grid.Container>
              </Grid>
      </Grid.Container>

      </Container>
    </>
  )
}