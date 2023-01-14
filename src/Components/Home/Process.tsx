import { Col, Container, Grid, Spacer, Text } from "@nextui-org/react";
import { NumberOne, NumberSquareFive, NumberSquareFour, NumberSquareOne, NumberSquareSix, NumberSquareThree, NumberSquareTwo } from "phosphor-react";

export function Process(){
  return(
    <>
      <Container css={{py:100}}>
        <Col >
      <Spacer y={3}/>
        <Text h1 css={{textAlign:"center"}}>
          Da idea até a Realização
        </Text>
        <Text  as={"p"}  weight={"medium"} css={{textAlign:"center"}}>Veja Como é Nosso Processo de Produção de Software</Text>
      <Spacer y={4}/>
        </Col>

        <Grid.Container gap={2}  justify="center">
          <Grid xs={12} md={3.5}>
              <NumberSquareOne color="#7828C8" weight="fill"  size={72} /> 
              <Col>
              <Text b size={"$2xl"}  css={{lineHeight:"$2xl"}}>
                Idealização
              </Text>
              <Text  blockquote>
                Você nos envia sua ideia de forma descritiva. Pede nos enviar modelos e referencias de projetos similares. Seja bem especifico nos detalhes
              </Text>
              </Col>
          </Grid>
          <Grid xs={12} md={3.5}>
            <NumberSquareTwo  color="#7828C8" weight="fill"  size={72} />
            <Col>
              <Text size={"$2xl"} b  css={{lineHeight:"$2xl"}}>
                Modelagem
              </Text>
              <Text  blockquote css={{}}>
                Nosso time vai irá fazer  o levantamento de requesitos funcionais e não fncionais necessarios para a produçãoo do seu projeto 

              </Text>
            </Col>
          </Grid>
          <Grid xs={12} md={3.5}>
          <NumberSquareThree color="#7828C8" weight="fill"  size={72} />
              <Col>
              <Text size={"$2xl"} b css={{lineHeight:"$2xl"}}>
                Apresentação
              </Text>
              <Text  blockquote>
               Nós apresentamos um prototipo com base nas informaçoes que nos recebemos de forma que você possa entender detalhes do produto
              </Text>
              </Col>
          </Grid>
          <Grid xs={12} md={3.5}>
          <NumberSquareFour color="#7828C8" weight="fill"  size={72} />
              <Col>
                <Text size={"$2xl"} b css={{lineHeight:"$2xl"}}>
                  Validação
                 </Text>
                 <Text  blockquote>
                Com a apresentação você avalia o prototipo do projeto se atende as suas necessidades para que possamos passar para fase de produção.
              </Text>
              </Col>
          </Grid>
          <Grid xs={12} md={3.5}>
          <NumberSquareFive color="#7828C8" weight="fill"  size={72} />
          <Col>
            <Text size={"$2xl"} b css={{lineHeight:"$2xl"}}>
                Produção
            </Text>
            <Text  blockquote>
                Nessa fase nosso timo trabalhara duro para implementar todas as ideia e colocar seu produto pronto para uso para seus clientes ou usuarios
              </Text>
          </Col>
          </Grid>
          <Grid xs={12} md={3.5}>
          <NumberSquareSix color="#7828C8" weight="fill"  size={72} />
          <Col>
              <Text  size={"$2xl"} b css={{lineHeight:"$2xl"}}>
                Lançamento
              </Text>
              <Text  blockquote >
                Aqui nós lancaços seu projeto com alta disponibilidade de modo que seu projeto esteja disponivel e pronto para a tilização totalmente funcional
              </Text>
          </Col>
          </Grid>

        </Grid.Container>
        <Spacer y={6}/>
        <hr />
      </Container>
    </>
  )
}