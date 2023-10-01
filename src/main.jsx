import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ListUsersProvider, TotalAmountProvider } from './context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TotalAmountProvider>
        <ListUsersProvider>
          <App />
        </ListUsersProvider>
      </TotalAmountProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
