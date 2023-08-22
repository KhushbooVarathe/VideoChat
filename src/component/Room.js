import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

function Room () {
  const { roomid } = useParams()
  console.log('roomid: ', roomid)
  const mymeeting = element => {
    const appID = 1935856324
    const serverSecret = '9b649f091a2a18042795b94120d3bf5e'
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomid,
      Date.now().toString(),
      'Khushboo Varathe'
    )
    const zc = ZegoUIKitPrebuilt.create(kitToken)
    zc.joinRoom({
      container: element,
      sharedLinks:[{
        name:"Copy Link",
        url:`http://localhost:3000/room/${roomid}`
      }],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall

     },
    // showTurnOffRemoteCameraButton:true,
      showScreenSharingButton:true,
    //   showTurnOffRemoteMicrophoneButton:true,
      
    })
  }
  return <div>
    <div ref={mymeeting}/>
  </div>
}

export default Room
