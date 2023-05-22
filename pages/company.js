import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { Animation } from "./_document";
import { useEffect } from "react";
import { Script } from "./_document";

export default function Company() {
  useEffect(() => {
    // Animation();
    // setTimeout(() => {
    Script();
    // }, 200);
  }, []);
  return (
    <>
      <Header />
      <div className="page-dom-content">
        <main data-taxi>
          <article data-taxi-view="default" data-handle="company">
            <div className="page-container">
              <div className="company-container wrapper">
                <div className="b-hero-cta s:grid s:grid-12">
                  <h1
                    className="heading s:col-start-3 s:col-span-8 "
                    data-triggers=""
                  >
                    <div className="line-wrapper">
                      <span className="line line-1">Making AI systems</span>
                    </div>
                    <div className="line-wrapper text-right">
                      <span className="line line-2">you can rely on</span>
                    </div>
                  </h1>

                  <div className="description-wrapper s:col-start-4 s:col-span-6 spacer-medium-mt text-b1">
                    <p>
                      Anthropic is an AI safety and research company. We build
                      reliable, interpretable, and steerable AI systems.
                    </p>
                  </div>

                  <div className="cta-wrapper s:col-start-1 s:col-span-12 spacer-medium-mt">
                    <a
                      className="btn-primary"
                      href="careers.html"
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
                      Our Purpose
                    </div>

                    <div className="block-content s:col-start-5 s:col-span-8">
                      <h2>
                        We believe AI will have a vast impact on the world.
                        Anthropic is dedicated to building systems that people
                        can rely on and generating research about the
                        opportunities and risks of AI.
                      </h2>

                      <div className="block-lists s:grid s:grid-8">
                        <div className="post s:col-start-1 s:col-span-4">
                          <div className="h4">We Build Safer Systems</div>
                          <p className="text-b2 spacer-micro-mt">
                            We aim to build frontier AI systems that are
                            reliable, interpretable, and steerable. We conduct
                            frontier research, develop and apply a variety of
                            safety techniques, and deploy the resulting systems
                            via a set of partnerships and products.
                          </p>
                        </div>

                        <div className="post s:col-start-5 s:col-span-4">
                          <div className="h4">Safety Is a Science</div>
                          <p className="text-b2 spacer-micro-mt">
                            We treat AI safety as a systematic science,
                            conducting research, applying it to our products,
                            feeding those insights back into our research, and
                            regularly sharing what we learn with the world along
                            the way.
                          </p>
                        </div>

                        <div className="post s:col-start-1 s:col-span-4">
                          <div className="h4">Interdisciplinary</div>
                          <p className="text-b2 spacer-micro-mt">
                            Anthropic is a collaborative team of researchers,
                            engineers, policy experts, business leaders and
                            operators, who bring our experience from many
                            different domains to our work.
                          </p>
                        </div>

                        <div className="post s:col-start-5 s:col-span-4">
                          <div className="h4">
                            AI Companies are One Piece of a Big Puzzle
                          </div>
                          <p className="text-b2 spacer-micro-mt">
                            AI has the potential to fundamentally change how the
                            world works. We view ourselves as just one piece of
                            this evolving puzzle. We collaborate with civil
                            society, government, academia, nonprofits and
                            industry to promote safety industry-wide.
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
                      The Team
                    </div>

                    <div className="block-content s:col-start-1 s:col-span-12 m:col-start-5 m:col-span-8">
                      <p className="text-b1">
                        We’re a team of researchers, engineers, policy experts
                        and operational leaders, with experience spanning a
                        variety of disciplines, all working together to build
                        reliable and understandable AI systems.
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
                              We conduct frontier AI research across a variety
                              of modalities, and explore novel and emerging
                              safety research areas from interpretability to RL
                              from human feedback to policy and societal impacts
                              analysis.
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
                              We think about the impacts of our work and strive
                              to communicate what we’re seeing at the frontier
                              to policymakers and civil society in the US and
                              abroad to help promote safe and reliable AI.
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
                              We translate our research into tangible, practical
                              tools like Claude that benefit businesses,
                              nonprofits and civil society groups and their
                              clients and people around the globe.
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
                              Our people, finance, legal, and recruiting teams
                              are the human engines that make Anthropic go.
                              We’ve had previous careers at NASA, startups, and
                              the armed forces and our diverse experiences help
                              make Anthropic a great place to work (and we love
                              plants!).
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
                        <div className="h3">Here for the mission</div>
                        <p className="text-b2 spacer-micro-mt">
                          Anthropic exists for our mission: to ensure
                          transformative AI helps people and society flourish.
                          Progress this decade may be rapid, and we expect
                          increasingly capable systems to pose novel challenges.
                          We pursue our mission by building frontier systems,
                          studying their behaviors, working to responsibly
                          deploy them, and regularly sharing our safety
                          insights. We collaborate with other projects and
                          stakeholders seeking a similar outcome.
                        </p>
                      </div>

                      <div className="post">
                        <div className="h4">02</div>
                        <div className="h3">Unusually high trust</div>
                        <p className="text-b2 spacer-micro-mt">
                          Our company is an unusually high trust environment: we
                          assume good faith, disagree kindly, and prioritize
                          honesty. We expect emotional maturity and intellectual
                          openness. At its best, our trust enables us to make
                          better decisions as an organization than any one of us
                          could as individuals.
                        </p>
                      </div>

                      <div className="post">
                        <div className="h4">03</div>
                        <div className="h3">One big team</div>
                        <p className="text-b2 spacer-micro-mt">
                          Collaboration is central to our work, culture, and
                          value proposition. While we have many teams at
                          Anthropic, we feel the broader sense in which we are
                          all on the same team working together towards the
                          mission. Leadership sets the strategy, with broad
                          input from everyone, and trusts each piece of the
                          organization to pursue these goals in their unique
                          style. Individuals commonly contribute to work across
                          many different areas.
                        </p>
                      </div>

                      <div className="post">
                        <div className="h4">04</div>
                        <div className="h3">Do the simple thing that works</div>
                        <p className="text-b2 spacer-micro-mt">
                          We celebrate trying the simple thing before the
                          clever, novel thing. We embrace pragmatism - sensible,
                          practical approaches that acknowledge tradeoffs. We
                          love empiricism - finding out what actually works by
                          trying it - and apply this to our research, our
                          engineering and our collaboration. We aim to be open
                          about what we understand and what we don’t.
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
                          Zoom Partnership and Investment in Anthropic
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
                          Claude’s Constitution
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
                          Partnering with Scale to Bring Generative AI to
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
                        href="careers.html"
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
