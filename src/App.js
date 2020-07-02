import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";

function App() {
    return (
        <div className="App">
            <Heading content="This is the content" colour="red" fontSize="40" />
            <Heading content="This is the second content" colour="blue" fontSize="30" />
            <Heading content="This is the third content" colour="green" fontSize="60" />
            <Paragraph>This is a children prop</Paragraph>
            <Paragraph>This is the second paragraph</Paragraph>
        </div>
    );
}

export default App;
