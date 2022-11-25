import './App.css';
import { useState } from "react";
import Box from './component/Box';

//1. 박스 2개(타이틀, 사진정보, 결과값)
//2. 가위바위보 버튼이 있음.
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임.
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
//5. 3, 4의 결과를 가지고 누가 이겼는지 승패를 따짐.
//6. 승패 결과에 따라 테두리 색이 바뀜. (이기면 초록, 지면 빨강, 비기면 검정)

const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg"
  },
  scissors: {
    name: "Scissors",
    img: "https://imageengine.victorinox.com/mediahub/31970/640Wx560H/CUT_8_0904_10__S1.jpg"
  },
  paper: {
    name: "Paper",
    img: "https://mblogthumb-phinf.pstatic.net/MjAxODA2MThfMTM3/MDAxNTI5MzMyNDE1MDkz.qf2xpioWiMO6A6wFtBhWgfEV7C7rsLv7zaVIEGLlwoog.gzCQroiii_BecftKsy0YsAzb3cMyYemt0Z5_et0BSWQg.JPEG.kidarinusu/eb32b10b28f5043ecd0b4107e7494392e36ae3d01bb8124297f3c97f_1280.jpg?type=w800"
  }
}

function App() {
  const [userSelect, setuserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [gameResult, setGameResult] = useState("");
  const [computerResult, setComputerResult] = useState("");

  const play =  (userChoice) => {
    console.log("choice:", userChoice);
    setuserSelect(choice[userChoice]);
    let computerChoice = random();
    setComputerSelect(computerChoice);

    setGameResult(judgement(choice[userChoice], computerChoice));
    setComputerResult(computerJudgement(choice[userChoice], computerChoice));
  }

  const random = () => {
     let itemArray = Object.keys(choice); //객체의 키값만 뽑아서 배열로 만들어줌.
     let randomItem = Math.floor(Math.random()*itemArray.length);
     let final = itemArray[randomItem];
     return choice[final];
  }

  const judgement = (user, computer) => {
    
    if(user == computer){
      return "TIE";
    } else if(user.name == "Rock"){
      if(computer.name == "Scissors")
          return "WIN"
      else return "LOSE";
    } else if(user.name == "Paper"){
      if(computer.name == "Rock")
          return "WIN"
      else return "LOSE";
    } else if(user.name == "Scissors"){
      if(computer.name == "Paper")
          return "WIN"
      else return "LOSE";
    }
  }

  const computerJudgement = (user, computer) => {
    
    if(user == computer){
      return "TIE";
    } else if(computer.name == "Rock"){
      if(user.name == "Scissors")
          return "WIN"
      else return "LOSE";
    } else if(computer.name == "Paper"){
      if(user.name == "Rock")
          return "WIN"
      else return "LOSE";
    } else if(computer.name == "Scissors"){
      if(user.name == "Paper")
          return "WIN"
      else return "LOSE";
    }
  }

  return (
    <div>
      <div className="main">
        <Box name={"YOU"} item={userSelect} result={gameResult}/>
        <Box name={"COMPUTER"} item={computerSelect} result={computerResult}/>
      </div>
      <div className="main">
        <button onClick={ () => play("scissors")}>가위</button>
        <button onClick={ () => play("rock")}>바위</button>
        <button onClick={ () => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
