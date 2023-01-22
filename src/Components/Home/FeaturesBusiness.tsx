import { Col, Container, Grid,Row,Spacer,Text} from "@nextui-org/react";
import { CardItemHome } from "../../Components/CardItemHome";
import Seo from '../../../public/images/seo.avif'
import Screen from '../../../public/images/beautscreen.jpg'
import Bic from '../../../public/images/bic.jpg'
import Hacker from '../../../public/images/hacker.jpg'
import Speed from '../../../public/images/speed.jpg'
import Plugin from '../../../public/images/plugin.jpg'



import { StaticImageData } from "next/dist/client/image";
import {  IconWeight, Monitor,MagnifyingGlass,Gauge,Lightbulb,ShieldCheck,PuzzlePiece,Plugs   } from "phosphor-react";
import { ComponentPropsWithoutRef } from "react";
import * as logo from 'phosphor-react'

export interface IconProps extends ComponentPropsWithoutRef<"svg"> {
  alt?: string;
  color?: string;
  size?: string | number;
  weight?: IconWeight;
  mirrored?: boolean;
}
interface itemInfoPros{
  title:string;
  description:string,
  icon:logo.Icon
  image:string
}




export function  FeatureBusiness(){
  const InfoItens:itemInfoPros[] = [
    {title: "Beautiful Screen",description:"Design moderno e elegante com alto padão para paginas e telas de sua empresa.",icon:Monitor,image:Screen.src},
    {title:"Speed Caching" ,description:"Maxíma velocidade em site e aplicativos distribuidos em servidores mais próximo do seus clientes.",icon:Gauge,image:Speed.src},
    {title:"Search Engine Optimization",description:"Seja encontrado no google e outros mecanismos de busca e garanta a maior visibilidade do seu negócio.", icon:MagnifyingGlass,image:Seo.src},
    {title:"Business Intelligence",description:"Utilize e explore recursos de inteligência artifícial em suas estratégias e automatize tarefas.",icon:Lightbulb,image:Bic.src},
    {title:"Cyber Secutiry",description:"Proteção com certificados SSL contra ataques de cyber criminosos e vírus, garantindo a segurança de seu projeto.",icon:ShieldCheck,image:Hacker.src},
    {title:"Easy Integration",description:"Conecte-se com as mais diversas plataformas próprias ou de terceiros com plugins personalizados. ",icon:Plugs  ,image:Plugin.src}
  ]
  return(
    <>
    <Container  alignItems="center" justify="space-around" css={{  backgroundSize:"cover", display:"flex"}}>
     <Col css={{"@md":{
       padding:70
      }}}>
        <hr />
 
      <Spacer y={5}/>
      <Row data-aos="fade-up"  data-aos-once="true" justify="center">
      <Text color="secondary" size={"$2xl"} weight="bold" > Porque Cyber Cipset?</Text>

      </Row>
      <Text data-aos="fade-up"  data-aos-once="true" size={"$5xl"} transform="capitalize"  css={{textAlign:"center", fontWeight:"$bold"}}>
        Seu projeto com estratégia e inteligência
      </Text>
      <Text  data-aos="fade-up"  data-aos-once="true" css={{textAlign:'center'}} size="$2xl" color="$gray800" weight="medium">
        Seguindo padrões de alto nível e processos rigorosos para o sucesso do garantido do seu negócio.
      <Spacer y={5} />
      </Text>
      <Grid.Container gap={3} justify="center" >
            {InfoItens.map(item=>{
              return(
                
              <Grid data-aos="zoom-in"  data-aos-once="true" key={item.title} xs={12} md={4} justify="center">
                <CardItemHome image={item.image}  title={item.title} description={item.description} icon={item.icon}/>
              </Grid>
              )
            })}
      </Grid.Container>
      <Spacer y={3}/>
          <hr />
      <Spacer y={3}/>

          </Col>
    </Container>
    </>
  )
}