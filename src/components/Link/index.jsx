import './index.css';

function Link({ link, anchor, fallback }) {
  return link
    ? <a
      className='link'
      style={{ color: fallback && 'var(--primary-color)' }}
      href={link}
      target='_blank'
    >
      {anchor} &#8599;
    </a>
    : fallback;
}

export default Link;