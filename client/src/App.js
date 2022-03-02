import React from 'react'
import {Typography,AppBar} from "@material-ui/core";
import Videoplayer from "./components/Videoplayer.jsx"
import Options from "./components/options.jsx"
import Notifications from "./components/Notifications.jsx"
import Wave from 'react-wavify'
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));
function App() {
  const classes = useStyles();

  return (
    <>
    <Wave fill='#fbfbfb'
      paused={false} className="fixed-bottom "
      style={{ zIndex: "-1", filter: "drop-shadow(5px 5px 5px #222)" }}
      options={{
        height: 40,
        amplitude: 20,
        speed: 0.3,
        points: 6
      }}
    />
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand">
                <img
                  src="https://www.logo.wine/a/logo/Google_Meet/Google_Meet-Logo.wine.svg"
                  class="me-2"
                  height="30"
                   />
                 <h5>Meet</h5>
              </a>
            </div>
          </nav>
    <div className={classes.wrapper}>
<Videoplayer/>
<Options>
   <Notifications/>
</Options>

    </div>

  </>)
}

export default App
