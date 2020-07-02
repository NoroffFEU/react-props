import React from "react";

function Heading(props) {
    console.log(props);

    const headingStyle = {
        color: props.colour,
        fontSize: props.fontSize + "px",
    };

    return <h2 style={headingStyle}>{props.content}</h2>;
}

export default Heading;
