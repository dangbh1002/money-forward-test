import { ReactNode } from 'react'
import { useAppCommonContext } from '@/hooks/AppCommonContext';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';

interface Props {
    children: ReactNode;
}

/**
 * Main Layout
 * @constructor
 * @author Bui Hai Dang
 */
export default function MainLayout({children} : Props): JSX.Element {
    const { isMobile } = useAppCommonContext();

    return(
        <>
            <Header />

            <div className={isMobile ? '' : 'is-flex'}>
                {
                    !isMobile &&
                    <SideBar />
                }

                <div className='is-flex-grow-1'>
                    {children}
                </div>

            </div>
        </>
    )
}
