import './index.css'

const SuggestionItem = props => {
  const {suggestionItemDetails, updateSuggestionsByValue} = props
  const {suggestion} = suggestionItemDetails

  const onClickUpdate = () => {
    updateSuggestionsByValue(suggestion)
  }

  const searchItem = (
    <li className="itemContainer">
      <p className="suggestionText" onClick={onClickUpdate}>
        {suggestion}
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrowIcon"
        onClick={onClickUpdate}
      />
    </li>
  )
  return searchItem
}

export default SuggestionItem
