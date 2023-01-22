import { Button, Card, Col, Container, Grid, Row, Spacer, Text } from "@nextui-org/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { CrownSimple } from "phosphor-react";


export interface ProductsProps{
  products:{
    idProduct:string
    idPrice:string
    name:string
    price: number
  }[]
}

export function PricesPremiumHome({products}:ProductsProps){
  const {push} = useRouter()

  //const [,,ecom, site] = products

  const models = products.filter(product=>{
    if(product.name.includes("PREMIUM")){
      return product
    }
  })
  const site = models.find( product => {
    if(product.name.includes("Site")){
      return product
    }
  })
  const ecom = models.find( product => {
    if(product.name.includes("Ecommerce")){
      return product 
    }
  })
 
  return(

 
      <Container   css={{mb:100 }} >
  
      <Col css={{mb:100 }} >
     
        <Row css={{mt:100 ,p:0}} justify="center">
        <CrownSimple size={62}  color="#7828C8" weight="duotone" />
        </Row>
      <Row css={{p:0, display:"flex"}} justify="center">
        <Text  weight={"bold"} color={"black"}id="price"  css={{textAlign:"center" }}  size={"$5xl"}>
        Linha Premium
        </Text>
      </Row>
      <Row css={{p:0, display:"flex"}} justify="center">
        <Text  weight={"bold"} color={"$gray700"}id="price"  css={{textAlign:"center" }}  size={"$3xl"}>
        O melhor da das ferramentas tecnológicas. 
        </Text>
      </Row>
      </Col>
      <Row css={{m:10,mb:200}}>
        <Grid.Container  gap={2} justify="space-evenly" css={{  "@md":{
          paddingLeft:44,paddingRight:44
        }}}>
        <Grid md={3}>
                  <Card      data-aos="flip-left" data-aos-once="true">          
                    <Card.Header  css={{ }} >
                    <Col>

                      <Text weight={"bold"} css={{ textAlign:"center"}}   size={25}>
                        Institucional ou Lading Page
                      </Text>
                      <Text color="$gray800" weight={"medium"} css={{ textAlign:"center"}} >Ideal para emprendedores, artistas, e empresas aumentarem sua visibilidade.</Text>
                      </Col>
                    </Card.Header>
                    <Card.Body css={{paddingTop:1}}>
                      
                        <ul>
                          <li><span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Dominio Gratis </li>
                          <li><span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Certificado SSL </li>
                          <li> <span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Tecnologia React</li>
                          <li> <span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span>Otimização de imagens</li>
                          <Text b color="secondary"> saiba mais...</Text>
                        </ul>
                        <Col >
                          
                          <Text size={16} css={{ textAlign:"center", background:"", m:0}}>
                          De <Text del >879,90</Text>  por </Text>
                          <Text  weight={"bold"} size={30} css={{  textAlign:"center"}}> <Text b size={20}></Text> {new Intl.NumberFormat("pt-BR",{style:"currency",currency: 'BRL' })?.format(site?.price as number)}</Text>
                        </Col>
                    </Card.Body>
                    
                    <Card.Divider ></Card.Divider>
                    <Card.Footer>
                    <Row justify="center">
                      
                      <Button color={"secondary"} onPress={()=>{ push(`/product/1?idPrice=${site?.idPrice}`)}}>Quero esse</Button>
             
                      </Row>
                    </Card.Footer>
                  </Card>
                  </Grid>

        <Spacer/>
        <Grid md={3}>
                    <Card  data-aos="flip-left" data-aos-once="true"    >
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
                            <li><span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Dominio Gratis </li>
                            <li><span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Certificado SSL </li>
                            <li> <span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span>Tecnologia Reactl</li>
                            <li> <span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Todos os meios de pagamento</li>
                            <Text b color="secondary"> saiba mais...</Text>
                          </ul>
                          <Col >
                            
                            <Text size={16} css={{ textAlign:"center", background:"", m:0}}>
                            De <Text del >2369,90</Text>  por </Text>
                            <Text  weight={"bold"} size={30} css={{  textAlign:"center"}}> <Text b size={20}></Text> {new Intl.NumberFormat("pt-BR",{style:"currency",currency: 'BRL' })?.format(ecom?.price as number)}</Text>
                          </Col>
                      </Card.Body>
                      
                      <Card.Divider ></Card.Divider>
                      <Card.Footer>
                       
                      <Row justify="center">
                          <Button color={"secondary"} onPress={()=>{ push(`/product/2?idPrice=${ecom?.idPrice}`)}} >Quero esse</Button>
                        </Row>
                        
                      </Card.Footer>
                    </Card>
        </Grid>
        <Spacer/>
        <Grid md={3}>
                  <Card data-aos="flip-left" data-aos-once="true"    >
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
                          <li> <span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Layout Do Zero</li>
                          <li><span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Autenticação de Usuarios</li>
                          <li><span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Certificado SSL </li>
                          <li><span style={{color:"green",fontWeight:"bolder"}}>&#10003;</span> Ferramentas costumizadas</li>
                          <Text b color="secondary"> saiba mais...</Text>
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
        <Spacer y={4}/>
        <hr />

      </Container>

  )
}