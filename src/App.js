import React from 'react';
import Accodomation from './Component/MainSection/AccodomationSection';
import CustomerReviews from './Component/MainSection/CustomerReviews';
import Footer from './Component/MainSection/Footer';
import FromBlog from './Component/MainSection/FromBlog';
import GardenSection from './Component/MainSection/GardenSection';
import PhotoSection from './Component/MainSection/PhotoSection';
import WelcomeSection from './Component/MainSection/WelcomeSection';
import Navbar from './Component/Navbar/Navbar';

const App = () => {
  return <>

        <Navbar/>
        <WelcomeSection/>
        <Accodomation/>
        <GardenSection/>
        <PhotoSection/>
        <CustomerReviews/>
        <FromBlog/>
        <Footer/>


  </>;
};

export default App;
