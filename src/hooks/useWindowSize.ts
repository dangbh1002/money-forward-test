/* global window document */

import { useEffect, useState } from 'react';
import { useAppCommonContext } from './AppCommonContext';

export function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    const { isSafari } = useAppCommonContext();

    useEffect(() => {
        function updateSize() {
            setSize([
                isSafari ? document.body.clientWidth : window.innerWidth,
                isSafari ? document.body.clientHeight : window.innerHeight,
            ]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [isSafari]);
    return size;
}
