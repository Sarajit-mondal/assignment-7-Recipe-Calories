

const RecipeCard = () => {
    return (
        <div className="w-full md:w-2/5 ">
          <div>
          <h3 className=" mx-auto max-w-[350px] border-b-2 pb-5 text-center">Want to cook: 01</h3>
          {/* <table className=" w-full table-auto mt-5">
            <tr>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
                
            </tr>
            <tbody className="my-5">
            <tr>
                <td className="flex items-center"><span className="mr-4">1</span> Chicken Caesar Salad</td>
                <td>20 minutes</td>
                <td>400 calories</td>
                <td><button class=" bg-green-500 rounded-full py-1 px-3 cursor-pointer active:scale-105 text-black hover:bg-green-400">Preparing</button></td>
            </tr>
            </tbody>
            
            
          </table> */}
         </div> 

         {/* cooking part  */}
          <div className="mt-10">
          <h3 className=" mx-auto max-w-[350px] border-b-2 pb-5 text-center">Currently cooking: 02</h3>
          {/* <table className=" table-auto mt-5">
            <tr>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                
            </tr>
            <tbody className="my-5">
            <tr>
                <td className="flex items-center"><span className="mr-4">1</span> Chicken Caesar</td>
                <td>20 minutes</td>
                <td>400 calories</td>
                </tr>
            <tr>
                <td></td>
                <td>Total Time = 20 minutes</td>
                <td>Total Calories = 900 Calories</td>
            </tr>
            </tbody>
            
            
          </table> */}
         </div>  
         
        

        </div>
    );
};

export default RecipeCard;