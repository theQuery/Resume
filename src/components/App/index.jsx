import './index.css';
import Page from '../Page';
import Aside from '../Aside';
import Main from '../Main';

function App() {
  return <div className='app'>
    <Page>
      <Aside />
      <Main />
    </Page>
  </div>
}

export default App;