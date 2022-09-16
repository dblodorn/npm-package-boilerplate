import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { AppWrapper, PageWrapper } from '../components'

function ExampleApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </AppWrapper>
  )
}
export default ExampleApp
