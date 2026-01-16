import './index.css';
import Page from '../Page';
import Aside from '../Aside';
import Main from '../Main';

function FirstPage() {
  return <Page>
    <Aside />
    <Main />
  </Page>
}

export default FirstPage;