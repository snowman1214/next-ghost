import Link from "next/link";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { useEffect, useState } from "react";
import { Script } from "./_document";
import { Animation } from "./_document";
import { NextSeo } from "next-seo";


export default function News() {
  const [isListView, setIsListView] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      Script();
    }, 200);
  }, []);

  const animation = () => {
    setTimeout(() => {
      document.querySelector(".news-heading").style.opacity = "1";
    }, 200);
  };

  const toggleView = () => {
    setIsListView(!isListView);
  };

  return (
    <>
      <NextSeo
        title="News from SuisseGPT - Private AI models for the modern Enterprise"
        description="
Learn the latest about SuisseGPT and our research."
        openGraph={{
          url: "http://suissegpt.ai",
          title:
            "News from SuisseGPT - Private AI models for the modern Enterprise",
          description: "Learn the latest about SuisseGPT and our research.",
        }}
      />
      <Header />
      <div className="page-dom-content " onLoad={() => animation()}>
        <main data-taxi="">
          <article data-taxi-view="default" data-handle="index">
            <div className="page-container">
              <div
                className="index-container wrapper"
                data-triggers=""
                data-trigger-stagger="0.2"
              >
                <h2 className="page news-heading">News</h2>
              </div>

              <div
                className={
                  isListView ? "b-postList is-view-list" : "b-postList"
                }
              >
                <div className="wrapper">
                  <div
                    className="post-list-refinement contentFade isFirst is-inview"
                    data-triggers="inViewOnce"
                  >
                    <div className="search-container">
                      <label
                        className="search-label"
                        htmlFor="post-list-search"
                      >
                        <input
                          id="post-list-search"
                          type="text"
                          placeholder="Search"
                        />
                        <button
                          className="btn-search-clear"
                          disabled=""
                          aria-label="Clear search"
                        >
                          <span
                            className="icon-search"
                            style={{ display: "inline" }}
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m19.55 20.575-6.3-6.275c-.5.417-1.075.742-1.725.975-.65.233-1.316.35-2 .35-1.716 0-3.166-.592-4.35-1.775C3.992 12.667 3.4 11.217 3.4 9.5c0-1.7.592-3.146 1.775-4.338C6.36 3.971 7.81 3.375 9.525 3.375c1.7 0 3.142.592 4.325 1.775 1.184 1.183 1.775 2.633 1.775 4.35 0 .717-.116 1.4-.35 2.05a5.612 5.612 0 0 1-.95 1.7l6.275 6.275-1.05 1.05Zm-10.025-6.45c1.284 0 2.371-.45 3.263-1.35.892-.9 1.337-1.992 1.337-3.275s-.445-2.375-1.337-3.275c-.892-.9-1.98-1.35-3.263-1.35-1.3 0-2.395.45-3.287 1.35C5.346 7.125 4.9 8.217 4.9 9.5s.446 2.375 1.338 3.275c.892.9 1.987 1.35 3.287 1.35Z"
                                fill="#191919"
                              ></path>
                            </svg>{" "}
                          </span>
                          <span
                            className="icon-clear"
                            style={{ display: "none" }}
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.4 18.65 5.35 17.6l5.6-5.6-5.6-5.6L6.4 5.35l5.6 5.6 5.6-5.6 1.05 1.05-5.6 5.6 5.6 5.6-1.05 1.05-5.6-5.6-5.6 5.6Z"
                                fill="#191919"
                              ></path>
                            </svg>{" "}
                          </span>
                        </button>
                      </label>

                      <button className="btn-refine">
                        <span className="label">Refine</span>
                        <span className="icons">
                          <span className="icon icon-filter">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.25 17.75v-1.5h3.5v1.5h-3.5Zm-4-5.2v-1.5h11.5v1.5H6.25Zm-3-5.175v-1.5h17.5v1.5H3.25Z"
                                fill="#191919"
                              ></path>
                            </svg>{" "}
                          </span>
                          <span className="icon icon-filter-open">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.25 20.75v-1.5h3.5v1.5h-3.5Zm-4-8.2v-1.5h11.5v1.5H6.25Zm-3-8.175v-1.5h17.5v1.5H3.25Z"
                                fill="#191919"
                              ></path>
                            </svg>{" "}
                          </span>
                        </span>
                      </button>

                      <button className="btn-view" onClick={toggleView}>
                        <span className="label">View</span>
                        <span className="icons">
                          <span
                            className="icon icon-grid"
                            style={{ display: "block" }}
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 19.625c-.45 0-.833-.158-1.15-.475A1.566 1.566 0 0 1 4.375 18c0-.45.158-.833.475-1.15.317-.317.7-.475 1.15-.475.45 0 .833.158 1.15.475.317.317.475.7.475 1.15 0 .45-.158.833-.475 1.15-.317.317-.7.475-1.15.475Zm6 0c-.45 0-.833-.158-1.15-.475a1.566 1.566 0 0 1-.475-1.15c0-.45.158-.833.475-1.15.317-.317.7-.475 1.15-.475.45 0 .833.158 1.15.475.317.317.475.7.475 1.15 0 .45-.158.833-.475 1.15-.317.317-.7.475-1.15.475Zm6 0c-.45 0-.833-.158-1.15-.475a1.566 1.566 0 0 1-.475-1.15c0-.45.158-.833.475-1.15.317-.317.7-.475 1.15-.475.45 0 .833.158 1.15.475.317.317.475.7.475 1.15 0 .45-.158.833-.475 1.15-.317.317-.7.475-1.15.475Zm-12-6c-.45 0-.833-.158-1.15-.475A1.566 1.566 0 0 1 4.375 12c0-.45.158-.833.475-1.15.317-.317.7-.475 1.15-.475.45 0 .833.158 1.15.475.317.317.475.7.475 1.15 0 .45-.158.833-.475 1.15-.317.317-.7.475-1.15.475Zm6 0c-.45 0-.833-.158-1.15-.475a1.566 1.566 0 0 1-.475-1.15c0-.45.158-.833.475-1.15.317-.317.7-.475 1.15-.475.45 0 .833.158 1.15.475.317.317.475.7.475 1.15 0 .45-.158.833-.475 1.15-.317.317-.7.475-1.15.475Zm6 0c-.45 0-.833-.158-1.15-.475a1.566 1.566 0 0 1-.475-1.15c0-.45.158-.833.475-1.15.317-.317.7-.475 1.15-.475.45 0 .833.158 1.15.475.317.317.475.7.475 1.15 0 .45-.158.833-.475 1.15-.317.317-.7.475-1.15.475Zm-12-6c-.45 0-.833-.158-1.15-.475A1.566 1.566 0 0 1 4.375 6c0-.45.158-.833.475-1.15.317-.317.7-.475 1.15-.475.45 0 .833.158 1.15.475.317.317.475.7.475 1.15 0 .45-.158.833-.475 1.15-.317.317-.7.475-1.15.475Zm6 0c-.45 0-.833-.158-1.15-.475A1.566 1.566 0 0 1 10.375 6c0-.45.158-.833.475-1.15.317-.317.7-.475 1.15-.475.45 0 .833.158 1.15.475.317.317.475.7.475 1.15 0 .45-.158.833-.475 1.15-.317.317-.7.475-1.15.475Zm6 0c-.45 0-.833-.158-1.15-.475A1.566 1.566 0 0 1 16.375 6c0-.45.158-.833.475-1.15.317-.317.7-.475 1.15-.475.45 0 .833.158 1.15.475.317.317.475.7.475 1.15 0 .45-.158.833-.475 1.15-.317.317-.7.475-1.15.475Z"
                                fill="#191919"
                              ></path>
                            </svg>{" "}
                          </span>
                          <span
                            className="icon icon-list"
                            style={{ display: "none" }}
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.25 17.75v-1.5h17.5v1.5H3.25Zm0-5.2v-1.5h17.5v1.5H3.25Zm0-5.175v-1.5h17.5v1.5H3.25Z"
                                fill="#191919"
                              ></path>
                            </svg>{" "}
                          </span>
                        </span>
                      </button>
                    </div>

                    <div className="refinement-container s:grid s:grid-12">
                      <div
                        className="post-types-subjects-container s:col-start-1 s:col-span-10 s:grid s:grid-12"
                        style={{
                          maxHeight: "0px",
                          opacity: "0",
                          pointerEvents: "none",
                        }}
                      >
                        <div
                          id="post-types"
                          className="refinement-group s:col-start-1 s:col-span-2"
                        >
                          <h4>Type</h4>

                          <label className="refine-label" htmlFor="btn-type-1">
                            <input
                              id="btn-type-1"
                              className="btn-type"
                              type="radio"
                              name="post-types"
                              data-category="company"
                            />
                            <span>Company</span>
                          </label>

                          <label className="refine-label" htmlFor="btn-type-2">
                            <input
                              id="btn-type-2"
                              className="btn-type"
                              type="radio"
                              name="post-types"
                              data-category="product"
                            />
                            <span>Product</span>
                          </label>

                          <label className="refine-label" htmlFor="btn-type-3">
                            <input
                              id="btn-type-3"
                              className="btn-type"
                              type="radio"
                              name="post-types"
                              data-category="research"
                            />
                            <span>Research</span>
                          </label>
                        </div>

                        <div
                          id="post-subjects"
                          className="refinement-group s:col-start-3 s:col-span-8"
                        >
                          <h4>Subject</h4>

                          <div className="refinement-btn-container">
                            <div className="refinement-btn-wrapper">
                              <label
                                className="refine-label"
                                htmlFor="btn-subject-1"
                              >
                                <input
                                  id="btn-subject-1"
                                  className="btn-subject"
                                  type="checkbox"
                                  name="post-subjects"
                                  data-category="announcements"
                                  disabled=""
                                />
                                <span>Announcements</span>
                              </label>

                              <label
                                className="refine-label"
                                htmlFor="btn-subject-2"
                              >
                                <input
                                  id="btn-subject-2"
                                  className="btn-subject"
                                  type="checkbox"
                                  name="post-subjects"
                                  data-category="interpretability"
                                  disabled=""
                                />
                                <span>Interpretability</span>
                              </label>

                              <label
                                className="refine-label"
                                htmlFor="btn-subject-3"
                              >
                                <input
                                  id="btn-subject-3"
                                  className="btn-subject"
                                  type="checkbox"
                                  name="post-subjects"
                                  data-category="societal-impact"
                                  disabled=""
                                />
                                <span>Societal Impact</span>
                              </label>

                              <label
                                className="refine-label"
                                htmlFor="btn-subject-4"
                              >
                                <input
                                  id="btn-subject-4"
                                  className="btn-subject"
                                  type="checkbox"
                                  name="post-subjects"
                                  data-category="alignment"
                                  disabled=""
                                />
                                <span>Alignment</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="refine-selection-container s:col-start-1 s:col-span-10 s:grid s:grid-10"
                        style={{ opacity: "1" }}
                      >
                        <div className="refine-selection-content-cover s:col-start-1 s:col-span-10"></div>
                        <div
                          className="refine-selection-content s:col-start-1 s:col-span-10"
                          style={{ pointerEvents: "auto" }}
                        ></div>
                      </div>

                      <div className="reset-container s:col-start-11 s:col-span-2">
                        <button className="btn-reset btn-primary">Reset</button>
                      </div>
                    </div>
                  </div>

                  <h3 className="no-results-found" style={{ display: "none" }}>
                    No results found.
                  </h3>

                  {!isListView && (
                    <div
                      className="block-content post-content is-masonry s:grid s:grid-12 spacer-medium-mt contentFadeUp is-inview"
                      data-triggers="inViewOnce"
                    >
                      <div className="post-col post-col-1 s:col-start-1 s:col-span-6 m:col-start-1 m:col-span-4">
                        <Link
                          className="post post-1  s:col-start-1 s:col-span-6 m:col-start-1 m:col-span-4"
                          href="/demand"
                          data-id="144538"
                          data-categories="company, announcements"
                          style={{ display: "block" }}
                        >
                          <div className="post-card-photo">
                            <div
                              className="lazyPicture aspect-ratio "
                              style={{ Aspect: "100%" }}
                              data-scroll=""
                            >
                              <img
                                className=""
                                sizes="(max-width: 699px) 100vw, 33vw"
                                src="policy.png"
                                srcSet="policy.png 1024w, policy.png 1312w"
                                alt="Zoom card"
                                style={{ objectPosition: "50% 50%" }}
                              />
                            </div>
                          </div>

                          <div className="post-info">
                            <div className="post-category text-label">
                              Company{" "}
                            </div>

                            <div className="post-heading h4">
                             Demand and SuisseAI set a new standard in Sales
                            </div>

                            <div className="post-timestamp text-label">
                              May 16, 2023
                              <span className="is-bullet">●</span>
                              56 sec read
                            </div>
                          </div>
                        </Link>
                        <Link
                          className="post post-5  s:col-start-1 s:col-span-6 m:col-start-5 m:col-span-4"
                          href="https://www.suissegpt.ai/suisseblocks"
                          data-id="143906"
                          data-categories="company, announcements"
                          style={{ display: "block" }}
                        >
                          <div className="post-card-photo">
                            <div
                              className="lazyPicture aspect-ratio "
                              style={{ Aspect: "100%" }}
                              data-scroll=""
                            >
                              <img
                                className=""
                                sizes="(max-width: 699px) 100vw, 33vw"
                                src="policy.png"
                                srcSet="policy.png 1024w, policy.png 1312w"
                                alt="Demand Card V2"
                                style={{ objectPosition: "50% 50%" }}
                              />
                            </div>
                          </div>

                          <div className="post-info">
                            <div className="post-category text-label">
                              Company{" "}
                            </div>

                            <div className="post-heading h4">
                              SuisseAI and Swissblock Private Equity Announce Strategic Partnership to Integrate Generative AI Across All Investments
                            </div>

                            <div className="post-timestamp text-label">
                              Apr 29, 2023
                              <span className="is-bullet">●</span>1 min read
                            </div>
                          </div>
                        </Link>
                        <Link
                          className="post post-7  s:col-start-1 s:col-span-6 m:col-start-1 m:col-span-4"
                          href="https://www.suissegpt.ai/coreviews"
                          data-id="59890"
                          data-categories="product, announcements"
                          style={{ display: "block" }}
                        >
                          <div className="post-card-photo">
                            <div
                              className="lazyPicture aspect-ratio "
                              style={{ Aspect: "100%" }}
                              data-scroll=""
                            >
                              <img
                                className=""
                                sizes="(max-width: 699px) 100vw, 33vw"
                                src="policy.png"
                                srcSet="policy.png 1024w, policy.png 1312w"
                                alt="Demand Card"
                                style={{ objectPosition: "50% 50%" }}
                              />
                            </div>
                          </div>

                          <div className="post-info">
                            <div className="post-category text-label">
                              Research{" "}
                            </div>

                            <div className="post-heading h4">
                              SuisseGPT's Comprehensive Perspectives on Artificial Intelligence Safety: Timelines, Justifications, Objectives, and Strategies
                            </div>

                            <div className="post-timestamp text-label">
                              May 24, 2023
                              <span className="is-bullet">●</span>3 min read
                            </div>
                          </div>
                        </Link>

                      </div>
                      <div className="post-col post-col-2 s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4">
                        <Link
                          className="post post-2  s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4"
                          href="/predictablemodels"
                          data-id="144353"
                          data-categories="product, announcements"
                          style={{ display: "block" }}
                        >
                          <div className="post-card-photo">
                            <div
                              className="lazyPicture aspect-ratio "
                              style={{ Aspect: "100%" }}
                              data-scroll=""
                            >
                              <img
                                className=""
                                sizes="(max-width: 699px) 100vw, 33vw"
                                src="policy.png"
                                srcSet="policy.png 1024w, policy.png 1312w"
                                alt="General Console Improvements Card"
                                style={{ objectPosition: "50% 50%" }}
                              />
                            </div>
                          </div>

                          <div className="post-info">
                            <div className="post-category text-label">
                              Research{" "}
                            </div>

                            <div className="post-heading h4">
                              Predictability Versus Surprise: The Paradox of Large Generative Models
                            </div>

                            <div className="post-timestamp text-label">
                              May 11, 2023
                              <span className="is-bullet">●</span>1 min read
                            </div>
                          </div>
                        </Link>


                      </div>
                      <div className="post-col post-col-2 s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4">
                        <Link
                            className="post post-2  s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4"
                            href="/suisseai"
                            data-id="144353"
                            data-categories="product, announcements"
                            style={{ display: "block" }}
                        >
                          <div className="post-card-photo">
                            <div
                                className="lazyPicture aspect-ratio "
                                style={{ Aspect: "100%" }}
                                data-scroll=""
                            >
                              <img
                                  className=""
                                  sizes="(max-width: 699px) 100vw, 33vw"
                                  src="policy.png"
                                  srcSet="policy.png 1024w, policy.png 1312w"
                                  alt="General Console Improvements Card"
                                  style={{ objectPosition: "50% 50%" }}
                              />
                            </div>
                          </div>

                          <div className="post-info">
                            <div className="post-category text-label">
                              Research{" "}
                            </div>

                            <div className="post-heading h4">
                              Announcing the Launch of Our Private, Swiss-Made Generative AI - Elevating Data Security, Privacy and Innovation for Enterprises
                            </div>

                            <div className="post-timestamp text-label">
                              March 6, 2023
                              <span className="is-bullet">●</span>1 min read
                            </div>
                          </div>
                        </Link>








                      </div>
                      <div className="post-col post-col-3 m:col-start-9 m:col-span-4">









                      </div>
                    </div>
                  )}

                  {isListView && (
                    <div
                      className="block-content post-content is-masonry s:grid s:grid-12 spacer-medium-mt contentFadeUp is-inview"
                      data-triggers="inViewOnce"
                    >
                      <Link
                        className="post post-1  s:col-start-1 s:col-span-6 m:col-start-1 m:col-span-4"
                        href="/demand"
                        data-id="144538"
                        data-categories="company, announcements"
                        style={{ display: "block" }}
                      >
                        <div className="post-card-photo">
                          <div
                            className="lazyPicture aspect-ratio "
                            style={{ Aspect: "100%" }}
                            data-scroll=""
                          >
                            <img
                              className=""
                              sizes="(max-width: 699px) 100vw, 33vw"
                              src="policy.png"
                              srcSet="policy.png 1024w, policy.png 1312w"
                              alt="Demand card"
                              style={{ objectPosition: "50% 50%" }}
                            />
                          </div>
                        </div>

                        <div className="post-info">
                          <div className="post-category text-label">
                            Company{" "}
                          </div>

                          <div className="post-heading h4">
                            Demand Partnership and with SuisseAI
                          </div>

                          <div className="post-timestamp text-label">
                            May 16, 2023
                            <span className="is-bullet">●</span>
                            56 sec read
                          </div>
                        </div>
                      </Link>



                    </div>
                  )}

                  <button
                    className="btn-top btn-icon"
                    aria-label="Scroll to top of section"
                    style={{ opacity: "0", pointerEvents: "none" }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.25 19.625V7.25l-5.8 5.825L4.375 12 12 4.375 19.625 12l-1.075 1.075-5.8-5.825v12.375h-1.5Z"
                        fill="#191919"
                      ></path>
                    </svg>{" "}
                  </button>
                </div>

                <div className="refinement-holder"></div>
              </div>
            </div>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
}
