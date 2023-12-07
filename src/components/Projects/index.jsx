import './index.css';
import Block from '../Block';
import Link from '../Link';

function Tags({ tags }) {
  return <div className='tags'>
    {tags.length
      ? tags.map(tag => {
        return <div key={tag} className='tags__tag'>
          {tag}
        </div>
      })
      : 'Ingen Tools'
    }
  </div>
}

function Projects({ projects }) {
  return <>
    {projects.map(project => {
      const { name, type, date, repository, deployment,
        languages, tools, description } = project;

      return <Block
        key={name}
        label={`${name} (${type})`}
        date={date}
      >
        {description}
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
          <Tags tags={tools} />
        </div>
      </Block>
    })}
  </>
}

export default Projects;