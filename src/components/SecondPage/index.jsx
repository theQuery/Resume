import './index.css';
import smallProjects from '../../assets/json/projects-small.json';
import Page from '../Page';
import Section from '../Section';
import Projects from '../Projects';
import Block from '../Block';

function SecondPage() {
  return <Page column>
    <header className='second-page__header'>
      <h1>Tom Kristoffersen</h1>
    </header>
    <div className='second-page__body'>
      <Section label='Mindre Prosjekter' grid gap>
        <Projects projects={smallProjects} />
        <Block label='Og mange mer...'>
          <a
            className='second-page__stickman'
            href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            target='_blank'
          >
          </a>
        </Block>
      </Section>
    </div>
  </Page>
}

export default SecondPage;