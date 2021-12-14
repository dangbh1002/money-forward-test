import {useState} from 'react';
import {useForm} from "react-hook-form";
import Link from 'next/link'
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import API from '@/services/api';
import IUser from '@/types/IUser'

import classnames from 'classnames'
import styles from './UsersSearch.module.scss'

const schema = yup.object().shape({
    id: yup.number().typeError('ID must be a number'),
});

interface FormData {
    id: number
}

/**
 * Users Search
 * @constructor
 * @author Bui Hai Dang
 */
export default function UsersSearch(): JSX.Element {
    const {register, watch, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        mode: 'all'
    });

    const [loading, setLoading] = useState<boolean | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<IUser | null>(null);

    /**
     * Search User
     * @param formData
     */
    async function searchUser(formData: FormData) {
        setLoading(true);
        setError(null)

        try {
            const data: IUser = await API.UserService.getUserDetail(formData.id);
            if (data) {
                setUser(data)
            }
        } catch (error: any) {
            setUser(null)
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
                            <h2 className='has-text-centered has-text-weight-bold mb-5'>Users Search</h2>

                            <form onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit(searchUser)
                            }}>
                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label" style={{minWidth: '100px'}}>User ID</label>
                                    </div>
                                    <div className="field-body is-block">
                                        <div className="field has-addons">
                                            <p className="control has-icons-left has-icons-right">
                                                <input className="input" placeholder="Type user ID" type="text"
                                                       maxLength={10} {...register('id')} />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-user"/>
                                                </span>
                                                <span
                                                    className={`icon is-small is-right ${errors.id?.message ? 'has-text-danger' : 'has-text-link'}`}>
                                                    <i className={`fas ${errors.id?.message ? 'fa-exclamation-triangle' : 'fa-check'}`}/>
                                                </span>

                                            </p>
                                            <div className="control">
                                                <button
                                                    className={`button is-primary ${loading ? 'is-loading' : ''}`}
                                                    onClick={handleSubmit(searchUser)}
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
                    <h3 className='has-text-weight-bold'>User Detail</h3>

                    {
                        user && user.attributes &&
                        <>
                            <p>ID: <b>{user.attributes.id}</b></p>
                            <p>Name: <b>{user.attributes.name}</b></p>
                            <Link href={`/users/${user.attributes.id}`}>
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
