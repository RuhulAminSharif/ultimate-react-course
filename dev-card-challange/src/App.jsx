import Avatar from './components/Avatar'
import Intro from './components/Intro'
import SkillList from './components/SkillList'
import './index.css'

function App() {

  return (
    <div className='card'>
      <Avatar/>
      <div className='data'>
        <Intro/>
        <SkillList/>
      </div>
    </div>
  )
}

export default App
