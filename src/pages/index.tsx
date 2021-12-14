import Head from 'next/head'
import {useEffect} from 'react';
import {useRouter} from 'next/router';

import classnames from 'classnames'
import styles from '@/styles/Home.module.scss'

/**
 * Home
 * @author Bui Hai Dang
 */
export default function Home(): JSX.Element {
    const router = useRouter();

    useEffect(() => {
        const {location} = window;
        const {pathname} = router

        if (pathname == '/') {
            router.push('/users')
        }
    }, [router]);

    return (
        <>
            <Head>
                <title>Account Management</title>
            </Head>
        </>
    );
}
