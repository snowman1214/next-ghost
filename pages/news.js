import Link from "next/link";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { useEffect, useState } from "react";
import { Script } from "./_document";
import { Animation } from "./_document";
import { NextSeo } from "next-seo";

export default function News() {
  const [isListView, setIsListView] = useState(true);

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
                <h2 className="page news-heading">Index</h2>
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
                          href="/zoom"
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
                        <a
                          className="post post-5  s:col-start-1 s:col-span-6 m:col-start-5 m:col-span-4"
                          href="https://www.suissegpt.ai/demand"
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
                              Partnering with Scale to Bring Generative AI to
                              Enterprises
                            </div>

                            <div className="post-timestamp text-label">
                              Apr 26, 2023
                              <span className="is-bullet">●</span>1 min read
                            </div>
                          </div>
                        </a>
                        <a
                          className="post post-7  s:col-start-1 s:col-span-6 m:col-start-1 m:col-span-4"
                          href="https://www.suissegpt.ai/demand"
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
                              Product{" "}
                            </div>

                            <div className="post-heading h4">
                              Claude, now in Slack
                            </div>

                            <div className="post-timestamp text-label">
                              Mar 30, 2023
                              <span className="is-bullet">●</span>3 min read
                            </div>
                          </div>
                        </a>
                        <a
                          className="post post-11  s:col-start-1 s:col-span-6 m:col-start-5 m:col-span-4"
                          href="https://www.anthropic.com/index/the-capacity-for-moral-self-correction-in-large-language-models"
                          data-id="3419"
                          data-categories="research, societal-impact"
                          style={{ display: "block" }}
                        >
                          <div className="post-info">
                            <div className="post-category text-label">
                              Research{" "}
                            </div>

                            <div className="post-heading h4">
                              The Capacity for Moral Self-Correction in Large
                              Language Models
                            </div>

                            <div className="post-timestamp text-label">
                              Feb 15, 2023
                            </div>
                          </div>
                        </a>
                        <a
                          className="post post-14  s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4"
                          href="https://www.anthropic.com/index/discovering-language-model-behaviors-with-model-written-evaluations"
                          data-id="3426"
                          data-categories="research, alignment"
                          style={{ display: "block" }}
                        >
                          <div className="post-info">
                            <div className="post-category text-label">
                              Research{" "}
                            </div>

                            <div className="post-heading h4">
                              Discovering Language Model Behaviors with
                              Model-Written Evaluations
                            </div>

                            <div className="post-timestamp text-label">
                              Dec 19, 2022
                            </div>
                          </div>
                        </a>
                        <a
                          className="post post-17  s:col-start-1 s:col-span-6 m:col-start-5 m:col-span-4"
                          href="https://www.anthropic.com/index/toy-models-of-superposition"
                          data-id="3405"
                          data-categories="research, interpretability"
                          style={{ display: "block" }}
                        >
                          <div className="post-info">
                            <div className="post-category text-label">
                              Research{" "}
                            </div>

                            <div className="post-heading h4">
                              Toy Models of Superposition
                            </div>

                            <div className="post-timestamp text-label">
                              Sep 14, 2022
                            </div>
                          </div>
                        </a>
                        <a
                          className="post post-20  s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4"
                          href="https://www.anthropic.com/index/softmax-linear-units"
                          data-id="3381"
                          data-categories="research, interpretability"
                          style={{ display: "block" }}
                        >
                          <div className="post-info">
                            <div className="post-category text-label">
                              Research{" "}
                            </div>

                            <div className="post-heading h4">
                              Softmax Linear Units
                            </div>

                            <div className="post-timestamp text-label">
                              Jun 17, 2022
                            </div>
                          </div>
                        </a>
                        <Link
                          className="post post-22  s:col-start-7 s:col-span-6 m:col-start-1 m:col-span-4"
                          href="/demand"
                          data-id="1117"
                          data-categories="company, announcements"
                          style={{ display: "block" }}
                        >
                          <div className="post-info">
                            <div className="post-category text-label">
                              Company{" "}
                            </div>

                            <div className="post-heading h4">
                              Anthropic Raises Series B to Build Steerable,
                              Interpretable, Robust AI Systems
                            </div>

                            <div className="post-timestamp text-label">
                              Apr 29, 2022
                              <span className="is-bullet">●</span>2 min read
                            </div>
                          </div>
                        </Link>
                        <a
                          className="post post-25  s:col-start-1 s:col-span-6 m:col-start-1 m:col-span-4"
                          href="https://www.anthropic.com/index/predictability-and-surprise-in-large-generative-models"
                          data-id="1462"
                          data-categories="research, societal-impact"
                          style={{ display: "block" }}
                        >
                          <div className="post-info">
                            <div className="post-category text-label">
                              Research{" "}
                            </div>

                            <div className="post-heading h4">
                              Predictability and Surprise in Large Generative
                              Models
                            </div>

                            <div className="post-timestamp text-label">
                              Feb 15, 2022
                            </div>
                          </div>
                        </a>
                        <a
                          className="post post-28  s:col-start-7 s:col-span-6 m:col-start-1 m:col-span-4"
                          href="https://www.anthropic.com/index/anthropic-raises-124-million-to-build-more-reliable-general-ai-systems"
                          data-id="1483"
                          data-categories="company, announcements"
                          style={{ display: "block" }}
                        >
                          <div className="post-info">
                            <div className="post-category text-label">
                              Company{" "}
                            </div>

                            <div className="post-heading h4">
                              Anthropic raises $124 million to build more
                              reliable, general AI systems
                            </div>

                            <div className="post-timestamp text-label">
                              May 28, 2021
                              <span className="is-bullet">●</span>1 min read
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="post-col post-col-2 s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4">
                        <Link
                          className="post post-2  s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4"
                          href="/context"
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
                                src="https://optimise2.assets-servd.host/anthropic-website/production/images/GeneralConsoleImprovements_Card.png?w=1312&amp;h=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683744657&amp;s=d97909cdcc848054e5fa0c1744e5c608"
                                srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/GeneralConsoleImprovements_Card.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683744657&amp;s=35ab87d55f7dd6120cf7a3948f0eb35a 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/GeneralConsoleImprovements_Card.png?w=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683744657&amp;s=26339c345249864db11790b20551cf61 1312w"
                                alt="General Console Improvements Card"
                                style={{ objectPosition: "50% 50%" }}
                              />
                            </div>
                          </div>

                          <div className="post-info">
                            <div className="post-category text-label">
                              Product{" "}
                            </div>

                            <div className="post-heading h4">
                              Introducing 100K Context Windows
                            </div>

                            <div className="post-timestamp text-label">
                              May 11, 2023
                              <span className="is-bullet">●</span>1 min read
                            </div>
                          </div>
                        </Link>
                        <a
                          className="post post-6  s:col-start-7 s:col-span-6 m:col-start-9 m:col-span-4"
                          href="https://www.anthropic.com/index/an-ai-policy-tool-for-today-ambitiously-invest-in-nist"
                          data-id="5830"
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
                                src="https://optimise2.assets-servd.host/anthropic-website/production/images/Columns_Card.png?w=1312&amp;h=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1681925471&amp;s=0a9ccc33dc1edf55cae0ddb758d0a3ed"
                                srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Columns_Card.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1681925471&amp;s=628ba954329c17fca3490ff1265e11ae 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Columns_Card.png?w=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1681925471&amp;s=f641e82c766b92353805eb69768a81d8 1312w"
                                alt="Columns Card"
                                style={{ objectPosition: "50% 50%" }}
                              />
                            </div>
                          </div>

                          <div className="post-info">
                            <div className="post-category text-label">
                              Company{" "}
                            </div>

                            <div className="post-heading h4">
                              An AI Policy Tool for Today: Ambitiously Invest in
                              NIST
                            </div>

                            <div className="post-timestamp text-label">
                              Apr 20, 2023
                              <span className="is-bullet">●</span>5 min read
                            </div>
                          </div>
                        </a>
                        <a
                          className="post post-8  s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4"
                          href="https://www.anthropic.com/index/privileged-bases-in-the-transformer-residual-stream"
                          data-id="27641"
                          data-categories="research, interpretability"
                          style={{ display: "block" }}
                        >
                          <div className="post-info">
                            <div className="post-category text-label">
                              Research{" "}
                            </div>

                            <div className="post-heading h4">
                              Privileged Bases in the Transformer Residual
                              Stream
                            </div>

                            <div className="post-timestamp text-label">
                              Mar 16, 2023
                            </div>
                          </div>
                        </a>
                        <a
                          className="post post-10  s:col-start-7 s:col-span-6 m:col-start-1 m:col-span-4"
                          href="https://www.anthropic.com/index/core-views-on-ai-safety"
                          data-id="143746"
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
                                src="https://optimise2.assets-servd.host/anthropic-website/production/images/Core_Views_on_AI_Safety_CARD_2023-03-06.png?w=1312&amp;h=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678297562&amp;s=39340e7f8f6272f32a11df6dddf37c6f"
                                srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Core_Views_on_AI_Safety_CARD_2023-03-06.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678297562&amp;s=3c5cd318e1a748f4ffe7672a50d807f0 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Core_Views_on_AI_Safety_CARD_2023-03-06.png?w=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678297562&amp;s=0fed53ddd4975172f302722cb04ac592 1312w"
                                alt="Core Views on AI Safety CARD 2023 03 06"
                                style={{ objectPosition: "50% 50%" }}
                              />
                            </div>
                          </div>

                          <div className="post-info">
                            <div className="post-category text-label">
                              Company{" "}
                            </div>

                            <div className="post-heading h4">
                              Core Views on AI Safety: When, Why, What, and How
                            </div>

                            <div className="post-timestamp text-label">
                              Mar 8, 2023
                              <span className="is-bullet">●</span>
                              33 min read
                            </div>
                          </div>
                        </a>
                        <a
                          className="post post-15  s:col-start-1 s:col-span-6 m:col-start-9 m:col-span-4"
                          href="https://www.anthropic.com/index/constitutional-ai-harmlessness-from-ai-feedback"
                          data-id="3398"
                          data-categories="research, alignment"
                          style={{ display: "block" }}
                        >
                          <div className="post-info">
                            <div className="post-category text-label">
                              Research{" "}
                            </div>

                            <div className="post-heading h4">
                              Constitutional AI: Harmlessness from AI Feedback
                            </div>

                            <div className="post-timestamp text-label">
                              Dec 15, 2022
                            </div>
                          </div>
                        </a>
                        <a
                          className="post post-18  s:col-start-7 s:col-span-6 m:col-start-9 m:col-span-4"
                          href="https://www.anthropic.com/index/red-teaming-language-models-to-reduce-harms-methods-scaling-behaviors-and-lessons-learned"
                          data-id="3391"
                          data-categories="research, societal-impact"
                          style={{ display: "block" }}
                        >
                          <div className="post-info">
                            <div className="post-category text-label">
                              Research{" "}
                            </div>

                            <div className="post-heading h4">
                              Red Teaming Language Models to Reduce Harms:
                              Methods, Scaling Behaviors, and Lessons Learned
                            </div>

                            <div className="post-timestamp text-label">
                              Aug 22, 2022
                            </div>
                          </div>
                        </a>
                        <a
                          className="post post-21  s:col-start-1 s:col-span-6 m:col-start-9 m:col-span-4"
                          href="https://www.anthropic.com/index/scaling-laws-and-interpretability-of-learning-from-repeated-data"
                          data-id="3372"
                          data-categories="research, interpretability"
                          style={{ display: "block" }}
                        >
                          <div className="post-info">
                            <div className="post-category text-label">
                              Research{" "}
                            </div>

                            <div className="post-heading h4">
                              Scaling Laws and Interpretability of Learning from
                              Repeated Data
                            </div>

                            <div className="post-timestamp text-label">
                              May 21, 2022
                            </div>
                          </div>
                        </a>
                        <a
                          className="post post-24  s:col-start-7 s:col-span-6 m:col-start-9 m:col-span-4"
                          href="https://www.anthropic.com/index/in-context-learning-and-induction-heads"
                          data-id="1510"
                          data-categories="research, interpretability"
                          style={{ display: "block" }}
                        >
                          <div className="post-info">
                            <div className="post-category text-label">
                              Research{" "}
                            </div>

                            <div className="post-heading h4">
                              In-context Learning and Induction Heads
                            </div>

                            <div className="post-timestamp text-label">
                              Mar 8, 2022
                            </div>
                          </div>
                        </a>
                        <a
                          className="post post-27  s:col-start-1 s:col-span-6 m:col-start-9 m:col-span-4"
                          href="https://www.anthropic.com/index/a-general-language-assistant-as-a-laboratory-for-alignment"
                          data-id="1408"
                          data-categories="research, alignment"
                          style={{ display: "block" }}
                        >
                          <div className="post-info">
                            <div className="post-category text-label">
                              Research{" "}
                            </div>

                            <div className="post-heading h4">
                              A General Language Assistant as a Laboratory for
                              Alignment
                            </div>

                            <div className="post-timestamp text-label">
                              Dec 1, 2021
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="post-col post-col-3 m:col-start-9 m:col-span-4">
                        <a
                          className="post post-3  s:col-start-1 s:col-span-6 m:col-start-9 m:col-span-4"
                          href="https://www.anthropic.com/index/claudes-constitution"
                          data-id="144316"
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
                                src="https://optimise2.assets-servd.host/anthropic-website/production/images/Constitution_Card.png?w=1312&amp;h=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683580530&amp;s=509c0178ebb73f875fbc69c79ab3abc2"
                                srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Constitution_Card.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683580530&amp;s=5954dbba7c9596b03f76af7443eb415e 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Constitution_Card.png?w=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683580530&amp;s=beefbdba86aaf9e2f78f65c6c3f4fbe1 1312w"
                                alt="Constitution Card"
                                style={{ objectPosition: "50% 50%" }}
                              />
                            </div>
                          </div>

                          <div className="post-info">
                            <div className="post-category text-label">
                              Company{" "}
                            </div>

                            <div className="post-heading h4">
                              Claude’s Constitution
                            </div>

                            <div className="post-timestamp text-label">
                              May 9, 2023
                              <span className="is-bullet">●</span>
                              15 min read
                            </div>
                          </div>
                        </a>
                        <a
                          className="post post-4  s:col-start-7 s:col-span-6 m:col-start-1 m:col-span-4"
                          href="https://www.anthropic.com/index/distributed-representations-composition-superposition"
                          data-id="144299"
                          data-categories="research, interpretability"
                          style={{ display: "block" }}
                        >
                          <div className="post-card-photo">
                            <div
                              className="lazyPicture aspect-ratio "
                              style={{ Aspect: "56.25%" }}
                              data-scroll=""
                            >
                              <img
                                className=""
                                sizes="(max-width: 699px) 100vw, 33vw"
                                src="https://optimise2.assets-servd.host/anthropic-website/production/images/background-title-20.png?w=2560&amp;h=1440&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683213132&amp;s=0847dabe234c516e6fc341922ce4f3de"
                                srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/background-title-20.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683213132&amp;s=c52b450a3a61a868b77f30966ab26bcf 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/background-title-20.png?w=1440&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683213132&amp;s=5a38bea99cf7fe8c14e6251027a86791 1440w, https://optimise2.assets-servd.host/anthropic-website/production/images/background-title-20.png?w=1920&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683213132&amp;s=a6841417ce5c6dad19bc399923e2d648 1920w, https://optimise2.assets-servd.host/anthropic-website/production/images/background-title-20.png?w=2560&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683213132&amp;s=a082d317346828bd9564316735388477 2560w"
                                alt="Background title 20"
                                style={{ objectPosition: "50% 50%" }}
                              />
                            </div>
                          </div>

                          <div className="post-info">
                            <div className="post-category text-label">
                              Research{" "}
                            </div>

                            <div className="post-heading h4">
                              Distributed Representations: Composition &amp;
                              Superposition
                            </div>

                            <div className="post-timestamp text-label">
                              May 4, 2023
                            </div>
                          </div>
                        </a>
                        <a
                          className="post post-9  s:col-start-1 s:col-span-6 m:col-start-9 m:col-span-4"
                          href="https://www.anthropic.com/index/introducing-claude"
                          data-id="7578"
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
                                src="https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_CARD_2023-03-10.png?w=1312&amp;h=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678490184&amp;s=ffaae3d3ba0ead9f397cfd3752386425"
                                srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_CARD_2023-03-10.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678490184&amp;s=deaa00588011529f176b7310201f8b2b 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_CARD_2023-03-10.png?w=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678490184&amp;s=4c432669772c23886a880a435bd7b942 1312w"
                                alt="Claude CARD 2023 03 10"
                                style={{ objectPosition: "50% 50%" }}
                              />
                            </div>
                          </div>

                          <div className="post-info">
                            <div className="post-category text-label">
                              Product{" "}
                            </div>

                            <div className="post-heading h4">
                              Introducing Claude
                            </div>

                            <div className="post-timestamp text-label">
                              Mar 14, 2023
                              <span className="is-bullet">●</span>4 min read
                            </div>
                          </div>
                        </a>
                        <a
                          className="post post-12  s:col-start-7 s:col-span-6 m:col-start-9 m:col-span-4"
                          href="https://www.anthropic.com/index/anthropic-partners-with-google-cloud"
                          data-id="5783"
                          data-categories="company, announcements"
                          style={{ display: "block" }}
                        >
                          <div className="post-info">
                            <div className="post-category text-label">
                              Company{" "}
                            </div>

                            <div className="post-heading h4">
                              Anthropic Partners with Google Cloud
                            </div>

                            <div className="post-timestamp text-label">
                              Feb 3, 2023
                              <span className="is-bullet">●</span>
                              49 sec read
                            </div>
                          </div>
                        </a>
                        <a
                          className="post post-13  s:col-start-1 s:col-span-6 m:col-start-1 m:col-span-4"
                          href="https://www.anthropic.com/index/superposition-memorization-and-double-descent"
                          data-id="3433"
                          data-categories="research, interpretability"
                          style={{ display: "block" }}
                        >
                          <div className="post-info">
                            <div className="post-category text-label">
                              Research{" "}
                            </div>

                            <div className="post-heading h4">
                              Superposition, Memorization, and Double Descent
                            </div>

                            <div className="post-timestamp text-label">
                              Jan 5, 2023
                            </div>
                          </div>
                        </a>
                        <a
                          className="post post-16  s:col-start-7 s:col-span-6 m:col-start-1 m:col-span-4"
                          href="https://www.anthropic.com/index/measuring-progress-on-scalable-oversight-for-large-language-models"
                          data-id="3412"
                          data-categories="research, alignment"
                          style={{ display: "block" }}
                        >
                          <div className="post-info">
                            <div className="post-category text-label">
                              Research{" "}
                            </div>

                            <div className="post-heading h4">
                              Measuring Progress on Scalable Oversight for Large
                              Language Models
                            </div>

                            <div className="post-timestamp text-label">
                              Nov 4, 2022
                            </div>
                          </div>
                        </a>
                        <a
                          className="post post-19  s:col-start-1 s:col-span-6 m:col-start-1 m:col-span-4"
                          href="https://www.anthropic.com/index/language-models-mostly-know-what-they-know"
                          data-id="3362"
                          data-categories="research, alignment"
                          style={{ display: "block" }}
                        >
                          <div className="post-info">
                            <div className="post-category text-label">
                              Research{" "}
                            </div>

                            <div className="post-heading h4">
                              Language Models (Mostly) Know What They Know
                            </div>

                            <div className="post-timestamp text-label">
                              Jul 11, 2022
                            </div>
                          </div>
                        </a>
                        <a
                          className="post post-23  s:col-start-1 s:col-span-6 m:col-start-5 m:col-span-4"
                          href="https://www.anthropic.com/index/training-a-helpful-and-harmless-assistant-with-reinforcement-learning-from-human-feedback"
                          data-id="1424"
                          data-categories="research, alignment"
                          style={{ display: "block" }}
                        >
                          <div className="post-info">
                            <div className="post-category text-label">
                              Research{" "}
                            </div>

                            <div className="post-heading h4">
                              Training a Helpful and Harmless Assistant with
                              Reinforcement Learning from Human Feedback
                            </div>

                            <div className="post-timestamp text-label">
                              Apr 12, 2022
                            </div>
                          </div>
                        </a>
                        <a
                          className="post post-26  s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4"
                          href="https://www.anthropic.com/index/a-mathematical-framework-for-transformer-circuits"
                          data-id="1429"
                          data-categories="research, interpretability"
                          style={{ display: "block" }}
                        >
                          <div className="post-info">
                            <div className="post-category text-label">
                              Research{" "}
                            </div>

                            <div className="post-heading h4">
                              A Mathematical Framework for Transformer Circuits
                            </div>

                            <div className="post-timestamp text-label">
                              Dec 22, 2021
                            </div>
                          </div>
                        </a>
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
                        href="/zoom"
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
                              src="https://optimise2.assets-servd.host/anthropic-website/production/images/zoom-card.png?w=1312&amp;h=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1684090867&amp;s=605271773adcf86bbcbd63ebe8523ece"
                              srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/zoom-card.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1684090867&amp;s=0a6a58148d49da379246a5647d017b25 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/zoom-card.png?w=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1684090867&amp;s=6b6067a6b4bad67aaf5e37697a2891a7 1312w"
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
                            Zoom Partnership and Investment in Anthropic
                          </div>

                          <div className="post-timestamp text-label">
                            May 16, 2023
                            <span className="is-bullet">●</span>
                            56 sec read
                          </div>
                        </div>
                      </Link>
                      <a
                        className="post post-5  s:col-start-1 s:col-span-6 m:col-start-5 m:col-span-4"
                        href="https://www.anthropic.com/index/partnering-with-scale"
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
                              src="https://optimise2.assets-servd.host/anthropic-website/production/images/ScaleAnthropic_Card_V1.png?w=1312&amp;h=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1682449438&amp;s=77b745673198f344fb058157bc47761e"
                              srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/ScaleAnthropic_Card_V1.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1682449438&amp;s=ba2a83316e7ebf91f6cf5a114a7376f6 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/ScaleAnthropic_Card_V1.png?w=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1682449438&amp;s=e733262caa8eb24e8a18fe92f91ed962 1312w"
                              alt="Scale Anthropic Card V1"
                              style={{ objectPosition: "50% 50%" }}
                            />
                          </div>
                        </div>

                        <div className="post-info">
                          <div className="post-category text-label">
                            Company{" "}
                          </div>

                          <div className="post-heading h4">
                            Partnering with Scale to Bring Generative AI to
                            Enterprises
                          </div>

                          <div className="post-timestamp text-label">
                            Apr 26, 2023
                            <span className="is-bullet">●</span>1 min read
                          </div>
                        </div>
                      </a>
                      <a
                        className="post post-7  s:col-start-1 s:col-span-6 m:col-start-1 m:col-span-4"
                        href="https://www.anthropic.com/index/claude-now-in-slack"
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
                              src="https://optimise2.assets-servd.host/anthropic-website/production/images/ClaudeSlack_Card_2023-03-30-163550_xpoi.png?w=1312&amp;h=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1680194150&amp;s=a30b7a3c657cb349a675dc6635e96dc0"
                              srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/ClaudeSlack_Card_2023-03-30-163550_xpoi.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1680194150&amp;s=584616069f800d2e0610da339d9df1c0 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/ClaudeSlack_Card_2023-03-30-163550_xpoi.png?w=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1680194150&amp;s=c65bbedc304a7f7e0dec63cabcf8724f 1312w"
                              alt="Claude Slack Card"
                              style={{ objectPosition: "50% 50%" }}
                            />
                          </div>
                        </div>

                        <div className="post-info">
                          <div className="post-category text-label">
                            Product{" "}
                          </div>

                          <div className="post-heading h4">
                            Claude, now in Slack
                          </div>

                          <div className="post-timestamp text-label">
                            Mar 30, 2023
                            <span className="is-bullet">●</span>3 min read
                          </div>
                        </div>
                      </a>
                      <a
                        className="post post-11  s:col-start-1 s:col-span-6 m:col-start-5 m:col-span-4"
                        href="https://www.anthropic.com/index/the-capacity-for-moral-self-correction-in-large-language-models"
                        data-id="3419"
                        data-categories="research, societal-impact"
                        style={{ display: "block" }}
                      >
                        <div className="post-info">
                          <div className="post-category text-label">
                            Research{" "}
                          </div>

                          <div className="post-heading h4">
                            The Capacity for Moral Self-Correction in Large
                            Language Models
                          </div>

                          <div className="post-timestamp text-label">
                            Feb 15, 2023
                          </div>
                        </div>
                      </a>
                      <a
                        className="post post-14  s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4"
                        href="https://www.anthropic.com/index/discovering-language-model-behaviors-with-model-written-evaluations"
                        data-id="3426"
                        data-categories="research, alignment"
                        style={{ display: "block" }}
                      >
                        <div className="post-info">
                          <div className="post-category text-label">
                            Research{" "}
                          </div>

                          <div className="post-heading h4">
                            Discovering Language Model Behaviors with
                            Model-Written Evaluations
                          </div>

                          <div className="post-timestamp text-label">
                            Dec 19, 2022
                          </div>
                        </div>
                      </a>
                      <a
                        className="post post-17  s:col-start-1 s:col-span-6 m:col-start-5 m:col-span-4"
                        href="https://www.anthropic.com/index/toy-models-of-superposition"
                        data-id="3405"
                        data-categories="research, interpretability"
                        style={{ display: "block" }}
                      >
                        <div className="post-info">
                          <div className="post-category text-label">
                            Research{" "}
                          </div>

                          <div className="post-heading h4">
                            Toy Models of Superposition
                          </div>

                          <div className="post-timestamp text-label">
                            Sep 14, 2022
                          </div>
                        </div>
                      </a>
                      <a
                        className="post post-20  s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4"
                        href="https://www.anthropic.com/index/softmax-linear-units"
                        data-id="3381"
                        data-categories="research, interpretability"
                        style={{ display: "block" }}
                      >
                        <div className="post-info">
                          <div className="post-category text-label">
                            Research{" "}
                          </div>

                          <div className="post-heading h4">
                            Softmax Linear Units
                          </div>

                          <div className="post-timestamp text-label">
                            Jun 17, 2022
                          </div>
                        </div>
                      </a>
                      <Link
                        className="post post-22  s:col-start-7 s:col-span-6 m:col-start-1 m:col-span-4"
                        href="/demand"
                        data-id="1117"
                        data-categories="company, announcements"
                        style={{ display: "block" }}
                      >
                        <div className="post-info">
                          <div className="post-category text-label">
                            Company{" "}
                          </div>

                          <div className="post-heading h4">
                            Anthropic Raises Series B to Build Steerable,
                            Interpretable, Robust AI Systems
                          </div>

                          <div className="post-timestamp text-label">
                            Apr 29, 2022
                            <span className="is-bullet">●</span>2 min read
                          </div>
                        </div>
                      </Link>
                      <a
                        className="post post-25  s:col-start-1 s:col-span-6 m:col-start-1 m:col-span-4"
                        href="https://www.anthropic.com/index/predictability-and-surprise-in-large-generative-models"
                        data-id="1462"
                        data-categories="research, societal-impact"
                        style={{ display: "block" }}
                      >
                        <div className="post-info">
                          <div className="post-category text-label">
                            Research{" "}
                          </div>

                          <div className="post-heading h4">
                            Predictability and Surprise in Large Generative
                            Models
                          </div>

                          <div className="post-timestamp text-label">
                            Feb 15, 2022
                          </div>
                        </div>
                      </a>
                      <a
                        className="post post-28  s:col-start-7 s:col-span-6 m:col-start-1 m:col-span-4"
                        href="https://www.anthropic.com/index/anthropic-raises-124-million-to-build-more-reliable-general-ai-systems"
                        data-id="1483"
                        data-categories="company, announcements"
                        style={{ display: "block" }}
                      >
                        <div className="post-info">
                          <div className="post-category text-label">
                            Company{" "}
                          </div>

                          <div className="post-heading h4">
                            Anthropic raises $124 million to build more
                            reliable, general AI systems
                          </div>

                          <div className="post-timestamp text-label">
                            May 28, 2021
                            <span className="is-bullet">●</span>1 min read
                          </div>
                        </div>
                      </a>

                      <Link
                        className="post post-2  s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4"
                        href="/context"
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
                              src="https://optimise2.assets-servd.host/anthropic-website/production/images/GeneralConsoleImprovements_Card.png?w=1312&amp;h=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683744657&amp;s=d97909cdcc848054e5fa0c1744e5c608"
                              srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/GeneralConsoleImprovements_Card.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683744657&amp;s=35ab87d55f7dd6120cf7a3948f0eb35a 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/GeneralConsoleImprovements_Card.png?w=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683744657&amp;s=26339c345249864db11790b20551cf61 1312w"
                              alt="General Console Improvements Card"
                              style={{ objectPosition: "50% 50%" }}
                            />
                          </div>
                        </div>

                        <div className="post-info">
                          <div className="post-category text-label">
                            Product{" "}
                          </div>

                          <div className="post-heading h4">
                            Introducing 100K Context Windows
                          </div>

                          <div className="post-timestamp text-label">
                            May 11, 2023
                            <span className="is-bullet">●</span>1 min read
                          </div>
                        </div>
                      </Link>
                      <a
                        className="post post-6  s:col-start-7 s:col-span-6 m:col-start-9 m:col-span-4"
                        href="https://www.anthropic.com/index/an-ai-policy-tool-for-today-ambitiously-invest-in-nist"
                        data-id="5830"
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
                              src="https://optimise2.assets-servd.host/anthropic-website/production/images/Columns_Card.png?w=1312&amp;h=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1681925471&amp;s=0a9ccc33dc1edf55cae0ddb758d0a3ed"
                              srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Columns_Card.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1681925471&amp;s=628ba954329c17fca3490ff1265e11ae 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Columns_Card.png?w=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1681925471&amp;s=f641e82c766b92353805eb69768a81d8 1312w"
                              alt="Columns Card"
                              style={{ objectPosition: "50% 50%" }}
                            />
                          </div>
                        </div>

                        <div className="post-info">
                          <div className="post-category text-label">
                            Company{" "}
                          </div>

                          <div className="post-heading h4">
                            An AI Policy Tool for Today: Ambitiously Invest in
                            NIST
                          </div>

                          <div className="post-timestamp text-label">
                            Apr 20, 2023
                            <span className="is-bullet">●</span>5 min read
                          </div>
                        </div>
                      </a>
                      <a
                        className="post post-8  s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4"
                        href="https://www.anthropic.com/index/privileged-bases-in-the-transformer-residual-stream"
                        data-id="27641"
                        data-categories="research, interpretability"
                        style={{ display: "block" }}
                      >
                        <div className="post-info">
                          <div className="post-category text-label">
                            Research{" "}
                          </div>

                          <div className="post-heading h4">
                            Privileged Bases in the Transformer Residual Stream
                          </div>

                          <div className="post-timestamp text-label">
                            Mar 16, 2023
                          </div>
                        </div>
                      </a>
                      <a
                        className="post post-10  s:col-start-7 s:col-span-6 m:col-start-1 m:col-span-4"
                        href="https://www.anthropic.com/index/core-views-on-ai-safety"
                        data-id="143746"
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
                              src="https://optimise2.assets-servd.host/anthropic-website/production/images/Core_Views_on_AI_Safety_CARD_2023-03-06.png?w=1312&amp;h=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678297562&amp;s=39340e7f8f6272f32a11df6dddf37c6f"
                              srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Core_Views_on_AI_Safety_CARD_2023-03-06.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678297562&amp;s=3c5cd318e1a748f4ffe7672a50d807f0 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Core_Views_on_AI_Safety_CARD_2023-03-06.png?w=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678297562&amp;s=0fed53ddd4975172f302722cb04ac592 1312w"
                              alt="Core Views on AI Safety CARD 2023 03 06"
                              style={{ objectPosition: "50% 50%" }}
                            />
                          </div>
                        </div>

                        <div className="post-info">
                          <div className="post-category text-label">
                            Company{" "}
                          </div>

                          <div className="post-heading h4">
                            Core Views on AI Safety: When, Why, What, and How
                          </div>

                          <div className="post-timestamp text-label">
                            Mar 8, 2023
                            <span className="is-bullet">●</span>
                            33 min read
                          </div>
                        </div>
                      </a>
                      <a
                        className="post post-15  s:col-start-1 s:col-span-6 m:col-start-9 m:col-span-4"
                        href="https://www.anthropic.com/index/constitutional-ai-harmlessness-from-ai-feedback"
                        data-id="3398"
                        data-categories="research, alignment"
                        style={{ display: "block" }}
                      >
                        <div className="post-info">
                          <div className="post-category text-label">
                            Research{" "}
                          </div>

                          <div className="post-heading h4">
                            Constitutional AI: Harmlessness from AI Feedback
                          </div>

                          <div className="post-timestamp text-label">
                            Dec 15, 2022
                          </div>
                        </div>
                      </a>
                      <a
                        className="post post-18  s:col-start-7 s:col-span-6 m:col-start-9 m:col-span-4"
                        href="https://www.anthropic.com/index/red-teaming-language-models-to-reduce-harms-methods-scaling-behaviors-and-lessons-learned"
                        data-id="3391"
                        data-categories="research, societal-impact"
                        style={{ display: "block" }}
                      >
                        <div className="post-info">
                          <div className="post-category text-label">
                            Research{" "}
                          </div>

                          <div className="post-heading h4">
                            Red Teaming Language Models to Reduce Harms:
                            Methods, Scaling Behaviors, and Lessons Learned
                          </div>

                          <div className="post-timestamp text-label">
                            Aug 22, 2022
                          </div>
                        </div>
                      </a>
                      <a
                        className="post post-21  s:col-start-1 s:col-span-6 m:col-start-9 m:col-span-4"
                        href="https://www.anthropic.com/index/scaling-laws-and-interpretability-of-learning-from-repeated-data"
                        data-id="3372"
                        data-categories="research, interpretability"
                        style={{ display: "block" }}
                      >
                        <div className="post-info">
                          <div className="post-category text-label">
                            Research{" "}
                          </div>

                          <div className="post-heading h4">
                            Scaling Laws and Interpretability of Learning from
                            Repeated Data
                          </div>

                          <div className="post-timestamp text-label">
                            May 21, 2022
                          </div>
                        </div>
                      </a>
                      <a
                        className="post post-24  s:col-start-7 s:col-span-6 m:col-start-9 m:col-span-4"
                        href="https://www.anthropic.com/index/in-context-learning-and-induction-heads"
                        data-id="1510"
                        data-categories="research, interpretability"
                        style={{ display: "block" }}
                      >
                        <div className="post-info">
                          <div className="post-category text-label">
                            Research{" "}
                          </div>

                          <div className="post-heading h4">
                            In-context Learning and Induction Heads
                          </div>

                          <div className="post-timestamp text-label">
                            Mar 8, 2022
                          </div>
                        </div>
                      </a>
                      <a
                        className="post post-27  s:col-start-1 s:col-span-6 m:col-start-9 m:col-span-4"
                        href="https://www.anthropic.com/index/a-general-language-assistant-as-a-laboratory-for-alignment"
                        data-id="1408"
                        data-categories="research, alignment"
                        style={{ display: "block" }}
                      >
                        <div className="post-info">
                          <div className="post-category text-label">
                            Research{" "}
                          </div>

                          <div className="post-heading h4">
                            A General Language Assistant as a Laboratory for
                            Alignment
                          </div>

                          <div className="post-timestamp text-label">
                            Dec 1, 2021
                          </div>
                        </div>
                      </a>

                      <a
                        className="post post-3  s:col-start-1 s:col-span-6 m:col-start-9 m:col-span-4"
                        href="https://www.anthropic.com/index/claudes-constitution"
                        data-id="144316"
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
                              src="https://optimise2.assets-servd.host/anthropic-website/production/images/Constitution_Card.png?w=1312&amp;h=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683580530&amp;s=509c0178ebb73f875fbc69c79ab3abc2"
                              srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Constitution_Card.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683580530&amp;s=5954dbba7c9596b03f76af7443eb415e 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Constitution_Card.png?w=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683580530&amp;s=beefbdba86aaf9e2f78f65c6c3f4fbe1 1312w"
                              alt="Constitution Card"
                              style={{ objectPosition: "50% 50%" }}
                            />
                          </div>
                        </div>

                        <div className="post-info">
                          <div className="post-category text-label">
                            Company{" "}
                          </div>

                          <div className="post-heading h4">
                            Claude’s Constitution
                          </div>

                          <div className="post-timestamp text-label">
                            May 9, 2023
                            <span className="is-bullet">●</span>
                            15 min read
                          </div>
                        </div>
                      </a>
                      <a
                        className="post post-4  s:col-start-7 s:col-span-6 m:col-start-1 m:col-span-4"
                        href="https://www.anthropic.com/index/distributed-representations-composition-superposition"
                        data-id="144299"
                        data-categories="research, interpretability"
                        style={{ display: "block" }}
                      >
                        <div className="post-card-photo">
                          <div
                            className="lazyPicture aspect-ratio "
                            style={{ Aspect: "56.25%" }}
                            data-scroll=""
                          >
                            <img
                              className=""
                              sizes="(max-width: 699px) 100vw, 33vw"
                              src="https://optimise2.assets-servd.host/anthropic-website/production/images/background-title-20.png?w=2560&amp;h=1440&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683213132&amp;s=0847dabe234c516e6fc341922ce4f3de"
                              srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/background-title-20.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683213132&amp;s=c52b450a3a61a868b77f30966ab26bcf 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/background-title-20.png?w=1440&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683213132&amp;s=5a38bea99cf7fe8c14e6251027a86791 1440w, https://optimise2.assets-servd.host/anthropic-website/production/images/background-title-20.png?w=1920&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683213132&amp;s=a6841417ce5c6dad19bc399923e2d648 1920w, https://optimise2.assets-servd.host/anthropic-website/production/images/background-title-20.png?w=2560&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683213132&amp;s=a082d317346828bd9564316735388477 2560w"
                              alt="Background title 20"
                              style={{ objectPosition: "50% 50%" }}
                            />
                          </div>
                        </div>

                        <div className="post-info">
                          <div className="post-category text-label">
                            Research{" "}
                          </div>

                          <div className="post-heading h4">
                            Distributed Representations: Composition &amp;
                            Superposition
                          </div>

                          <div className="post-timestamp text-label">
                            May 4, 2023
                          </div>
                        </div>
                      </a>
                      <a
                        className="post post-9  s:col-start-1 s:col-span-6 m:col-start-9 m:col-span-4"
                        href="https://www.anthropic.com/index/introducing-claude"
                        data-id="7578"
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
                              src="https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_CARD_2023-03-10.png?w=1312&amp;h=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678490184&amp;s=ffaae3d3ba0ead9f397cfd3752386425"
                              srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_CARD_2023-03-10.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678490184&amp;s=deaa00588011529f176b7310201f8b2b 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_CARD_2023-03-10.png?w=1312&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678490184&amp;s=4c432669772c23886a880a435bd7b942 1312w"
                              alt="Claude CARD 2023 03 10"
                              style={{ objectPosition: "50% 50%" }}
                            />
                          </div>
                        </div>

                        <div className="post-info">
                          <div className="post-category text-label">
                            Product{" "}
                          </div>

                          <div className="post-heading h4">
                            Introducing Claude
                          </div>

                          <div className="post-timestamp text-label">
                            Mar 14, 2023
                            <span className="is-bullet">●</span>4 min read
                          </div>
                        </div>
                      </a>
                      <a
                        className="post post-12  s:col-start-7 s:col-span-6 m:col-start-9 m:col-span-4"
                        href="https://www.anthropic.com/index/anthropic-partners-with-google-cloud"
                        data-id="5783"
                        data-categories="company, announcements"
                        style={{ display: "block" }}
                      >
                        <div className="post-info">
                          <div className="post-category text-label">
                            Company{" "}
                          </div>

                          <div className="post-heading h4">
                            Anthropic Partners with Google Cloud
                          </div>

                          <div className="post-timestamp text-label">
                            Feb 3, 2023
                            <span className="is-bullet">●</span>
                            49 sec read
                          </div>
                        </div>
                      </a>
                      <a
                        className="post post-13  s:col-start-1 s:col-span-6 m:col-start-1 m:col-span-4"
                        href="https://www.anthropic.com/index/superposition-memorization-and-double-descent"
                        data-id="3433"
                        data-categories="research, interpretability"
                        style={{ display: "block" }}
                      >
                        <div className="post-info">
                          <div className="post-category text-label">
                            Research{" "}
                          </div>

                          <div className="post-heading h4">
                            Superposition, Memorization, and Double Descent
                          </div>

                          <div className="post-timestamp text-label">
                            Jan 5, 2023
                          </div>
                        </div>
                      </a>
                      <a
                        className="post post-16  s:col-start-7 s:col-span-6 m:col-start-1 m:col-span-4"
                        href="https://www.anthropic.com/index/measuring-progress-on-scalable-oversight-for-large-language-models"
                        data-id="3412"
                        data-categories="research, alignment"
                        style={{ display: "block" }}
                      >
                        <div className="post-info">
                          <div className="post-category text-label">
                            Research{" "}
                          </div>

                          <div className="post-heading h4">
                            Measuring Progress on Scalable Oversight for Large
                            Language Models
                          </div>

                          <div className="post-timestamp text-label">
                            Nov 4, 2022
                          </div>
                        </div>
                      </a>
                      <a
                        className="post post-19  s:col-start-1 s:col-span-6 m:col-start-1 m:col-span-4"
                        href="https://www.anthropic.com/index/language-models-mostly-know-what-they-know"
                        data-id="3362"
                        data-categories="research, alignment"
                        style={{ display: "block" }}
                      >
                        <div className="post-info">
                          <div className="post-category text-label">
                            Research{" "}
                          </div>

                          <div className="post-heading h4">
                            Language Models (Mostly) Know What They Know
                          </div>

                          <div className="post-timestamp text-label">
                            Jul 11, 2022
                          </div>
                        </div>
                      </a>
                      <a
                        className="post post-23  s:col-start-1 s:col-span-6 m:col-start-5 m:col-span-4"
                        href="https://www.anthropic.com/index/training-a-helpful-and-harmless-assistant-with-reinforcement-learning-from-human-feedback"
                        data-id="1424"
                        data-categories="research, alignment"
                        style={{ display: "block" }}
                      >
                        <div className="post-info">
                          <div className="post-category text-label">
                            Research{" "}
                          </div>

                          <div className="post-heading h4">
                            Training a Helpful and Harmless Assistant with
                            Reinforcement Learning from Human Feedback
                          </div>

                          <div className="post-timestamp text-label">
                            Apr 12, 2022
                          </div>
                        </div>
                      </a>
                      <a
                        className="post post-26  s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4"
                        href="https://www.anthropic.com/index/a-mathematical-framework-for-transformer-circuits"
                        data-id="1429"
                        data-categories="research, interpretability"
                        style={{ display: "block" }}
                      >
                        <div className="post-info">
                          <div className="post-category text-label">
                            Research{" "}
                          </div>

                          <div className="post-heading h4">
                            A Mathematical Framework for Transformer Circuits
                          </div>

                          <div className="post-timestamp text-label">
                            Dec 22, 2021
                          </div>
                        </div>
                      </a>
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
