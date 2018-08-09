import React from 'react';

const Responsive = () => {
  return (
    <article className="fl pv2 w-100 w-third-l pr4-l">
      <h2 className="f5 f4-ns fw6 mb0">Responsive</h2>
      <p className="f6 f5-ns measure lh-copy mt0">
        Everything should be 100% responsive. Your website should work regardless of a user’s
        device or screensize.
      </p>
    </article>
  );
};

const Readable = () => {
  return (
    <article className="pv2 fl w-100 w-third-l ph3-l">
      <h2 className="f5 f4-ns fw6 mb0">Readable</h2>
      <p className="f6 f5-ns measure lh-copy mt0">
        No matter the lighting, or the device, font-sizes should be
        large enough and contrast should be high enough for your
        users to easily read your content.
      </p>
    </article>
  );
};

const Modular = () => {
  return (
    <article className="pv2 fl w-100 w-third-l pl4-l">
      <h2 className="f5 f4-ns  fw6 mb0">
        Modular
      </h2>
      <p className="f6 f5-ns measure lh-copy mt0">
        Tachyons isn’t just a monolithic framework. It’s a collection of small modules
        that can be mixed and matched or used independently. Use what you need. Leave the rest.
      </p>
    </article>
  );
};

const Accessible = () => {
  return (
    <article className="pv2 fl w-100 w-third-l pl0 pr4-l">
      <h2 className="f5 f4-ns fw6 mb0">Accessible</h2>
      <p className="f6 f5-ns measure lh-copy mt0">
        Accessibility is important to us. Throughout both the css
        and the documentation we provide numerous tools and methods for making it
        easier to maximize the accessibility of your site.
      </p>
    </article>
  );
};

const Performant = () => {
  return (
    <article className="pv2 fl w-100 w-third-l ph3-l">
      <h2 className="f5 f4-ns  fw6 mb0">Performant</h2>
      <p className="f6 f5-ns measure lh-copy mt0">
        Code should be optimized for performance.
      </p>
    </article>
  );
};

const Reusable = () => {
  return (
    <article className="pv2 fl w-100 w-third-l pl4-l">
      <h2 className="f5 f4-ns fw6 mb0">
        Reusable
      </h2>
      <p className="f6 f5-ns measure lh-copy mt0">
        Clear documentation helps create a shared understanding of design patterns amongst your team.
        This helps promote reuse and reduces the amount of redundancy in a codebase.
      </p>
    </article>
  );
};

class Principles extends React.Component {
  render() {
    return (
      <div className="tl bt b--black-10 pa3 pa5-ns bg-lightest-blue navy" id="principles">
        <div className="mw9 center">
          <h1 className="f5 ttu tracked fw6">Principles</h1>
          <section className="lh-copy">
            <div className="cf">
              <Responsive/>
              <Readable/>
              <Modular/>
            </div>
            <div className="cf w-100">
              <Accessible/>
              <Performant/>
              <Reusable/>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Principles;