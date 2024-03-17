
import { CiClock2 } from "react-icons/ci";
 import { AiOutlineFire } from "react-icons/ai";
  import { Slide, ToastContainer, toast } from 'react-toastify';
   import 'react-toastify/dist/ReactToastify.css';


const Recipe = ({recipe,handleWantToCook}) => {
   const {recipe_name,short_description,preparing_time,calories,recipe_image,ingredients} = recipe;

    return (
         <div>
            {/* card one */}
            <div className="card card-compact w-full border-2 shadow-xl p-5 min-h-[650px]  border-green-100">
                <figure><img src={recipe_image} className="w-full h-[250px] md:h-[200px] rounded-2xl" alt="Shoes" /></figure>
                <div className=" mt-5 space-y-2">
                    <div className="md:min-h-28">
                        <h3>{recipe_name}</h3>
                      <p>{short_description}</p>
                    </div>
                    
                    <div className="py-3">
                    <hr  className=" h-[2px] bg-purple-200   "/>
                    </div>
                    
                     <ul className="list-disc [&>li]:ml-6 space-y-2">
                        <h3>Ingredients: 6</h3>
                        <li>{ingredients[0]}</li>
                        <li>{ingredients[1]}</li>
                        <li>{ingredients[2]}</li>
                     </ul>
                     <div className="flex items-center gap-x-5">
                        <span className="flex items-center   py-2"><CiClock2 className="mr-1"></CiClock2>{preparing_time}</span>   
                        <span className="flex items-center "><AiOutlineFire className="mr-3"></AiOutlineFire> {calories}</span>   
                     </div>
                    <div>
                    <button onClick={()=>handleWantToCook(recipe,toast)} className=" bg-green-500 rounded-full py-2 px-6 cursor-pointer active:scale-105 text-black hover:bg-green-400">Want to Cook</button>
                    <ToastContainer 
                    autoClose ={2000}
                    transition={Slide}
                    ></ToastContainer>
                    </div>
                </div>
            </div>
            {/* card one */}
            
        </div>
    );
};

export default Recipe;