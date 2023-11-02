import styles from "./Button.module.css"

export const BUTTON_TYPE = {
    BUTTON: 'button',
    RESET: 'reset',
    SUBMIT: 'submit'
}

const Button = (props) => {
    const { children, onClick, type } = props

    return (
        <button
            className={styles.button}
            onClick={onClick}
            type={BUTTON_TYPE[type]}
        >{children}</button>
    )
}

export default Button