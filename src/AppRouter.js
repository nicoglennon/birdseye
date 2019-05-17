import React from "react"
import App from "./App"
import Login from "./Login"
import { BrowserRouter as Router, Route } from "react-router-dom"

function AppRouter() {
  return (
    <Router>
        <Route path="/" exact component={Login} />
        <Route path="/app" component={App} />
    </Router>
  )
}

export default AppRouter
