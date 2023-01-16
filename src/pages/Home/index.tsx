import { Comments } from "../../Components/Home/Comments";
import { ConsultHome } from "../../Components/Home/ConsultHome";
import { FeatureBusiness } from "../../Components/Home/FeaturesBusiness";
import { Hero } from "../../Components/Home/Hero";
import { InfoAbouteSites } from "../../Components/Home/InfoAboutSites";
import { MobileProduct } from "../../Components/Home/MobileProduct";
import { PricesHome } from "../../Components/Home/PricesHome";
import { Process } from "../../Components/Home/Process";
import { QuestionAnswers } from "../../Components/Home/QuentionsAnswers";
import { SolutionCustumer } from "../../Components/Home/SolutionCustumer";





export default function Home(){
  

  return(
    <>
      <Hero/>
      <Process/>
      <ConsultHome/>
      
{   <FeatureBusiness/>
    }
    <SolutionCustumer/>
    <InfoAbouteSites/>
    <PricesHome/>
    <MobileProduct/>
    <Comments/>
      <QuestionAnswers/>
    </>
  )
}