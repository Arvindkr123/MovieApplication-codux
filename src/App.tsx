import { useState } from 'react';
import classNames from 'classnames';
import styles from './App.module.scss';

export interface AppProps {
    className?: string;
}

function App({ className }: AppProps) {
    const [count, setCount] = useState(0);
    return (
        <div className={classNames(styles.App, className)}>
            <h1>HEllo World</h1>
        </div>
    );
}

export default App;
