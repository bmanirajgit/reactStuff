// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import { useState, useCallback, useEffect, useRef } from "react"; // https://reactjs.org/docs/hooks-intro.html
import ReactDOM from "react-dom";

const numberOnly = (value, fallbackValue) =>
  isNaN(value) ? fallbackValue : value;
// function numberOnly(value, fallbackValue) {
//   if (isNaN(value)) {
//     return fallbackValue;
//   } else {
//     return value;
//   }
// }

function Assignment8(props) {
  const { title } = props; // const title = props.title;
  const [firstValue, setFirstValue] = useState(""); // const stateAndSetter= useState(""); const firstValue = stateAndSetter[0], setFirstValue= stateAndSetter[1];
  const [secondValue, setSecondValue] = useState("");
  const [result, setResult] = useState("");
  const [disableOperations, setDisableOperations] = useState(true);

  const handleFirstValueChange = useCallback(
    (event) => {
      // function (event){
      setFirstValue((currentFirstValue) => {
        const nextFirstValue = event.target.value;
        return numberOnly(nextFirstValue, currentFirstValue);
      });
    },
    [] // no need to include dependency setFirstValue: setters do not mutate
  );

  const handleSecondValueChange = useCallback(
    (event) => {
      setSecondValue(event.target.value);
    },
    [] // no need to include dependency setSecondValue: setters do not mutate
  );
  
/*  
const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  score: {
    fontSize: 30,
    alignItems: "center",
    top: 100
  }
});
*/

  return (
    
    <div style = {{
        alignItems: "center"
      }}>
  <style>
  {'body{background-color:#BEF0FF;}' }
  </style>
    <h1 style={{textAlign: "center",}}>SWE 432 Assignment 8 by Bharath Maniraj and Isaac Kim lol</h1>
    <p style={{textAlign: "center",}}>In the first box seen here, enter the number of numbers that you want to put in. (example: 7)<br/>
In the second box, enter as many numbers as you put for the first box separated by whitespaces. (example: 1 2 3 4 5 6 7)<br/>
Then press 'submit'</p>
      <form method="post" action="https://ikim26firstwebapp.herokuapp.com/Assignment4">

        <p style={{textAlign: "center",}}>Enter number of Characteristics here:
    <br/>
    <input type="text" name="numEntry" id="numEntryID" placeholder="(e.g. 3)" size="60" value={firstValue} onChange={handleFirstValueChange} ></input>
    </p>

    <p style={{textAlign: "center",}}>Enter number of blocks per characteristic here: (seperated by whitespaces)
    <br/>
    <input type="text" name="userNumEntry" placeholder="(e.g. 2 7 5)" size="60" value={secondValue} onChange={handleSecondValueChange}></input>
    </p>
    <br/>

    <p style={{textAlign: "center",}}><button type="submit">submit</button></p>

</form>
    </div>
  );
}

ReactDOM.render(
  <Assignment8
    title={
      "A simple example that demonstrates how to operate with multiple submit buttons."
    }
  />,
  document.querySelector("#root")
);

// If you got here, please check the Material UI version of this example:
// https://codesandbox.io/s/swe-432-react-two-buttons-example-mui-yohyi
