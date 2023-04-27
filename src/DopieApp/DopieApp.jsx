import AppRouter from '../router';
import styles from './DopieApp.module.css';

export default function DopieApp() {

    return (
        <div class={styles.app}>
            <div class={styles.container}>
                <div class={styles.header}>

                </div>
                <div class={styles.layout}>
                    <div class={styles.navbar}>

                    </div>
                    <div class={styles.main}>
                        <AppRouter />
                    </div>
                    <div class={styles.sidebar}>

                    </div>
                    <div class={styles.footer}>

                    </div>
                </div>
            </div>
        </div>
    )
}
