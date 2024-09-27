import Banner from "./component/Banner";
import NewsLetter from "./component/NewsLetter";
import OurDishes from "./component/OurDishes";
import OurServices from "./component/OurServices";
import { Testimonials } from "./component/Testimonials";
import { TopRatedItem } from "./component/TopRatedItem";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <OurDishes></OurDishes>
      <OurServices></OurServices>
      <TopRatedItem></TopRatedItem>
      <NewsLetter></NewsLetter>

      <Testimonials></Testimonials>
    </div>
  );
};

export default HomePage;
