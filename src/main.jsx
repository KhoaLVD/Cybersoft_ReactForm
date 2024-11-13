import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import './../node_modules/flowbite/dist/flowbite.js'
import App from './App.jsx'
import store from './store/Store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
