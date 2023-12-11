import './index.css';
import tomImage from '../../assets/images/tom.jpg';
import phoneIcon from '../../assets/icons/phone.svg';
import emailIcon from '../../assets/icons/email.svg';
import homeIcon from '../../assets/icons/home.svg';
import websiteIcon from '../../assets/icons/website.svg';
import skills from '../../assets/json/skills.json';
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
        <Icon src={phoneIcon} /> 957 50 517
      </span>
      <span className='aside__contact'>
        <Icon src={emailIcon} /> tomkri2000@outlook.com
      </span>
      <span className='aside__contact'>
        <Icon src={homeIcon} /> Rosenlundveien 37, 3150
      </span>
      <span className='aside__contact'>
        <Icon src={websiteIcon} />
        <Link
          link='https://thequery.github.io/personal-website/'
          anchor='Personlig Nettside'
        />
      </span>
      <span className='aside__contact'>
        <Icon src={websiteIcon} />
        <Link
          link='https://github.com/theQuery'
          anchor='GitHub Profil'
        />
      </span>
    </Section>
    <div className='aside__skills'>
      {Object.entries(skills).map(([key, value]) => {
        return <Section key={key} label={key}>
          {Object.entries(value).map(([key, value]) => {
            return <ProgressBar key={key} label={key} percent={value} />
          })}
        </Section>
      })}
    </div>
  </aside>
}

export default Aside;