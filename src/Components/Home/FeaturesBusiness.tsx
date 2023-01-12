import { Col, Container, Grid,Row,Spacer,Text} from "@nextui-org/react";
import { CardItemHome } from "../../Components/CardItemHome";

interface itemInfoPros{
  title:string;
  description:string,
  src:string,
  image:string
}




export function  FeatureBusiness(){
  const InfoItens:itemInfoPros[] = [
    {title: "Beautiful Screen",description:"Desing moderno e elegante com alto padão para paginas e telas de sua empresa.",src:"https://cdn-icons-png.flaticon.com/512/7504/7504127.png",image:"https://img.freepik.com/free-vector/technology-landing-page-with-photo-liquid-style_23-2148264603.jpg?w=1380&t=st=1673131773~exp=1673132373~hmac=082c08294fcf663b87a0f6184ee73949cdab4c0dea32e7e95124817237f1a1a2"},
    {title:"Speed Caching" ,description:"Maxima velocidade em site e aplicativos distribuidos em servidores mais próximo do seus clientes.",src:"https://cdn-icons-png.flaticon.com/512/5692/5692541.png",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {title:"Search Engine Optimization",description:"Seja encontrado no google facilmente no google e garanta a maior visibilidade do seu negócio.", src:"https://cdn-icons-png.flaticon.com/512/3670/3670531.png",image:"https://images.unsplash.com/photo-1586125674857-4eb86880905d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {title:"Business Inteligence",description:"Utilize e explore recursos de inteligência artifícial em suas estratégias e automatize tarefas.",src:"https://cdn-icons-png.flaticon.com/512/6795/6795081.png",image:"https://img.freepik.com/free-photo/designer-using-transparent-digital-tablet-screen-futuristic-technology_53876-105379.jpg?w=1380&t=st=1673132612~exp=1673133212~hmac=013b69126762fbf0cdf47a158c1bf4403b7f5158c3810bfcd4b28e370256dc62"},
    {title:"Cyber Secutiry",description:"Proteção com certificados SSL contra ataques de cyber criminosos e vírus, garantindo a segurança de seu projeto.",src:"https://cdn-icons-png.flaticon.com/512/3942/3942496.png",image:"https://img.freepik.com/free-photo/beautiful-hacker-girl-working-with-another-dangerous-cyber-criminals-hackers-centre_482257-21839.jpg?w=1380&t=st=1673132688~exp=1673133288~hmac=27696e41af96fd8c9f508051c6a37906062e3d028b5b7603e3893eaf65f7b0c3"}
  ]
  return(
    <>
    <Container  alignItems="center" justify="space-around" css={{ background:" linear-gradient(126deg, rgba(238,174,202,0.1) 0%, rgba(223,233,244,0.3) 97%)", backgroundSize:"cover", display:"flex"}}>
     <Col css={{"@md":{
        padding:70
      }}}>
 
      <Spacer y={2}/>
      <Text h2 transform="capitalize"  css={{textAlign:"center", fontWeight:"$bold"}}>
        Criando um negocio inteligente.
      </Text>
      <Text css={{textAlign:'center'}}>
        Seguindo padroes de alto nivel e processos rigorosos o sucesso do seu negocio é garantido.
      </Text>
      <Spacer />
      <Grid.Container gap={3} >
            {InfoItens.map(item=>{
              return(
                
              <Grid key={item.title} xs={12} md={4}>
                <CardItemHome image={item.image}  title={item.title} description={item.description} src={item.src}/>
              </Grid>
              )
            })}
      </Grid.Container>
      <Spacer y={3}/>
          </Col>
    </Container>
    </>
  )
}