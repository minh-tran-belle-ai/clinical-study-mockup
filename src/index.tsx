import * as React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import {AllState, AllAction} from "./redux/type.d"
import App from "./App"
import reducer from "./redux/reducer"

const store: Store<AllState, AllAction> = createStore(reducer, applyMiddleware())

const rootElement = document.getElementById("root")
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)