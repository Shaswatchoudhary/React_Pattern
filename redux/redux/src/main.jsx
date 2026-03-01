import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> // we use this library to provide the store to the app provider is a component that provides the store to the app
      <App />
    </Provider>
  </StrictMode>,
)
