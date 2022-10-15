import './index.css'

const ImageItem = props => {
  const {image, onChooseImage} = props
  const {id, thumbnailUrl} = image

  const onClickImage = () => {
    onChooseImage(id)
  }

  return (
    <li className="list-item">
      <button type="button" onClick={onClickImage} className="image-button">
        <img alt="thumbnail" src={thumbnailUrl} className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ImageItem
