import {useState} from 'react';
import {useForm} from "react-hook-form";
import Link from 'next/link'
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import API from '@/services/api';
import IAccount from '@/types/IAccount'

import classnames from 'classnames'
import styles from './AccountsSearch.module.scss'

const schema = yup.object().shape({
    id: yup.number().typeError('ID must be a number'),
});

interface FormData {
    id: number
}

/**
 * Accounts Search
 * @constructor
 * @author Bui Hai Dang
 */
export default function AccountsSearch(): JSX.Element {
    const {register, watch, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        mode: 'all'
    });

    const [loading, setLoading] = useState<boolean | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [account, setAccount] = useState<IAccount | null>(null);

    /**
     * Search Account
     * @param formData
     */
    async function searchAccount(formData: FormData) {
        setLoading(true);
        setError(null)

        try {
            const data: IAccount = await API.AccountService.getAccountDetail(formData.id);
            if (data) {
                setAccount(data)
            }
        } catch (error: any) {
            setAccount(null)
            setError(error.message)
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className='container mt-6'>
                <div className='is-flex is-justify-content-center'>
                    <div className="card">
                        <div className="card-content">
                            <h2 className='has-text-centered has-text-weight-bold mb-5'>Accounts Search</h2>

                            <form onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit(searchAccount)
                            }}>
                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label" style={{minWidth: '100px'}}>Account ID</label>
                                    </div>
                                    <div className="field-body is-block">
                                        <div className="field has-addons">
                                            <p className="control has-icons-left has-icons-right">
                                                <input className="input" placeholder="Type account ID" type="text"
                                                       maxLength={10} {...register('id')} />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-wallet"/>
                                                </span>
                                                <span
                                                    className={`icon is-small is-right ${errors.id?.message ? 'has-text-danger' : 'has-text-link'}`}>
                                                    <i className={`fas ${errors.id?.message ? 'fa-exclamation-triangle' : 'fa-check'}`}/>
                                                </span>

                                            </p>
                                            <div className="control">
                                                <button
                                                    className={`button is-primary ${loading ? 'is-loading' : ''}`}
                                                    onClick={handleSubmit(searchAccount)}
                                                    disabled={Boolean(loading)}
                                                    style={{height: '40px'}}
                                                >
                                                        <span className="icon is-small">
                                                            <i className="fas fa-search"/>
                                                        </span>
                                                    <span>Search</span>
                                                </button>

                                            </div>

                                        </div>
                                        <p className='has-text-danger'>{errors.id?.message}</p>
                                    </div>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>

            </div>


            {
                !loading && loading !== null &&
                <div className='container mt-6 detail'>
                    <h3 className='has-text-weight-bold'>Account Detail</h3>

                    {
                        account && account.attributes &&
                        <>
                            <p id='userID'>ID: <b>{account.attributes.id}</b></p>
                            <p>Name: <b>{account.attributes.name}</b></p>
                            <p>Balance: <b>{Number(account.attributes.balance).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</b></p>

                            <p>User ID: <b>{account.attributes.user_id}</b></p>
                            <Link href={`/users/${account.attributes.user_id}`}>
                                <a className='button is-link'>
                                    <span className="icon is-small">
                                    <i className="fas fa-info"/>
                                    </span>
                                    <span>User Accounts</span>
                                </a>
                            </Link>
                        </>
                    }

                    {
                        Object.keys(errors).length === 0 &&
                        <p className='has-text-danger mt-5'>{error}</p>
                    }
                </div>
            }

        </>
    )
}
