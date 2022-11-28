import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/products/ProductsPage";
import ProductsForm from "./pages/products/ProductsForm";
import ProvidersPage from "./pages/providers/ProvidersPage";
import PageNotFound from "./pages/PageNotFound";
import ServerErrorPage from "./pages/ServerErrorPage";
import Navbar from "./components/Navbar";
import "./App.css";
import FormUpdate from "./pages/providers/FormUpdate";
import TakeItemsAwayPage from "./pages/products/TakeItemsAwayPage";

function App() {
  return (
    <div className="bg-neutral-800 h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/newStock" element={<ProductsForm />} />
        <Route path="/deleteProducts" element={<TakeItemsAwayPage />} />
        <Route path="/providers" element={<ProvidersPage />} />
        <Route path="/providers/:id" element={<FormUpdate />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/error" element={<ServerErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
