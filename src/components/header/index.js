import instagram from "../../instagram.png";
import styles from "./styles.module.css";
import { FaSearch,FaPowerOff,FaPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.image}>
                <img src={instagram} />
            </div>
            <div className={styles.logout}>
                <button onClick={() => {
                        localStorage.clear();
                        props.logout(false);
                    }}
                    className={styles.button}><FaPowerOff size="15"/>
                </button>
            </div>
            <div className={styles.criar}>
                <Link to="/criar">
                    <FaPlusSquare size="20" className={styles.plus}/>
                </Link>
            </div>
        </header>    
    );
}

export default Header;