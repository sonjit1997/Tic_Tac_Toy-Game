import React, {useState} from 'react';
import Icon from './elements/icon';
import {Card, CardBody, Container, Row, Col} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const itemArray = new Array(9).fill("empty",0,9);
function App() {

  const [isCross, setIsCross] = useState(false);
  const [winMessage,setWinMessage]=useState(" ");

  const reloadgame = () =>{
   setIsCross(false);
   setWinMessage("");
   itemArray.fill("empty",0,9);
  };

   const checkWinner = () => {
    if(
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[1] && 
      itemArray[0] === itemArray[2] 
     ) {
       setWinMessage(`${itemArray[0]} won`)
     }
     else if(
     itemArray[3] !== "empty" &&
     itemArray[3] === itemArray[4] && 
     itemArray[3] === itemArray[5] 
     )
     {
      setWinMessage(`${itemArray[3]} won`)
    }
    else if(
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] && 
      itemArray[6] === itemArray[8] 
      )
      {
       setWinMessage(`${itemArray[6]} won`)
     }
     else if(
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] && 
      itemArray[0] === itemArray[6] 
      )
      {
       setWinMessage(`${itemArray[0]} won`)
     }
     else if(
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] && 
      itemArray[1] === itemArray[7] 
      )
      {
       setWinMessage(`${itemArray[1]} won`)
     }
     else if(
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] && 
      itemArray[2] === itemArray[8] 
      )
      {
       setWinMessage(`${itemArray[2]} won`)
     }
     else if(
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] && 
      itemArray[0] === itemArray[8] 
      )
      {
       setWinMessage(`${itemArray[0]} won`)
     }
     else if(
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] && 
      itemArray[2] === itemArray[6] 
      )
      {
       setWinMessage(`${itemArray[2]} won`)
     }
   };

  const changeItem= itemNumber => {
    if(winMessage){
      return (winMessage,{type:"success"});
    }
    else if(itemArray[itemNumber]==="empty"){
      itemArray[itemNumber]=isCross?"CROSSCIRCLE" : "CHECKCIRCLE";
      setIsCross(!isCross);
    }
    
    checkWinner()
  }
  return (
    <Container className="p-5">
      <Row>
      <h1 className='text-info text-center'> LET'S PLAY TIC TAC TOY GAME</h1>
      <br/>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className='mb-2 mt-2'>
              <h1 className='text-danger text-uppercase text-center'>
                {winMessage}
              </h1>
            </div>
          ) : (

          <h2 className="text-primary text-center">
             {isCross ? "CROSSCIRCLE" : "CHECKCIRCLE"} TURNS :
          </h2>
          )}

          <div className="grid">
            {itemArray.map((item, index)=> (
              <Card color="success" onClick={()=>changeItem(index)}>
              <CardBody className="box">
              <Icon name={item} />
              </CardBody>
            </Card>
            ))}
      <br/>
      <button onClick={reloadgame} >Reset</button>          
          </div>
        </Col>
      </Row>

    </Container>
  );
}

export default App;