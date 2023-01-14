import { Collapse,Container,Spacer,Text,Col } from "@nextui-org/react" 
export function QuestionAnswers(){
  return(
    <Container css={{maxWidth:"1224px", mt:200}}>
      <Col  css={{ mt:100,mb:100}}>
    <Text h2 weight={"bold"} css={{textAlign:"center"}}>
      Perguntas Frequentes
    <Spacer/>
    </Text>
      <Collapse.Group>
      <Collapse title="Quanto tempo para o desenvolvimento?">
        <Text>
          O Prazo de entrega varia de acordo com o tipo de projeto. Temos a linha express que tem a entrega de 3 a 7 dias. Já projetos mais costumizados fazemos a analize e a projeção de tempo para entrega que garanta a integridade do produto.
        </Text>
      </Collapse>
      <Collapse title="Qual a forma de pagamento?">
        <Text>
          O Pagamento é feito no cartão de credito ou debito sem juros e em ate 12 vezes. 
        </Text>
      </Collapse>
      <Collapse title="Vou poder alterar meu projeto após a entrega?">
        <Text>
          Você terá toda a liberdade de alterar e costumizar seu projeto. 
        </Text>
      </Collapse>
      <Collapse title="Preciso ter algum conhecimento específico para gerenciar o projeto?">
        <Text>
          Você não precisa de nenhum conhecimento específico. Nós iremos criar e configurar todas as ferramentas para você.
        </Text>
      </Collapse>
      <Collapse title="Vocês oferecem suporte?">
        <Text>
          Temos total suporte após a entrega do projeto. Garanta de se assegurar que você contratou o projeto adequado.
        </Text>
      </Collapse>
    </Collapse.Group>
    <Spacer y={3}/>
      </Col>
    </Container>
  )

}