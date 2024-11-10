import About from "../app/component/about";
import Contact from "../app/component/contact";
import Hero from "../app/component/hero";
import Project from "../app/component/project";
import Skill from '../app/component/skill'

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>

    </div>
  );
}
