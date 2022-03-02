import React,{ useContext} from 'react'
import {Button} from "@material-ui/core"
import { SocketContext } from '../SocketContext';
function Notifications() {
  const {answerCall,call,callAccepted} = useContext(SocketContext);
  return (
    <div>
      {call.isReceivingCall && !callAccepted && (
        <div style={{display: 'flex',justifyContent: 'center'}}>
        <h5>{call.name} is calling ...</h5>
        <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
        </Button>
        </div>

      )}
    </div>
  )
}

export default Notifications
