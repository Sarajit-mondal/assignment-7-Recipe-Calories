import Banner from "./Banner";
import Footer from "./Footer";
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
        <footer>
          <Footer></Footer>
        </footer>
        </>
    );
};

export default MainComponents;