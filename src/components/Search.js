import styled from 'styled-components';
import { useState } from 'react';
import {FaSearch}  from 'react-icons/fa';
import {useNavigate}from 'react-router-dom';
const Search = () => {
  const [input,setInput] = useState('');
 const navigate = useNavigate();
  const submitHandler = (e) =>{
    e.preventDefault();
    navigate("/searched/:" + input);
  };
  return (
     <FormStyle onSubmit={submitHandler}>
       <div>
         <FaSearch></FaSearch>
       <input 
       type="text" 
       onChange={(e)=> setInput(e.target.value)}
       value={input}
       />
     
       </div>
     </FormStyle>
    )
}

const FormStyle  = styled.form`
         margin: 0rem 11rem;
         
           div{
            position: relative;
            width:100%;    
           }
         input{
           border: none;
           background: linear-gradient(35deg, #494949, #313131);
           font-size: 1rem;
           color:white;
           padding: 1rem 7rem;
           border-radius: 1rem;
           text-align:left;
          }
          svg{
            position: absolute;
            top:50%;
            
            transform: translate(100%, -50%);
            color:white

          }
           
`;
export default Search;