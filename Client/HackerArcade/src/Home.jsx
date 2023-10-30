import Blog from './components/Blog';
import { About, Contact, Hero, Workspace } from "./components";
import Cards from './components/Cards';
import styles from './style';

const Home = () => {
    return (
        <>
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
                    <Workspace />
                    <Contact />
                </div>
            </div>
        </>
    )
}

export default Home