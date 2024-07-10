import { useTheme } from "../../../hooks/ThemeProvider";
import darkMode from '../../../assets/images/darkMode.svg';
import lightMode from '../../../assets/images/lightMode.svg';
import styles from './themeToggleButton.module.scss';
function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styles['b-header__themeToggle']}>
      <img src={theme === 'light' ? lightMode: darkMode} className={styles['b-header__themeToggle__themeIcon']} 
      alt="" />
      Dark Mode
    </button>
  );
}

export default ThemeToggleButton;
