import { useState } from "preact/hooks";
import { ffmpeg } from "https://deno.land/x/dffmpeg/mod.ts"

interface CounterProps {
  start: number;
}

export default function UploadVideo() {
  const [videoSrc, setVideoSrc] = useState("")
  const [imageFile, setImageFile] = useState({});
  const [soundFile, setSoundFile] = useState({});

  const process = ffmpeg()
    .input("big_buck_bunny.mp4")
    .threads(2)
    .preset("veryfast")
    .rotate(1)
    .metadata({ title: "Title", author: "John Doe" })
    .overwrite() // overwrite any existing output files
    .output("output.mp4")
  
  const handleChangeImage=(e)=>{
    const file = e.target.files[0];
    setImageFile(file)
  }
  const handleChangeSound=(e)=>{
    const file = e.target.files[0];
    setSoundFile(file)
  }
  const createVideo=()=>{
    
  }
  return (
    <div class="flex gap-2 w-full">
      <input type="file" id="image" accept="image/*" onChange={handleChangeImage}/>
      <p></p>
      <input type="file" id="sound" accept="sound/*" onChange={handleChangeSound}/>
      <br/>
      <video src={videoSrc} controls></video>
      <p></p>
      <button onClick={createVideo}>Create video</button>
    </div>
  );
}
