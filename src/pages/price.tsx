import { Container, Row, Spacer, Grid, Card, Col, Button,Text } from "@nextui-org/react";

export default function Price(){
  return(
     <Container css={{mb:100 }} >
    <h1>
    Price
    </h1>
  

     <Row justify="center" >

       <Text weight={"bold"} color={"black"} css={{textAlign:"center",mt:50 }} h2>
         Escolha seu tipo de Projeto
       </Text>
     </Row>
       <Spacer y={2}/>
     <Row css={{m:10,}}>
       <Grid.Container gap={0} justify="space-evenly" css={{  "@md":{
         paddingLeft:44,paddingRight:44
       }}}>
       <Grid md={3}>
                 <Card  isHoverable >          
                   <Card.Header  css={{ }} >
                   <Col>

                     <Text weight={"bold"}  css={{ textAlign:"center"}}   size={25}>
                       Site institucional
                     </Text>
                     <Text color="$gray800" weight={"medium"} css={{ textAlign:"center"}} >Ideal para emprendedores, artistas, e empresas</Text>
                     </Col>
                   </Card.Header>
                   <Card.Body css={{paddingTop:1}}>
                     
                       <ul>
                         <li> <span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> 7 paginas</li>
                         <li> <span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Email Profissional</li>
                         <li><span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Dominio Gratis </li>
                         <li><span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Certificado SSL </li>
                         <li><span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Largura de Banda Ilimitada</li>
                       </ul>
                       <Col >
                         
                         <Text size={16} css={{ textAlign:"center", background:"", m:0}}>
                         De <Text del >879,90</Text>  por </Text>
                         <Text  weight={"bold"} size={30} css={{  textAlign:"center"}}> <Text b size={20}>R$</Text> 599,90</Text>
                       </Col>
                   </Card.Body>
                   
                   <Card.Divider ></Card.Divider>
                   <Card.Footer>
                   <Row justify="center">
                     <Button color={"secondary"}>Quero esse</Button>
                     </Row>
                   </Card.Footer>
                 </Card>
                 </Grid>

       <Spacer/>
       <Grid md={3}>
                   <Card  isHoverable >
                     <Card.Header css={{ }} >
                     <Col>

                       <Text weight={"bold"}   css={{ textAlign:"center"}} size={25}>
                         Ecommerce
                       </Text>
                       <Text color="$gray800" css={{ textAlign:"center"}}  weight={"medium"}>Perfeito para aumentar suas vendas e faturar no mercado digital</Text>
                       </Col>
                     </Card.Header>
                     <Card.Body css={{paddingTop:1}}>
                       
                         <ul>    
                           <li> <span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Email Profissional</li>
                           <li><span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Dominio Gratis </li>
                           <li><span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Certificado SSL </li>
                           <li><span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Produtos Ilimitados </li>
                           <li> <span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Todos os meios de pagamento</li>
                         </ul>
                         <Col >
                           
                           <Text size={16} css={{ textAlign:"center", background:"", m:0}}>
                           De <Text del >2369,90</Text>  por </Text>
                           <Text  weight={"bold"} size={30} css={{  textAlign:"center"}}> <Text b size={20}>R$</Text> 1599,90</Text>
                         </Col>
                     </Card.Body>
                     
                     <Card.Divider ></Card.Divider>
                     <Card.Footer>
                     <Row justify="center">
                       <Button color={"secondary"}>Quero esse</Button>
                       </Row>
                     </Card.Footer>
                   </Card>
       </Grid>
       <Spacer/>
       <Grid md={3}>
                 <Card  isHoverable >
                   <Card.Header css={{ }} >
                   <Col>

                     <Text weight={"bold"}   css={{ textAlign:"center"}}  size={25}>
                       Plataforma Pesonalizada
                     </Text>
                     <Text color="$gray800" css={{ textAlign:"center"}}  weight={"medium"}>De asas a sua imaginação e faça a ferramenta de acordo com seu negocio</Text>
                     </Col>
                   </Card.Header>
                   <Card.Body css={{paddingTop:1}}>
                     
                       <ul>
                         <li> <span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Painel Administrativo</li>
                         <li> <span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Email Profissional</li>
                         <li><span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Dominio Gratis </li>
                         <li><span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Certificado SSL </li>
                         <li><span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Ferramentas costumizadas</li>
                       </ul>
                       <Col >
                         
                         <Text size={16} css={{ textAlign:"center", background:"", m:0}}>
                         Sob Demanda </Text>
                         <Text  weight={"bold"} size={30} css={{  textAlign:"center"}}>  Preço Custumizado</Text>
                       </Col>
                   </Card.Body>
                   
                   <Card.Divider ></Card.Divider>
                   <Card.Footer>
                   <Row justify="center">
                     <Button color={"secondary"}>Quero esse</Button>
                     </Row>
                   </Card.Footer>
                 </Card>
       </Grid>
     </Grid.Container>
     </Row>
       <Spacer/>
 

     </Container>
  )
}