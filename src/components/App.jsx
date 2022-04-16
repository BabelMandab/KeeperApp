import React from "react";
import ReactDOm from "react-dom";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  return (
    <div className="body">
      <Header />
      <Note />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default App;
