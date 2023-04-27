import { useNavigate } from '@solidjs/router';
import styles from './Navbar.module.css';

export default function Navbar() {

    const navigate = useNavigate();

    return (
        <div class={styles.navbar}>
            <a onClick={() => navigate('/matches')}>
                Матчи
            </a>
            <a onClick={() => navigate('/predictions')}>
                Прогнозы
            </a>
        </div>
    )
}
