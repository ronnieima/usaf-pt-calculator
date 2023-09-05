import { createClient } from "@supabase/supabase-js";
import Calculator from "./components/layout/Calculator";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import { getAllRows } from "./api/supabase";

function App() {
  return (
    <>
      <NavBar />
      <Calculator />
      <Footer />
    </>
  );
}

export default App;
