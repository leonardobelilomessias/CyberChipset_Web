import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../utils/stripe";
export default async function handler(req:NextApiRequest,res:NextApiResponse){
  const {priceId} = req.body
  const checkoutSession = await stripe.checkout.sessions.create({
   
    success_url:`${process.env.URL_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url:`${process.env.URL_DOMAIN}/cancel`,
    mode:"payment",
    phone_number_collection:{
      enabled:true
    },
    line_items:[
      {
        price:priceId,
        quantity:1,
      }
    ]
  })
  return res.status(201).json({
    checkoutUrl:checkoutSession.url})
}