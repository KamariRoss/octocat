import React from 'react'
import terracottocat from './imgs/Terracottocat_Single.png'

class cats extends React.Component {
  render() {
    return (
      <a href="https://octodex.github.com/terracottocat/">
        <img class="icon" src={terracottocat} alt="terracottocat" />
      </a>
    )
  }
}
export default cats
