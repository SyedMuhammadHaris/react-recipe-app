import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Recipe = () => {
  const [details, setDetails] = useState({});
  let params = useParams();
  const [activeTab, setActiveTab] = useState("instructions");


  const getDetailRecipe = () => {
    fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDetails(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      })
  }

  useEffect(() => {
    getDetailRecipe();
  }, [params.name]);

  // let detailsString = details.instructions;
  // let strippedString = detailsString.replace(/(<([^>]+)>)/gi, "");
  // console.log(strippedString);
  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} className={activeTab === "ingridients" ? "image" : ""} alt="" />
      </div>
      <Info>
        <div style={{display:'flex'}}>
        <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>Instructions</Button>
        <Button className={activeTab === "ingridients" ? "active" : ""} onClick={() => setActiveTab("ingridients")}>Ingredients</Button>
        </div>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {
          activeTab === "ingridients" && (
            <ul>
            {
              details.extendedIngredients.map((ingridient) => {
                return <li key={ingridient.id} style={{listStyleType:"number",fontSize:"1.2rem"}}>
                  {ingridient.original}
                </li>
              })
            }
          </ul>    
          )
        }

        
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`

  margin-top: 10rem;
  margin-bottom: 5rem;
  display:flex;
img{
  width:100%;
}
.active{
  background: linear-gradient(35deg, #494949, #313131);
  color:white;
 
}
// .active1{
//   background: linear-gradient(35deg, #494949, #313131);
//   color:white;
//   float:right;
//   margin-top: -3.2rem;
// }
.image{
  width: 70%;
}

h2{
  margin-bottom: 2rem;
}
li{
    font-size: 0.8rem;
    line-height: 1.5rem;
}
ul{
  margin-top: 2rem;;
}

`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background-color: white;
  margin-right:2rem;
  border: 2px solid black;
  font-weight: 600;
  `;

const Info = styled.div`
  margin-left:7rem;
  // display: flex;
  //   align-items: center;

  h3{
    font-size: 0.8rem;
  }
 
  `;

export default Recipe;


