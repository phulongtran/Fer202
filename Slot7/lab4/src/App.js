import { useState } from "react";
import AppNavbar from "./Component/AppNavbar";

import EX1 from "./Component/EX1/EX1";
import EX2 from "./Component/EX2/EX2";
import EX3 from "./Component/EX3/EX3";
import EX4 from "./Component/EX4/EX4";

function App() {
  const [currentPage, setCurrentPage] = useState("EX1");

  const renderPage = () => {
    switch (currentPage) {
      case "EX1":
        return <EX1 />;
      case "EX2":
        return <EX2 />;
      case "EX3":
        return <EX3 />;
      case "EX4":
        return <EX4 />;
      default:
        return <EX1 />;
    }
  };

  return (
    <>
      <AppNavbar onSelect={setCurrentPage} />
      {renderPage()}
    </>
  );
}

export default App;
