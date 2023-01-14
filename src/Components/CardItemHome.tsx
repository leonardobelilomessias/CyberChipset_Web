import { Card, Col, Container, Grid,Row,Spacer,Text,Image,Popover,Button } from "@nextui-org/react";

interface itemInfoPros{
  title:string;
  description:string,
  src:string,
  image:string
}

export function CardItemHome(item:itemInfoPros){
  return(  

    <>
  <Card css={{ p: "$6", mw: "400px" }}>
  <Card.Header >
      <Image
      alt="nextui logo"
      src={item.src}
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
<Image
      src={item.image}
      width="100%"

      objectFit="cover"
      alt="Card image background"
    />
<Card.Body css={{ py: "$2" }}>
<Text  >
  {item.description}
</Text>
</Card.Body>
<Card.Footer css={{alignContent:"flex-end",justifyContent:"flex-end"}}>

    <Text b color="secondary">→ Detalhes</Text>

</Card.Footer>
</Card>
    </>
  )
}