/*  Check these 2 links - 
    https://webdesign.tutsplus.com/tutorials/how-to-create-a-frosted-glass-effect-in-css--cms-32535
    https://css-tricks.com/frosting-glass-css-filters/  
*/

const GlassComp = () => {
    return (
        <div style={styles.container}>
            <div style={styles.transparent}>
                <p className="heading">Glass Effect</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        margin: 5,
        padding: 5,
        backgroundColor: '#FF5071',
    },
    transparent: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 5,
        width: 'fit-content',
        opacity: 0.3,
    },
};

export default GlassComp;
