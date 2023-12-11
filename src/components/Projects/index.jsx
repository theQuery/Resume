import './index.css';
import Block from '../Block';
import Paragraph from '../Paragraph';
import Link from '../Link';
import Tags from '../Tags';

function Projects({ projects }) {
  return <>
    {projects.map(project => {
      const { name, type, date, repository, deployment,
        extra, languages, tools, description } = project;

      return <Block
        key={name}
        label={`${name} (${type})`}
        date={date}
      >
        <Paragraph text={description} />
        <div className='projects__details'>
          <Link
            link={deployment}
            anchor='Deployment'
            fallback='Ingen Deployment'
          />
          <Tags tags={languages} />
          <Link
            link={repository}
            anchor='Repository'
            fallback='Privat Repository'
          />
          <Tags tags={tools} extra={extra} />
        </div>
      </Block>
    })}
  </>
}

export default Projects;