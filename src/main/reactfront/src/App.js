import { BrowserRouter } from "react-router-dom";
import Main from "./component/app/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
