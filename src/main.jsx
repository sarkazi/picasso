import ReactDOM from "react-dom/client";
import App from "./app/App";
import { store } from "./app/providers/StoreProvider/config/store";
import { Provider } from "react-redux";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import "./app/styles/main.scss";
import "@mantine/core/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <MantineProvider defaultColorScheme="dark">
        <App />
      </MantineProvider>
    </Provider>
  </BrowserRouter>,
);
