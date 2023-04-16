import { createSignal } from 'solid-js';
import styles from './App.module.css';

import { Salary } from './page/salary';

function App() {
  const [currentPage, setCurrentPage] = createSignal('salary');
  const pages = {
    salary: <Salary />,
    exempt: '',
    deductions: '',
  }

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        {pages[currentPage()]}
      </header>
    </div>
  );
}

export default App;
