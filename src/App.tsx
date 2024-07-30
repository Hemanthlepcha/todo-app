import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/organisms/navBar.tsx";
import ContentPage from "./components/organisms/ContentPage.tsx";
import { Provider } from "./components/organisms/ContentProvider.tsx";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <NavBar displayAuth={true} displayWelcome={false} userName="" />
            }
          />

          <Route
            path="/home"
            element={
              <Provider>
                <ContentPage />
              </Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
