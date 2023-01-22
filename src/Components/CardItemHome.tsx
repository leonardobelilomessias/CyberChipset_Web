import { Card, Col, Container, Grid,Row,Spacer,Text,Popover,Button, styled } from "@nextui-org/react";
import Image from "next/image";

import * as logo from 'phosphor-react'
import { ComponentPropsWithoutRef } from "react";

export interface IconProps extends ComponentPropsWithoutRef<"svg"> {
  alt?: string;
  color?: string;
  size?: string | number;
  weight?: logo.IconWeight;
  mirrored?: boolean;
}
interface itemInfoPros{
  title:string;
  description:string,
  icon:logo.Icon
  image:string
}

const BoxImage = styled("div",{
  
  width: "100%",
  height:"30vh",
  position:"relative",
  "@md":{
    width:"100%",
    minHeight:"250px",
    height:"100%",
    alignContent:"center",
    alignItems:"center", 
    alignSelf:"center",
    position:"relative"
    
  }


})



export function CardItemHome(item:itemInfoPros){
  return(  

    <>
  <Card css={{ p: "$6", mw: "400px" }}>
  <Card.Header >
      < item.icon
     
      width="34px"
      height="34px"
      
      />
    <Grid.Container >

      <Grid  >
        <Text span weight={"bold"} size={"$lg"} css={{ pl:"$5"}}>
          {item.title}
        </Text>
      </Grid>
    </Grid.Container>
</Card.Header>
    <BoxImage>
      <Image priority src={item.image} alt="" sizes="100vw" fill/>
    </BoxImage>

<Text  >
  {item.description}
</Text>

<Card.Footer css={{alignContent:"flex-end",justifyContent:"flex-end"}}>

   {/* <Text b color="secondary">→ Detalhes</Text>*/}

</Card.Footer>
</Card>
    </>
  )
}