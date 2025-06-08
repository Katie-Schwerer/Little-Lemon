import  React from 'react';
import Main from './Components/Main';
import Header from './Components/Header';
import Testimony from './Components/Testimony';
import About from './Components/About';
import Footer from './Components/Footer';

function HomePage() {
    return  (
        <div>
            <Main></Main>
            <Header></Header>
            <Testimony></Testimony>
            <About></About>
            <Footer></Footer>
        </div>
    );
}

export default HomePage;