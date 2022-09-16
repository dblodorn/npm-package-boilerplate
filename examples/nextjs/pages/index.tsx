import type { NextPage } from 'next'
import { TestComponent } from '@public-assembly/npm-package-boilerplate'

const Home: NextPage = () => {
  return (
    <div>
      <TestComponent text=" ☼" />
    </div>
  )
}

export default Home
