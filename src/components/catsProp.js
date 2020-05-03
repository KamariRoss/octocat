import React from 'react'

function CatsProp(props) {
  return (
    <section>
      <a href={props.catImgLink}>
        <img class="icon" src={props.catImgSrc} alt="terracottocat" />
      </a>
      {props.catNumber} <a href={props.catImgLink}>{props.catTitle}</a>
      <img class="proimage" src={props.catArtistSrc} alt={props.catArtistAlt} />
    </section>
  )
}

export default CatsProp
