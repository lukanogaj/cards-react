import './App.css';
import Card from './components/Card/Card';
import { cards } from './data';

////////////////////////////////////////////////////////////
const App = () => {
  return (
    <div className='container'>
      {cards.map((item, id) => (
        <Card key={item.id} />
      ))}
    </div>
  );
};

export default App;
/////////////////////////////////////////

// Imports cards from into App.js
// code   cards.map(() => <Preview card={card})
// Preview = ({card})
// <div className = {showPreview(card.is_preview)}
