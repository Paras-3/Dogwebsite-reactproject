import { Col, Row } from "antd"
import Header from "../../components/Header"
import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import BreedCard from "../../components/BreedCard"
import CustomSearchModal from "../../components/CustomSearchModal"
import Search from '../../components/Search'

const Home = () => {

  const [dogList, setDogList] = useState([])
  const [filteredList, setFilteredList]  = useState([])
  const [customSearchVisible, setCustomSearchVisible] = useState()

  const toShowDogList = filteredList?.length ? filteredList : dogList

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/list/all')
    .then(({ data }) => {
      if (data) {
        setDogList(Object.keys(data.message))
      }
    })
  }, [])

  const handleSearch = useCallback((searchText) => {
    const searchRegex = new RegExp(searchText, 'ig')
    const filteredDogList = dogList.filter(breed => searchRegex.test(breed))
    setFilteredList(filteredDogList)
  }, [dogList])

  return (
    <div>
      <Header onCustomSearch={() => setCustomSearchVisible(true)} />
      <Search onSearch={handleSearch} />
      <Row gutter={16}>
        {
          toShowDogList.map((breed, index) => (
            <Col span={4}><BreedCard breed={breed} /></Col>
          ))
        }
      </Row>
      {
        customSearchVisible && <CustomSearchModal onCancel={() => setCustomSearchVisible(false)} breedList={dogList} />
      }
    </div>
  )
}
export default Home