import { Container, Grid, Text,Input,Textarea, Col, Spacer, Card, Button,Row ,Image} from "@nextui-org/react";

import ImageContact from '../../public/images/contact.jpg'

export default function Contact(){
  return(
  
  <Col css={{padding:10,"@md":{padding:150}}}>
                      <Text  h1>Contato</Text>

      <Grid.Container  >
          <Grid md={6}>
            <Image src={ImageContact.src} alt={""}
                width={"100%"}
                height={"100%"}
            />

 
          </Grid>
        <Grid md={6}>
            <Card  css={{ justifyContent:"center", alignContent:"center", alignItems:"center",justifyItems:"center"}} >
              <Card.Header >
                 <Text b color="$accents8">

                 Nós envia uma messagem e em até 48 horas nós iremos lhe atender.(Se certifique que seus dados estão corretos.)
                 </Text>
              </Card.Header>

            <Grid.Container css={{ }} justify="center" alignContent="center" alignItems="center"  gap={3}>


                  <Grid xs={12} justify="center" css={{"@xs":{}}}>
                      <Input labelPlaceholder="Nome" css={{minWidth:'80%',"@xs":{
                        
                      }}}  />
                  </Grid>
                  
                  <Grid  justify="center" xs={12}>
                      <Input  labelPlaceholder="Instagram (opcional)" css={{minWidth:'80%'}}  />
                  </Grid>
                  <Grid  justify="center"  xs={12}>
                       <Input labelPlaceholder="Email" css={{minWidth:'80%'}} />
                  </Grid>
                  <Grid  justify="center"  xs={12}>
                       <Input labelPlaceholder="Whatsapp" css={{minWidth:'80%'}} />
                  </Grid>
                  <Grid  justify="center"  xs={12}>
                      <Textarea labelPlaceholder="Em que podemos te ajudar?" status="default" css={{minWidth:'80%'}} minRows={6} />
                  </Grid>
            </Grid.Container>
            <Card.Footer   >
              <Row justify="center">

              <Button size={"lg"} color={"secondary"} css={{width:"80%"}}>
                Enviar
              </Button>
              </Row>
            </Card.Footer>
            </Card >
        </Grid>

          </Grid.Container>

        </Col>

  )
}