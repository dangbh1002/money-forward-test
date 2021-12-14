import Head from 'next/head'
import AccountsSearch from '@/components/AccountsSearch';
import MainLayout from '@/layouts/MainLayout'

import classnames from 'classnames'
import styles from '@/styles/AccountsSearchPage.module.scss'

/**
 * Accounts Search Page
 * @author Bui Hai Dang
 */
export default function AccountsSearchPage(): JSX.Element {
    return (
        <>
            <Head>
                <title>Accounts Search</title>
            </Head>

            <MainLayout>
                <div className='section'>
                    <div className='has-text-centered mt-6'>
                        <h1 className='header-title'>Account Management</h1>
                        <p className='sub-title'>frontend coding test</p>
                    </div>
                    <AccountsSearch/>
                </div>
            </MainLayout>
        </>
    )
}
