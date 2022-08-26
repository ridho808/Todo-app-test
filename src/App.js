import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Details from './pages/details';
import TambahActi from "./pages/TambahActi";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Dashboard/>}/>
          <Route path="/activity/:id" element={<Details/>}/>
          <Route path="/add" element={<TambahActi/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
