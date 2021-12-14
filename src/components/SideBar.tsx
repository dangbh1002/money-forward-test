import {useState} from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router';

import classnames from 'classnames'
import styles from './SideBar.module.scss'

/**
 * SideBar
 * @constructor
 * @author Bui Hai Dang
 */
export default function SideBar(): JSX.Element {
    const router = useRouter();
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <ul className={styles.menuList}>
            <li className={classnames(styles.menuItem, styles.menuSection, styles.isActive)}>
                <Link href='/'>
                    <a className={styles.menuText}>
                        <h3 className='has-text-weight-bold'> Account Management </h3>
                    </a>
                </Link>
            </li>
            <li className={classnames(styles.menuItem, router.pathname === '/users' ? styles.isActive : '')}>
                <Link href='/users'>
                    <a className={styles.menuText}>
                        <span className="icon is-small">
                            <i className="fas fa-user"/>
                        </span>
                        <span> Users Search </span>
                    </a>
                </Link>
            </li>
            <li className={classnames(styles.menuItem, router.pathname === '/accounts' ? styles.isActive : '')}>
                <Link href='/accounts'>
                    <a className={styles.menuText}>
                        <span className="icon is-small">
                            <i className="fas fa-wallet"/>
                        </span>
                        <span> Accounts Search </span>
                    </a>
                </Link>
            </li>
        </ul>
    )
}
