import React from 'react';

export class GetStartedBanner extends React.Component {
  render() {
    return (
      <section className="tc pv5 bb bt b--black-10 bg-washed-blue">
        <div className="ph3 ph5-ns">
          <h3 className="f5 fw6 ttu tracked black-70 mb4">Start using Tachyons</h3>
          <a className="no-underline grow pa3 br2 bg-blue white mr3 mb3 dib" href="/">Read the Docs</a>
          <a className="no-underline grow pa3 br2 bg-blue white mr3 mb3 dib" href="/">View Component
            Library</a>
          <a className="no-underline grow pa3 br2 bg-blue white mr3 dib"
             href="http://unpkg.com/tachyons/css/tachyons.min.css">Download the Code</a>
        </div>
      </section>
    );
  }
}

export class ClientsBanner extends React.Component {
  render() {
    return (
      <section className="bg-white black-70 bt b--black-10">
        <div className="ph3 ph5-ns pt6 mb6">
          <div className="mw9 center">
            <h3 className="f6 fw6 mt0 mb4 tc ttu tracked">Used by people at</h3>
            <div className="dt dt--fixed mw6 mw7-l center">
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100"
                                                  src="http://logo.clearbit.com/californiasunday.com?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100"
                                                  src="http://logo.clearbit.com/gds.blog.gov.uk?size=256"/>
              </div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100"
                                                  src="http://logo.clearbit.com/amazon.com?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100"
                                                  src="http://logo.clearbit.com/ibm.com?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100"
                                                  src="http://logo.clearbit.com/jaguar.com?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100"
                                                  src="http://logo.clearbit.com/hillaryclinton.com?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100"
                                                  src="http://logo.clearbit.com/nerdwallet.com?size=256"/>
              </div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100"
                                                  src="http://logo.clearbit.com/egghead.io?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100"
                                                  src="http://logo.clearbit.com/heroku.com?size=256"/></div>
            </div>
            <div className="dt dt--fixed mw6 mw7-l center">
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100"
                                                  src="http://logo.clearbit.com/tesla.com?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100"
                                                  src="http://logo.clearbit.com/npr.org?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100"
                                                  src="http://logo.clearbit.com/airbnb.com?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100"
                                                  src="http://logo.clearbit.com/facebook.com?size=256"/>
              </div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100"
                                                  src="http://logo.clearbit.com/nest.com?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100"
                                                  src="http://logo.clearbit.com/twitter.com?size=256"/>
              </div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100"
                                                  src="http://logo.clearbit.com/salesforce.com?size=256"/>
              </div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100"
                                                  src="http://logo.clearbit.com/bluebottlecoffee.com?size=256"/></div>
              <div className="dtc pa2 pa3-l"><img className="br2 db w-100"
                                                  src="http://logo.clearbit.com/ted.com?size=256"/></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

