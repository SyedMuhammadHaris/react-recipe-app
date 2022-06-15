import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom';
const Veggies = () =>{
    const [veggies, setVeggies] = useState([]);
    useEffect(() => {
        getVeggies();
    }, []);

    const getVeggies = () => {
        // const check = localStorage.getItem('veggies');
        // if(check){
        //     setVeggies(JSON.parse(check));
        // }

            fetch(`https://api.spoonacular.com/recipes/random?&apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                // localStorage.setItem("veggies",JSON.stringify(data.recipes));
                console.log(data.recipes);
                setVeggies(data.recipes);
            })
            .catch(err => {
                console.log(err);
            })  
        
        

    }
    return (
        <Wrapper>
            <h3>Vegeitable Recipes</h3>
            <Splide options={{
               perPage: 3,
               arrows:false,
               pagination: false,
               drag: "free",
               gap: "5rem"
            }}>
                {
                    veggies.map((recipe) => {
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
    text-align:center;
// background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)); 
background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgb(28 27 27 / 24%) 0%);
color:white;
`;


export default Veggies;