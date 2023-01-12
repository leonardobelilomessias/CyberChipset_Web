
import {  Hero } from "./Hero";
import { InfoAbouteSites } from "./InfoAboutSites";
import { Comments } from "./Comments";
import { Price } from "./Price";
import { QuestionAnswers } from "./QuentionsAnswers";
import { FeatureBusiness } from "./FeaturesBusiness";
import { SolutionCustumer } from "./SolutionCustumer";


export  function Home(){

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