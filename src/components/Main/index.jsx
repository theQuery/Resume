import './index.css';
import { about } from '../../assets/json/profile.json';
import { highschool } from '../../assets/json/education.json';
import largeProjects from '../../assets/json/projects-large.json';
import Section from '../Section';
import Block from '../Block';
import Paragraph from '../Paragraph';
import Projects from '../Projects';

function Main() {
  return <main className='main'>
    <Section label='Profil' gap>
      <Block label='Om'>
        <Paragraph text={about} />
      </Block>
    </Section>
    <Section label='Utdanning' gap>
      <Block
        label='Videregående IB Diplom'
        date='Aug 2016 - Jun 2019'
      >
        <Paragraph text={highschool} />
      </Block>
    </Section>
    <Section label='Prosjekter' gap>
      <Projects projects={largeProjects} />
    </Section>
  </main>
}

export default Main;