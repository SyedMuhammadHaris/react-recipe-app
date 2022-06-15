import {motion} from "framer-motion";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Cusine = () => {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const getCuisine = (name) => {

    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${name}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCuisine(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);
  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {
        cuisine.map((recipe) => {
          return (
            <Card key={recipe.id}>
              <Link to={"/recipe/" + recipe.id}>
                <img src={recipe.image} alt={recipe.title} />
                <h4>{recipe.title}</h4>
              </Link>
            </Card>
          )
        })
      }
    </Grid>
  )
}

const Grid = styled(motion.div)`
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
export default Cusine;