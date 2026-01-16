import './index.css';

function Section({ label, gap, grid, children }) {
  return <section className='section'>
    <h2 className='section__label'>
      {label}
      <span className='section__line'></span>
    </h2>
    <div
      className='section__children'
      style={{
        gap: gap && 'var(--space-md)',
        display: grid && 'grid'
      }}
    >
      {children}
    </div>
  </section>
}

export default Section;