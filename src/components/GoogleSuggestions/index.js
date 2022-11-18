import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchText: '',
  }

  updateSuggestionsByValue = value => {
    this.setState({searchText: value})
  }

  updateSearchResults = event => {
    const text = event.target.value
    this.setState({searchText: text})
  }

  render() {
    const {suggestionsList} = this.props

    const {searchText} = this.state

    const searchItemsList = suggestionsList.filter(eachItem => {
      const suggestion = eachItem.suggestion.toLowerCase()
      return suggestion.includes(searchText.toLowerCase())
    })

    const mainEle = (
      <div className="mainBgContainer">
        <div className="bgContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="googleLogo"
          />
          <div className="googleSearchContainer">
            <div className="searchBoxContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="searchIcon"
              />
              <input
                className="searchBox"
                type="search"
                placeholder="Search Google"
                onChange={this.updateSearchResults}
                value={searchText}
              />
            </div>

            {searchItemsList.length === 0 && (
              <h1 className="noItems">No Suggestions Found</h1>
            )}
            {searchItemsList.length !== 0 && (
              <ul className="suggestionsBgContainer">
                {searchItemsList.map(eachSuggestion => (
                  <SuggestionItem
                    key={eachSuggestion.id}
                    suggestionItemDetails={eachSuggestion}
                    updateSuggestionsByValue={this.updateSuggestionsByValue}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
    return mainEle
  }
}

export default GoogleSuggestions
