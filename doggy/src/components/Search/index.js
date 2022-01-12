import { Input } from 'antd'

const Search = ({ onSearch }) => {
  return (
    <div>
      <Input.Search
        color='lightgrey'
        style={{ width : '70%', marginLeft: '20%', padding:'20px'}}
        placeholder='Type here to filter by breed'
        onSearch={onSearch}
        allowClear
      />
    </div>
  )
}
export default Search
