import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Landing from "./pages/Landing";
import CountrySelect from "./pages/CountrySelect";
import WhatIsESim from "./pages/WhatIsESim";
import Support from "./pages/Support";
import Contact from "./pages/Contact";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/country-select":
        title = "";
        metaDescription = "";
        break;
      case "/what-is-e-sim":
        title = "";
        metaDescription = "";
        break;
      case "/support":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/country-select" element={<CountrySelect />} />
      <Route path="/what-is-e-sim" element={<WhatIsESim />} />
      <Route path="/support" element={<Support />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
export default App;
