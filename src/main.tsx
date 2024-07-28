import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil";

const token = localStorage.getItem("token");

const client = new ApolloClient({
  uri: "http://localhost:4000/api/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RecoilRoot>
        {/* <NavBar /> */}

        <App />
        {/* <Appp /> */}

        {/* <MyComponent/> */}
      </RecoilRoot>
    </ApolloProvider>
  </React.StrictMode>
);
