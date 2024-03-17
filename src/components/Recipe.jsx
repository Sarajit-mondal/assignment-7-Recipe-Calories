
import { CiClock2 } from "react-icons/ci";
 import { AiOutlineFire } from "react-icons/ai";
const Recipe = () => {
    return (
         <div>
            {/* card one */}
            <div className="card card-compact w-full border-2 shadow-xl p-5 ">
                <figure><img src="https://i.imghippo.com/files/Zz44a1710595424.png" className="w-full" alt="Shoes" /></figure>
                <div className=" p-2 mt-5 space-y-2">
                    <h3>Spaghetti Bolognese</h3>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <hr  className=" h-[2px] bg-purple-200  "/>
                     <ul className="list-disc [&>li]:ml-6 space-y-3">
                        <h3>Ingredients: 6</h3>
                        <li>500g ground beef</li>
                        <li>500g ground beef</li>
                        <li>500g ground beef</li>
                     </ul>
                     <div className="flex items-center gap-x-6">
                        <span className="flex items-center text-nowrap"><CiClock2 className="mr-3"></CiClock2> 30 minutes</span>   
                        <span className="flex items-center text-nowrap"><AiOutlineFire className="mr-3"></AiOutlineFire> 600 calories</span>   
                     </div>
                    <div>
                    <button className="btn bg-green-500 rounded-full px-6">Want to Cook</button>
                    </div>
                </div>
            </div>
            {/* card one */}
            
        </div>
    );
};

export default Recipe;