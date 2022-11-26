import { Routes, Route } from "react-router-dom";
import InventoryPage from "./pages/InventoryPage";
import InventoryForm from "./pages/InventoryForm";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import "./App.css";
import ProvidersPage from "./pages/ProvidersPage";

function App() {
  return (
    <div className="bg-neutral-800 h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<InventoryPage />} />
        <Route path="/newStock" element={<InventoryForm />} />
        <Route path="/providers" element={<ProvidersPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
