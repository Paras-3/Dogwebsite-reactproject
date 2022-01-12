import { Card, Col, Row } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"
import './index.css'

const BreedImageList = ({ breed, imgUrls = [] }) => {
  return (
    <div>
      <Row className='heading'>
        Showing {imgUrls?.length} images of {breed}
      </Row>
      <Row gutter={16}>
        {
          imgUrls.map((url, index) => (
            <Col span={6}>
              <Card>
                <img src={url} alt='breed' style={{ width: '100px', height: '100px' }} />
              </Card>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}
export default BreedImageList

