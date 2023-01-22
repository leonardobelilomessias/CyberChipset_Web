import { Button, NavbarToggleProps, Row, styled } from "@nextui-org/react"
import {Navbar,Text,Link,Col,} from '@nextui-org/react'
import Logo from '../../../public/images/logo.png'
import Linker from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from "react";
import React from "react";
import { User } from "phosphor-react";
import Image from "next/image";


const BoxMenu =styled("div",{
  color:"black",
  alignContent:"center",
  justifyContent:"space-between",
  display:"flex",
  flex:1,
  mw:50,
  boxSizing:'content-box',
  h:"90%",
  alignItems:"center",
  pl:"$10",
  pr:"$10",
  borderBottom:"$neutralSolidContrast solid",
  
  variants:{
    isActive:{
      true:{
        borderBottom:"$secondary solid",
        fontWeight:"$bold"
      }
    }
  },
  "a":{

    color:"black",
    fontWeight:"$",
    fontSize:18,
    display:"flex",
    flex:"1",
    p:"$1"
  }
})
const BoxImage = styled("div",{

  width: "80%",
  height:"2.3rem",
  position:"relative",
  justifyContent:"center",
  alignItems:"center",
  alignContent:"center",


  "@md":{

    
  }


})

export function AppNavbar(){
  const pathname = usePathname();

  const collapseItems = [
    {title:"Pagina Inicial",link:"/"},
    {title:"Serviços",link:"/services"},
    {title:"Preços",link:"/price"},
    {title:"Login",link:"/login"},
    {title:"Contato",link:"/contact"},

  ];


  const [showMenu,setShowMenu] = useState(false)
  function handleMenu(){
    //   const ele = document.getElementsByClassName("nextui-c-gpbAMl-iPooNr-isExpanded-true")[0]
    // ele.classList.remove("nextui-c-gpbAMl-iPooNr-isExpanded-true")
    

    document.getElementsByTagName("body")[0].style.overflow = ''
    setTimeout(() => {
      setShowMenu(!showMenu)

    }, 100);
  }
  return(
    

    <Navbar  variant={"static"}  css={{ backgroundColor:"transparent",boxSizing:"border-box", width:"100vw"}} >
    <Navbar.Brand css={{  display:"flex",flex:1,boxSizing:"border-box","@sm":{ flex:0 }}} >
      <Navbar.Toggle  css={{mr:"25vw"}} isSelected={showMenu}  onClick={()=>setShowMenu(!showMenu)}   showIn={"xs"}/>
      <BoxImage>
        <Row align="center" css={{w:"8rem",h:"2.3rem",}}>
        <Image alt="logo" fill src={Logo.src}/>
        </Row>
      </BoxImage>
    </Navbar.Brand>
      <Navbar.Collapse  isOpen={!!showMenu}>
        {collapseItems.map((item) => (
          <Navbar.CollapseItem key={item.title}>
            <Linker 
              color="black"
                onClick={()=>handleMenu()}
              href={item.link}
            >
              <Text b >

              {item.title}
              </Text>
            </Linker>
          </Navbar.CollapseItem>
        ))}
        
      </Navbar.Collapse>

        <Navbar.Content css={{}} activeColor={"secondary"} hideIn="xs"  variant="underline">
          
              <BoxMenu isActive={pathname==="/"}>
              <Linker href={"/"}>
                Início
              </Linker>
                </BoxMenu>
                
              <BoxMenu isActive={pathname==="/services"} >
              <Linker href={"/services"}>
                Servicos
              </Linker>
              </BoxMenu>
              
              <BoxMenu isActive={pathname==="/price"}>
              <Linker href={"/#price"}>
                Preços
              </Linker>
              </BoxMenu>
              
              <BoxMenu isActive={pathname==="/contact"}>
              <Linker href={"/contact"}>
                Contato
              </Linker>

              </BoxMenu>

       
          <Linker href={"/login"}>
          <Row css={{ "@xl":{ml:80}}} align="center" wrap="wrap">
            <Row  css={{backgroundColor:"white", borderColor:"$secondary", borderWidth:"1px", borderStyle:"solid",p:8,borderRadius:"8px"}} justify="center" align="center">

          <Text color="secondary" hideIn={"lg"}  b css={{ lineHeight:0, alignItems:"center", alignContent:"center", justifyContent:"center",mr:5 }}>Área do Cliente</Text>
          <User size={20} color="#7828C8" />
            </Row>
          </Row>
          </Linker>  
          </Navbar.Content>
     

  
          
    </Navbar>

  )
}
