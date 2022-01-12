import { Col, Modal, Row, Select, Input, Button } from "antd"
import axios from "axios"
import { useCallback, useState } from "react"
import BreedImageList from "../BreedImageList"
import './index.css'

const { Option } = Select

const CustomSearchModal = ({ breedList = [], onCancel }) => {
  const [state, setState] = useState({ breed: undefined, noOfImages: undefined })
  const [imgUrls, setImgUrls] = useState([])
  
  const handleGetImages = useCallback(() => {
    const {breed, noOfImages} = state
    axios.get(`https://dog.ceo/api/breed/${breed}/images/random/${noOfImages}`)
    .then(({ data }) => {
      if (data) {
        setImgUrls(data.message)
      }
    })
  }, [state])

  return (
    <Modal
      visible
      footer={null}
      onCancel={onCancel}
      title='Custom Search'
    >
      <Row gutter={16}>
        <Col span={12}>
          <Select style={{ width: 200 }} onChange={breed => setState({ ...state, breed })}>
            {
              breedList.map((breed, index) => (
                  <Option value={breed} key={breed}>{breed}</Option>
              ))
            }
          </Select>
        </Col>
        <Col span={12}>
          <Input type='number'  onChange={e => setState({ ...state, noOfImages: e.target.value  })} placeholder='No of Images' />
        </Col>
      </Row> 
      <div className='get-img-container'>
        <Button
          type='primary'
          disabled={!(state.breed && state.noOfImages)}
          onClick={handleGetImages}
        >
            Get Images
        </Button>
      </div>
      <div>
        {
          ![undefined, 0].includes(imgUrls?.length) && state.breed && (
            <BreedImageList breed={state.breed} imgUrls={imgUrls} />
          )
        }
      </div>
    </Modal>
  )
}
export default CustomSearchModal