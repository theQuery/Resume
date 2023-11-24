import './index.css';

function Block({ label, date, children }) {
  return <div className='block'>
    <div className='block__label'>
      <h4 className='block__name'>{label}</h4>
      {date && <time>{date}</time>}
    </div>
    <div className='block__children'>
      {children}
    </div>
  </div>
}

export default Block;