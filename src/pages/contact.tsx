import { Container, Grid, Text,Input,Textarea, Col, Spacer, Card, Button,Row ,Image, Loading} from "@nextui-org/react";
import { useEffect, useState } from "react";

import ImageContact from '../../public/images/contact.jpg'
import { api } from "./api/api";
type InfoApi={
  name?:string
  email?:string
  number?:string
  mensage:string
  status:boolean
}
export default function Contact(){
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [number,setnumber] = useState("")
  const [mensage,setMensage] = useState("")

  const [stateName,setStateName] = useState(true)
  const [stateEmail,setStateEmail] = useState(true)
  const [statenumber,setStatenumber] = useState(true)
  const [stateMensage,setStateMensage] = useState(true)
  const[ infoApi,setInfoApi] = useState<InfoApi>({mensage:"teste"} as InfoApi)
  const [load,setLoad] = useState(false)
  const [lang,setLang] = useState(false)

    
  async function handleData(){
    setLoad(true)
    try{
      const data = await api.post("databaseContact",{name:name,email:email,mensage:mensage, number:number}) 
      
      setInfoApi(data.data)
      return data.data

    }catch{
       setInfoApi({mensage:"não foi possivel executar a operação!",status:false})
    }finally{
      
      setLoad(false)
    }

  }
  async function HandleConsult(){
    
    const regexEmail =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i 


    
  !(regexEmail.test(email))? setStateEmail(false):setStateEmail(true)

  !name?setStateName(false):setStateName(true) 
  !mensage?setStateMensage(false):setStateMensage(true)
  setLang(!lang)
  

}
useEffect(()=>{
  setInfoApi({} as InfoApi)
  console.log(stateEmail)
  if (name.length > 0 && stateName &&  stateEmail && stateMensage  ){
      handleData()
      setName("")
      setEmail("")
      setnumber("")
      setMensage("")
    
    }

  },[lang])
  return(
  
  <Col css={{padding:10,"@md":{padding:150}}}>
                      <Text  h1>Contato</Text>

      <Grid.Container  >
          <Grid md={6}>
            <Image src={ImageContact.src} alt={""}
                width={"100%"}
                height={"100%"}
            />

 
          </Grid>
        <Grid md={6}>
            <Card  css={{ justifyContent:"center", alignContent:"center", alignItems:"center",justifyItems:"center"}} >
              <Card.Header >
                 <Text b color="$accents8">

                 Nós envia uma messagem e em até 48 horas nós iremos lhe atender.(Se certifique que seus dados estão corretos.)
                 </Text>
              </Card.Header>

            <Grid.Container css={{ }} justify="center" alignContent="center" alignItems="center"  gap={3}>


                  <Grid xs={12} justify="center" css={{"@xs":{}}}>
                      <Input status={stateName?"default":"error" } labelPlaceholder={stateName?"Name":"O campo não pode estar vazio"}  width="100%"  value={name} onChange={(event)=>setName(event.target.value)} />
                  </Grid>
                  
                  <Grid  justify="center"  xs={12}>
                       <Input  status={stateEmail?"default":"error" } width="100%" value={email}  labelPlaceholder={stateEmail?"Email":"Digite um email valido"} onChange={(event)=>setEmail(event.target.value)} />
                  </Grid>

                  <Grid  justify="center"  xs={12}>
                      <Textarea status={stateMensage?"default":"error" } labelPlaceholder={stateMensage?"Digite sua mensagem":"O campo não pode estar vazio"} value={mensage}  minRows={5} width="100%"
                                         onChange={(event)=>setMensage(event.target.value)} />
                  </Grid>
            </Grid.Container>
            <Card.Footer   >
              <Row justify="center">

              <Button disabled={load} onPress={()=>HandleConsult()} color={"secondary"}>
                                        {load?
                                        <Loading type="points"  color={"secondary"}></Loading>
                                      :"Enviar para Consultoria"}
                                        
                                        
                                      </Button>
              </Row>
            </Card.Footer>
        <Grid>
        <Text color= {infoApi.status===true? "secondary":"error"} b>{infoApi.mensage} </Text>
        </Grid>
            </Card >
        </Grid>


          </Grid.Container>

        </Col>

  )
}