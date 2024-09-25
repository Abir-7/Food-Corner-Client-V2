import Banner from "../../components/homePage/Banner";
import NewsLetter from "../../components/homePage/NewsLetter";
import OurDishes from "../../components/homePage/OurDishes";
import OurServices from "../../components/homePage/OurServices";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <OurDishes></OurDishes>
      <OurServices></OurServices>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default HomePage;
