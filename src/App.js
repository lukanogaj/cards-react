import './App.css';
import Card from './components/Card/Card';
import Preview from './components/Preview/Preview';
import { cards } from './data';

////////////////////////////////////////////////////////////
const App = () => {
  return (
    <div className='container'>
      {/* cards.map((card) => <Preview card={card}) */}
      <Card />
    </div>
  );
};

export default App;
