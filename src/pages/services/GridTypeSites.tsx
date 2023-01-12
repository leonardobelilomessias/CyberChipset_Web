import { Card, Container, Grid, Text,Row, Spacer } from "@nextui-org/react";
import Present from '../../../public/images/biztrox.webp'
import Blog from '../../../public/images/blog.png'
import Ecom from '../../../public/images/ecom.png'
import Dash from '../../../public/images/dash.jpg'
import Land from '../../../public/images/land.jpg'
export function GridtypeSites(){
  return(
    <>
    <Container>
      <Grid.Container gap={3} justify={"center"}>
   
        <Row justify="center">

        <Text weight={"bold"}  css={{textAlign:"center"}} h2  > Projetos Web</Text>
        </Row>
     
        <Grid md={5}>
          <Card>
            <Card.Header css={{}}>
            <Text weight={"semibold"} size="$2xl">Intitucional</Text>
            </Card.Header>
            <Card.Body>
              <Card.Image src={Present.src}>
                
              </Card.Image>
            </Card.Body>
            <Card.Footer>
              <Text color="$gray800" b>Ideal para pequenas e medias empresas que precisão de mostrar seu trabalho ou produto.</Text>
            </Card.Footer>
          </Card>
        </Grid>

        <Grid  md={5}>
          <Card>
            <Card.Body>
            <Card.Header css={{}}>
            <Text weight={"semibold"} size="$2xl">Ecommerce</Text>
            </Card.Header>
              <Card.Image src={Ecom.src}>
                
              </Card.Image>
            </Card.Body>
            <Card.Footer>
              <Text b color="$gray800">Perfeito para quem vende produtos e quer alcançar mais clientes.Com recursos de catalogos e pagamento que facilitam
              a venda para seus clientes
              </Text>
            </Card.Footer>
          </Card>
        </Grid>

        <Grid  md={5}>
          <Card>
          <Card.Header css={{}}>
            <Text weight={"semibold"} size="$2xl">Blog</Text>
            </Card.Header>
            <Card.Body>
              <Card.Image src={Blog.src}>
                
              </Card.Image>
            </Card.Body>
            <Card.Footer>
              <Text b  color="$gray800"> Para Aqueles que querem compartilhar ideias e suas habilidade do seu dia a dia.  </Text>
            </Card.Footer>
          </Card>
        </Grid>

        <Grid md={5}>
          <Card>
          <Card.Header css={{}}>
            <Text weight={"semibold"} size="$2xl">DashBoard</Text>
            </Card.Header>
            <Card.Body>
              <Card.Image src={Dash.src}>
                
              </Card.Image>
            </Card.Body>
            <Card.Footer>
              <Text b color="$gray800"> Negocios complexos que necessitam de informaçoes em temp real e analize de informaçoes.</Text>
            </Card.Footer>
          </Card>
        </Grid>

        <Grid md={5}>
          <Card>
          <Card.Header css={{}}>
            <Text weight={"semibold"} size="$2xl">Portifolio</Text>
            </Card.Header>
            <Card.Body>
              <Card.Image src={Land.src}>
                
              </Card.Image>
            </Card.Body>
            <Card.Footer>
              <Text b color="$gray800">Famosas paginas de capturas . Geração de leads e funil de vendas. Perfeita para redirecionar sua audiencia para um so lugar</Text>
            </Card.Footer>
          </Card>
        </Grid>

        <Grid md={5}>
          <Card>
          <Card.Header css={{}}>
            <Text weight={"semibold"} size="$2xl">Lead Page</Text>
            </Card.Header>
            <Card.Body>
              <Card.Image src={Land.src}>
                
              </Card.Image>
            </Card.Body>
            <Card.Footer>
              <Text b color="$gray800">Famosas paginas de capturas . Geração de leads e funil de vendas. Perfeita para redirecionar sua audiencia para um so lugar</Text>
            </Card.Footer>
          </Card>
        </Grid>

      </Grid.Container>
      <Spacer  y={2}/>
    </Container>
    </>
  )
}