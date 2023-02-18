/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import axios from 'axios';



export default function Voice() {
  const form1 = useRef();
  const [audio, setAudio] = useState("")

  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    // const audio = document.createElement('input');
    // audio.src = url;
    // audio.name = "audio";
    // audio.controls = true;
    setAudio(url);
    // console.log(audio.src)
  };

  const sendEmail = (e) => {
    e.preventDefault();
  emailjs.sendForm('service_75ytjo7', 'template_7ek1l64', form1.current, 'Lp5sE4yuq_l5oKBod')
  .then((result) => {
    console.log(result.text);
}, (error) => {
    console.log(error.text);
});
axios({ url: audio, method: 'GET',responseType: 'blob',}).then((response) => {const url = window.URL.createObjectURL(new Blob([response.data])); const link = document.createElement('a'); link.href = url; link.setAttribute('download', 'file.mp3'); document.body.appendChild(link); link.click();})

};
  return (
    <div className="flex justify-end fixed top-3/4 right-4">
    <AudioRecorder className="bg-yellow-500	"
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      />
    {audio.length ?
    <form ref={form1} onSubmit={sendEmail}>
    <input className="hidden" name="audio" value={audio} />
    <input  type="submit" value="Send" />
  </form>
  : ""
    }
    </div>
  );
}
