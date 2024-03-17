import { useState } from "react";


const RecipeCard = ({wantCook,handleDelete}) => {
    const [cooking,setCooking] = useState([])
    
     let totalTimes = 0;
     let totalCalories = 0;

    const handalCooking = (cook)=>{
        const cooked = [cook,...cooking]
        setCooking(cooked)
       handleDelete(cook.recipe_id)
    }
  
    //  total time
    if(cooking.length > 0){
         cooking.forEach(item =>{
        const time =parseInt(item.preparing_time.replace('min',''));
        const calorie =parseInt(item.calories.replace('calories',''));

        totalTimes += time;
        totalCalories += calorie;
        
    })
    
    }
   
        
        
    
   
     
   
    
    
    return (
        <div className="w-full md:w-2/5 ">
          <div>
          <h3 className=" mx-auto max-w-[350px] border-b-2 pb-5 text-center">Want to cook: {wantCook.length}</h3>
          <table className=" w-full table-auto mt-5">
            <thead className="text-left my-5">
                <tr>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
                </tr>  
            </thead>
            <tbody className="my-5">
             {
                wantCook.length >0 && wantCook.map((cook,inx) =><tr key={inx}  className="bg-[#2828281A]">
                <td className="flex items-center font-bold"><span className="mr-4">{inx +1}</span> {cook.recipe_name}</td>
                <td>{cook.preparing_time}</td>
                <td>{cook.calories}</td>
                <td><button onClick={()=>handalCooking(cook)} className=" bg-green-500 rounded-full py-1 px-3 cursor-pointer active:scale-105 text-black hover:bg-green-400">Preparing</button></td>
            </tr>)
             }   
            
           
        
            </tbody>
            
            
          </table>
         </div> 

         {/* cooking part  */}
          <div className="mt-16">
          <h3 className=" mx-auto max-w-[350px] border-b-2 pb-5 text-center">Currently cooking: {cooking.length}</h3>

           {
                    cooking.length > 0 && <table className=" w-full table-auto mt-5">
            <thead className="text-left my-5">
                <tr>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
                </tr>  
            </thead>
            <tbody className="my-5">
             {/* cooking    */}
             {
                cooking.length > 0 && cooking.map((co,inx) =><tr key={inx}  className="bg-[#2828281A] py-5">
                <td className="flex items-center font-bold"><span className="mr-4">{inx +1}</span> {co.recipe_name}</td>
                <td>{co.preparing_time}</td>
                <td>{co.calories}</td>
            </tr>)
             }
            
                {/* calculation */}
                <tr  className="bg-[#28282824] py-5">
                <td></td>
                <td className="font-extrabold">Total Time = {totalTimes} minutes</td>
                <td className="font-extrabold">Total Calories = {totalCalories} Calories</td>
            </tr>
                
            
            </tbody>
            
            
          </table>

           }        
          
         </div>  
         
        

        </div>
    );
};

export default RecipeCard;