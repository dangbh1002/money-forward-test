import { ReactNode } from 'react'

import LoadingOverlay from 'react-loading-overlay'

interface Props {
    active: boolean;
    children: ReactNode;
}

/**
 * Loading
 * @constructor
 * @author Bui Hai Dang
 */
export default function Loading({ active, children } : Props): JSX.Element {
    return (
        <LoadingOverlay
            active={active || false}
            spinner
            styles={{
                overlay: (base) => ({
                    ...base,
                    background: 'rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(3px)'
                }),
                spinner: (base) => ({
                    ...base,
                    width: '70px',
                    '& svg circle': {
                        stroke: '#f5810c',
                    },
                }),
            }}
        >{children}</LoadingOverlay>
    )
}
