import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


// This function stores our state.

const storeState = (inputState) => {
  let currentState = inputState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

// const changePlant = (prop) => {
//   return (value) => {
//     return (plant) => ({
//       ...plant,
//       [prop]: value
//     })
//   }
// }





// console.log(userCharacter())


///roll 1

// const minimalDamage = takeDamage(Attacker.Attack - Victims.Defence)

function rollDice(max) {
  return 1 + Math.floor(Math.random() * max)
}
// const rollDice8 = () => rollDice(8)


const rollTheDice = () => {
  switch (rollDice(8)) {
    case 1:
      console.log("1")
// const dragonAttack = changeState('hitpoints')(-10)

// userCharacter(dragonAttack)
      break;
    case 2:
      console.log("2")
      break;
    case 3:
      console.log("3")
      break;
    case 4:
      console.log("4")
      break;
    case 5:
      console.log("5")
      break;
    case 6:
      console.log("6")
      break;
    case 7:
      console.log("7")
      break;
    case 8:
      console.log("8")
      break;
    default:
    // code block
  }
}

$(document).ready(function () {

  // const currentState = stateControl();
  // $('#plant-names').text(`Name: ${currentState.plant}`);
  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.
  // let userName = $('.character-dropdown').val();
  // console.log(userName)
  var changedText;
  function listQ() {
    changedText = this.value;
  }
  document.getElementsByClassName("character-dropdown").onchange = listQ;

  let userObject;

  if (changedText === "Wizard") {
    userObject = { hitpoints: 100, attack: 25, defense: 50, intelligence: 100 }
  }
  // const intialRougeValues = { hitpoints: 150, attack: 50, defense: 75, intelligence: 50 }

  const userCharacter = storeState(userObject)
  // const currentState = userCharacter()

  $('#rollDice').click(function () {
    rollTheDice();
    console.log(changedText)
    console.log(userCharacter())
    console.log(userObject)
  });


});