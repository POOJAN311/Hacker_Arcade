import './App.css'
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, StarsCanvas } from "./components";
import Blog from './components/Blog';
import Cards from './components/Cards';
import styles from './style';
function App() {
  return (
    <BrowserRouter>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Cards />
            <About />
            <Blog />
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
