import Banner from "./Banner";
import NavBar from "./NavBar";
import Recipes from "./Recipes";




const MainComponents = () => {
    return (
        <>
        {/* navbar */}
        <header>
            <NavBar></NavBar>
            <Banner></Banner>
        </header>

          {/* main section */}
        <main>
         <Recipes></Recipes>
        </main>
        </>
    );
};

export default MainComponents;