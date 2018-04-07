import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Characters from "./components/Characters";
import photos from "./photos.json"

class App extends Component {

  state = {
    message: "Click a character to begin game!",
    highScore: 0,
    currentScore: 0,
    photos: photos,
    unselectedPhotos: photos
  }

  shuttleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * ( i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    };
  };

  selectPhoto = character => {
    const findCharacter = this.state.unselectedPhotos.find(item => item.character === character);

    if (findCharacter === undefined) {
      this.setState({
        message: "You Chose Poorly!",
        highScore: (this.state.currentScore > this.state.highScore) ? this.state.currentScore : this.state.highScore,
        currentScore: 0,
        photos: photos,
        unselectedPhotos: photos
      });
    } else {
      const findNewCharacter = this.state.unselectedPhotos.filter(item => item.character !== character);
      this.setState({
        message: "You Chose Wisely!",
        currentScore: this.state.currentScore + 1,
        photos: photos,
        unselectedPhotos: findNewCharacter
      });
  } 
  this.shuttleArray(photos);
  }

  render() {
    return (
      <Wrapper>
        <Navbar
        message = { this.state.message }
        currentScore = { this.state.currentScore }
        highScore = { this.state.highScore }
        />
        <Title />
        {
          this.state.photos.map(item => (
            <Characters
              character = { item.character }
              photo = { item.image }
              selectPhoto = { this.selectPhoto }
              currentScore = { this.state.currentScore }
            />
          ))
        }
      </Wrapper>
    )
  }
}

export default App;
