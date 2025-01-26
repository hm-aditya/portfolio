import About from "@/components/About";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";


const Root = () => {
  return (
    <div className="relative  mb-16 mx-auto  max-w-2xl w-screen overflow-hidden ">
      <Header/>
      <About/>
      <Skill/>
      <Projects/>
    </div>
  );
};

export default Root;
