import React from "react";

const styles = {
    main: {
        paddingTop: "50px",
        background: "linear-gradient(45deg, #778899, #B22222)",
        height: "100%",
        display: "flex",
        flexFlow: "row wrap",
        padding: "30px",
        justifyContent: "space-around",
        alignContent: "flex-start",
        overflow: "auto",
    }
};

const Main = props => <div className="main" style={styles.main}>{props.children}</div>;

export default Main;