import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {App} from './components/App.jsx'
import { store, persistor } from './components/redux/store'


// import { store, persistor } from './components/redux/store'

import { PersistGate } from "redux-persist/integration/react";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store = {store}>

    <PersistGate loading = {null} persistor = {persistor} >
    <App />
    </PersistGate>

    </Provider>
  </React.StrictMode>,
)
