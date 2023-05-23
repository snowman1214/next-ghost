import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { useEffect } from "react";
import { Script } from "./_document";
import { NextSeo } from 'next-seo';


export default function Anthropic() {
  useEffect(() => {
    Script();
  }, []);
  return (
    <>
      <Header />
      <div className="page-dom-content">
        <main data-taxi="">
          <article data-taxi-view="default" data-handle="postDetail">
            <div className="page-container">
              <div className="post-detail-container">
                <div className="wrapper s:grid s:grid-12">
                  <div className="post-heading s:col-start-2 s:col-span-10 m:col-start-3 m:col-span-8 l:col-start-4 l:col-span-6">
                    <div className="post-detail-types-subjects">
                      <a
                        href="/index?type=company"
                        className="btn-secondary btn-chip"
                      >
                        Company
                      </a>

                      <a
                        href="/index?subjects=announcements"
                        className="btn-secondary btn-chip"
                      >
                        Announcements
                      </a>
                    </div>

                    <h2 className="spacer-medium-mt">
                      Anthropic Raises Series B to Build Steerable,
                      Interpretable, Robust AI Systems
                    </h2>

                    <div className="post-timestamp spacer-medium-mt text-label">
                      Apr 29, 2022
                      <span className="is-bullet">●</span>2 min read
                    </div>
                  </div>

                  <div className="post-detail s:col-start-2 s:col-span-10 m:col-start-4 m:col-span-6 l:col-start-5 l:col-span-4 text-b2">
                    <p className="text-b2">
                      Anthropic, an AI safety and research company, has raised
                      $580 million in a Series B. The financing will help
                      Anthropic build large-scale experimental infrastructure to
                      explore and improve the safety properties of
                      computationally intensive AI models.
                      <br />
                      <br />
                      Since its founding at the beginning of 2021, Anthropic has
                      conducted research into making systems that are more
                      steerable, robust, and interpretable. On interpretability,
                      it has made progress in mathematically{" "}
                      <a
                        href="https://transformer-circuits.pub/2021/framework/index.html"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        reverse engineering the behavior of small language
                        models
                      </a>{" "}
                      and begun to understand the source of{" "}
                      <a
                        href="https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        pattern-matching behavior in large language models
                      </a>
                      . On steerability and robustness, it has developed{" "}
                      <a
                        href="https://arxiv.org/abs/2112.00861"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        baseline techniques to make large language models more
                        “helpful and harmless”
                      </a>
                      , and followed this up with{" "}
                      <a
                        href="https://arxiv.org/abs/2204.05862"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        reinforcement learning to further improve these
                        properties
                      </a>
                      , as well as releasing a dataset to help other research
                      labs train models that are more{" "}
                      <a
                        href="https://github.com/anthropics/hh-rlhf"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        aligned with human preferences
                      </a>
                      . It has also released an analysis of{" "}
                      <a
                        href="https://arxiv.org/abs/2202.07785"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        sudden changes in performance in large language models
                        and the societal impacts of this phenomenon
                      </a>
                      , which demonstrates the need for studying safety issues
                      at scale.
                      <br />
                      <br />
                      The purpose of this research is to develop the technical
                      components necessary to build large-scale models which
                      have better implicit safeguards and require less
                      after-training interventions, as well as to develop the
                      tools necessary to further look inside these models to be
                      confident that the safeguards actually work. The company
                      is also building out teams and partnerships dedicated to
                      exploring the policy and societal impacts of these models.
                      <br />
                      <br />
                      “With this fundraise, we’re going to explore the
                      predictable scaling properties of machine learning
                      systems, while closely examining the unpredictable ways in
                      which capabilities and safety issues can emerge at-scale,”
                      said Anthropic co-founder and CEO Dario Amodei. “We’ve
                      made strong initial progress on understanding and steering
                      the behavior of AI systems, and are gradually assembling
                      the pieces needed to make usable, integrated AI systems
                      that benefit society.”
                      <br />
                      <br />
                      Anthropic is now a growing team of around 40 people based
                      in a plant-filled office in San Francisco, California,
                      with plans to expand further this year. “Now that we’ve
                      built out the organization, we’re focusing on ensuring
                      Anthropic has the culture and governance to continue to
                      responsibly explore and develop safe AI systems as we
                      scale,” said Anthropic co-founder and President Daniela
                      Amodei. “We’re excited about what’s ahead, and grateful to
                      all be working together.”
                      <br />
                      <br />
                      The Series B follows the company raising $124 million in a
                      Series A round in 2021. The Series B round was led by Sam
                      Bankman-Fried, CEO of FTX. The round also included
                      participation from Caroline Ellison, Jim McClave, Nishad
                      Singh, Jaan Tallinn, and the Center for Emerging Risk
                      Research (CERR).
                    </p>

                    <div className="b-social-share">
                      <a
                        href="https://www.facebook.com/sharer/sharer.php?u=https://www.anthropic.com/index/anthropic-raises-series-b-to-build-safe-reliable-ai"
                        target="_blank"
                        rel="noopener"
                        aria-label="Share on Facebook"
                      >
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m29.616 25.5.683-4.342h-4.212v-2.822c0-1.187.588-2.347 2.468-2.347h1.943v-3.697a23.565 23.565 0 0 0-3.42-.292c-3.467 0-5.73 2.082-5.73 5.847v3.31h-3.845V25.5h3.844V36h4.74V25.5h3.529Z"
                            fill="#191919"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.anthropic.com/index/anthropic-raises-series-b-to-build-safe-reliable-ai"
                        target="_blank"
                        rel="noopener"
                        aria-label="Share on LinkedIn"
                      >
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.009 12.887c0-1.037.868-1.878 1.938-1.878h22.351c1.07 0 1.938.841 1.938 1.878v22.47c0 1.038-.867 1.88-1.938 1.88h-22.35c-1.07 0-1.939-.842-1.939-1.879v-22.47Z"
                            fill="#191919"
                          ></path>
                          <path
                            d="M18.979 32.958V21.15h-3.925v11.808h3.925Zm-1.962-13.42c1.369 0 2.22-.907 2.22-2.04-.025-1.159-.851-2.04-2.193-2.04-1.344 0-2.221.881-2.221 2.04 0 1.133.852 2.04 2.169 2.04h.025Zm4.134 13.42h3.925v-6.593c0-.353.025-.706.13-.958.283-.705.928-1.436 2.013-1.436 1.42 0 1.988 1.083 1.988 2.67v6.317h3.924v-6.77c0-3.627-1.936-5.315-4.518-5.315-2.117 0-3.046 1.183-3.563 1.99h.026V21.15h-3.924c.05 1.108 0 11.808 0 11.808Z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://twitter.com/intent/tweet?text=https://www.anthropic.com/index/anthropic-raises-series-b-to-build-safe-reliable-ai"
                        target="_blank"
                        rel="noopener"
                        aria-label="Share on Twitter"
                      >
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M36.141 16.328c-.792.34-1.625.578-2.479.706.4-.068.986-.786 1.22-1.077.355-.438.625-.939.798-1.476 0-.04.04-.097 0-.125a.138.138 0 0 0-.131 0c-.927.502-1.913.884-2.935 1.14a.205.205 0 0 1-.205-.052 2.858 2.858 0 0 0-.257-.268 5.344 5.344 0 0 0-1.402-.906 4.93 4.93 0 0 0-2.183-.359c-.723.046-1.429.24-2.074.57a5.374 5.374 0 0 0-1.641 1.39 5.264 5.264 0 0 0-.997 1.995 5.476 5.476 0 0 0-.052 2.109c0 .12 0 .137-.102.12-4.064-.599-7.398-2.04-10.122-5.135-.12-.137-.182-.137-.279 0-1.185 1.8-.61 4.65.872 6.058.2.188.405.37.621.541a5.088 5.088 0 0 1-1.949-.541c-.114-.074-.177-.034-.182.102-.016.19-.016.38 0 .57a5.175 5.175 0 0 0 3.191 4.126c.207.089.423.156.644.2a5.83 5.83 0 0 1-1.909.057c-.137-.029-.188.045-.137.176.838 2.28 2.656 2.975 3.99 3.363.182.028.364.028.57.074l-.035.034c-.393.718-1.983 1.203-2.712 1.453a9.75 9.75 0 0 1-4.16.536c-.223-.034-.274-.029-.331 0-.057.029 0 .091.062.148.285.188.57.354.867.513.882.481 1.815.864 2.78 1.14 5.004 1.379 10.635.365 14.39-3.368 2.953-2.93 3.99-6.97 3.99-11.016 0-.154.188-.245.296-.325a9.784 9.784 0 0 0 1.955-2.04.599.599 0 0 0 .137-.41c0-.086 0-.069-.109-.023Z"
                            fill="#191919"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <section className="b-news">
                <div className="wrapper">
                  <div className="top-content">
                    <div className="block-label">
                      <h3>Company News</h3>
                    </div>

                    <a
                      className="text-label"
                      href="https://www.anthropic.com/index?type=company&amp;subjects=announcements"
                    >
                      See All
                    </a>
                  </div>

                  <div
                    className="block-content s:grid s:grid-12 spacer-medium-mt contentFadeUpStagger"
                    data-triggers="inViewOnce"
                    data-trigger-start="center 100%"
                  >
                    <a
                      className="post post-1 stagger-item s:col-start-1 s:col-span-6 m:col-start-1 m:col-span-4"
                      href="https://www.anthropic.com/index/zoom-partnership-and-investment"
                      data-id="144538"
                      data-categories="company, announcements"
                    >
                      <div className="post-info">
                        <div className="post-category text-label">Company </div>

                        <div className="post-heading h4">
                          Zoom Partnership and Investment in Anthropic
                        </div>

                        <div className="post-timestamp text-label">
                          May 16, 2023
                          <span className="is-bullet">●</span>
                          56 sec read
                        </div>
                      </div>
                    </a>

                    <a
                      className="post post-2 stagger-item s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4"
                      href="https://www.anthropic.com/index/claudes-constitution"
                      data-id="144316"
                      data-categories="company, announcements"
                    >
                      <div className="post-info">
                        <div className="post-category text-label">Company </div>

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
                      className="post post-3 stagger-item s:col-start-1 s:col-span-6 m:col-start-9 m:col-span-4"
                      href="https://www.anthropic.com/index/partnering-with-scale"
                      data-id="143906"
                      data-categories="company, announcements"
                    >
                      <div className="post-info">
                        <div className="post-category text-label">Company </div>

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
                  </div>
                </div>
              </section>
            </div>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
}
