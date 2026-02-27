import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Categories from "./Categories/Categories";
import Whychooseus from "./whychooseus/whychooseus.jsx"; 
import Ourwork from "./ourwork/ourwork.jsx";  
// import Projectlogos from "./Projectlogos/Projectlogos.jsx"; 
import Contactus from "./Contactus/Contactus.jsx";
import Aboutheader from "./Aboutheader/Aboutheader.jsx";
import Productsheader from "./Productsheader/Productsheader.jsx";
import Projectheader from "./Projectheader/Projectheader.jsx";
import Contactheader from "./Contactheader/Contactheader.jsx";
import Footer from "./Footer/Footer";   
import PrivacyPolicy from "./Privacypolicy/Privacypolicy.jsx";  
import RefundPolicy from "./Refundpolicy/Refundpolicy.jsx";
import ShippingPolicy from "./Shippingpolicy/Shippingpolicy.jsx"; 
import TermsCond from "./Termscond/Termscond.jsx";
import Warantyterms from "./Warantyterms/Warantyterms.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Home page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Categories />
              <Whychooseus /> 
              <Ourwork />    
              {/* <Projectlogos />  */}
              <Contactus />
            </>
          }
        />

        {/* ✅ Separate Categories page (for pills in Header) */}
        <Route path="/categories" element={<Categories />} />

        {/* Other pages */}
        <Route path="/about" element={<Aboutheader />} />
        <Route path="/products" element={<Productsheader />} />
        <Route path="/projects" element={<Projectheader />} />
        <Route path="/contact" element={<Contactheader />} />

        {/* Policy pages */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/shipping" element={<ShippingPolicy />} />
        <Route path="/terms" element={<TermsCond />} />
        <Route path="/waranty" element={<Warantyterms />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </Router>
  );
}

export default App;
