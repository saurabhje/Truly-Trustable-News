import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './component/Router.jsx'
import './index.css'
import store from './component/store.js'
import { Provider } from 'react-redux'
import "@fontsource/anton"
import '@fontsource/oswald'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Router />
    </Provider>
)
