import { Col, Modal, Row } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"
import RandomImages from "../RandomImages"
import SubBreedCard from "../SubBreedCard"

const SubBreedModal = ({breed, onCancel}) => {
 
  const [subBreeds, setSubBreeds] = useState([])

  useEffect(() => {
    axios.get(`https://dog.ceo/api/breed/${breed}/list`)
    .then(({data}) => {
      setSubBreeds(data.message)
    })
  }, [breed])

  return (
    <Modal
      title={breed}
      visible
      footer={null}
      onCancel={onCancel}
    >
      <h3>Sub Breeds</h3>
      <Row gutter={16}>
        {
          subBreeds.map((subBreed, index) => (
            <Col span={6}>
              <SubBreedCard
                subBreed={subBreed}
                breed={breed}
              />
            </Col>
          ))
        }
      </Row>
      <h3>More Images</h3>
      <RandomImages breed={breed} />
      </Modal>
  )
}
export default SubBreedModal
