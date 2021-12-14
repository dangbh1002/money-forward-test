import { createContext, useContext } from 'react';

export const AppCommonContext = createContext({
    isMobile: false,
    isChrome: false,
    isSafari: false,
});

export function useAppCommonContext() {
    return useContext(AppCommonContext);
}
