import styles from './salary.module.css';
import { Input } from '../components/Input';

export function Salary() {
    
    return (
        <>
            <div class={styles.salaryInputWrapper}>
                <Input type='number' placeholder='Enter your gross salary...' />
                <Input type='number' placeholder='Enter your gross salary...' />
                <Input type='number' placeholder='Enter your gross salary...' />
                <Input type='number' placeholder='Enter your gross salary...' />
                <Input type='number' placeholder='Enter your gross salary...' />
                <Input type='number' placeholder='Enter your gross salary...' />
                <Input type='number' placeholder='Enter your gross salary...' />
                <Input type='number' placeholder='Enter your gross salary...' />
                <Input type='number' placeholder='Enter your gross salary...' />
            </div>
            <div>

            </div>
        </>
    )
}