import {useState, useEffect} from 'react';
import Head from 'next/head'
import {useRouter} from 'next/router';

import styles from '@/styles/Home.module.scss'
import UserAccounts from '@/components/UserAccounts';
import MainLayout from '@/layouts/MainLayout'
import Loading from '@/components/Loading';
import IAccount from "@/types/IAccount";
import API from '@/services/api';

export default function DefaultName(): JSX.Element {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [accounts, setAccounts] = useState<Array<IAccount>>([])

    const {id: userId} = router.query

    /**
     * Get User Accounts
     */
    async function getAccounts() {
        setLoading(true);
        setError(null)

        try {
            const data: Array<IAccount> = await API.AccountService.getUserAccounts(Number(userId));

            if (data) {
                setAccounts(data)
            }

        } catch (error: any) {
            setAccounts([])
            setError(error.message)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (userId) {
            getAccounts()
        }
    }, [userId])

    return (
        <>
            <Head>
                <title>User Accounts</title>
            </Head>

            <MainLayout>
                <Loading active={loading}>
                    <div className='section'>
                        <div className='has-text-centered mt-6'>
                            <h1 className='header-title'>Account Management</h1>
                            <p className='sub-title'>frontend coding test</p>
                        </div>

                        <UserAccounts accounts={accounts}/>

                        {/*<p className='has-text-centered has-text-danger mt-5'>{error}</p>*/}
                    </div>
                </Loading>

            </MainLayout>
        </>
    )
}
