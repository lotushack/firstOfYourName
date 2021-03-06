import React, {Component} from 'react';
import '../styles/App.css';
import {Route, Switch, HashRouter} from 'react-router-dom'

import HomeView from './HomeView'
import ThronepediaView from './ThronepediaView'
import RegionsView from './RegionsView'
import HousesView from './HousesView'
import CharactersView from './CharactersView'
import DetailedRegionsView from './DetailedRegionsView'
import DetailedHousesView from './DetailedHousesView'
import DetailedCharactersView from './DetailedCharactersView'
import TriviaView from './TriviaView'
import WinView from './WinView'
import LoseView from './LoseView'

class App extends Component {
  constructor() {
    super()
    this.state = {
      bodyClassName: {
        home: "home-view",
        thronepedia: "thronepedia-view",
        trivia: "trivia-view"
      },
      username: "",
      correctAns: 0,
      incorrectAns: 0,
      titles: [],
      backgroundUrls: {
        level1: "level-1",
        level2: "level-2",
        level3: "level-3",
        level4: "level-4",
        level5: "level-5",
        level6: "level-6",
        level7: "level-7",
        level8: "level-8",
        level9: "level-9",
        level10: "level-10"
      }
    }
  }
  // I think we should be able to make a className that is level + {correctAns} so we end up on the correct background
  // I may need help making this happen

  _handleUsername = (username) => {
    this.setState({username: username})
  }

  _handleAnswer = (event) => {
    if (this.target.value === true) {
      correctAns += 1
    } else {
      incorrectAns += 1
    }
  }
  // also add a title?  talk with Ryan about this one.

  // we need to pass {...this.state} to our trivia since the homepage makes the user and resets values back to empty

  render() {
    return (
      <div className="App hw-100-percent">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">First of Your Name</h1>
        </header> */}
        <HashRouter>
          <Switch>
            <Route exact path='/' component={() => <HomeView {...this.state} handleUsername={this._handleUsername}/>}/>
            <Route exact path='/thronepedia' component={() => <ThronepediaView {...this.state}/>}/>
            <Route exact path='/thronepedia/regions' component={() => <RegionsView {...this.state}/>}/>
            <Route exact path='/thronepedia/houses' component={() => <HousesView {...this.state}/>}/>
            <Route exact path='/thronepedia/characters' component={() => <CharactersView {...this.state}/>}/>
            <Route exact path='/thronepedia/regions/:name' component={() => <DetailedRegionsView {...this.state}/>}/>
            <Route exact path='/thronepedia/houses/:name' component={() => <DetailedHousesView {...this.state}/>}/>
            <Route exact path='/thronepedia/characters/:name' component={() => <DetailedCharactersView {...this.state}/>}/>
            <Route exact path='/trivia' component={() => <TriviaView {...this.state}/>}/>
            <Route exact path='/trivia/win' component={() => <WinView {...this.state}/>}/>
            <Route exact path='/trivia/lose' component={() => <HomeView {...this.state}/>}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
