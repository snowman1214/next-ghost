import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { Animation } from "./_document";
import { useEffect } from "react";
import { Script } from "./_document";

export default function Home() {
  useEffect(() => {
    Animation();
    Script();
  }, []);
  return (
    <>
      <Header />
      <div className="page-dom-content">
        <main data-taxi>
          <article data-taxi-view="default" data-handle="home">
            <div className="page-container">
              <div className="home-container wrapper">
                <div className="b-hero-staggered s:grid s:grid-12">
                  <h1
                    className="heading s:col-start-3 s:col-span-8 "
                    data-triggers="splitWords"
                  >
                    <div className="line-wrapper ">
                      <span className="line line-1">
                        Pioneering AI <a href="research">research</a> & <br />
                      </span>
                    </div>
                    <div className="line-wrapper text-right">
                      <span className="line line-2">
                        <a href="product">products</a> that put privacy  <br />
                      </span>
                    </div>
                    <div className="line-wrapper ">
                      <span className="line line-3">
                       safety as the frontier
                        <br />
                      </span>
                    </div>
                  </h1>
                </div>
                <div
                  className="b-assetCta s:grid s:grid-12 bg-ivory-dark"
                  data-triggers="inViewOnce"
                >
                  <div className="asset-container s:col-start-1 s:col-span-6">
                    <div
                      className="lazyPicture aspect-ratio "
                      style={{ "--aspect": "100%" }}
                      data-scroll
                    >
                      <img
                        className=""
                        sizes="(max-width: 699px) 100vw, 50vw"
                        src="../asserts/images/Claude_CARD_2023-03-105755.png?w=1312&amp;h=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678490184&amp;s=ffaae3d3ba0ead9f397cfd3752386425"
                        srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_CARD_2023-03-10.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678490184&amp;s=deaa00588011529f176b7310201f8b2b 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_CARD_2023-03-10.png?w=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678490184&amp;s=4c432669772c23886a880a435bd7b942 1312w"
                        alt="SuisseGPT CARD 2023 10"
                        style={{ objectPosition: "50% 50%" }}
                      />
                    </div>
                  </div>
                  <div className="cta s:col-start-7 s:col-span-6">
                    <div className="cta-wrapper s:grid s:grid-5">
                      <div className="heading s:col-start-1 s:col-span-5">
                        <h2>Introducing SuisseGPT</h2>
                      </div>
                      <div className="description text-b1 s:col-start-1 s:col-span-4">
                        <p>
                          An advanced AI assistant tailored to accommodate your tasks, irrespective of their magnitude.
                        </p>
                      </div>
                      <div className="s:col-start-1 s:col-span-5">
                        <a
                          className="btn-primary"
                          href="product"
                          aria-label="Meet SuisseGPT"
                        >
                          <span className="btn-label">
                            Meet SuisseGPT
                            <span
                              className="btn-anim"
                              title="Meet SuisseGPT"
                              aria-hidden="true"
                            ></span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="s:grid s:grid-12">
                  <div className="cta-1 s:col-start-1 s:col-span-6 flex spacer-gap-mt">
                    <div
                      className="b-cta bg-kraft contentFadeUp"
                      data-triggers="inViewOnce"
                      data-trigger-start="top 100%"
                    >
                      <h3>Fundamental Perspectives on AI Safety: The Timing, Rationale, Objectives, and Implementation.</h3>
                      <a
                        className="btn-primary"
                        href="index/core-views-on-ai-safety.html"
                        aria-label="Read More"
                      >
                        <span className="btn-label">
                          Read More
                          <span
                            className="btn-anim"
                            title="Read More"
                            aria-hidden="true"
                          ></span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="cta-2 s:col-start-7 s:col-span-6 flex spacer-gap-mt">
                    <div
                      className="b-cta bg-book-cloth contentFadeUp"
                      data-triggers="inViewOnce"
                      data-trigger-start="top 100%"
                    >
                      <h3>Are you keen on contributing to the development of a secure AI future?</h3>
                      <a
                        className="btn-primary"
                        href="careers"
                        aria-label="Work With Us"
                      >
                        <span className="btn-label">
                          Work With Us
                          <span
                            className="btn-anim"
                            title="Work With Us"
                            aria-hidden="true"
                          ></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
}
