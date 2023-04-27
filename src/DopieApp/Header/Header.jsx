import { useNavigate } from '@solidjs/router';
import styles from './Header.module.css';

export default function Header() {

    const navigate = useNavigate();

    return (
        <div class={styles.header}>
            <a class={styles.logo} onClick={() => navigate('/')}>
                Dopie
            </a>
        </div>
    )
}
