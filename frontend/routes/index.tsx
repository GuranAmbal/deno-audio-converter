import { Head } from "$fresh/runtime.ts";
import { Navigation } from "../components/Navigation.tsx";
import UploadVideo from "../islands/UploadVideo.tsx";



export default function Home() {
  return (
    <>
      <Head>
        <title>Convert Audio in Video</title>
      </Head>
      <Navigation/>
      <div class="p-4 mx-auto max-w-screen-md mt-[50px]">
       <UploadVideo/>
      </div>
    </>
  );
}
