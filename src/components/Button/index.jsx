import styles from './button.module.css'

export function Button({
    submitText = 'Submit',
    onClick = () => { },
    customStyles = ''
}) {
    return (
        <button class={customStyles || styles.button} onClick={onClick}>
            {submitText}
        </button>
    )
}