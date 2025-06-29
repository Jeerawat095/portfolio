import Experience from '../../components/Experiece/Experience';
import HeroHome from '../../components/HeroHome/HeroHome';
import Project from '../../components/Porject/Project';
import Skills from '../../components/Skills/Skill';
import MainLayout from './../../layouts/MainLayout';
import './style.css';

function Home() {
  return (
    <MainLayout>
      <HeroHome/>
      <Skills/>
      <Experience/>
      <Project/>
      <div className='blackFooter'></div>
    </MainLayout>
  )
}

export default Home
