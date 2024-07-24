import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil";
import MyComponent from "./components/organisms/createUser.tsx";

const token = localStorage.getItem("token")

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${token}`
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RecoilRoot>
        <App />
        <MyComponent/>
      </RecoilRoot>
    </ApolloProvider>
  </React.StrictMode>
);
