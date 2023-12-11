import './index.css';
import Link from '../Link';

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
      : 'Ingen Verktøy'
    }
  </div>
}

export default Tags;