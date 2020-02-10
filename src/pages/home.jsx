import React from "react";
import Slider from "../components/slider";
import BelowSLider from "../components/belowSlider";
import Started from "../components/getStarted";
import FooterPage from "../components/footer";

import HomeData from "./../components/homeData";
import HomeData1 from "./../components/homeData1";

const Home = ({user,provider}) => {
  return (
    <React.Fragment>
     {(user==null && provider==null) && <Slider />
}
      <BelowSLider/>
      <HomeData></HomeData>
      <HomeData1></HomeData1>
      {(user==null && provider==null) &&  ( <Started></Started>)}
    </React.Fragment>
  );
};

export default Home;
