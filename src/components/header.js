import React from 'react'

const Nav = () => {
  return (
    <nav className="db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns">
      <a title="Documentation" href="/"
         className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
        Docs
      </a>
      <a title="Components" href="/"
         className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
        Components
      </a>
      <a title="Gallery of sites built with Tachyons" href="/"
         className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
        Gallery
      </a>
      <a title="Resources" href="/"
         className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
        Resources
      </a>
      <a title="Tachyons on GitHub" href="http://github.com/tachyons-css/tachyons/"
         className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dn dib-l">
        GitHub
      </a>
    </nav>
  );
};

const Logo = () => {
  return (
    <div className="db dtc-ns v-mid tl w-50">
      <a href="/" className="dib f5 f4-ns fw6 mt0 mb1 link black-70" title="Home">
        Tachyons
      </a>
    </div>
  );
};

class Header extends React.Component {
  render() {
    return (
      <header className="w-100 pa3 ph5-ns bg-white">
        <div className="db dt-ns mw9 center w-100">
          <Logo/>
          <Nav/>
        </div>
      </header>
    );
  }
}

export default Header;