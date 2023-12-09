import './index.css';

function Page({ column, children }) {
    return <div
        className='page'
        style={{ flexDirection: column && 'column' }}
    >
        {children}
    </div>
}

export default Page;