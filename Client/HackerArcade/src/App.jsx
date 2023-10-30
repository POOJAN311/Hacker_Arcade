import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Login, Navbar } from "./components";
import styles from './style';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
        <Login />
      </div>
    </BrowserRouter>
  )
}

export default App
