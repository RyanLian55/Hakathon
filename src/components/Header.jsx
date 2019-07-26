import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header_area">
        <div className="main_menu">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png"
                                                                          alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                  <ul className="nav navbar-nav menu_nav ml-auto">
                    <li className="nav-item active"><a className="nav-link"
                                                       href="index.html">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="about-us.html">About</a>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="about-us.html">About</a>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="about-us.html">About</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
