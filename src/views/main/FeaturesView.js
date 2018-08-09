import React from 'react';

const QuotesOne = () => {
  return (
    <article className="pv2 fl w-100 ">
      <h2 className="f4 f1-ns fw6 mb2">Open source component library</h2>
      <p className="f5 f4-ns measure lh-copy mt0">
        There is a <a href="/" className="black dim" title="Tachyons components">growing library of
        open
        source components</a> written in static html that are easy
        to use as is, customize with your own theme, or port to a templating language.
      </p>
    </article>
  );
};

const QuotesTwo = () => {
  return (
    <div className="cf">
      <article className="pv2 fl w-100 w-50-l pr0 pr2-l">
        <h2 className="f4 f2-ns fw6 mb2">Lightweight</h2>
        <p className="f5 measure lh-copy mt0">
          The entire library is fewer than 14kb when minified and
          gzipped. If you want to get even smaller, it’s easy to strip out what you don’t
          need.
        </p>
      </article>
      <article className="pv2 fl w-100 w-50-l pl0 pl2-l">
        <h2 className="f4 f2-ns fw6 mb2">Documentation</h2>
        <p className="f5 measure lh-copy mt0">
          Each module is carefully documented. From stats about the size of the module,
          to how each css class will render to the screen.
        </p>
      </article>
    </div>
  );
};

const QuotesThree = () => {
  return (
    <div className="cf">
      <article className="pv2 fl w-100 w-50-l pr0 pr2-l">
        <h2 className="f4 f2-ns fw6 mb2">Functional</h2>
        <p className="f5 measure lh-copy mt0">
          It’s easy to build components with Tachyons so
          it works well with Rails, React, Ember, Elm, Angular, Static html,
          and more.
        </p>
      </article>
      <article className="pv2 fl w-100 w-50-l pl0 pl2-l">
        <h2 className="f4 f2-ns fw6 mb2">Multiple Flavors</h2>
        <p className="f5 measure lh-copy mt0">
          Don’t like the class names? We’ve got <a className="black dim"
                                                   href="https://github.com/tachyons-css/tachyons-verbose">a
          more verbose version you might like</a>.
          Want to use Sass instead of Postcss? <a className="black dim"
                                                  href="http://github.com/tachyons-css/tachyons-sass">We‘ve got
          a repo for that too :)</a> Tachyons isn’t just a css toolkit. It’s a design system. Utilized here in
          a <a className="black dim" href="https://github.com/tachyons-css/react-native-style-tachyons">react
          native
          boilerplate.</a>
        </p>
      </article>
    </div>
  );
};

const QuotesFour = () => {
  return (
    <div className="cf">
      <article className="pv2 fl w-100 w-50-l pr0 pr2-l">
        <h2 className="f4 f2-ns fw6 mb2">Shallow Cascade</h2>
        <p className="f5 measure lh-copy mt0">
          Don’t let the cascade slow you down. When you apply a class
          to an element, there is nothing in the cascade to override
          its effects. You get rapid feedback on how your css is
          affecting your markup without wasting time debugging why your
          styles are being overridden.
        </p>
      </article>
      <article className="pv2 fl w-100 w-50-l pl0 pl2-l">
        <h2 className="f4 f2-ns fw6 mb2">Low Specificity</h2>
        <p className="f5 measure lh-copy mt0">
          The majority of Tachyons selectors have a specificity of
          10. Tachyons won’t override your existing styles. So feel
          free to lay it on top of your existing css.
        </p>
      </article>
    </div>
  );
};

const QuotesFive = () => {
  return (
    <div className="cf">
      <article className="pv2 fl w-100 w-50-l pr0 pr2-l">
        <h2 className="f4 f2-ns fw6 mb2">Accessible Color Palette</h2>
        <p className="f5 measure lh-copy mt0">
          Over 480 accessible color combinations.
        </p>
      </article>
      <article className="pv2 fl w-100 w-50-l pl0 pl2-l">
        <h2 className="f4 f2-ns fw6 mb2">Mobile-first architecture </h2>
        <p className="f5 measure lh-copy mt0">
          Base classes are mobile by default. Can be overridden by
          namespaced classes targeting larger breakpoints.
        </p>
      </article>
    </div>
  );
};

const QuotesSix = () => {
  return (
    <div className="cf">
      <article className="pv2 fl w-100 w-50-l pr0 prl-ns">
        <h2 className="f4 f2-ns fw6 mb2">
          Layout debugging
        </h2>
        <p className="f5 measure lh-copy mt0">
          Small css modules for debugging stacking and layout issues.
          Can easily be turned on or off during development.
        </p>
      </article>
      <article className="pv2 fl w-100 w-50-l pl0 pl2-l">
        <h2 className="f4 f2-ns fw6 mb2">
          Composable classes
        </h2>
        <p className="f5 measure lh-copy mt0">
          Construct anything from complex layouts to responsive components with a series of
          single purpose classes.
        </p>
      </article>
    </div>
  );
};

const QuotesSeven = () => {
  return (
    <div className="cf">
      <article className="pv2 fl w-100 w-50-l pr0 pr2-l">
        <h2 className="f4 f2-ns fw6 mb2">Cohesive design system</h2>
        <p className="f5 measure lh-copy mt0">
          Scale based on the powers of two. Starting at .25
        </p>
      </article>
      <article className="pv2 fl w-100 w-50-l pl0 pl2-l">
        <h2 className="f4 f2-ns fw6 mb2">Responsive Grid</h2>
        <p className="f5 measure lh-copy mt0">
          Infinitely nestable. Fully fluid. Extremely light-weight.
        </p>
      </article>
    </div>
  );
};

const QuotesEight = () => {
  return (
    <div className="cf">
      <article className="pv2 fl w-100 w-50-l pr0 pr2-l">
        <h2 className="f4 f2-ns fw6 mb2">
          Runs on <a href="https://github.com/postcss/postcss" className="link dim near-black">Postcss</a>
        </h2>
        <p className="mv0 f5 lh-copy measure">
          A flexible plugin framework for post-processing css.
          <a href="https://github.com/postcss/postcss" className="
                      dim f6 db black">View on GitHub</a>
        </p>
      </article>
      <article className="pv2 fl w-100 w-50-l pl0 pl2-l">
        <h2 className="f4 f2-ns fw6 mb2">
          Easy to Customize and extend
        </h2>
        <p className="f5 measure lh-copy mt0">
          Tachyons is meant to be edited and customized to meet the
          needs of your project. It’s just css. It isn’t precious.
          Don’t be afraid to change: class names, media queries,
          breakpoints, or values.
        </p>
      </article>
    </div>
  );
};

class Features extends React.Component {
  render() {
    return (
      <div>
        <section className="cf ph3 ph5-ns pb5 bg-yellow black-70" id="features">
          <div className="mw9 center">
            <h1 className="fl w-100 mt5 f5 ttu tracked fw6">Features</h1>
            <QuotesOne/>
            <QuotesTwo/>
            <QuotesThree/>
            <QuotesFour/>
            <QuotesFive/>
            <QuotesSix/>
            <QuotesSeven/>
            <QuotesEight/>
          </div>
        </section>
      </div>
    );
  }
}

export default Features;