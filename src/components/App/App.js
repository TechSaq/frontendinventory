import React from 'react';
import './App.css';
import Card from '../Card';
import Navbar from '../Navbar';
import data from '../data/apireturn.json'

let jsonpath = require('jsonpath');



function App() {

    const categories = data[1]['categories'];
    const subCategories = data[2]['sub-categories'];

    const category = "Category";
    const subCategory = "Sub Category";

    function getRowHtml(params) {
        const row = jsonpath.query(data, `$[0].cards..${params}`)[0]
        let html=""
        
        return (
            row.map((item, index) => {
                html = 
                    <Card details={item}></Card>
                return html
                
            })
        )
    }

    function getSubHtml(params) {
        
        const subKeys = Object.keys(jsonpath.query(data, `$[0].cards.${params}`)[0])

        
        return (
            subKeys.map((item, index) => {
                return (
                    <>
                        <div className="sub-category" key={index}>
                            {item}
                        </div>
                        <div className="row">
                            {getRowHtml(item)}
                        </div>
                        
                    </>
                )
            })
        )
    }

    function makeHtml(params) {
        const result = categories.map((item, index) => {
            const html = <>
                <div className="main-category" key={index}>
                    {item}
                </div>
                {getSubHtml(item)}
            </>
            return html
        })
        return result
    }


    return (
        <div className="App">
            <Navbar
                categories={categories}
                sub-categories={subCategories}
            >
            </Navbar>
            <div>
                {makeHtml()}
                {/*
                    <div className="main-category">
                        {category}
                    </div>
                    <div className="sub-category">
                        {subCategory}
                    </div>
                    <div className="row">
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </div> 
                */}

            </div>
        </div>
    );
}

export default App;