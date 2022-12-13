// import IsPreview from './PreviewStatus/IsPreview';
import IsPreview from './IsPreview';
import NoPreview from './NoPreview';
import './Preview.css';

const PreviewStatus = ({ preview }) => {
  return preview ? <IsPreview /> : <NoPreview />;
  // if (preview) {
  //   return <IsPreview />;
  // } else {
  //   return <NoPreview />;
  // }
};

export default PreviewStatus;
