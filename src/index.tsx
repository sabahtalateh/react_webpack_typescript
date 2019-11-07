import * as React from "react";
import * as ReactDOM from "react-dom";
import {createGlobalStyle} from 'styled-components'

import {Hello} from "./components/Hello";
import {App} from './components/App'



ReactDOM.render(
    <App name={"Kofi"}/>,
    document.getElementById("root")
);
