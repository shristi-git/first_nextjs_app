import Navigation, { Navigation2 } from '../components/navigation-bar/Navigation'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Navigation />
    <Navigation2/>
     <Component {...pageProps} />
  </>

}

export default MyApp
