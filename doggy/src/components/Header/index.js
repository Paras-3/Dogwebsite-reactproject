import { Button } from 'antd'
import './index.css'
const Header = ({ onCustomSearch }) => {
  return (
    <header className='header'>
      <h2>Dog Gallery</h2>
      <div className='custom-search-btn'>
        <Button onClick={onCustomSearch}>Custom Search</Button>
      </div>
    </header>
  )
}
export default Header