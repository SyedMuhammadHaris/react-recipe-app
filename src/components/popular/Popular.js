import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom';
const Popular = () => {
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = () => {
        // const check = localStorage.getItem('popular');
        // if(check){
        //     setPopular(JSON.parse(check));
        // }
        // else{
            fetch(`https://api.spoonacular.com/recipes/random?&apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                // localStorage.setItem("popular",JSON.stringify(data.recipes));
                console.log(data.recipes);
                setPopular(data.recipes);
            })
            .catch(err => {
                console.log(err);
            })  
        // }
        

    }
    return (
        <Wrapper>
            <h3>Popular Recipes</h3>
            <Splide options={{
               perPage: 3,
               arrows:false,
               pagination: false,
               drag: "free",
               gap: "5rem"
            }}>
                {
                    popular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link to={"/recipe/" + recipe.id}>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <p>{recipe.title}</p>
                                    </Link>
                                  </Card>
                            </SplideSlide>
                        );
                    })
                }
            </Splide>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 4rem 0rem; 
    
    `;
const Card = styled.div`
//   min-height: 25rem;
  border-radius: 2rem;
  overflow:hidden; 
  position: relative;
  text-align: center;
  color: white;

  img{
      position: relative;
     border-radius: 2rem;
    left:0;
    width:100%;
    height:100%;
   object-fit: cover;

  }
  p{
    
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size:0.9rem;
// background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)); 
background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgb(28 27 27 / 24%) 0%);
color:white;
`;
// const Gradient = styled.div`
//    z-index:3;
//    position:absolute;
//    width:100%;
//    height:100%; 
   
   

// `;
export default Popular;


























// const api = await fetch(
//     `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`
// );
// const data = await api.json();
// console.log(data.recipes);
// setPopular(data.recipes);

// // const error= "error occured";
// // console.log(error);