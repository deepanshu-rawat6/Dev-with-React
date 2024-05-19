import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp() {
  return (
    <div>
      <h1>Custom React Appp</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank',
//   },
//   children: 'Click me to visit Google',
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Click here to visit Google</a>
)

const anotherUsername = "deepanshu-rawat6"

const reactElement =  React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank',
  },
  'Click me to visit Google',
  anotherUsername
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  //   <MyApp />
  // </React.StrictMode>

  reactElement
)
