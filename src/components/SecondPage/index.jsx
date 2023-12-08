import './index.css';
import smallProjects from '../../assets/json/projects-small.json';
import Page from '../Page';
import Section from '../Section';
import Projects from '../Projects';

function SecondPage() {
  return <Page>
    <div className='second-page'>
      <header className='second-page__header'>
        <h1>Tom Kristoffersen</h1>
      </header>
      <div className='second-page__body'>
        <Section label='Mindre Prosjekter' grid gap>
          <Projects projects={smallProjects} />
        </Section>
      </div>
    </div>
  </Page>
}

export default SecondPage;