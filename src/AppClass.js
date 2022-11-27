import React, { Component } from 'react';
import './App.css';
import BoxClass from './component/BoxClass';

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


export default class AppClass extends Component {
    constructor(props) {
        super(props)
            this.state = {
                name: ["YOU", "COMPUTER"],
                userSelect: null,
                computerSelect: null,
                gameResult: "",
                computerResult: ""
            }
        }

  render() {
    const play = (userChoice) => {
        this.setState({userSelect: choice[userChoice]});
        let computerChoice = random();
        this.setState({computerSelect: computerChoice});
        this.setState({gameResult: judgement(choice[userChoice], computerChoice)});
        this.setState({computerResult : computerJudgement(choice[userChoice], computerChoice)});
    }

   const random = () => {
    let itemArray = Object.keys(choice);
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
        <BoxClass name={this.state.name[0]} item={this.state.userSelect} result={this.state.gameResult}/>
        <BoxClass name={this.state.name[1]} item={this.state.computerSelect} result={this.state.computerResult}/>
      </div>
      <div className="main">
        <button onClick={ () => play("scissors")}>가위</button>
        <button onClick={ () => play("rock")}>바위</button>
        <button onClick={ () => play("paper")}>보</button>
      </div>
      </div>
    )
  }
}
