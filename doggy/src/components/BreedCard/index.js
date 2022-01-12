import { Card } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"
import SubBreedModal from "../SubBreedModal"
import './index.css'

const BreedCard = ({breed}) => {
  const [url, setUrl] = useState()
  const [showSubBreed, setShowSubBreed] = useState(false)
  useEffect(() => {
    axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(({data}) => {
      setUrl(data.message)
    })
  }, [])
  return (
    <>
      <Card onClick={() => setShowSubBreed(true)}>
        <img className='breed-img' src={url} alt={breed} />
        <div className='text-center'>{breed}</div>
      </Card>
      {
        showSubBreed && 
        <SubBreedModal
          breed={breed}
          onCancel={() => setShowSubBreed(false)}
        />
      }
    </>
  )
}
export default BreedCard