// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {query as q } from 'faunadb'
import { fauna } from './fauna'

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  const {name,email,number,mensage} = req.body
try{
  
  await fauna.query(
     q.Create(
       q.Collection("consults"),{data:{name,email,number,mensage}}
     )
   )
    
   res.status(200).json({ mensage:"cadastrado com sucesso",status:true })
}  catch(e){
  console.log(e)
}

}
