import { Card, Col, Container, Grid, Row, Spacer, Text } from "@nextui-org/react";
import { Globe,  Icon,  IconWeight } from "phosphor-react";
import { ComponentPropsWithoutRef } from "react";
import * as test from 'phosphor-react'
export interface IconProps extends ComponentPropsWithoutRef<"svg"> {
  alt?: string;
  color?: string;
  size?: string | number;
  weight?: IconWeight;
  mirrored?: boolean;
}
interface PropsGrid{
  title:string
  description:string 
  logo: test.IconProps
}
export function InfoGrid({title,description,logo}:PropsGrid){
  return(
    <Grid xs={12} md={6} sm={6} lg={6}>
          
    <Grid.Container gap={1}>

      <Grid xs={12} md={2}   >
        <Col css={{ flexBasis:0,width:'100%', }} >
          <Row css={{backgroundColor:"$purple600", flexBasis:0, borderRadius:8, p:8, boxShadow:"$xl",  }}>
            <>
            {logo}
            </>
            
            </Row>
        </Col>
      </Grid>

      <Grid xs={12} md={8}>
        <Col>
        <Grid xs={12} md={6}>
        <Text b size={"$2xl"}>{title}</Text>
        </Grid>
        <Grid xs={12} md={6} lg={12} >
          <Text>
        {description}
          </Text>
        </Grid>
        </Col>
      </Grid>
    </Grid.Container>
    </Grid>
  )
}