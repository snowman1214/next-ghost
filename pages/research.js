import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { Animation } from "./_document";
import { useEffect } from "react";
import { Plugin } from "./_document";
import { Script } from "./_document";

export default function Research() {
  useEffect(() => {
    Animation();
    Plugin();
    setTimeout(() => {
      Script();
    }, 200);
  }, []);
  return (
    <>
      <Header />
      <div className="page-dom-content" style={{ pointerEvents: "auto" }}>
        <main data-taxi>
          <article data-taxi-view="default" data-handle="research">
            <div className="page-container">
              <div className="research-container wrapper">
                <div className="b-hero-cta s:grid s:grid-12">
                  <h1
                    className="heading s:col-start-3 s:col-span-8 "
                    data-triggers="splitWords"
                  >
                    <div className="line-wrapper ">
                      <span className="line line-1">Make safe AI systems</span>
                    </div>
                    <div className="line-wrapper text-right">
                      <span className="line line-2">Deploy them reliably</span>
                    </div>
                  </h1>

                  <div className="description-wrapper s:col-start-4 s:col-span-6 spacer-medium-mt text-b1">
                    <p>
                      We develop large-scale AI systems so that we can study
                      their safety properties at the technological frontier,
                      where new problems are most likely to arise. We use these
                      insights to create safer, steerable, and more reliable
                      models, and to generate systems that we deploy externally,
                      like Claude.
                    </p>
                  </div>

                  <div className="cta-wrapper s:col-start-1 s:col-span-12 spacer-medium-mt">
                    <button
                      className="btn-primary"
                      data-overlay
                      aria-label="See Research Principles"
                    >
                      <span
                        className="btn-label"
                        aria-label="See Research Principles"
                      >
                        See Research Principles
                        <span
                          className="btn-anim"
                          title="See Research Principles"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </button>
                  </div>
                </div>

                <div className="overlay">
                  <button
                    className="btn-overlay-close btn-icon"
                    aria-label="Close overlay"
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
                      />
                    </svg>{" "}
                  </button>
                  <div className="panel" tabIndex="-1">
                    <div className="principle">
                      <h4>01</h4>
                      <h3>AI as a Systematic Science</h3>
                      <p className="text-b2 spacer-micro-mt">
                        Inspired by the universality of scaling in statistical
                        physics, we develop{" "}
                        <a
                          href="https://arxiv.org/abs/2001.08361"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          scaling laws
                        </a>{" "}
                        to help us do systematic, empirically-driven research.
                        We search for simple relations among data, compute,
                        parameters, and performance of large-scale networks.
                        Then we leverage these relations to train networks more
                        efficiently and predictably, and to evaluate our own
                        progress. We’re also investigating what scaling laws for
                        the safety of AI systems might look like, and this will
                        inform our future research.
                      </p>
                    </div>

                    <div className="principle">
                      <h4>02</h4>
                      <h3>Safety and Scaling</h3>
                      <p className="text-b2 spacer-micro-mt">
                        At Anthropic we believe safety research is most useful
                        when performed on highly capable models. Every year, we
                        see larger neural networks which perform better than
                        those that came before. These larger networks also bring
                        new safety challenges. We study and engage with the
                        safety issues of large models so that we can find ways
                        to make them more reliable, share what we learn, and
                        improve safe deployment outcomes across the field. Our
                        immediate focus is prototyping systems that pair these
                        safety techniques with tools for analyzing text and
                        code.
                      </p>
                    </div>

                    <div className="principle">
                      <h4>03</h4>
                      <h3>Tools and Measurements</h3>
                      <p className="text-b2 spacer-micro-mt">
                        We believe critically evaluating the potential societal
                        impacts of our work is a key pillar of research. Our
                        approach centers on building tools and measurements to
                        evaluate and understand the capabilities, limitations,
                        and potential for societal impact of our AI systems. A
                        good way to understand our research direction here is to
                        read about some of the work we’ve led or collaborated on
                        in this space:{" "}
                        <a
                          href="https://arxiv.org/abs/2005.04305"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          AI and Efficiency
                        </a>
                        ,{" "}
                        <a
                          href="https://arxiv.org/abs/2009.09071"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Measurement in AI Policy: Opportunities and Challenges
                        </a>
                        ,{" "}
                        <a
                          href="https://arxiv.org/abs/2103.06312"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          the AI Index 2021 Annual Report
                        </a>
                        , and{" "}
                        <a
                          href="https://microscope.openai.com/models"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Microscope
                        </a>
                        .
                      </p>
                    </div>

                    <div className="principle">
                      <h4>04</h4>
                      <h3>Focused, Collaborative Research Efforts</h3>
                      <p className="text-b2 spacer-micro-mt">
                        We highly value collaboration on projects, and aim for a
                        mixture of top-down and bottom-up research planning. We
                        always aim to ensure we have a clear, focused research
                        agenda, but we put a lot of emphasis on including
                        everyone — researchers, engineers, societal impact
                        experts and policy analysts — in determining that
                        direction. We look to collaborate with other labs and
                        researchers, as we believe the best research into
                        characterizing these systems will come from a broad
                        community of researchers working together.
                      </p>
                    </div>
                  </div>

                  <div className="tint"></div>
                </div>

                <div className="b-featuredPost ">
                  <a
                    href="index/training-a-helpful-and-harmless-assistant-with-reinforcement-learning-from-human-feedback.html"
                    className="featured-post-wrapper bg-book-cloth"
                  >
                    <div className="post-info s:grid s:grid-12">
                      <div className="post-types-subjects s:col-start-2 s:col-span-10 m:col-start-3 m:col-span-8">
                        <div className="btn-secondary btn-chip">Alignment</div>
                      </div>

                      <div className="heading h2 s:col-start-2 s:col-span-10 m:col-start-3 m:col-span-8">
                        Training a Helpful and Harmless Assistant with
                        Reinforcement Learning from Human Feedback
                      </div>

                      <p className="short-description text-b2 s:col-start-4 s:col-span-6 m:col-start-5 m:col-span-4">
                        Our second AI alignment paper, exploring how to train a
                        general language assistant to be helpful, but without
                        providing harmful advice or exhibiting bad behaviors.
                      </p>

                      <div className="post-timestamp text-label s:col-start-4 s:col-span-6 m:col-start-5 m:col-span-4">
                        Apr 12, 2022
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="b-postList">
                <div className="wrapper">
                  <div
                    className="post-list-refinement contentFade "
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
                          disabled
                          aria-label="Clear search"
                        >
                          <span className="icon-search">
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
                              />
                            </svg>{" "}
                          </span>
                          <span className="icon-clear">
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
                              />
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
                              />
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
                              />
                            </svg>{" "}
                          </span>
                        </span>
                      </button>

                      <button className="btn-view">
                        <span className="label">View</span>
                        <span className="icons">
                          <span className="icon icon-grid">
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
                              />
                            </svg>{" "}
                          </span>
                          <span className="icon icon-list">
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
                              />
                            </svg>{" "}
                          </span>
                        </span>
                      </button>
                    </div>

                    <div className="refinement-container s:grid s:grid-12">
                      <div className="post-types-subjects-container s:col-start-1 s:col-span-10 s:grid s:grid-12">
                        <div
                          id="post-types"
                          className="refinement-group s:col-start-1 s:col-span-2"
                          style={{ display: "none" }}
                        >
                          <h4>Type</h4>

                          <label className="refine-label" htmlFor="btn-type-1">
                            <input
                              id="btn-type-1"
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
                          className="refinement-group s:col-start-1 s:col-span-10"
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
                                  data-category="interpretability"
                                  disabled
                                />
                                <span>Interpretability</span>
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
                                  data-category="societal-impact"
                                  disabled
                                />
                                <span>Societal Impact</span>
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
                                  data-category="alignment"
                                  disabled
                                />
                                <span>Alignment</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="refine-selection-container s:col-start-1 s:col-span-10 s:grid s:grid-10">
                        <div className="refine-selection-content-cover s:col-start-1 s:col-span-10"></div>
                        <div className="refine-selection-content s:col-start-1 s:col-span-10"></div>
                      </div>

                      <div className="reset-container s:col-start-11 s:col-span-2">
                        <button className="btn-reset btn-primary">Reset</button>
                      </div>
                    </div>
                  </div>

                  <h3 className="no-results-found">No results found.</h3>

                  <div
                    className="block-content post-content is-masonry s:grid s:grid-12 spacer-medium-mt contentFadeUp"
                    data-triggers="inViewOnce"
                  >
                    <div className="post-col post-col-1 s:col-start-1 s:col-span-6 m:col-start-1 m:col-span-4"></div>
                    <div className="post-col post-col-2 s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4"></div>
                    <div className="post-col post-col-3 m:col-start-9 m:col-span-4"></div>

                    <a
                      className="post post-1  s:col-start-1 s:col-span-6 m:col-start-1 m:col-span-4"
                      href="index/distributed-representations-composition-superposition.html"
                      data-id="144299"
                      data-categories="research, interpretability"
                    >
                      <div className="post-card-photo">
                        <div
                          className="lazyPicture aspect-ratio "
                          style={{ "--aspect": "56.25%" }}
                          data-scroll
                        >
                          <img
                            className=""
                            sizes="(max-width: 699px) 100vw, 33vw"
                            src="../optimise2.assets-servd.host/anthropic-website/production/images/background-title-20ad69.png?w=2560&amp;h=1440&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683213132&amp;s=0847dabe234c516e6fc341922ce4f3de"
                            srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/background-title-20.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683213132&amp;s=c52b450a3a61a868b77f30966ab26bcf 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/background-title-20.png?w=1440&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683213132&amp;s=5a38bea99cf7fe8c14e6251027a86791 1440w, https://optimise2.assets-servd.host/anthropic-website/production/images/background-title-20.png?w=1920&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683213132&amp;s=a6841417ce5c6dad19bc399923e2d648 1920w, https://optimise2.assets-servd.host/anthropic-website/production/images/background-title-20.png?w=2560&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1683213132&amp;s=a082d317346828bd9564316735388477 2560w"
                            alt="Background title 20"
                            style={{ objectPosition: "50% 50%" }}
                          />
                        </div>
                      </div>

                      <div className="post-info">
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
                      className="post post-2  s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4"
                      href="index/privileged-bases-in-the-transformer-residual-stream.html"
                      data-id="27641"
                      data-categories="research, interpretability"
                    >
                      <div className="post-info">
                        <div className="post-heading h4">
                          Privileged Bases in the Transformer Residual Stream
                        </div>

                        <div className="post-timestamp text-label">
                          Mar 16, 2023
                        </div>
                      </div>
                    </a>

                    <a
                      className="post post-3  s:col-start-1 s:col-span-6 m:col-start-9 m:col-span-4"
                      href="index/the-capacity-for-moral-self-correction-in-large-language-models.html"
                      data-id="3419"
                      data-categories="research, societal-impact"
                    >
                      <div className="post-info">
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
                      className="post post-4  s:col-start-7 s:col-span-6 m:col-start-1 m:col-span-4"
                      href="index/superposition-memorization-and-double-descent.html"
                      data-id="3433"
                      data-categories="research, interpretability"
                    >
                      <div className="post-info">
                        <div className="post-heading h4">
                          Superposition, Memorization, and Double Descent
                        </div>

                        <div className="post-timestamp text-label">
                          Jan 5, 2023
                        </div>
                      </div>
                    </a>

                    <a
                      className="post post-5  s:col-start-1 s:col-span-6 m:col-start-5 m:col-span-4"
                      href="index/discovering-language-model-behaviors-with-model-written-evaluations.html"
                      data-id="3426"
                      data-categories="research, alignment"
                    >
                      <div className="post-info">
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
                      className="post post-6  s:col-start-7 s:col-span-6 m:col-start-9 m:col-span-4"
                      href="index/constitutional-ai-harmlessness-from-ai-feedback.html"
                      data-id="3398"
                      data-categories="research, alignment"
                    >
                      <div className="post-info">
                        <div className="post-heading h4">
                          Constitutional AI: Harmlessness from AI Feedback
                        </div>

                        <div className="post-timestamp text-label">
                          Dec 15, 2022
                        </div>
                      </div>
                    </a>

                    <a
                      className="post post-7  s:col-start-1 s:col-span-6 m:col-start-1 m:col-span-4"
                      href="index/measuring-progress-on-scalable-oversight-for-large-language-models.html"
                      data-id="3412"
                      data-categories="research, alignment"
                    >
                      <div className="post-info">
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
                      className="post post-8  s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4"
                      href="index/toy-models-of-superposition.html"
                      data-id="3405"
                      data-categories="research, interpretability"
                    >
                      <div className="post-info">
                        <div className="post-heading h4">
                          Toy Models of Superposition
                        </div>

                        <div className="post-timestamp text-label">
                          Sep 14, 2022
                        </div>
                      </div>
                    </a>

                    <a
                      className="post post-9  s:col-start-1 s:col-span-6 m:col-start-9 m:col-span-4"
                      href="index/red-teaming-language-models-to-reduce-harms-methods-scaling-behaviors-and-lessons-learned.html"
                      data-id="3391"
                      data-categories="research, societal-impact"
                    >
                      <div className="post-info">
                        <div className="post-heading h4">
                          Red Teaming Language Models to Reduce Harms: Methods,
                          Scaling Behaviors, and Lessons Learned
                        </div>

                        <div className="post-timestamp text-label">
                          Aug 22, 2022
                        </div>
                      </div>
                    </a>

                    <a
                      className="post post-10  s:col-start-7 s:col-span-6 m:col-start-1 m:col-span-4"
                      href="index/language-models-mostly-know-what-they-know.html"
                      data-id="3362"
                      data-categories="research, alignment"
                    >
                      <div className="post-info">
                        <div className="post-heading h4">
                          Language Models (Mostly) Know What They Know
                        </div>

                        <div className="post-timestamp text-label">
                          Jul 11, 2022
                        </div>
                      </div>
                    </a>

                    <a
                      className="post post-11  s:col-start-1 s:col-span-6 m:col-start-5 m:col-span-4"
                      href="index/softmax-linear-units.html"
                      data-id="3381"
                      data-categories="research, interpretability"
                    >
                      <div className="post-info">
                        <div className="post-heading h4">
                          Softmax Linear Units
                        </div>

                        <div className="post-timestamp text-label">
                          Jun 17, 2022
                        </div>
                      </div>
                    </a>

                    <a
                      className="post post-12  s:col-start-7 s:col-span-6 m:col-start-9 m:col-span-4"
                      href="index/scaling-laws-and-interpretability-of-learning-from-repeated-data.html"
                      data-id="3372"
                      data-categories="research, interpretability"
                    >
                      <div className="post-info">
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
                      className="post post-13  s:col-start-1 s:col-span-6 m:col-start-1 m:col-span-4"
                      href="index/in-context-learning-and-induction-heads.html"
                      data-id="1510"
                      data-categories="research, interpretability"
                    >
                      <div className="post-info">
                        <div className="post-heading h4">
                          In-context Learning and Induction Heads
                        </div>

                        <div className="post-timestamp text-label">
                          Mar 8, 2022
                        </div>
                      </div>
                    </a>

                    <a
                      className="post post-14  s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4"
                      href="index/predictability-and-surprise-in-large-generative-models.html"
                      data-id="1462"
                      data-categories="research, societal-impact"
                    >
                      <div className="post-info">
                        <div className="post-heading h4">
                          Predictability and Surprise in Large Generative Models
                        </div>

                        <div className="post-timestamp text-label">
                          Feb 15, 2022
                        </div>
                      </div>
                    </a>

                    <a
                      className="post post-15  s:col-start-1 s:col-span-6 m:col-start-9 m:col-span-4"
                      href="index/a-mathematical-framework-for-transformer-circuits.html"
                      data-id="1429"
                      data-categories="research, interpretability"
                    >
                      <div className="post-info">
                        <div className="post-heading h4">
                          A Mathematical Framework for Transformer Circuits
                        </div>

                        <div className="post-timestamp text-label">
                          Dec 22, 2021
                        </div>
                      </div>
                    </a>

                    <a
                      className="post post-16  s:col-start-7 s:col-span-6 m:col-start-1 m:col-span-4"
                      href="index/a-general-language-assistant-as-a-laboratory-for-alignment.html"
                      data-id="1408"
                      data-categories="research, alignment"
                    >
                      <div className="post-info">
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

                  <button
                    className="btn-top btn-icon"
                    aria-label="Scroll to top of section"
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
                      />
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
