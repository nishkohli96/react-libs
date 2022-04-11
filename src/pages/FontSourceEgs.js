import '@fontsource/covered-by-your-grace';
import '@fontsource/crimson-pro';
import '@fontsource/crimson-pro';
import '@fontsource/roboto';

const FontSouceEgs = () => (
    <div>
        <h4>Different font-styles used, courtesy fontSource</h4>
        <p style={{ fontFamily: 'Covered By Your Grace' }}>
            Covered by your Grace
        </p>
        <p style={{ fontFamily: 'Crimson Pro' }}>Crimson Pro - default 400</p>
        <p style={{ fontFamily: 'Crimson Pro', fontWeight: 200 }}>
            Crimson Pro - 200
        </p>
        <p style={{ fontFamily: 'Crimson Pro', fontWeight: 800 }}>
            Crimson Pro - 800
        </p>
        <p style={{ fontFamily: 'Roboto' }}>Roboto- default 400</p>
        <p style={{ fontFamily: 'Roboto', fontWeight: 900 }}>Roboto - 900</p>
    </div>
);

export default FontSouceEgs;
