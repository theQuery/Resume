import './index.css';
import largeProjects from '../../assets/json/projects-large.json';
import smallProjects from '../../assets/json/projects-small.json';
import Page from '../Page';
import Section from '../Section';
import Projects from '../Projects';

function SecondPage() {
  return <Page column>
    <header className='second-page__header'>
      <h1>
        Tom Kristoffersen
        <span>Selvstendige prosjekter.</span>
      </h1>
    </header>
    <div className='second-page__body'>
      <Section label='Prosjekter' gap>
        <Projects projects={largeProjects} />
      </Section>
      <Section label='Mindre Prosjekter' grid gap>
        <Projects projects={smallProjects} />
      </Section>
    </div>
  </Page>
}

export default SecondPage;