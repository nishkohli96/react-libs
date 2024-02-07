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
      name: '/algolia-widgets',
      text: 'Algolia Widgets',
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
      name: '/font-source',
      text: 'Font Source',
    },
    {
      name: '/formik',
      text: 'Formik',
    },
    {
      name: '/sample',
      text: 'Sample Components',
    },
    {
      name: '/swr',
      text: 'Swr with Axios',
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
      name: '/redux',
      text: 'Redux Egs',
    },
    {
      name: '/rte',
      text: 'Rich Text Editors',
    },
    {
      name: '/videojs',
      text: 'VideoJS & React-player',
    },
    {
      name: '/zoom',
      text: 'Zoom web sdk',
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
      <div className='text-red-800'>{'* -> not working as expected '}</div> 
    </div>
  );
};

export default LinksList;
