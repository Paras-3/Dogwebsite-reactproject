import { Card } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"
import './index.css'

const SubBreedCard = ({breed, subBreed}) => {
  const [url, setUrl] = useState('')
  useEffect(() => {
    axios.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`)
    .then(({data}) => {
      setUrl(data.message)
    })
  }, [breed, subBreed])

  return (
    <Card style={{padding: 0}}>
      { url && <img className='breed-img' src={url} alt={subBreed} /> }
      <div>{subBreed}</div>
    </Card>
  )
}
export default SubBreedCard