

import Link from 'next/link'
import IAccount from "@/types/IAccount";
import classnames from 'classnames'
import styles from './UserAccounts.module.scss'

interface Props {
    accounts: Array<IAccount>
}

/**
 * User Accounts
 * @constructor
 * @author Bui Hai Dang
 */
export default function UserAccounts({accounts}: Props): JSX.Element {



    return (
        <>
            <div className='container mt-6'>
                <div className='is-flex is-justify-content-center'>
                    <div className="card">
                        <div className="card-content">
                            <Link href="/">
                                <a className="button is-info">
                                    <i className="fas fa-arrow-left"/>
                                    <span className="ml-2">Users Search</span>
                                </a>
                            </Link>

                            <h2 className='has-text-centered has-text-weight-bold my-5'>User Accounts</h2>

                            <div className="container table-container">

                                <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                                    <thead>
                                    <tr className="has-text-centered">
                                        <th className="has-text-right" style={{minWidth: '100px'}}><abbr title="Number">ID</abbr></th>
                                        <th className="has-text-left" style={{minWidth: '200px'}}>Name</th>
                                        <th className="has-text-right" style={{minWidth: '200px'}}>Balance</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {
                                        accounts.map((item, index) => {
                                            const account = item.attributes

                                            return (
                                                <tr key={String(index)}>
                                                    <th className="has-text-right">{account.id}</th>
                                                    <td className="has-text-left">
                                                        {account.name}
                                                    </td>
                                                    <td className="has-text-right">
                                                        {Number(account.balance).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                    {
                                        !accounts.length && (
                                            <tr className="has-text-centered">
                                                <td colSpan={3}>
                                                    <p className="my-5">
                                                        <span>Have no accounts.</span>
                                                    </p>
                                                </td>
                                            </tr>
                                        )
                                    }

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>

    )
}
