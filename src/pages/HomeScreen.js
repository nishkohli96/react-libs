import LinksList from '../components/LinksList';
import { FontFullStyle } from '../style-dictionary-dist';

const HomeScreen = () => (
  <div className="fullscreen">
    <div className="text-4xl text-blue-500">Hi There !!!</div>
    <div className="text-xl my-2 text-silver-500">
      Click any of the links below...
    </div>
    <span style={FontFullStyle}>
      This text imports its styles from style-dictionary
    </span>
    <LinksList />
  </div>
);

export default HomeScreen;
