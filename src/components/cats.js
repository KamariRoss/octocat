import React from 'react'
import CatsProp from './catsProp'

import terracottocat from '../imgs/Terracottocat_Single.png'
import artist1 from '../imgs/72919.jpeg'
import octogatos from '../imgs/Octogatos.png'
import artist2 from '../imgs/4226949.png'

export class CatsOne extends React.Component {
  // initializing the state/how the componant should start off
  constructor(props) {
    super(props)
    this.state = [
      {
        // the different propoperties of the state of the component
        //[property]:[value]
        imgLink: 'https://octodex.github.com/terracottocat/',
        imgSrc: terracottocat,
        imgAlt: 'terracottocat',
        number: '#149',
        title: 'Terracottocat',
        artistLink: '',
        artistSrc: artist1,
        artistAlt: 'artist picture',
      },
      {
        // the different propoperties of the state of the component
        //[property]:[value]
        imgLink: 'https://octodex.github.com/terracottocat/',
        imgSrc: octogatos,
        imgAlt: 'octogatos',
        number: '#148',
        title: 'Octogatos',
        artistLink: '',
        artistSrc: artist2,
        artistAlt: 'artist picture',
      },
    ]
  }
  render() {
    return (
      (
        <CatsProp
          /*passing the state to another component
      this component has properties (or props)
      and each prop needs a value
      [props]=[value]
      */
          catImgLink={this.state[0].imgLink}
          catImgSrc={this.state[0].imgSrc}
          catImgAlt={this.state[0].imgAlt}
          catNumber={this.state[0].number}
          catTitle={this.state[0].title}
          catArtistLink={this.state[0].artistLink}
          catArtistSrc={this.state[0].artistSrc}
          catArtistAlt={this.state[0].artistAlt}
        />
      ),
      (
        <CatsProp
          /*passing the state to another component
      this component has properties (or props)
      and each prop needs a value
      [props]=[value]
      */
          catImgLink={this.state[1].imgLink}
          catImgSrc={this.state[1].imgSrc}
          catImgAlt={this.state[1].imgAlt}
          catNumber={this.state[1].number}
          catTitle={this.state[1].title}
          catArtistLink={this.state[1].artistLink}
          catArtistSrc={this.state[1].artistSrc}
          catArtistAlt={this.state[1].artistAlt}
        />
      )
    )
  }
}
