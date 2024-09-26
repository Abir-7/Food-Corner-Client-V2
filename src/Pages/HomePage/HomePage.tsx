import Banner from "./component/Banner";
import NewsLetter from "./component/NewsLetter";
import OurDishes from "./component/OurDishes";
import OurServices from "./component/OurServices";
import { Testimonials } from "./component/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <OurDishes></OurDishes>
      <OurServices></OurServices>
      <NewsLetter></NewsLetter>
      <Testimonials></Testimonials>
    </div>
  );
};

export default HomePage;
