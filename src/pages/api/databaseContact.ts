// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {query as q } from 'faunadb'
import { fauna } from './fauna'

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  const {name,email,mensage} = req.body
try{
  
  await fauna.query(
     q.Create(
       q.Collection("contact"),{data:{name,email,mensage}}
     )
   )
    
   res.status(200).json({ mensage:"Enviado com sucesso",status:true })
}  catch(e){
  console.log(e)
}

}
