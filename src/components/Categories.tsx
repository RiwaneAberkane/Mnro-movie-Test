import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CategoryType } from '../models/CategoryType';
import "./Categories.css";


type CategoriesProps= {
    title: string,
};

export const Categories = ({title}: CategoriesProps) => {
    const [gerne, setgerne] = useState([]);
        useEffect(()=> {
            axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=a53249c1f434a6defe03d88903ea45ac&language=en-US").then(response => {
                setgerne(response.data.genres);
                console.log(`respone`, response.data.genres);
            }).catch(error => console.log(error));
        },[])
        
    return (
      <div className='movies'>
            <h1>{title}</h1>
          <div className='categorie'>
            {gerne.map((item:CategoryType) => (
                <div className='genre'>
                    <div key={item.id}>
                    <p>{item.name}</p>
                </div>
                </div>
                
            ) )}
        </div>
      </div>
    )
}

export default Categories;

