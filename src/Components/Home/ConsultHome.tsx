import { Button, Col, Container, Grid, Input,  Loading,  Row,  Spacer,  styled,  Text, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Back from '../../../public/images/consult.jpg'

import { AxiosError, AxiosResponse,isAxiosError } from "axios";
import { api } from "../../pages/api/api";


type RequestError= {
  status:number
}
type InfoApi={
  name?:string
  email?:string
  number?:string
  mensage:string
  status:boolean
}
const BoxImage = styled("div",{
  
  width: "90vw",
  height:"30vh",
  position:"relative",
  "@md":{
    width:"100vw",
    height:"50vh",
    alignContent:"center",
    alignItems:"center", 
    alignSelf:"center"
  }


})
export function ConsultHome(){
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
      const data = await api.post("database",{name:name,email:email,mensage:mensage, number:number}) 
      
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
    const regexnumber =/^([0-9]{2})([0-9]{4,5})([0-9]{4})$/

    
  !(regexEmail.test(email))? setStateEmail(false):setStateEmail(true)
  !(regexnumber.test(number))? setStatenumber(false) : setStatenumber(true)
  !name?setStateName(false):setStateName(true) 
  !mensage?setStateMensage(false):setStateMensage(true)
  setLang(!lang)
  
  console.log(stateEmail,stateMensage,stateName,statenumber)
}
useEffect(()=>{
  setInfoApi({} as InfoApi)
    if (name.length > 0 && stateName &&  stateEmail && stateMensage && statenumber  ){
      console.log("aqui")
      handleData()
      setName("")
      setEmail("")
      setnumber("")
      setMensage("")
    
    }

  },[lang])
  
  return(
    <>
      <Container css={{pb:100}} >
        <Grid.Container justify="space-around">

                
                    <Grid md={5} >
                  

           
                      <BoxImage>
                        <div>

                      <Image src={Back} fill alt="" sizes="100"/>
                        </div>

                      </BoxImage>
               
          
                     
                    </Grid>
                

                  <Grid  md={5}>
                              <Grid.Container gap={3}>
                                  <Grid>

                                      <Text color="secondary" b size={"$2xl"}>
                                        Vagas limitadas
                                    </Text>
                                    <Text h1>
                                      Consultoria GRÁTIS para seu Projeto Decolar!
                                    </Text>
                                    
                                    <Text h3 >
                                    Vamos analizar seu projeto e montar toda a estrategia para você alcançar sucesso com as tecnologia adequadas.
                                    </Text>
                                  </Grid>
                                    
                          
                                    <Grid xs={12} >
                                      <Input status={stateName?"default":"error" } labelPlaceholder={stateName?"Name":"O campo não pode estar vazio"}  width="100%"  value={name} onChange={(event)=>setName(event.target.value)}
                                    />
                                    </Grid>
                                    <Grid xs={12}>
                                      <Input  status={stateEmail?"default":"error" } width="100%" value={email}  labelPlaceholder={statenumber?"Email":"Digite um email valido"} onChange={(event)=>setEmail(event.target.value)} />
                                    </Grid>
                                    <Grid xs={12}>
                                      <Input  status={statenumber?"default":"error" } width="100%" value={number}  labelPlaceholder={statenumber?"number":"Digite um telefone valido"} onChange={(event)=>setnumber(event.target.value)}/>
                                      
                                    </Grid>
                                    <Grid xs={12}>
                                    <Textarea
                                      status={stateMensage?"default":"error" } labelPlaceholder={stateName?"Digite sua mensagem":"O campo não pode estar vazio"} value={mensage}  minRows={5} width="100%"
                                         onChange={(event)=>setMensage(event.target.value)}
                                      />
                                    </Grid>
                                    <Grid xs={12}>
                                      <Button disabled={load} onPress={()=>HandleConsult()} color={"secondary"}>
                                        {load?
                                        <Loading type="points"  color={"secondary"}></Loading>
                                      :"Enviar para Consultoria"}
                                        
                                        
                                      </Button>
                                    
                                    </Grid>
                                    <Grid>

                                      <Text color= {infoApi.status===true? "secondary":"error"} b>{infoApi.mensage} </Text>
                                    </Grid>
                      
                    </Grid.Container>
              </Grid>
      </Grid.Container>

      </Container>
    </>
  )
}