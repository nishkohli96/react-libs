import { Link } from 'react-router-dom';

const LinksList = () => {
  const LinkComponent = ({ path = '', text = '' }) => (
    <div className="link">
      <Link to={path}>
        {text}
      </Link>
    </div>
  );

  /* Alphabetically ordered */
  const routePaths = [
    {
      name: '/aos-glass-icons',
      text: 'Aos & react-icons',
    },
    {
      name: '/algolia-widgets',
      text: 'Algolia Widgets',
    },
    {
      name: '/axios',
      text: 'Axios & React-Query',
    },
    {
      name: '/color-pickers',
      text: 'Color Pickers',
    },
    {
      name: '/drag-n-drop',
      text: 'Drag and drop list *',
    },
    {
      name: '/faker-csv',
      text: 'Faker & react-csv',
    },
    {
      name: '/font-source',
      text: 'Font Source',
    },
    {
      name: '/formik',
      text: 'Formik',
    },
    {
      name: '/react-charts',
      text: 'React-charts',
    },
    {
      name: '/react-hook-form',
      text: 'React Hook Form',
    },
    {
      name: '/react-final-form',
      text: 'React Final Form',
    },
    {
      name: '/react-window',
      text: 'React Window',
    },
    {
      name: '/redux',
      text: 'Redux Egs',
    },
    {
      name: '/rte',
      text: 'Rich Text Editors',
    },
    {
      name: '/toasts',
      text: 'Toasts - cogo & react-toastify',
    },
    {
      name: '/videojs',
      text: 'VideoJS * & React-player',
    },
  ];

  return (
    <div>
      <div className="root">
        {routePaths.map(path => (
          <LinkComponent
            path={path.name}
            text={path.text}
            key={path.name.replace('/', '')}
          />
        ))}
      </div>
      <div className="text-red-800">
        {'* -> not working as expected '}
      </div>
    </div>
  );
};

export default LinksList;
