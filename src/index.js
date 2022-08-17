import React from "react";
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import App from "./app/app";

import store from "./app/store";
import { loadCountries } from "./features/allCountries/allCountriesSlice";

const root = createRoot(document.querySelector('.outer-container'))
function render() {
    root.render(<App />)
}

// render()

function stateTest() {
    // store.dispatch(loadCountries())
    // console.log(store.getState())
    root.render(
        <Provider store = {store}>
            <App />
        </Provider>
    )
}


stateTest()