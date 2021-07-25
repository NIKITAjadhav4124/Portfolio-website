import Body from 'components/body';
import Footer from 'components/footer';
import Header from 'components/header';
import React from 'react';
import "./home.css";




function Home() {

    return (
        <div className="home">
            <div>
                <Header />
            </div>
            <div>
                <Body />
            </div>
            <div>
                <Footer />
            </div>
            
        </div>
    )
}

export default Home

