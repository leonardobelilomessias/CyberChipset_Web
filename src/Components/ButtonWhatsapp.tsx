
import { StyledAvatar,Avatar } from "@nextui-org/react"
import Link from "next/link"
export function ButtonWhatsapp(){
  return(
    <>
    <Link href={"http://wa.me/5531986261771?text=Olá tudo bem? vim  do site CyberChipset.com e gostaria de ter mais informaçoes sobre os serviços."}>
      <Avatar zoomed  css={{position:"fixed", bottom:"$2xl", right:"$2xl", p:8,boxShadow:"$xl"}} src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" size={"xl"}>
        oi
      </Avatar>
    </Link>
    </>
  )
}