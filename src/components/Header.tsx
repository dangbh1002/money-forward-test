import { useState } from 'react';
import Link from 'next/link'
import { useAppCommonContext } from '@/hooks/AppCommonContext';

import classnames from 'classnames'
import styles from './Header.module.scss'

/**
 * Header
 * @constructor
 * @author Bui Hai Dang
 */
export default function Header(): JSX.Element {
    const [isActive, setIsActive] = useState(false);

    const { isMobile } = useAppCommonContext();

    return (
        <nav id="navbar" className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link href="/">
                    <a className="navbar-item">
                        <img src="/logo.png" alt="Logo" height="48" />
                    </a>
                </Link>

                <a role="button"
                    className={`navbar-burger ${isActive ? 'is-active' : ''}`}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                    onClick={() => setIsActive(!isActive)}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            {
                isMobile &&
                <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>

                    <div className="navbar-start">

                        <Link href="/">
                            <a className="navbar-item">
                                Account Management
                            </a>
                        </Link>

                        <Link href="/users">
                            <a className="navbar-item">
                                Users Search
                            </a>
                        </Link>

                        <Link href="/accounts">
                            <a className="navbar-item">
                                Accounts Search
                            </a>
                        </Link>

                    </div>
                </div>
            }


        </nav>
    )
}
