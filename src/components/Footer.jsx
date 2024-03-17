import { FaFacebook,FaTwitter,FaLinkedin,FaGithub,FaYoutube} from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" text-center p-16 bg-black">
           <h2> Recipes Calories</h2> 
           <h3>Follow Us</h3>
           <div>
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