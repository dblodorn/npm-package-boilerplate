import type { NextPage } from 'next'
import { TestComponent } from './../../src/TestComponent'

const Home: NextPage = () => {
  return (
    <div>
      <TestComponent text=" ☼" />
    </div>
  )
}

export default Home
