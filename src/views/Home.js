import React from 'react';
import Introduction from './main/IntroductionView';
import GettingStarted from './main/GettingStartedView';
import Principles from "./main/PrinciplesView";
import Features from "./main/FeaturesView";
import { GetStartedBanner, ClientsBanner } from "./main/BannerView";
import Testimonials from "./main/TestimonialsView";

class Home extends React.Component {
  render() {
    return (
      <main className="w-100 bt b--black-10 bg-white">
        <section className="bg-black-0125 w-100">
          <Introduction/>
          <GettingStarted/>
          <Principles/>
          <Features/>
        </section>
        <GetStartedBanner/>
        <Testimonials/>
        <ClientsBanner/>
      </main>
    );
  }
}

export default Home;