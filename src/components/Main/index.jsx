import './index.css';
import { about } from '../../assets/json/profile.json';
import workProjects from '../../assets/json/projects-work.json';
import Section from '../Section';
import Block from '../Block';
import Paragraph from '../Paragraph';
import Projects from '../Projects';

function Main() {
  return <main className='main'>
    <header className='main__header'>
    </header>
    <div className='main__body'>
      <Section label='Profil' gap>
        <Block label='Om'>
          <Paragraph text={about} />
        </Block>
      </Section>
      <Section label='Erfaring' gap>
        <Projects projects={workProjects} />
      </Section>
    </div>
  </main>
}

export default Main;