import React, { useEffect } from 'react'
import { FaMicrophoneLines } from 'react-icons/fa6'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Spech = ({ setCity }) => {
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition()

  useEffect(() => {
    if (!listening && transcript) {
      setCity(transcript) // Update city in parent when speech ends
    }
  }, [listening, transcript, setCity])

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }

  return (
    <div className="m-2 p-2 white  ">
     
      <button onClick={SpeechRecognition.startListening}>
        <FaMicrophoneLines />
      </button>
  
    </div>
  )
}

export default Spech