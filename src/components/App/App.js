import React from 'react';
import './App.css';
import Card from '../Card';
import Navbar from '../Navbar';

import data from '../data/apireturn.json'

function App() {
    
    const categories = data[1]['categories']
    const subCategories = data[2]['sub-categories']

    console.log(subCategories);

    return (
        <div className="App">
            <Navbar categories={categories} sub-categories={subCategories}>
            </Navbar>
            <div>
                <div className="main-category">
                    Deployment
        </div>
                <div className="sub-category">
                    Launching
        </div>
                <div className="row">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </div>
    );
}

export default App;