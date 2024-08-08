import {
  AboutUs,
  Button,
  Collections,
  Container,
  FAQ,
  FeaturedArtworks,
  Footer,
  Hero,
  Navbar,
  Tickets,
  Sponsor,
  TopCreator,
  Contact,
} from '@/components';
import React from 'react';
import { Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter } from '@/keyframes';
const Home = () => {
  return (
    <div className='h-full main_bg text-white overflow-hidden' id='top'>
      <Navbar />
      <Hero />
      <Tickets/>
      <AboutUs />
      <Collections />
      <h1 className='font-bold text-3xl text-center mb-8'>Холбоо барих</h1>

 <Contact/>
 <h1 className='font-bold text-3xl text-center mb-8 mt-40'>Хамтрагч байгуулгууд</h1>
<Sponsor/>
      <Footer />
    </div>
  );
};

export default Home;
