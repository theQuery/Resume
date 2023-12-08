import './index.css';
import reactStringReplace from 'react-string-replace';
import Link from '../Link';

function Paragraph({ text }) {
  const linkRegex = /(\[.+\]\(.+\))/g;
  const formattedText = reactStringReplace(text, linkRegex, linkFormatter);

  function linkFormatter(match, i) {
    const linkRegex = /\[(.+)\]\((.+)\)/;
    const [, anchor, link] = linkRegex.exec(match);
    return <Link key={i} link={link} anchor={anchor} fallback={match} />
  }

  return <p className='paragraph'>
    {formattedText}
  </p>
}

export default Paragraph;