// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachLi, toChangeInput} = props
  const {suggestion} = eachLi

  const clickedButton = () => {
    toChangeInput(suggestion)
  }
  return (
    <li className="list-container">
      <p className="suggestion">{suggestion}</p>
      <button type="button" onClick={clickedButton} className="arrow-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
