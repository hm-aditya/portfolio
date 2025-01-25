import About from "@/components/About";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

const Root = () => {
  return (
    <div className="relative  mb-16 mx-auto  max-w-2xl w-screen overflow-hidden ">
      {/* Background Flickering Grid */}
      <FlickeringGrid
        className="dark:block hidden absolute inset-0 z-0 -top-60 -left-200 dark:[mask-image:radial-gradient(450px_circle_at_center,white,transparent)] [mask-image:radial-gradient(450px_circle_at_center,black,transparent)]"
        gridGap={6}
        color=" green"
        maxOpacity={0.5}
        flickerChance={1}
        height={800}
        width={800}
      />
      <Header/>
      <About/>
      <Skill/>
      <Projects/>
    </div>
  );
};

export default Root;
