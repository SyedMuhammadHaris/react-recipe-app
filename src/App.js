import { BrowserRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import Catogaries from './components/Catogaries';
import Search from './components/Search';
import Pages from './pages/Pages';
import  {GiKnifeFork} from  'react-icons/gi';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    alert("Website is not mobile responsive");
  },[]);
  return (
    <div>
 
      <BrowserRouter>

      <Nav>
        <GiKnifeFork />
        <Logo   to={"/"}>delicious</Logo>
      </Nav>
      <Search />
      <Catogaries />

      <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration:none;
  font-size:1.5rem;
  font:weight: 400;
  font-family:'Lobster Two', cursive; 
`;

const Nav = styled.div`
padding: 4rem 0rem;
display:flex;
justify-content:flex-start;
align-items: center;
svg{
  font-size: 2rem;
}
`;
 
export default App;
