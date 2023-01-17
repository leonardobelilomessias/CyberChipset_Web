import { Avatar, Button, Col, Container, Input, Row, Text } from "@nextui-org/react";
import Link from "next/link";
import { User } from "phosphor-react";

export default function Login(){
  return(
    <>

        <Container css={{backgroundColor:"$accents1",p:20,pt:100,minHeight:"100vh",justifyContent:"center", justifyItems:"center", alignItems:"center", alignContent:"center",}}>
          <Row justify="center" align="center">

          <Col   css={{backgroundColor:"white",p:20,pb:180, justifyContent:"center", justifyItems:"center", alignItems:"center", alignContent:"center",justifySelf:"center","@md":{width:"50vh"}}}>
            <Row justify="center">

              <Text b size={"$3xl"}>Entrar</Text>
            </Row>

              <Row justify="center">

                    <Row css={{backgroundColor:"white",display:"flex", width:80, justifySelf:"center", alignSelf:'center'}}>
                      <User size={80} color="gray"></User>
                    </Row>
              </Row>
              <Row justify="center" css={{my:30,}}>
                <Input placeholder="email" css={{width:"80%"}}/>
              </Row>
              <Row justify="center" css={{my:30}}>
                <Input.Password labelPlaceholder="Password"  css={{width:"80%"}} />
              </Row>
              
              <Row justify="center" css={{mb:10,mt:50}}>
                <Button css={{width:"80%"}} color={"secondary"}>
                  Entrar
                </Button>
              </Row>
              <Row justify="center">
                <Link href={"#"}>
                  <Text b color="secondary">Esqueci minha senha.</Text>
                </Link>
              </Row>
          </Col>
          </Row>
        </Container>


    </>
  )
}