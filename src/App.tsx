import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "./Home";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}
