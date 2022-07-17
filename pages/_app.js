import '../styles/globals.css'
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from '@mantine/notifications';
import ToastContainer from '../components/ToastContainer';
import { ToastProvider } from '../components/context/ToastContext';

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider>
      <MantineProvider>
        <NotificationsProvider>
          <Component {...pageProps} />
          <ToastContainer />
        </NotificationsProvider>
      </MantineProvider>
    </ToastProvider>
  )
}

export default MyApp
