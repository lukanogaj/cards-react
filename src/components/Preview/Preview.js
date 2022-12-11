import { cards } from '../../data';
import './Preview.css';

const Preview = () => {
  const showPreview = (preview) => (preview ? 'card' : 'no-preview');

  return <div>{showPreview(cards.is_preview)}</div>;
};

export default Preview;
