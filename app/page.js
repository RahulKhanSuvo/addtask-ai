import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="bg-[#050506]">
      <NavBar></NavBar>
      <Hero></Hero>
    </div>
  );
}
