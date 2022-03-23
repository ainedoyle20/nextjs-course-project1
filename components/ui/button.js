import Link from "next/link";

import styles from './button.module.css';

// Link adds anker tag under the hood anyway
// However if you want to add custom styling then must add <a/> tag

function Button(props) {
    if (props.link) {
        return (
            <Link href={props.link}>
                <a className={styles.btn}>{props.children}</a>
            </Link>
        );  
    } 

    return (
        <button className={styles.btn} onClick={props.onClick}>{props.children}</button>
    );
}

export default Button;
