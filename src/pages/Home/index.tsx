import { Comments } from "../../Components/Home/Comments";
import { FeatureBusiness } from "../../Components/Home/FeaturesBusiness";
import { Hero } from "../../Components/Home/Hero";
import { InfoAbouteSites } from "../../Components/Home/InfoAboutSites";
import { QuestionAnswers } from "../../Components/Home/QuentionsAnswers";
import { SolutionCustumer } from "../../Components/Home/SolutionCustumer";
import Price from "../price";




export default function Home(){

  return(
    <>
      <Hero/>
{   <FeatureBusiness/>
    }
    <SolutionCustumer/>
    <InfoAbouteSites/>
    <Price/>
    <Comments/>
      <QuestionAnswers/>
    </>
  )
}