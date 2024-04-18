import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./css/style.css"
import "./css/satoshi.css"
import "flatpickr/dist/flatpickr.min.css" //DATE PICKER
import { ApolloProvider } from "@apollo/client"
import { Provider } from "react-redux"
import store from "./store/store"
import { client } from "./lib/helper/apoloClient"
import { NextUIProvider } from "@nextui-org/react"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <NextUIProvider>
            <App />
          </NextUIProvider>
        </ApolloProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
