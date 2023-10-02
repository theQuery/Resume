import './index.css';
import tomImage from '../../assets/tom.png';
import PhoneIcon from '../../assets/phone.svg';
import EmailIcon from '../../assets/email.svg';
import HomeIcon from '../../assets/home.svg';
import WebsiteIcon from '../../assets/website.svg';
import Icon from '../Icon';
import ProgressBar from '../ProgressBar';

function Aside() {
  return <aside className='aside'>
    <div className='aside__me'>
      <img className='aside__avatar' src={tomImage} alt='Tom' />
      <h1 className='aside__name'>Tom Kristoffersen</h1>
      <p className='aside__about-me'>
        En 22 år gammel lidenskapelig og selvlært programmerer
        på jakt etter smarte løsninger og spennende utviklingsoppdrag.
      </p>
    </div>
    <AsideSection label='Kontakt'>
      <span className='aside__contact'>
        <Icon src={PhoneIcon} /> 957 50 517
      </span>
      <span className='aside__contact'>
        <Icon src={EmailIcon} /> tomkri2000@outlook.com
      </span>
      <span className='aside__contact'>
        <Icon src={HomeIcon} /> Rosenlundveien 37, 3150
      </span>
      <a
        className='aside__contact'
        href='https://thequery.github.io/personal-website/'
        target='_blank'
      >
        <Icon src={WebsiteIcon} /> Klikk for Nettside
      </a>
      <a
        className='aside__contact'
        href='https://github.com/theQuery'
        target='_blank'
      >
        <Icon src={WebsiteIcon} /> Klikk for GitHub
      </a>
    </AsideSection>
    <div className='aside__progress-bars'>
      <AsideSection label='Språk'>
        <ProgressBar label='JavaScript' percent={85} />
        <ProgressBar label='CSS' percent={85} />
        <ProgressBar label='HTML' percent={75} />
        <ProgressBar label='AHK' percent={75} />
        <ProgressBar label='SQL' percent={75} />
        <ProgressBar label='Python' percent={60} />
        <ProgressBar label='C' percent={55} />
        <ProgressBar label='Lua' percent={35} />
        <ProgressBar label='Java' percent={20} />
      </AsideSection>
      <AsideSection label='Rammer'>
        <ProgressBar label='React' percent={75} />
        <ProgressBar label='Express' percent={65} />
        <ProgressBar label='NodeJS' percent={60} />
      </AsideSection>
      <AsideSection label='Tjenester'>
        <ProgressBar label='CF' percent={75} />
        <ProgressBar label='EC2' percent={70} />
        <ProgressBar label='RDS' percent={70} />
        <ProgressBar label='S3' percent={60} />
        <ProgressBar label='Redis' percent={50} />
      </AsideSection>
      <AsideSection label='Kjedelige Språk'>
        <ProgressBar label='Norsk' percent={95} />
        <ProgressBar label='Engelsk' percent={85} />
        <ProgressBar label='Hebraisk' percent={70} />
      </AsideSection>
    </div>
  </aside>
}

function AsideSection({ label, children }) {
  return <div className='aside-section'>
    <h2 className='aside-section__label'>
      {label}
      <span className='aside-section__line'></span>
    </h2>
    <div className='aside-section__children'>
      {children}
    </div>
  </div>
}

export default Aside;