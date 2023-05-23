import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { useEffect } from "react";
import { Script } from "./_document";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      Script();
    }, 200);
  }, []);

  const animation = () => {
    setTimeout(() => {
      document.querySelector("h1.heading .line-first").style.opacity = "1";
    }, 200);
    setTimeout(() => {
      document.querySelector("h1.heading .line-second").style.opacity = "1";
    }, 350);
    setTimeout(() => {
      document.querySelector("h1.heading .line-third").style.opacity = "1";
    }, 500);
  };

  return (
    <>
      <NextSeo
        title="SuisseGPT - Private AI models for the modern Enterprise"
        description="
Introducing SuisseGPT - Advanced, Private AI Models Tailored for Today's Enterprises, Proudly Hosted in Switzerland."
        openGraph={{
          url: "http://suissegpt.ai",
          title: "SuisseGPT - Private AI models for the modern Enterprise",
          description:
            "Introducing SuisseGPT - Advanced, Private AI Models Tailored for Today's Enterprises, Proudly Hosted in Switzerland.",
        }}
      />
      <Header />
      <div className="page-dom-content" onLoad={() => animation()}>
        <main data-taxi>
          <article data-taxi-view="default" data-handle="home">
            <div className="page-container">
              <div className="home-container wrapper">
                <div className="b-hero-staggered s:grid s:grid-12">
                  <h1
                    className="heading s:col-start-3 s:col-span-8"
                    data-triggers=""
                  >
                    <div className="line-wrapper line-first">
                      <span className="line line-1">
                        Pioneering AI <Link href="/research">research</Link> &{" "}
                        <br />
                      </span>
                    </div>
                    <div className="line-wrapper line-second text-right">
                      <span className="line line-2">
                        <Link href="product">products</Link> that put privacy{" "}
                        <br />
                      </span>
                    </div>
                    <div className="line-wrapper line-third">
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
                      style={{ Aspect: "100%" }}
                      data-scroll
                    >
                      <img
                        className=""
                        sizes="(max-width: 699px) 100vw, 50vw"
                        src="swiss.png"
                        srcSet="swiss.png"
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
                          An advanced AI assistant tailored to accommodate your
                          tasks, irrespective of their magnitude.
                        </p>
                      </div>
                      <div className="s:col-start-1 s:col-span-5">
                        <link
                          className="btn-primary"
                          href="https://suissegpt.ai/product"
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
                        </link>
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
                      <h3>
                        Fundamental Perspectives on AI Safety: The Timing,
                        Rationale, Objectives, and Implementation.
                      </h3>
                      <link
                        className="btn-primary"
                        href="/coreviews"
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
                      </link>
                    </div>
                  </div>
                  <div className="cta-2 s:col-start-7 s:col-span-6 flex spacer-gap-mt">
                    <div
                      className="b-cta bg-book-cloth contentFadeUp"
                      data-triggers="inViewOnce"
                      data-trigger-start="top 100%"
                    >
                      <h3>
                        Are you keen on contributing to the development of a
                        secure AI future?
                      </h3>
                      <link
                        className="btn-primary"
                        href="/careers"
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
                      </link>
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
