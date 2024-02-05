import { Link } from 'react-router-dom';

const Sample = () => {
  return (
    <div>
      <p className="heading">Feel free to add your code</p>

      <div className="content">
        <p className="sub-heading">Configure as per your requirement</p>
        <p className="mb-3">
          Aliases in&nbsp;
          <span className="code">config-overrides.js</span>
        </p>
        <p className="mb-3">
          Custom Tailwind classes in &nbsp;
          <span className="code">src/styles/tailwind.css</span>
        </p>
        <p className="mb-3">
          Tailwind config in&nbsp;
          <span className="code">tailwind.config.js</span>
        </p>
        <Link to="/page2">
          <span className="text-blue-400 font-xl font-bold">Go to Page-2</span>
        </Link>
      </div>

      <p className="text-red-600 text-lg font-bold">Happy Coding &#128512;</p>
    </div>
  );
};

export default Sample;
