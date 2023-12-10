import './index.css';
import Link from '../Link';
import Block from '../Block';
import Paragraph from '../Paragraph';

function Tags({ tags, extra }) {
  return <div className='tags'>
    {tags.length
      ? <>
        {tags.map(tag => {
          return <div key={tag} className='tags__tag'>
            {tag}
          </div>
        })}
        {extra && <div className='tags__tag'>
          <Link link={extra} anchor='...' />
        </div>
        }
      </>
      : 'Ingen Tools'
    }
  </div>
}

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