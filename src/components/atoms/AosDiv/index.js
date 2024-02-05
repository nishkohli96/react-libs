import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/*  Use this as a parent component if animation to be applied at various sections */
const AosDiv = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      delay: 100,
    });
  }, []);

  return (
    <div style={{
      paddingTop: '80vh',
      paddingBottom: 100,
    }}
    >
      <div data-aos="fade-right">some scrollable text animated</div>
    </div>
  );
};

export default AosDiv;
