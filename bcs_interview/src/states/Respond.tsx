
import { useEffect, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { MdMic } from "react-icons/md";

export function Respond(props) {
  const [transcribedText, setTranscribedText] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: false });

  async function makeAPICall() {
    const audioBlob = await fetch(mediaBlobUrl).then((r) => r.blob());
    const audioFile = new File([audioBlob], "voice.wav", { type: "audio/wav" });

    const resp = await props.openai.createTranscription(audioFile, "whisper-1");

    console.log(resp);

    setTranscribedText(resp.data.text);
    props.setUserAnswer(resp.data.text);

    console.log(resp.data.text);
    props.setCurrentState("results");
  }

  // New function to handle recording button clicks
  const handleRecordingClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
    setIsRecording(!isRecording);
  };

  return (
    <div>
      <p>Question:</p>
      <p className="text-3xl">{props.question}</p>
      <div className="flex flex-col align-middle justify-center items-center">
        <MdMic
          className={`w-48 h-1/4 rounded-full m-10 ${isRecording ? "animate-pulse bg-red-600" : "bg-gray-300"
            }`}
        />
        <button onClick={handleRecordingClick}>
          {isRecording ? "Stop recording" : "Start recording"}
        </button>
        <button onClick={() => makeAPICall()}>See results</button>
      </div>
    </div>
  );
}
