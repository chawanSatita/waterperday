import React from 'react'
import ReactDOM from 'react-dom/client'
import ChangeTheme from './components/changeTheme.tsx'
import './index.css'
import Form from './components/Form.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Form />
    <ChangeTheme />
  </React.StrictMode>,
)
