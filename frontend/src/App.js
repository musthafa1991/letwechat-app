import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepages from "./pages/Homepages";
import Chatpage from "./pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepages />} exact />
        <Route path="/chats" element={<Chatpage />} />
      </Routes>
    </div>
  );
}

export default App;
