import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
const SearchPage = () => {
   const[searchedRecipe , setSearchedRecipe] = useState([]);
   let params = useParams();
   const getSearch = (name) => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${name}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setSearchedRecipe(data.results);
    })
    .catch((err) => {
      console.log(err.message);
    });
   };
   useEffect(()=>{
    getSearch(params.search);
   },[params.search]);

  return (
    <Grid>
        {
            searchedRecipe.map((item)=>{
               return( 
                <Card key={item.id}>
                  <Link to={"/recipe/" + item.id}>
                      <img src={item.image} alt={item.title}/>
                      <h4>{item.title}</h4>
                      </Link>
                </Card>
            );
        })
        }
    </Grid>
  )
}

const Grid = styled.div`
display : grid;
grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
grid-gap : 3rem;
`;

const Card = styled.div`
     img{
      border-radius: 2rem;
      width:100%;
  
     }

     a{
       text-deoration: none;
     }

     h4{
       text-align: center;
       padding: 1rem;
     }


`;

export default SearchPage;