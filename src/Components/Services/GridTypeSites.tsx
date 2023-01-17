import { Card, Container, Grid, Text,Row, Spacer } from "@nextui-org/react";
import Present from '../../../public/images/biztrox.webp'
import Blog from '../../../public/images/blog.png'
import Ecom from '../../../public/images/ecom.png'
import Dash from '../../../public/images/dash.jpg'
import Land from '../../../public/images/land.jpg'
import Portifilio from '../../../public/images/portifolio.jpg'

export function GridtypeSites(){
  return(
    <>
    <Container>
      <Grid.Container gap={3} justify={"center"}>
   
        <Spacer y={6}/>
        <Row justify="center">
        <Text weight={"bold"}  css={{textAlign:"center",mb:100}} h1  > Projetos Web</Text>
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
            <Card.Footer css={{p:20}}>
              <Text   color="$gray800" b> Ideal para pequenas e medias empresas mostrar seus produtos e serviços. Um site institucional é um site que permite você  ou sua empresa se apresentar para seus clientes.</Text>
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
              <Text b  css={{p:20}} color="$gray800">Perfeito para quem vende produtos e quer alcançar mais clientes. Com recursos de catálogos e pagamento que facilitam
              a venda para seus clientes.
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
              <Text b  color="$gray800" css={{p:20}}> Para Aqueles que querem compartilhar ideias e suas habilidade do seu dia a dia. Com um blog você pode criar uma audiência que te acompanhará diariamente. </Text>
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
              <Text b color="$gray800" css={{p:20}}> Negócios complexos que necessitam de informações em tempo real e analize de informações. Sistemas internos com acesso restrito.</Text>
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
              <Text b color="$gray800" css={{p:20}}>Famosas paginas de capturas . Geração de leads e funil de vendas. Perfeita para redirecionar sua audiência para um só lugar</Text>
            </Card.Footer>
          </Card>
        </Grid>

        <Grid md={5}>
          <Card>
          <Card.Header css={{}}>
            <Text weight={"semibold"} size="$2xl">Lead Page</Text>
            </Card.Header>
            <Card.Body>
              <Card.Image src={Portifilio.src}>
                
              </Card.Image>
            </Card.Body>
            <Card.Footer>
              <Text b color="$gray800" css={{p:20}}>Pagina perfeita para divulga catalogo  de serviços para obter mais visibilidade permitir que as pessoas conheçam ser produto ou serviço.</Text>
            </Card.Footer>
          </Card>
        </Grid>

      </Grid.Container> 
      <Spacer  y={8}/>
      <hr />
    </Container>
    </>
  )
}