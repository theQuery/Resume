import './index.css';

function Section({ label, children }) {
  return <div className='section'>
    <h2 className='section__label'>
      {label}
      <span className='section__line'></span>
    </h2>
    <div className='section__children'>
      {children}
    </div>
  </div>
}

export default Section;