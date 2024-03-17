import { FaFacebook,FaTwitter,FaLinkedin,FaGithub,FaYoutube} from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" text-center p-16 bg-black space-y-5 text-white">
           <h2 className="text-green-400"> Recipes Calories</h2> 
           <h3 className="text-green-200">Follow Us</h3>
           <div className="flex items-center justify-center mx-auto space-x-4">
            <FaFacebook></FaFacebook>
            <FaTwitter></FaTwitter>
            <FaLinkedin></FaLinkedin>
            <FaGithub></FaGithub>
            <FaYoutube></FaYoutube>
           </div>
        </div>
    );
};

export default Footer;