import React from 'react';


export default function Header() {
  const style = {
    "background": "url(img/bg_darken.jpg)"
  }

  return (
    <div style={style} className="section no-pad-bot parallax-container background responsive-img" id="index-banner">
      <div className="container">
        <br />
        <br />
        <h1 className="header center">
          <a className="red-text text-shadow text-accent-4" href="{{ url('/') }}">
            RockLog
          </a>
        </h1>
        <div className="row center">
        <h5 className="header col s12 light white-text text-shadow">Naujausios dainos iš <a className="red-text" href="http://www.rock.lt">Classic Rock FM</a></h5>
        </div>
        <br />
        <br />
      </div>
    </div>
  )
}