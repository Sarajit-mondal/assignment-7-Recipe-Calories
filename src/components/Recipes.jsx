import { useEffect, useState } from "react"
import Recipe from "./Recipe"
import RecipeCard from "./RecipeCard"

const Recipes = () => {
   
    const [recipes,setRecipes] = useState([])

    useEffect(()=>{
    fetch("recipes.json")
    .then(res => res.json())
    .then(data => setRecipes(data))
    },[])
    return(
        <>
        <div className=" my-10 flex flex-col gap-10 md:flex-row justify-between">
         <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-5">
         {
           recipes.map(recipe =>  <Recipe></Recipe>)
         }
        
         </div>
         <RecipeCard></RecipeCard>
         </div>
        </>
    );
};

export default Recipes;