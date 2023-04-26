import Home from '../pages/Home/Home';
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
                        <Home />
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
