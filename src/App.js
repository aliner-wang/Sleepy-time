
import React, { useState, useEffect } from "react";


function App() {
  const [wakeup, setwakeup] = useState();
  const [sleep, setsleep] = useState();
  const [TOD, setTOD] = useState("AM")

  /*useEffect(() => {
    if (wakeup != '') {
    }

  }, [sleep, wakeup])*/

  function update(e) {
    /*var newTime = new Date();*/
    e.preventDefault();
    if (parseInt(sleep) == 4) {
      setwakeup(12);
      setTOD("AM")
    } else if (parseInt(sleep) < 4) {
      setwakeup(parseInt(sleep) + 8);
      setTOD("PM")
    } else {
      setwakeup((parseInt(sleep) + 8) % 12);
      setTOD("AM")
    }

    console.log((parseInt(sleep) + 7));

  };

  if (sleep == null || wakeup == null) {

    return (
      <div>
        <form onSubmit={update}>
          <label>
            Time:
          <input type="number" min="1" max="12" name="time" value={sleep} onInput={event => setsleep(event.target.value)} />
          </label>
          <input type="submit" name="Submit" />
        </form>
        <h1> Wakeup Time: </h1>
        <h1> Sleep Time: </h1>

      </div>)
  }
  else {
    return (
      <div>
        <form onSubmit={update}>
          <label>
            Time:
            <input type="number" min="1" max="12" name="time" value={sleep} onInput={event => setsleep(event.target.value)} />
          </label>
          <input type="submit" name="Submit" />
        </form>
        <h1> Wakeup Time: {wakeup + TOD}</h1>
        <h1> Sleep Time: {sleep + "PM"}</h1>

      </div>)

  }
}

/*<button type="button" onClick={update}>Submit</button>


      */



export default App;
