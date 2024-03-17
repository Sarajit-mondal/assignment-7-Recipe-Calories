import { useEffect, useState } from "react"
import Recipe from "./Recipe"
import RecipeCard from "./RecipeCard"
import OurRecipesTitle from "./OurRecipesTitle";



const Recipes = () => {
   
    const [recipes,setRecipes] = useState([])
    const [wantCook,setWantCook] = useState([])

    useEffect(()=>{
    fetch("recipes.json")
    .then(res => res.json())
    .then(data => setRecipes(data))
    },[])

    // want to cook
    const handleWantToCook =(recipe,toast)=>{
      const isAdded =  wantCook.find(rec => rec.recipe_id === recipe.recipe_id)
      if(!isAdded){
        const newRecipe = [recipe,...wantCook]
        setWantCook(newRecipe)
      }else{
       toast.error("This Item Already Add",{
       position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",

       })
      
      }
    }

    const handleDelete =(id) =>{
      const newwantToCook = wantCook.filter(newCook => newCook.recipe_id !== id);

      setWantCook(newwantToCook)

    }
    return(
        <>
      
        <OurRecipesTitle></OurRecipesTitle>
       
        
        <div className=" my-10 flex flex-col gap-10 md:flex-row justify-between">
         <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-5  ">
         {
           recipes.map((recipe,inx) =>  <Recipe key={inx} recipe ={recipe} handleWantToCook={handleWantToCook}></Recipe>)
         }
        
         </div>
         <RecipeCard wantCook={wantCook} handleDelete={handleDelete}></RecipeCard>
         </div>
        </>
    );
};

export default Recipes;