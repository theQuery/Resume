import './index.css';

function ProgressBar({ label, percent }) {
    return <div className='progress-bar'>
        <div className='progress-bar__container'>
            <div
                className='progress-bar__progress'
                style={{
                    width: `${percent}%`,
                    background: `hsl(${0 + percent}, 100%, 65%)`
                }}
            >
            </div>
        </div>
        <span className='progress-bar__label'>
            {label}
        </span>
    </div>
}

export default ProgressBar;