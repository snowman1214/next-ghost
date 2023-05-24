import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { useEffect } from "react";
import { Script } from "./_document";
import { NextSeo } from "next-seo";
import Link from "next/link";

export default function Research() {
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
  };
  return (
    <>
      <NextSeo
        title="Research by SuisseGPT - Private AI models for the modern Enterprise"
        description="
Find the latest research around AI by SuisseGPT - Advanced, Private AI Models Tailored for Today's Enterprises, Proudly Hosted in Switzerland."
        openGraph={{
          url: "http://suissegpt.ai",
          title:
            "Research by SuisseGPT - Private AI models for the modern Enterprise",
          description:
            "Find the latest research around AI by SuisseGPT - Advanced, Private AI Models Tailored for Today's Enterprises, Proudly Hosted in Switzerland.",
        }}
      />
      <Header />
      <div className="page-dom-content" onLoad={() => animation()}>
        <main data-taxi>
          <article data-taxi-view="default" data-handle="research">
            <div className="page-container">
              <div className="research-container wrapper">
                <div className="b-hero-cta s:grid s:grid-12">
                  <h1
                    className="heading s:col-start-3 s:col-span-8 "
                    data-triggers=""
                  >
                    <div className="line-wrapper line-first">
                      <span className="line line-1">Secure AI Systems</span>
                    </div>
                    <div className="line-wrapper line-second text-right">
                      <span className="line line-2">
                        Ensuring Their Privacy
                      </span>
                    </div>
                  </h1>

                  <div className="description-wrapper s:col-start-4 s:col-span-6 spacer-medium-mt text-b1">
                    <p>
                      We devote our efforts to the development of large-scale AI
                      systems to scrutinize their safety attributes at the
                      leading edge of technology, where the emergence of new
                      issues is most probable. These insights serve to produce
                      safer, more controllable, and reliable models.
                      Furthermore, they facilitate the creation of systems that
                      we deploy externally, like SuisseGPT.
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
                        Refer to our Research Principles
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
                      <h3>AI as a Methodical Discipline</h3>
                      <p className="text-b2 spacer-micro-mt">
                        Drawing inspiration from the universal scaling phenomena
                        observed in statistical physics, we undertake the
                        development of.{" "}
                        <Link
                          href="https://arxiv.org/abs/2001.08361"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          scaling laws
                        </Link>{" "}
                        To facilitate systematic and empirically-driven
                        research, our efforts are focused on identifying and
                        establishing simple relationships among data,
                        computations, parameters, and the performance of
                        large-scale networks. By leveraging these relationships,
                        we aim to enhance the efficiency and predictability of
                        network training, as well as evaluate our advancements
                        more effectively. Furthermore, we are actively exploring
                        scaling laws pertaining to the safety of AI systems, as
                        this exploration will significantly influence our future
                        research endeavors.
                      </p>
                    </div>

                    <div className="principle">
                      <h4>02</h4>
                      <h3>Resilience and Expansion</h3>
                      <p className="text-b2 spacer-micro-mt">
                        At SuisseGPT, we prioritize safety research conducted on
                        highly advanced models. With each passing year, we
                        witness the emergence of larger neural networks that
                        outperform their predecessors. However, these increased
                        capabilities also introduce novel safety challenges. We
                        diligently investigate and actively address the safety
                        concerns associated with large models, aiming to enhance
                        their reliability. Furthermore, we share our findings
                        with the wider community and strive to improve the
                        outcomes of safe deployment practices across the field.
                        Currently, our primary focus revolves around prototyping
                        systems that combine these safety techniques with text
                        analysis tools, enabling comprehensive safety evaluation
                        and analysis.
                      </p>
                    </div>

                    <div className="principle">
                      <h4>03</h4>
                      <h3>Tools and Measurements</h3>
                      <p className="text-b2 spacer-micro-mt">
                        We consider the critical evaluation of the societal
                        implications of our work to be a fundamental principle
                        of our research. Our approach revolves around the
                        development of tools and metrics that enable us to
                        comprehensively assess and comprehend the capabilities,
                        constraints, and potential societal impacts of our AI
                        systems. To gain insight into our research direction in
                        this regard, we encourage you to explore some of the
                        projects we have led or collaborated on in this domain.
                        These initiatives shed light on our commitment to
                        understanding and addressing the broader societal
                        implications of AI technology.:{" "}
                        <Link
                          href="https://arxiv.org/abs/2005.04305"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          AI and Efficiency
                        </Link>
                        ,{" "}
                        <Link
                          href="https://arxiv.org/abs/2009.09071"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Measurement in AI Policy: Opportunities and Challenges
                        </Link>
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
                        Collaboration is of utmost importance to us in our
                        project endeavors, and we strive to strike a balance
                        between top-down and bottom-up research planning
                        approaches. While maintaining a clear and focused
                        research agenda, we place significant emphasis on
                        inclusivity by involving a diverse group of
                        stakeholders, including researchers, engineers, experts
                        in societal impact, and policy analysts, in determining
                        the direction of our work. We actively seek
                        collaborations with other laboratories and researchers,
                        recognizing that the most comprehensive and insightful
                        research on characterizing these systems arises from a
                        broad and interconnected community of researchers
                        working together.
                      </p>
                    </div>
                  </div>

                  <div className="tint"></div>
                </div>

                <div className="b-featuredPost ">
                  <Link
                    href="https://suissegpt.ai/coreviews"
                    className="featured-post-wrapper bg-book-cloth"
                  >
                    <div className="post-info s:grid s:grid-12">
                      <div className="post-types-subjects s:col-start-2 s:col-span-10 m:col-start-3 m:col-span-8">
                        <div className="btn-secondary btn-chip">Alignment</div>
                      </div>

                      <div className="heading h2 s:col-start-2 s:col-span-10 m:col-start-3 m:col-span-8">
                        Cultivating a Safe and Beneficial Assistant through
                        Reinforcement Learning from Human
                      </div>

                      <p className="short-description text-b2 s:col-start-4 s:col-span-6 m:col-start-5 m:col-span-4">
                        This represents our second paper on AI alignment,
                        delving into the methods of training a general language
                        assistant to be useful, while ensuring it refrains from
                        giving potentially harmful advice or demonstrating
                        detrimental behaviors.
                      </p>

                      <div className="post-timestamp text-label s:col-start-4 s:col-span-6 m:col-start-5 m:col-span-4">
                        May 22, 2023
                      </div>
                    </div>
                  </Link>
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

                    <Link
                      className="post post-1  s:col-start-1 s:col-span-6 m:col-start-1 m:col-span-4"
                      href="coreviews"
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
                            src="policy.png"
                            srcSet="policy.png 1024w, policy.png 1440w, policy.png 1920w, policy.png 2560w"
                            alt="Background title 20"
                            style={{ objectPosition: "50% 50%" }}
                          />
                        </div>
                      </div>

                      <div className="post-info">
                        <div className="post-heading h4">
                          Our Comprehensive Perspectives on Artificial Intelligence Safety: Timelines, Justifications, Objectives, & Strategies
                        </div>

                        <div className="post-timestamp text-label">
                          May 23, 2023
                        </div>
                      </div>
                    </Link>

                    <Link
                      className="post post-2  s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4"
                      href="languagemodels"
                      data-id="27641"
                      data-categories="research, interpretability"
                    >
                      <div className="post-info">
                        <div className="post-heading h4">
                          Unveiling Language Model Behaviors through Evaluations Generated by the Model
                        </div>

                        <div className="post-timestamp text-label">
                          May 16, 2023
                        </div>
                      </div>
                    </Link>

                    <Link
                      className="post post-3  s:col-start-1 s:col-span-6 m:col-start-9 m:col-span-4"
                      href="predictablemodels"
                      data-id="3419"
                      data-categories="research, societal-impact"
                    >
                      <div className="post-info">
                        <div className="post-heading h4">
                          Predictability Versus Surprise: The Paradox of Large Generative Models
                        </div>

                        <div className="post-timestamp text-label">
                          May 16, 2023
                        </div>
                      </div>
                    </Link>

                    <Link
                      className="post post-4  s:col-start-7 s:col-span-6 m:col-start-1 m:col-span-4"
                      href="deeper"
                      data-id="3433"
                      data-categories="research, interpretability"
                    >
                      <div className="post-info">
                        <div className="post-heading h4">
                          Assessing the Self-Awareness of Language Models: A Deeper Understanding of What They Know

                        </div>

                        <div className="post-timestamp text-label">
                          April 12, 2023
                        </div>
                      </div>
                    </Link>

                    <Link
                      className="post post-5  s:col-start-1 s:col-span-6 m:col-start-5 m:col-span-4"
                      href="advancements"
                      data-id="3426"
                      data-categories="research, alignment"
                    >
                      <div className="post-info">
                        <div className="post-heading h4">
                          Assessing Advancements in Scalable Supervision of Large Language Models
                        </div>

                        <div className="post-timestamp text-label">
                          March 18, 2023
                        </div>
                      </div>
                    </Link>
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
