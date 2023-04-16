import { createSignal } from "solid-js"
import styles from './input.module.css'

export function Input({
    defaultValue = '',
    customStyles = '',
    placeholder,
    type
}) {
    const [value, setValue] = createSignal(defaultValue || '')

    return (
        <input
            type={type}
            class={customStyles || styles.inputBox}
            placeholder={placeholder}
            onChange={e => setValue(e.target.value)}
            value={value()}
        />
    )
}