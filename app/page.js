import Hero from "./components/Hero";
import MarLogo from "./components/MarLogo";

import NavBar from "./components/NavBar";
import Video from "./components/Video";

export default function Home() {
  return (
    <div className="bg-[#050506]">
      <NavBar></NavBar>
      <Hero></Hero>
      <Video></Video>
      <MarLogo></MarLogo>
    </div>
  );
}
