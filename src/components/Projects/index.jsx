import './index.css';
import Block from '../Block';
import Paragraph from '../Paragraph';
import Link from '../Link';
import Tags from '../Tags';

function Projects({ projects }) {
  return <>
    {projects.map(project => {
      const { name, type, company, website, date, repository,
        deployment, extra, languages, tools, description } = project;

      const nameAndType = `${name} (${type})`;
      const deploymentType = company ? 'Privat' : 'Ingen';

      return <Block
        key={name}
        label={<Link
          link={website}
          anchor={`${nameAndType} — Ansatt i ${company}`}
          fallback={nameAndType}
        />}
        date={date}
      >
        <Paragraph text={description} />
        <div className='projects__details'>
          <Link
            link={deployment}
            anchor='Deployment'
            fallback={`${deploymentType} Deployment`}
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