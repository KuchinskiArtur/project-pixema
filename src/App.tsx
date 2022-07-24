import React, { useState } from "react";
import Router from "./Router";
import "./App.css";
import { Provider } from "react-redux";
import { ThemeModeProvider } from "./components/Context/ThemeModeProvider";
import { store } from "./redux/store";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [menu, setMenu] = useState(false);

  const onChangeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Provider store={store}>
      <ThemeModeProvider
        menu={menu}
        setMenu={setMenu}
        isDark={isDark}
        onChangeTheme={onChangeTheme}
      >
        <Router />
      </ThemeModeProvider>
    </Provider>
  );
}

export default App;
