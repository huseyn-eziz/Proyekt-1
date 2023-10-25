import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Context from '../Context/Context.jsx'
import UserEmailContext from '../Context/UserEmailContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserEmailContext>

    <Context>
      <App/>
    </Context>
    </UserEmailContext>
  </React.StrictMode>,
)
