import React from 'react';

export default function Body() {
  const style = {
    "minHeight": "500px"
  }

  return (
    <div className="container">
      <div className="row grey darken-4" style={style}>
        <div className="col s12 m10 l6 offset-m1">
          <br/>
          <ul className="collapsible grey darken-4" data-collapsible="accordion">
            <ul className="collection">
              <li className="collection-item grey darken-3 grey-text">
                {/* @if(is_null($fb_user)) */}
                  <p className="grey-text">Prisijunk su <a href="redirect">Facebook</a> ir išsaugok dainas!</p>
                {/* @else
                  <div className="fb-avatar" style="background-image: url('{{ $fb_user->getAvatar() }}');"></div>
                  <p className="center-align">
                    <a href="{{ $link }}">{{ $link_text }}</a>
                    <a href="logout" className="secondary-content">
                      <i className="material-icons grey-text logout-icon">input</i>
                    </a>
                  </p>
                @endif */}
              </li>
            </ul>
            <br/>

            <li>
              <div className="song collapsible-header red darken-4 white-text">
                <b className="artist">Atlikejas</b> - <span className="song">Daina</span>
                <a href="#!" className="secondary-content" id="{{ $song->song_id}} ">
                  <i className="material-icons star-icon @if($song->saved) stared @endif">grade</i>
                </a>
              </div>
              <div className="collapsible-body grey darken-4">
                <div className="video-container" id="video-container"></div>
              </div>
            </li>

            {/* @if (empty($songs))
              <ul className="collection">
                <li className="collection-item grey darken-3 grey-text">
                  <p className="grey-text">Nėra išsaugotų dainų</p>
                </li>
              </ul>
            @endif */}

          </ul>
        </div>
      </div>
    </div>

    // <div id="player"></div>
  )
}
