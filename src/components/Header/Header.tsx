import ThemeToggleButton from "./ThemeToggleButton/ThemeToggleButton";
import styles from './header.module.scss';
export default function Header(){
    return(
        <header className={styles['b-header']}>
            <h1 className={styles['b-header__logoName']}>Where in the world?</h1>
            <ThemeToggleButton/>
        </header>
    )
}