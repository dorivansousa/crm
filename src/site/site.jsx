import React from 'react';
import Menu from './Components/menu.jsx'
import Banner from './Components/Banner.jsx'
import Features from './Components/Features.jsx'
import Testemunial from './Components/Testemunial.jsx'
import Price from './Components/Price.jsx'
import Footer from './Components/Footer.jsx';

function Site(){
    return <div>
        <Menu/>
        <Banner/>
        <Features />
        <Testemunial />
        <Price/>
        <Footer />
    </div>
}

export default Site;