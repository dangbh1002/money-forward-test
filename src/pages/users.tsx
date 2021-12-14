import Head from 'next/head'
import UsersSearch from '@/components/UsersSearch';
import MainLayout from '@/layouts/MainLayout'

import classnames from 'classnames'
import styles from '@/styles/UsersSearchPage.module.scss'

/**
 * Users Search Page
 * @author Bui Hai Dang
 */
export default function UsersSearchPage(): JSX.Element {
    return (
        <>
            <Head>
                <title>Users Search</title>
            </Head>

            <MainLayout>
                <div className='section'>
                    <div className='has-text-centered mt-6'>
                        <h1 className='header-title'>Account Management</h1>
                        <p className='sub-title'>frontend coding test</p>
                    </div>
                    <UsersSearch/>
                </div>
            </MainLayout>
        </>
    )
}
