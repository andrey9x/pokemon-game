import React from 'react';
import ReactDOM from 'react-dom';

import HeaderBlock from "./components/HeaderBlock";

import './index.css';

const AppList = () => {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    const firstItem = <li>Item 0</li>;

    const isAuth = false;

    return (
        <ul>
            { isAuth ? firstItem : null }
            { items.map(item => <li>{item}</li>) }
            <li>{ items[0] }</li>
            <li>{ items[1] }</li>
        </ul>
    );
}

const AppHeader = () => {
    /*const margin = 40;
    const headerStyle = {
        color: 'red',
        marginLeft: `${margin}px`,
        marginBottom: `${margin}px`
    };*/
    return (
        <h1
            // style={headerStyle}
            className="header"
        >
            Hello World, React.js!
        </h1>);
}

const AppInput = () => {
    const placeholder = 'Type text';
    return (
        <label>
            <input type="text" placeholder={placeholder} />
        </label>
    );
}

const App = () => {
    return (
        <>
            <HeaderBlock/>
            <AppHeader/>
            <AppInput/>
            <AppList/>
            <AppHeader/>
            <AppList/>
        </>
    );
}

/*const el = (
    <App/>
);*/

ReactDOM.render(<App/>, document.getElementById('root'));