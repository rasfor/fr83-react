import React from 'react'
import ReactDOM from 'react-dom/client';
import store from './store/storeMst.js'
import { Provider } from 'mobx-react'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
)
