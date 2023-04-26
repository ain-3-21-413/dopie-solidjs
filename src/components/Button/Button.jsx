import styles from './Button.module.css';

export default function Button(props) {

    const buttonStyles = `${styles.button} ${props.variant == 'fill' ? styles.fill : styles.outline}`;

    return (
        <button class={buttonStyles}>
            {props.children}
        </button>
    )
}
