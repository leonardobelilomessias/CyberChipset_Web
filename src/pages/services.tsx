import { Container } from "@nextui-org/react";
import { BannerServices } from "../Components/Services/BannerService";
import { Consult } from "../Components/Services/Consult";
import { FeatureServices } from "../Components/Services/FeatureServices";
import { GridtypeSites } from "../Components/Services/GridTypeSites";
import { HeaderServices } from "../Components/Services/HeaderServices";
import { Learn } from "../Components/Services/Learn";



export default function Service(){
  return(
    <Container gap={0} css={{}} fluid>
      <HeaderServices/>
      <FeatureServices/>
      <BannerServices/>
      <GridtypeSites/>
      <Learn/>
{/*      <Consult/>*/}
    </Container>

  )
}