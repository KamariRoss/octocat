import React, { Component } from 'react'
import cats from 'components/cats.js'
import HelloWorld from './components/HelloWorld'
import artist1 from './imgs/72919.jpeg'
import octogatos from './imgs/Octogatos.png'
import artist2 from './imgs/4226949.png'
import adacats from './imgs/Adacats.png'
import artist3 from './imgs/18125109.jpeg'
import fintechtocat from './imgs/Fintechtocat.png'
import artist4 from './imgs/19292210 (1).jpeg'
import Brennatocat from './imgs/Brennatocat.png'
import artist5 from './imgs/20049049.jpeg'
import filmtocats from './imgs/filmtocats.png'
import artist6 from './imgs/20879614.jpeg'
import sentrytocat from './imgs/Sentrytocat_octodex.jpg'
import artist7 from './imgs/29592817.jpeg'
import puddle from './imgs/puddle_jumper_octodex.jpg'
import artist8 from './imgs/29592817.jpeg'
class App extends React.Component {
  render() {
    return (
      <body>
        <header>
          <ul class="Nav1">
            <li class="NavItem">
              <a href="https://octodex.github.com/">
                <embed src="./Pics/GitHub-Mark-32px.png" />
              </a>
            </li>
            <li class="NavItem"></li>
            <li>
              <a href="https://octodex.github.com/">Home</a>
            </li>
            <li class="NavItem"></li>
            <li>
              <a href="https://octodex.github.com/https://octodex.github.com/faq/">
                FAQ
              </a>
            </li>
          </ul>
          <ul class="Nav2">
            <li class="NavItem">
              <a href="https://twitter.com/githubdesign">
                Follow us on Twitter
              </a>
            </li>
            <li class="NavItem"></li>
            <li>
              <a href="https://github.com/">Back to GitHub.com</a>
            </li>
          </ul>
        </header>
        <main class="symbol">
          <article>
            <section>
              <cats />
              #149{' '}
              <a href="https://octodex.github.com/terracottocat/">
                Terracottocat
              </a>
              <img class="proimage" src={artist1} alt="artist picture" />
            </section>
            <section>
              <a href="https://octodex.github.com/octogatos/">
                <img class="icon" src={octogatos} alt="octogatos" />
              </a>
              #148 <a href="https://octodex.github.com/octogatos/">Octogatos</a>
              <img class="proimage" src={artist2} alt="artist picture" />
            </section>
            <section>
              <a href="https://octodex.github.com/adacats/">
                <img class="icon" src={adacats} alt="adacats pic" />
              </a>
              #147 <a href="https://octodex.github.com/adacats/">Adacats</a>
              <img class="proimage" src={artist3} alt="artist picture" />
            </section>
            <section>
              <a href="https://octodex.github.com/fintechtocat/">
                <img class="icon" src={fintechtocat} alt="fintechtocat img" />
              </a>
              #146{' '}
              <a href="https://octodex.github.com/fintechtocat/">
                Fintechtocat
              </a>
              <img class="proimage" src={artist4} alt="artist picture" />
            </section>
            <section>
              <a href="https://octodex.github.com/brennatocat/">
                <img class="icon" src={Brennatocat} alt="Brennatocat" />
              </a>
              #145{' '}
              <a href="https://octodex.github.com/brennatocat/">Brennatocat</a>
              <img class="proimage" src={artist5} alt="artist picture" />
            </section>
            <section>
              <a href="https://octodex.github.com/filmtocats/">
                <img class="icon" src={filmtocats} alt="filmtocats" />
              </a>
              #144{' '}
              <a href="https://octodex.github.com/filmtocats/">Filmtocats</a>
              <img class="proimage" src={artist6} alt="artist picture" />
            </section>
            <section>
              <a href="https://octodex.github.com/sentrytocat/">
                <img class="icon" src={sentrytocat} alt="sentrytocat" />
              </a>
              #143{' '}
              <a href="https://octodex.github.com/sentrytocat/">Sentrytocat</a>
              <img class="proimage" src={artist7} alt="artist picture" />
            </section>
            <section>
              <a href="dhttps://octodex.github.com/umbrellatocat/">
                <img class="icon" src={puddle} alt="artist picture" />{' '}
              </a>
              #142
              <a href="dhttps://octodex.github.com/umbrellatocat/">
                Umbrellatocat
              </a>
              <img class="proimage" src={artist8} alt="artist picture" />
            </section>
          </article>
        </main>
        <footer>© 2013 – 2020 GitHub, Inc. All rights reserved.</footer>
      </body>
    )
  }
}
export default App
