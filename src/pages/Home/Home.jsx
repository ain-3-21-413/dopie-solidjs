import styles from './Home.module.css';
import TopMatch from './features/TopMatch/TopMatch';
import TopMatches from './features/TopMatches/TopMatches';
import TopPredictions from './features/TopPredictions/TopPredictions';

export default function Home() {
    
    return (
        <div class={styles.home}>
            <TopMatch />
            <TopMatches />
            <TopPredictions />
        </div>
    )
}
