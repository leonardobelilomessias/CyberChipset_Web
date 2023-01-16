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
        <Text  size={"3xl"}  weight={"medium"} css={{textAlign:"center",fontSize:"$2xl"}}>Veja Como é Nosso Processo de Produção de Software.</Text>
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
                Você nos envia sua ideia de forma descritiva. Pode nos enviar modelos e referências de projetos similares. Seja bem específico nos detalhes.
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
                Nosso time vai irá fazer  o levantamento de requesitos funcionais e não funcionais necessários para a produção do seu projeto. 

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
               Nós apresentamos um protótipo com base nas informações que nós recebemos, de forma que você possa entender detalhes do produto.
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
                Com a apresentação você avalia se o prototipo do projeto atende as suas necessidades, para que possamos passar para fase de produção.
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
                Nessa fase nosso time trabalhará para implementar todas as ideia e configurar todo o sistema periférico para o perfeito funcionamento.
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
                Aqui nós lancaçaremos seu projeto com alta disponibilidade de modo que  esteja disponível e pronto para a utilização  de todos seus clientes ou usuários.
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