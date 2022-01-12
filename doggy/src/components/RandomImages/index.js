import { Col, Row } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"
import BreedCard from "../BreedCard"

const RandomImages = ({ breed }) => {
  const [subBreeds, setSubBreeds] = useState([])
  useEffect(() => {
    axios.get(`https://dog.ceo/api/breed/${breed}/images/random/3`)
    .then(({ data }) => {
      if (data) {
        setSubBreeds(Object.keys(data.message))
      }
    })
  }, [])
  return (
    <Row gutter={16}>
      {
        subBreeds.map((subBreed) => (
          <Col span={6}><BreedCard breed={breed} /></Col>
        ))
      } 
    </Row> 
  )
}
export default RandomImages
