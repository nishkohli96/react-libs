import '@fontsource/covered-by-your-grace';
import '@fontsource/crimson-pro';
import '@fontsource/crimson-pro';
import '@fontsource/roboto';

const FontSouceEgs = () => (
    <div>
        <h1 style={{ color: 'red' }}>
            Different font-styles used, courtesy fontSource
        </h1>
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
        <p style={{ fontFamily: 'Roboto', fontWeight: 300 }}>Roboto - 300</p>
        <p style={{ fontFamily: 'Roboto' }}>Roboto- default 400</p>
        <p style={{ fontFamily: 'Roboto', fontWeight: 500 }}>Roboto - 500</p>
        <p style={{ fontFamily: 'Roboto', fontWeight: 700 }}>Roboto - 700</p>
        <p style={{ fontFamily: 'Roboto-Thin' }}>Roboto-Thin</p>
        <p style={{ fontFamily: 'Roboto-Thin', fontWeight: 700 }}>
            Roboto-Thin-700
        </p>
        <p style={{ fontFamily: 'Roboto-Black' }}>Roboto-Black</p>
        <p style={{ fontFamily: 'Roboto-Medium' }}>Roboto-Medium</p>
        <p style={{ fontFamily: 'Roboto-Light' }}>Roboto-Light</p>
        <p style={{ fontFamily: 'Roboto-Light', fontWeight: 900 }}>
            Roboto-Light
        </p>
    </div>
);

export default FontSouceEgs;
