
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getPromotions, getTags } from "./features/appSlice";
import Home from "./pages/Home";
import Promotion from "./pages/Promotion";
import GlobalStyles from "./styles/GlobalStyles";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTags())
    dispatch(getPromotions())
  }, [dispatch])

  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaign/:seoname/:id" element={<Promotion />} />
      </Routes>
    </Router>
  );
}

export default App;
