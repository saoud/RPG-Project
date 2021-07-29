import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


// This function stores our state.

const storeState = (inputState) => {
  let currentState = inputState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

const initialWizardValues = { hitpoints: 100, attack: 25, defense: 50, intelligence: 100 }
const intialRougeValues = { hitpoints: 150, attack: 50, defense: 75, intelligence: 50 }

const userCharacter = storeState(initialWizardValues)
// const currentState = userCharacter()

const changePlant = (prop) => {
  return (value) => {
    return (plant) => ({
      ...plant,
      [prop] : value
    })
  }
}

// We create four functions using our function factory. We could easily create many more.

// const feed = changeState("soil")(1);
// const blueFood = changeState("soil")(5);
// const hydrate = changeState("water")(1);
// const superWater = changeState("water")(5);

const newPlant = changePlant("name")("roses");
console.log(Object.values(newPlant));

$(document).ready(function() {
  // const currentState = stateControl();
  // $('#plant-names').text(`Name: ${currentState.plant}`);
// This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.


  $('#blue-food').click(function() {
    const newState = stateControl(blueFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#feed').click(function() {
    const newState = stateControl(feed);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#hydrate').click(function() {
    const newState = stateControl(hydrate);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('#super-hydrate').click(function() {
    const newState = stateControl(superWater)
    $('#water-value').text(`Water: ${newState.water}`);
  });

// This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

  $('#show-state').click(function() {
    // We just need to call stateControl() without arguments to see our current state.
    const currentState = stateControl();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
    // $('#water-value').text(`Water: ${currentState.water}`);
  });
});