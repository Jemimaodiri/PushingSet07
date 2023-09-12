import React, { useState } from 'react';
import './App.css';
import styled from "styled-components"
function App() {
  const [counter, setcounter]=useState(0);

    const Increase=()=>{
     if (counter <20){
      setcounter(counter +1)
     }
    }

    const Decrease=()=>{
     if (counter > 0){
      setcounter(counter - 1)
     }
    }

  return (
    <div >
    <Container>
    <Wrapper> 
      <Card>
      <Circle>{counter}</Circle>
      <BoxHolder>
      <Box1  onClick={Increase}>Adding +</Box1>
      <Box1 onClick={Decrease}>Reduce -</Box1>
      </BoxHolder>
      </Card>
     
    
    </Wrapper>
    </Container>
    </div>
  );
}

export default App;
const Container=styled.div`
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      background-color: purple;

`;

const Wrapper=styled.div`
      background-color: #fff;
      width:500px;
      color: #fff;
      height: 600px;
      display:flex;
      justify-content:center;
      align-items:center; 

`;
const Card=styled.div`
      padding:5% ;
      height:430px ;
      width: 450px;
      /* background-color: #8787ec; */

`;

const Circle=styled.div`
      background-color: skyblue;
      width: 300px;
      height: 300px;
      margin-left: 10%;
      border-radius: 50%;
      display:flex;
      justify-content:center;
      align-items:center;
      font-size: 30px;
      font-weight: 500;

`;

const BoxHolder=styled.div`
      height: 100px;
      width: 90%;
      /* background-color: #538000; */
      display: flex;
      justify-content: space-between;
`;

const Box1=styled.div`
      height: 70px;
      width: 110px;
      cursor: pointer;
      border-radius: 4px;
      display: flex;
      align-items: center;
      font-size: larger;
      font-weight: 500;
      justify-content: center;
      background-color: purple;
`;


