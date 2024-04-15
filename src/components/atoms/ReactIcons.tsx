import { IconContext } from 'react-icons';
import { FaBeer } from 'react-icons/fa';
import { DiAndroid } from 'react-icons/di';

export default function ReactIcons() {
  return (
    <>
      <div>
        Lets go for a
        {' '}
        <span>
          <FaBeer />
        </span>
        ?
      </div>
      <IconContext.Provider
        value={{
          color: 'green',
          size: '40px',
          className: 'global-class-name'
        }}
      >
        <DiAndroid />
      </IconContext.Provider>
    </>
  );
}
