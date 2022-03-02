import React, { useContext } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SocketContext } from "../SocketContext";

const useStyles = makeStyles((theme) => ({
  video: {
    width: "30rem",
    transform:"rotateY(180deg)",
    WebkitTransform:"rotateY(180deg)",
    MozTransform:"rotateY(180deg)",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  gridContainer: {
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },

}));

const VideoPlayer = () => {
  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call,
  } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {/*own video and users video here if stream exists*/}
      {stream && (
        <div >
          <Grid item xs={12} md={6}>
            <kbd>
              {name || "You"}
            </kbd>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div>
          <Grid item xs={12} md={6}>
            <kbd>
              {call.name || "Name"}
            </kbd>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </div>
      )}
    </Grid>
  );
};

export default VideoPlayer;
