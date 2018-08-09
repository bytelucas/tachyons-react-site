import React from 'react';

const FirstQuote = () => {
  return (
    <blockquote className="fl w-100 mh0 mb4 mb5-ns border-box pb5 bb b--black-50">
      <p className="f4 f2-m mt0 db fl w-100 f-subheadline-l lh-copy lh-title-l measure mb4 fw6">
        Here’s why I think designing systems with tools/frameworks like Tachyons
        is a Good Idea™.
      </p>
      <p className="fl w-100 w-50-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l">
        Design Systems break as they scale (either scaling org or
        scaling product) because new components/variants of a component
        are introduced. Those variants sometimes (read: often) go
        undocumented, leading to duplication when that
        component/variant is needed (and created) again. Even when the
        component is documented, documenting effectively often means
        dozens/hundreds of instances to capture all states/variants.
        Systems like Tachyons et al. approach this problem by instead
        documenting and limiting *properties* of components. (I like
        to think of this as “subatomic” design.)
      </p>
      <p className="fl w-100 w-50-l mh0 mt0 pl0 pl3-l measure lh-copy f5 f4-l">
        You then create
        components by composing subatomic components (properties).
        Rather than creating a component and its variants, you simply
        have a comprehensive list of “ingredient” subatomic components.
        Those subatomic components can be combined in thousands of ways
        to create hundreds of components. The properties of those
        components are numerous, but constrained to a set of acceptable
        values (our subatomic components).”
      </p>
      <cite className="fl w-100 mt2 f5 f4-m f3-l fs-normal">
        <span className="fw6">Daniel Eden</span>
        <span className="db f5">Designer at Facebook</span>
      </cite>
    </blockquote>
  );
};

const SecondQuote = () => {
  return (
    <blockquote className="fl w-100 ph0 border-box mh0 mb4 mb5-ns pb5 bb b--black-50">
      <p className="f3 f1-ns measure fw7 lh-title mt0">
        One of the comments I hear most frequently about Zarf’s design is ‘I love the minimalism!’ Zarf’s
        minimalist
        experience is completely powered by Tachyons. With Tachyons, I was able to build a product with a
        cohesive
        design story with minimal hassle and debugging. Tachyons truly made developing the design for Zarf fun.
      </p>
      <cite className="mtw f5 f4-m f3-l fs-normal">
        <span className="fw6">Safia Abdalla</span>
        <span className="db f5"><a className="link black-70 dim" href="http://tanmulabs.com"
                                   title="Tanmu Labs">Tanmu Labs</a></span>
      </cite>
    </blockquote>
  );
};

const ThirdQuote = () => {
  return (
    <blockquote className="fl w-100 ph0 border-box mh0 mb4 mb5-ns pb5 bb b--black-50">
      <p className="f3 f1-ns measure fw7 lh-title mt0">
        As a front-end developer turned full-stack developer, I
        appreciate maintainable and scalable front-end code, while
        having very little time to implement it myself. Tachyons lets
        me achieve custom results designers are happy with without me
        having to spend too much time writing custom CSS
      </p>
      <cite className="mtw f5 f4-m f3-l fs-normal">
        <span className="fw6">Tessa Thornton</span>
        <span className="db f5">CTO of <a className="link black-70 dim" href="https://dothealth.ca" title="Dot Health">Dot Health</a></span>
      </cite>
    </blockquote>
  );
};

const FourthQuote = () => {
  return (
    <blockquote className="fl w-100 ph0 border-box mh0 mb4 mb5-ns pb5 bb b--black-50">
      <p className="f3 f1-ns measure fw7 lh-title mt0">
        Tachyons has seriously blown my mind. Making landing pages responsive is now… somehow… actually fun?!
      </p>
      <cite className="mtw f5 f4-m f3-l fs-normal">
        <span className="fw6">Ian Storm Taylor</span>
        <span className="db f5">Co-founder of <a className="link black-70 dim" href="https://segment.com"
                                                 title="Segment.com">Segment.com</a></span>
      </cite>
    </blockquote>
  );
};

const FifthQuote = () => {
  return (
    <blockquote className="fl w-100 ph0 border-box mh0 mb4 mb5-ns pb5 bb b--black-50">
      <p className="f3 f1-ns measure fw7 lh-title mt0">
        I used Tachyons for the first time on <a className="link dim black-80 underline"
                                                 href="http://goldenstaterecord.com">goldenstaterecord.com</a>.
        Really fast to make big changes to the design in-flight. 👍
      </p>
      <cite className="mtw f5 f4-m f3-l fs-normal">
        <span className="fw6">Wilson Miner</span>
        <span className="db f5">Digital Design - The California Sunday Magazine</span>
      </cite>
    </blockquote>
  );
};

const SixthQuote = () => {
  return (
    <blockquote className="fl w-100 ph0 border-box mh0 pb5">
      <p className="f3 f1-ns measure fw7 lh-title mt0">
        Tachyons is powerful, obvious, and well documented. It’s made me rethink my approach to building
        organized
        and componentized CSS. I highly recommend you try it.
      </p>
      <cite className="mtw f5 f4-m f3-l fs-normal">
        <span className="fw6">Dustin Senos</span>
        <span className="db f5">Designer</span>
      </cite>
    </blockquote>
  );
};

class Testimonials extends React.Component {
  render() {
    return (
      <section class="bg-green black-80 pv5 pv6-ns bb bt b--black-10" id="testimonials">
        <div class="ph3 ph5-ns">
          <div class="center mw9">
            <h3 class="f5 fw6 ttu tracke">Testimonials</h3>
          </div>
          <div class="cf w-100 center mw9">
            <FirstQuote/>
            <SecondQuote/>
            <ThirdQuote/>
            <FourthQuote/>
            <FifthQuote/>
            <SixthQuote/>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;