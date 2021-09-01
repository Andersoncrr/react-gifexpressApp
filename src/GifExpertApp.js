import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories,setCategories] = useState(['One Punch']);

    return (
        <>
           
           <div className="title">
                <img className="image" alt="gifs animados" src="https://c.tenor.com/ubd5D7SkT80AAAAd/gavurahmet-logo.gif"/>
                <h2>GifExpress</h2>
                
           </div>
           <AddCategory setCategories={ setCategories }/>
           <hr/>


           <ol>
               { 
                    categories.map(category => (
                        <GifGrid
                            key= { category }
                            category = { category }
                         />
                    ))
                    
               };
           </ol>
        </>
    );  
};
