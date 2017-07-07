import React from 'react'

const WrestlerItem = (props) => (
  <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image" />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{props.name}</strong> <small>@{props.twitter}</small>
            <br />
          </p>
        </div>
      </div>
    </article>
  </div>
)

export default WrestlerItem
