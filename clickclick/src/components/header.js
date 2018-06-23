import React from "react";


const styles = {
    header: {
        background: "linear-gradient(135deg, #B22222, #778899)",

    },
    h1: {
        fontSize: "56px",
        fontFamily: 'Cinzel, sans-serif',
    },
    p: {
        fontSize: "28px",
        fontFamily: 'Cinzel, sans-serif',
    }
};

const Header = () => (
    <div className="jumbotron" style={styles.header}>
        <h1 className="display-4" style={styles.h1}>Atlanta-Click-It-To-Win-It!</h1>
        <p className="lead" style={styles.p}>Click on an image to tally points,<br/> but click the same one twice, lose all your points!</p>

    </div>
);
export default Header;