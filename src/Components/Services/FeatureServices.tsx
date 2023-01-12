import { Card, Col, Container, Grid, Row, Spacer, Text } from "@nextui-org/react";
import { Globe, MicrosoftWordLogo,Strategy, DeviceMobile,Wrench } from "phosphor-react";
import { HeaderServices } from "./HeaderServices";
import { InfoGrid } from "./InfoGrid";

export function FeatureServices(){
  return(
    <Container  fluid>
    <Col css={{p:8,"@md":{p:100}}} >
    <Row css={{bg:"white"}}>
      <Col>
        <Text weight={"bold"} size={"$2xl"} color="$purple500" css={{textAlign:"center"}}  >Tecnologia de Ponta.</Text>
      </Col>
    </Row>
    <Row  align="center" justify="center" css={{bg:"white"}}>
      <Col>
        <Text css={{textAlign:"center",fontSize:"$4xl","@md":{fontSize:"$6xl",p:8}}} weight={"bold"} color="#242424"  transform="capitalize"  >Alto padrão em ferramentas e serviços.</Text>
      </Col>
    </Row>
    <Row css={{bg:"white"}}>
      <Col>
        <Text weight={"bold"} css={{"@md":{fontSize:"$2xl",textAlign:"center",p:12}}} color="$gray800"> Nós trabalhamos em passeria com os grande players de mercado como Google e Microsoft. Por isso temos ferramentas de ultima geração recentemente ao mercado e base de dados atualizadas para garantir um passo sempre a frente em inovação.</Text>
      </Col>
    </Row>
    <Spacer y={2}/>
    <Grid.Container gap={1} css={{bg:"white"}}>

        <InfoGrid 
        title="Consultoria e estrategias tecnicologicas" 
         description="Nosso time de Smart business entende e atende as diversas necessidades do seu negocio. desenhando e desenvolvendo o melhor caminho para você alcancar resultados mais mais rapidos." 
         logo= {<Strategy  color="white" size={40} />} />
         
        <InfoGrid title="Desenvolvimento Web"  description="No desenvolvimento web temos proficiencia em construção de diverças plataformas de acordo com seu negocio. Seja ele uma pagina institucional, Blog , ou Ecommerce. " logo= {<Globe  color="white" size={40} />} />
        <InfoGrid title="Desenvolvimento Mobile"  description="Nosso time conta com experts que darão vida as suas ideias que necessitam de um app. Criamos soluçoes para plataformas da apple e android garantido alcancar todos os publicos." logo= {<DeviceMobile  color="white" size={40} />} />
        <InfoGrid title="Manutenção e suporte"  description="Oferecemos manutenção e suporte de qualidade no atendimento. Garantindo que seu projeto estará sempre disponivel e funcional para seu clientes" logo= {<Wrench color="white" size={40} />} />

    </Grid.Container>
    </Col>
  </Container>

  )
}