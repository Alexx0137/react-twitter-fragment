import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from "./App.jsx";
import './index.css';

//Punto de entrada de nuestra aplicación, está el elemento del HTMl
// donde queremos crear nuestra aplicación (root)
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <App />
)

