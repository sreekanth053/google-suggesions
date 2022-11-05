import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  searchInputtext = event => {
    this.setState({searchInput: event.target.value})
  }

  tochagetheInput = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const finalResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          alt="google logo"
          className="google-logo"
        />
        <div className="input-container-box">
          <div className="input-icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              onChange={this.searchInputtext}
              placeholder="search input"
              value={searchInput}
              className="input-search"
            />
          </div>

          <ul className="ulstyle">
            {finalResults.map(eachLi => (
              <SuggestionItem
                eachLi={eachLi}
                key={eachLi.id}
                tochagetheInput={this.tochagetheInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
