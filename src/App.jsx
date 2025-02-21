import { BrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Body></Body>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
