import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { Animation } from "./_document";
import { useEffect } from "react";
import { Script } from "./_document";

export default function Company() {
  useEffect(() => {
    Animation();
    setTimeout(() => {
      Script();
    }, 200);
  }, []);
  return (
    <>
      <Header />
      <div className="page-dom-content" style={{ pointerEvents: "auto" }}>
        <main data-taxi>
          <article data-taxi-view="default" data-handle="company">
            <div className="page-container">
              <div className="company-container wrapper">
                <div className="b-hero-cta s:grid s:grid-12">
                  <h1
                    className="heading s:col-start-3 s:col-span-8 "
                    data-triggers="splitWords"
                  >
                    <div className="line-wrapper ">
                      <span className="line line-1">Making AI systems</span>
                    </div>
                    <div className="line-wrapper text-right">
                      <span className="line line-2">to 10x your company</span>
                    </div>
                  </h1>

                  <div className="description-wrapper s:col-start-4 s:col-span-6 spacer-medium-mt text-b1">
                    <p>
                      SuisseGPT is a pioneering company in AI safety and research. Our expertise lies in building AI systems that are dependable, understandable, and easily directed.

                    </p>
                  </div>

                  <div className="cta-wrapper s:col-start-1 s:col-span-12 spacer-medium-mt">
                    <a
                      className="btn-primary"
                      href="careers"
                      aria-label="Join Us"
                    >
                      <span className="btn-label">
                        Join Us
                        <span
                          className="btn-anim"
                          title="Join Us"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </a>
                  </div>
                </div>

                <div className="content-blocks">
                  <section
                    id="content-block-1"
                    className="content-block b-labelHeadingLists isFirst contentFadeUp  s:grid s:grid-12"
                    data-triggers="inViewOnce"
                    data-trigger-start="top 100%"
                  >
                    <div className="block-label h3 s:col-start-1 s:col-span-4">
                      Our Mission
                    </div>

                    <div className="block-content s:col-start-5 s:col-span-8">
                      <h2>
                        We are confident that AI will immensely transform our world. SuisseGPT is devoted to creating systems that individuals can rely on, while conducting research on the opportunities and risks that AI presents.
                      </h2>

                      <div className="block-lists s:grid s:grid-8">
                        <div className="post s:col-start-1 s:col-span-4">
                          <div className="h4">Constructing Safer Systems</div>
                          <p className="text-b2 spacer-micro-mt">
                            Our goal is to construct cutting-edge AI systems that are reliable, comprehensible, and easily steered. We conduct advanced research, develop and apply a host of safety techniques, and deploy the resultant systems via a network of partnerships and products.
                          </p>
                        </div>

                        <div className="post s:col-start-5 s:col-span-4">
                          <div className="h4">Safety as a Science</div>
                          <p className="text-b2 spacer-micro-mt">
                            We regard AI safety as a rigorous scientific discipline. We conduct research, incorporate our findings into our products, relay these insights back into our research, and regularly share our acquired knowledge with the world.
                          </p>
                        </div>

                        <div className="post s:col-start-1 s:col-span-4">
                          <div className="h4">Interdisciplinary Approach</div>
                          <p className="text-b2 spacer-micro-mt">
                            SuisseGPT brings together a cooperative team of researchers, engineers, policy experts, business leaders, and operators, each contributing their unique experience from various domains to our work.
                          </p>
                        </div>

                        <div className="post s:col-start-5 s:col-span-4">
                          <div className="h4">
                            A Single Piece in the Larger AI Puzzle
                          </div>
                          <p className="text-b2 spacer-micro-mt">
                            We recognize that AI has the potential to drastically reshape the world. We perceive ourselves as one piece of this evolving puzzle, collaborating with civil society, government, academia, nonprofits, and industry to encourage safety in AI across the board.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section
                    id="content-block-2"
                    className="content-block b-labelPhotoLists   s:grid s:grid-12"
                    data-triggers="inViewOnce"
                  >
                    <div className="block-label h3 s:col-start-1 s:col-span-4">
                      Our Team
                    </div>

                    <div className="block-content s:col-start-1 s:col-span-12 m:col-start-5 m:col-span-8">
                      <p className="text-b1">
                        Comprised of researchers, engineers, policy experts, and operational leaders, our team boasts experience from a wide range of disciplines. Together, we work towards building reliable and comprehensible AI systems.
                      </p>

                      <div className="block-lists s:grid s:grid-12 m:grid-8">
                        <div className="s:col-start-1 s:col-span-6 m:col-start-1 m:col-span-4 spacer-medium-mt">
                          <div className="asset-container">
                            <div
                              className="lazyPicture aspect-ratio "
                              style={{ "--aspect": "75%;" }}
                              data-scroll
                            >
                              <img
                                className=""
                                sizes="(max-width: 699px) 100vw, 33vw"
                                src="../optimise2.assets-servd.host/anthropic-website/production/images/Company_Technology_4_3%402X9b8e.jpg?w=1152&amp;h=864&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250580&amp;s=d36904b4b63535054486c9090e247608"
                                srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Company_Technology_4_3@2X.jpg?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250580&amp;s=f44fde1e4901d576e7f5a531a42bb902 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Company_Technology_4_3@2X.jpg?w=1152&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250580&amp;s=ee164775903d8c24d854e1f11de9a257 1152w"
                                alt="Company Technology 4 3 2 X"
                                style={{ objectPosition: "50% 50%" }}
                              />
                            </div>
                          </div>

                          <div className="block-list-info">
                            <div className="block-list-heading h3">
                              Research
                            </div>
                            <p className="block-list-description text-b2 spacer-micro-mt">
                              We conduct groundbreaking AI research across diverse modalities and delve into innovative and emerging safety research areas, including interpretability, RL from human feedback, policy, and societal impacts analysis.
                            </p>
                          </div>
                        </div>

                        <div className="s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4 spacer-medium-mt">
                          <div className="asset-container">
                            <div
                              className="lazyPicture aspect-ratio "
                              style={{ "--aspect": "75%" }}
                              data-scroll
                            >
                              <img
                                className=""
                                sizes="(max-width: 699px) 100vw, 33vw"
                                src="../optimise2.assets-servd.host/anthropic-website/production/images/Company_Policy_4_3%402X0725.jpg?w=1152&amp;h=864&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250579&amp;s=0b579f59672a83b05c784c3fda58f287"
                                srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Company_Policy_4_3@2X.jpg?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250579&amp;s=203515517ae0e3e58c2fd1a2009e681d 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Company_Policy_4_3@2X.jpg?w=1152&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250579&amp;s=46139c9000dcddad99687ab12c8e64f6 1152w"
                                alt="Company Policy 4 3 2 X"
                                style={{ objectPosition: "50% 50%" }}
                              />
                            </div>
                          </div>

                          <div className="block-list-info">
                            <div className="block-list-heading h3">Policy</div>
                            <p className="block-list-description text-b2 spacer-micro-mt">
                              We contemplate the effects of our work and aim to convey our findings from the frontlines to policymakers and civil society both domestically and internationally, to foster the development of safe and reliable AI.

                            </p>
                          </div>
                        </div>

                        <div className="s:col-start-1 s:col-span-6 m:col-start-1 m:col-span-4 spacer-medium-mt">
                          <div className="asset-container">
                            <div
                              className="lazyPicture aspect-ratio "
                              style={{ "--aspect": "75%" }}
                              data-scroll
                            >
                              <img
                                className=""
                                sizes="(max-width: 699px) 100vw, 33vw"
                                src="../optimise2.assets-servd.host/anthropic-website/production/images/Company_Product_4_3%402Xe2f3.jpg?w=1152&amp;h=864&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250579&amp;s=f80ec968c6a50ed2cb1f7095189ef767"
                                srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Company_Product_4_3@2X.jpg?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250579&amp;s=116ff55bb394a0c7b137d4d17be280d5 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Company_Product_4_3@2X.jpg?w=1152&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250579&amp;s=1d2573a96ea4a909a16917a4035935d7 1152w"
                                alt="Company Product 4 3 2 X"
                                style={{ objectPosition: "50% 50%" }}
                              />
                            </div>
                          </div>

                          <div className="block-list-info">
                            <div className="block-list-heading h3">Product</div>
                            <p className="block-list-description text-b2 spacer-micro-mt">
                              We convert our research into practical, beneficial tools, such as SuisseGPT, which assist businesses, nonprofits, civil society groups, and their clients, impacting people worldwide.
                            </p>
                          </div>
                        </div>

                        <div className="s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4 spacer-medium-mt">
                          <div className="asset-container">
                            <div
                              className="lazyPicture aspect-ratio "
                              style={{ "--aspect": "75%" }}
                              data-scroll
                            >
                              <img
                                className=""
                                sizes="(max-width: 699px) 100vw, 33vw"
                                src="../optimise2.assets-servd.host/anthropic-website/production/images/Company_Ops_4_3%402X57fd.jpg?w=1152&amp;h=864&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250579&amp;s=97d0ccc8b9bdc0597511a40877a66554"
                                srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Company_Ops_4_3@2X.jpg?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250579&amp;s=45a70bda845e80ced71fd72176eeadcc 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Company_Ops_4_3@2X.jpg?w=1152&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250579&amp;s=6c5b439ce493a659e142788e15e5444b 1152w"
                                alt="Company Ops 4 3 2 X"
                                style={{ objectPosition: "50% 50%" }}
                              />
                            </div>
                          </div>

                          <div className="block-list-info">
                            <div className="block-list-heading h3">
                              Operations
                            </div>
                            <p className="block-list-description text-b2 spacer-micro-mt">
                              Our people, finance, legal, and recruiting teams serve as the human powerhouses driving SuisseGPT. With past experiences from institutions like Demand, startups, and the armed forces, our diverse backgrounds contribute to making SuisseGPT a fantastic place to work (and we are plant enthusiasts!).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section
                    id="content-block-3"
                    className="content-block b-labelNumberedLists  isLast s:grid s:grid-12"
                    data-triggers="inViewOnce"
                  >
                    <div className="block-label h3 s:col-start-1 s:col-span-4">
                      Our Values
                    </div>

                    <div className="block-content is-masonry s:col-start-5 s:col-span-8">
                      <div className="post-col post-col-1"></div>
                      <div className="post-col post-col-2"></div>

                      <div className="post">
                        <div className="h4">01</div>
                        <div className="h3">Mission Driven</div>
                        <p className="text-b2 spacer-micro-mt">
                          SuisseGPT is committed to its mission: ensuring that transformative AI enriches the lives of people and society. We anticipate rapid progress in this decade, with increasingly competent systems presenting new challenges. We strive to fulfill our mission by constructing advanced systems, studying their behaviors, responsibly deploying them, and regularly sharing our safety insights. We also work in harmony with other projects and stakeholders with similar objectives.
                        </p>
                      </div>

                      <div className="post">
                        <div className="h4">02</div>
                        <div className="h3">Opt for Simple Solutions</div>
                        <p className="text-b2 spacer-micro-mt">
                          We advocate for trying the simplest solution before opting for clever, novel ones. We embrace practicality - realistic approaches that acknowledge trade-offs. We value empiricism - learning what genuinely works through trial - and apply this to our research, engineering, and collaboration. We strive to be transparent about our understanding and knowledge gaps.
                        </p>
                      </div>

                      <div className="post">
                        <div className="h4">03</div>
                        <div className="h3">Exceptionally High Trust</div>
                        <p className="text-b2 spacer-micro-mt">
                          We foster a work environment characterized by exceptionally high trust: we assume goodwill, engage in respectful disagreements, and prioritize honesty. We expect emotional maturity and intellectual openness. At its best, this trust enables us to make superior organizational decisions than any one of us could individually.
                        </p>
                      </div>

                      <div className="post">
                        <div className="h4">04</div>
                        <div className="h3">One Cohesive Team</div>
                        <p className="text-b2 spacer-micro-mt">
                          Collaboration forms the bedrock of our work, culture, and value proposition. Despite having various teams within SuisseGPT, we foster the broader sense of unity, working together towards our mission. Leadership establishes the strategy, with wide-ranging input from everyone, and trusts each part of the organization to pursue these goals in their unique style. It's commonplace for individuals to contribute across diverse areas, further promoting a holistic, team-based approach.
                        </p>
                      </div>
                    </div>
                  </section>
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
                      href="indexabbe.html?type=company&amp;subjects="
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
                      href="index/zoom-partnership-and-investment.html"
                      data-id="144538"
                      data-categories="company, announcements"
                    >
                      <div className="post-info">
                        <div className="post-heading h4">
                          Demand Partnership with SuisseGPT
                        </div>

                        <div className="post-timestamp text-label">
                          May 16, 2023
                          <span className="is-bullet">&#9679;</span>
                          56 sec read
                        </div>
                      </div>
                    </a>

                    <a
                      className="post post-2 stagger-item s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4"
                      href="index/claudes-constitution.html"
                      data-id="144316"
                      data-categories="company, announcements"
                    >
                      <div className="post-info">
                        <div className="post-heading h4">
                          SuisseGPT’s Constitution
                        </div>

                        <div className="post-timestamp text-label">
                          May 9, 2023
                          <span className="is-bullet">&#9679;</span>
                          15 min read
                        </div>
                      </div>
                    </a>

                    <a
                      className="post post-3 stagger-item s:col-start-1 s:col-span-6 m:col-start-9 m:col-span-4"
                      href="index/partnering-with-scale.html"
                      data-id="143906"
                      data-categories="company, announcements"
                    >
                      <div className="post-info">
                        <div className="post-heading h4">
                          Partnering with Suisseblovks to Bring Generative AI to
                          Enterprises
                        </div>

                        <div className="post-timestamp text-label">
                          Apr 26, 2023
                          <span className="is-bullet">&#9679;</span>1 min read
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </section>

              <div className="b-darkCta bg-slate-medium">
                <div className="wrapper s:grid s:grid-12">
                  <div className="s:col-start-2 s:col-span-10 m:col-start-4 m:col-span-6">
                    <div data-triggers="splitWords">
                      <h2 className="heading">
                        Want to help us build the future of safe AI?
                      </h2>
                    </div>

                    <div className="s:col-start-1 s:col-span-12">
                      <a
                        href="careers"
                        className="cta-1 btn-primary btn-light contentFadeUp"
                        data-triggers="inViewOnce"
                        aria-label="Join Us"
                      >
                        <span className="btn-label">
                          Join Us
                          <span
                            className="btn-anim"
                            title="Join Us"
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
      </div>
      <Footer />
    </>
  );
}
