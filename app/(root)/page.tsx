"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
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
      <Contact/>
    </div>
  );
};

export default Root;
