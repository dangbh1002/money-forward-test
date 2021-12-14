
import { useState, useEffect } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app'
import {useRouter} from 'next/router';
import Device from '@/utils/device';
import { AppCommonContext } from '@/hooks/AppCommonContext';
import { useWindowSize } from '@/hooks/useWindowSize';
import '../styles/globals.scss'

interface Props extends AppProps {
  pathname: string;
  device: Device;
}

/**
 * My App
 * @param Component
 * @param pageProps
 * @param pathname
 * @param device
 * @constructor
 * @author Bui Hai Dang
 */
export default function MyApp({ Component, pageProps, pathname, device }: Props): JSX.Element {
  const router = useRouter();
  const [width] = useWindowSize();
  const [isMobile, setIsMobile] = useState(device.mobile);

  useEffect(() => {
    if (pathname === '/_error') {
      router.push('/');
    }
  }, [pathname, router])

  useEffect(() => {
    setIsMobile(width < 769 || device.mobile || 'ontouchend' in document)
  }, [device, width])

  return (
      <AppCommonContext.Provider value={{
        isMobile,
        isChrome: device.chrome,
        isSafari: device.safari,
      }}>
        <Component {...pageProps} />
      </AppCommonContext.Provider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const initialProps = await NextApp.getInitialProps(appContext);

  const { req, pathname } = appContext.ctx;
  const userAgent = req?.headers['user-agent'] ?? '';
  const device = new Device(userAgent);

  return {
    ...initialProps, pathname, device,
  };
};
