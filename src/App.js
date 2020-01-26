import React from 'react'
import { CardList } from './components/card-list/card-list.component'
import { SearchInput } from './components/searchfield/search-input.component'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: '',
      isFetching: true
    }
  }

  async componentDidMount() {
    try {
      let users = await fetch('https://jsonplaceholder.typicode.com/users')
      let usersArray = await users.json()
      console.log('[user] ->', usersArray)
      this.setState({
        monsters: usersArray,
        isFetching: false
      })
    } catch (e) {
      this.setState({
        isFetching: false,
        monsters: [
          { id: 1, name: 'dogg' },
          { id: 2, name: 'sanf' },
          { id: 3, name: 'flasq' },
          { id: 4, name: 'klean' }
        ]
      })
    }
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonster = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
      <div className="App">
        <h1>Monster Seeker</h1>
        <SearchInput placeholder="Search for your monster choice" handleChange={e => this.setState({ searchField: e.target.value })} />
        {this.state.isFetching ? <h4>Fetching monsters...</h4> : <CardList monsters={filteredMonster} />}
      </div>
    )
  }
}

export default App
