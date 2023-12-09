import './index.css';
import tomImage from '../../assets/images/tom.jpg';
import PhoneIcon from '../../assets/icons/phone.svg';
import EmailIcon from '../../assets/icons/email.svg';
import HomeIcon from '../../assets/icons/home.svg';
import WebsiteIcon from '../../assets/icons/website.svg';
import Section from '../Section';
import Icon from '../Icon';
import Link from '../Link';
import ProgressBar from '../ProgressBar';

function Aside() {
  return <aside className='aside'>
    <div className='aside__me'>
      <img className='aside__avatar' src={tomImage} alt='Tom' />
      <h1 className='aside__name'>Tom Kristoffersen</h1>
      <p className='aside__about-me'>
        En 23 år gammel lidenskapelig og selvlært programmerer
        på jakt etter smarte løsninger og spennende utviklingsoppdrag.
      </p>
    </div>
    <Section label='Kontakt'>
      <span className='aside__contact'>
        <Icon src={PhoneIcon} /> 957 50 517
      </span>
      <span className='aside__contact'>
        <Icon src={EmailIcon} /> tomkri2000@outlook.com
      </span>
      <span className='aside__contact'>
        <Icon src={HomeIcon} /> Rosenlundveien 37, 3150
      </span>
      <span className='aside__contact'>
        <Icon src={WebsiteIcon} />
        <Link
          link='https://thequery.github.io/personal-website/'
          anchor='Personlig Nettside'
        />
      </span>
      <span className='aside__contact'>
        <Icon src={WebsiteIcon} />
        <Link
          link='https://github.com/theQuery'
          anchor='GitHub Profil'
        />
      </span>
    </Section>
    <div className='aside__progress-bars'>
      <Section label='Språk'>
        <ProgressBar label='JavaScript' percent={85} />
        <ProgressBar label='CSS' percent={85} />
        <ProgressBar label='HTML' percent={75} />
        <ProgressBar label='AHK' percent={75} />
        <ProgressBar label='SQL' percent={75} />
        <ProgressBar label='Python' percent={60} />
        <ProgressBar label='C' percent={55} />
        <ProgressBar label='Lua' percent={35} />
        <ProgressBar label='Java' percent={20} />
      </Section>
      <Section label='Rammer'>
        <ProgressBar label='React' percent={75} />
        <ProgressBar label='Express' percent={65} />
        <ProgressBar label='NodeJS' percent={60} />
      </Section>
      <Section label='Tjenester'>
        <ProgressBar label='CF' percent={75} />
        <ProgressBar label='EC2' percent={70} />
        <ProgressBar label='RDS' percent={70} />
        <ProgressBar label='S3' percent={60} />
        <ProgressBar label='Redis' percent={50} />
      </Section>
      <Section label='Kjedelige Språk'>
        <ProgressBar label='Norsk' percent={95} />
        <ProgressBar label='Engelsk' percent={85} />
        <ProgressBar label='Hebraisk' percent={70} />
      </Section>
    </div>
  </aside>
}

export default Aside;