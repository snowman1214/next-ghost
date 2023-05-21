import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { Animation } from "./_document";
import { Script } from "./_document";
import { useEffect } from "react";

export default function Product() {
  useEffect(() => {
    Animation();
    Script();
  }, []);
  return (
    <>
      <Header />
      <div className="page-dom-content" style={{ pointerEvents: "auto" }}>
        <main data-taxi>
          <article data-taxi-view="default" data-handle="product">
            <div className="page-container">
              <div className="product-container">
                <div className="b-headingDescription2Cta">
                  <div className="wrapper">
                    <div className="s:grid s:grid-12">
                      <div className="s:col-start-4 s:col-span-6">
                        <div
                          data-triggers="splitWords"
                          data-trigger-stagger="0.2"
                          data-trigger-stagger-from="start"
                        >
                          <div className="heading h0">
                            Meet
                            <br />
                            Claude
                          </div>
                        </div>
                      </div>
                      <div className="s:col-start-4 s:col-span-6 m:col-start-5 m:col-span-4">
                        <div className="contentFade" data-triggers="inViewOnce">
                          <p className="description text-b1">
                            A next-generation AI assistant for your tasks, no
                            matter the scale
                          </p>
                        </div>
                      </div>
                      <div className="s:col-start-1 s:col-span-12">
                        <button
                          className="btn-request-access cta-1 btn-primary contentFadeUp"
                          data-triggers="inViewOnce"
                          data-modal="requestAccess"
                          aria-label="Request Access"
                        >
                          <span
                            className="btn-label"
                            aria-label="Request Access"
                          >
                            Request Access
                            <span
                              className="btn-anim"
                              title="Request Access"
                              aria-hidden="true"
                            ></span>
                          </span>
                        </button>
                        <a
                          href="https://slackbot.anthropic.com/slack/install"
                          className="cta-2 btn-secondary btn-light contentFadeUp"
                          data-triggers="inViewOnce"
                          target="_blank"
                          rel="noopener"
                          aria-label="Try Claude in Slack"
                        >
                          <span className="btn-label">
                            Try Claude in Slack
                            <span
                              className="btn-anim"
                              title="Try Claude in Slack"
                              aria-hidden="true"
                            ></span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-container"
                    data-triggers="scroll"
                    data-trigger-scroll-start="top-=72px top"
                  >
                    <div
                      className="lazyPicture aspect-ratio "
                      style={{ Aspect: "39.0625%" }}
                      data-scroll
                    >
                      <img
                        className=""
                        sizes="100vw"
                        src="../optimise2.assets-servd.host/anthropic-website/production/images/Claude_Banner8198.png?w=1920&amp;h=750&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678491964&amp;s=f126c7f71416e711da9a57662c6b8060"
                        srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_Banner.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678491964&amp;s=37eb0c28c093427bc82d7b1f608a3e91 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_Banner.png?w=1440&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678491964&amp;s=27318a958bc4dc69c14686a069a28a88 1440w, https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_Banner.png?w=1920&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678491964&amp;s=ebcb9dfc932d0c286683f21f3f2bb846 1920w"
                        alt="Claude Banner"
                        style={{ objectPosition: "50% 50%" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="content-block-wrapper wrapper">
                  <div className="content-blocks">
                    <section
                      id="content-block-1"
                      className="content-block b-quotes isFirst "
                    >
                      <div
                        className="block-content s:grid s:grid-12 contentFadeUpStagger"
                        data-triggers="inViewOnce"
                        data-trigger-start="top 100%"
                      >
                        <div className="quote-wrapper stagger-item s:col-start-1 s:col-span-4">
                          <blockquote className="h4">
                            Since deploying Claude in our product, we&#039;re
                            seeing higher user engagement, stronger user
                            feedback and we&#039;re closing more deals.
                          </blockquote>
                          <div className="attribution spacer-micro-mt">
                            <div className="hyphen">
                              <strong>&mdash;&nbsp;</strong>
                            </div>
                            <div>
                              <div className="text-caption">
                                <strong>Richard Robinson</strong>
                              </div>
                              <div className="text-caption">CEO, Robin AI</div>
                            </div>
                          </div>
                        </div>
                        <div className="quote-wrapper stagger-item s:col-start-5 s:col-span-4">
                          <blockquote className="h4">
                            Anthropic has already been a great partner, working
                            closely with us to improve the quality of DuckAssist
                            answers while also meeting our strict privacy
                            requirements.
                          </blockquote>
                          <div className="attribution spacer-micro-mt">
                            <div className="hyphen">
                              <strong>&mdash;&nbsp;</strong>
                            </div>
                            <div>
                              <div className="text-caption">
                                <strong>Steve Fischer</strong>
                              </div>
                              <div className="text-caption">
                                Chief Business Officer, DuckDuckGo
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="quote-wrapper stagger-item s:col-start-9 s:col-span-4">
                          <blockquote className="h4">
                            Users describe Claude’s answers as detailed and
                            easily understood, and they like that exchanges feel
                            like natural conversation.
                          </blockquote>
                          <div className="attribution spacer-micro-mt">
                            <div className="hyphen">
                              <strong>&mdash;&nbsp;</strong>
                            </div>
                            <div>
                              <div className="text-caption">
                                <strong>Autumn Besselman</strong>
                              </div>
                              <div className="text-caption">
                                Head of People and Comms, Quora
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      id="content-block-2"
                      className="content-block b-labelStaggeredAssetLists   s:grid s:grid-12"
                      data-triggers="inViewOnce"
                    >
                      <div className="block-content s:col-start-1 s:col-span-12">
                        <div className="block-lists s:grid s:grid-12">
                          <div className="list s:col-start-2 s:col-span-10">
                            <div className="asset-container order-1">
                              <div className="video-container">
                                <video
                                  src="https://servd-anthropic-website.b-cdn.net/production/images/Anthropic_ProductAnimation_Tone_WhiteBG.mp4"
                                  preload="meta"
                                  muted
                                  loop
                                  playsInline
                                  autoPlay
                                  data-triggers="toggleVideo"
                                ></video>
                              </div>
                            </div>
                            <div className="list-content order-2">
                              <div className="h2">
                                Skilled, flexible, customizable
                              </div>
                              <p className="text-b2 spacer-small-mt">
                                Claude can be a delightful company
                                representative, a research assistant, a creative
                                partner, a task automator, and more.
                                Personality, tone, and behavior can all be
                                customized to your needs.
                              </p>
                            </div>
                          </div>
                          <div className="list s:col-start-2 s:col-span-10">
                            <div className="asset-container order-2">
                              <div className="video-container">
                                <video
                                  src="https://servd-anthropic-website.b-cdn.net/production/images/Anthropic_ProductAnimation_Integrations_WhiteBG.mp4"
                                  preload="meta"
                                  muted
                                  loop
                                  playsInline
                                  autoPlay
                                  data-triggers="toggleVideo"
                                ></video>
                              </div>
                            </div>
                            <div className="list-content order-1">
                              <div className="h2">
                                Easy integration via standard APIs
                              </div>
                              <p className="text-b2 spacer-small-mt">
                                Claude can be incorporated into any product or
                                toolchain you’re building with minimal effort.
                              </p>
                            </div>
                          </div>
                          <div className="list s:col-start-2 s:col-span-10">
                            <div className="asset-container order-1">
                              <div className="video-container">
                                <video
                                  src="https://servd-anthropic-website.b-cdn.net/production/images/Anthropic_ProductAnimation_Safety_WhiteBG.mp4"
                                  preload="meta"
                                  muted
                                  loop
                                  playsInline
                                  autoPlay
                                  data-triggers="toggleVideo"
                                ></video>
                              </div>
                            </div>
                            <div className="list-content order-2">
                              <div className="h2">Helpful and trustworthy</div>
                              <p className="text-b2 spacer-small-mt">
                                Thanks to Constitutional AI and harmlessness
                                training, you can trust Claude to represent your
                                company and its needs. Claude has been trained
                                to handle even unpleasant or malicious
                                conversational partners with grace.
                              </p>
                            </div>
                          </div>
                          <div className="list s:col-start-2 s:col-span-10">
                            <div className="asset-container order-2">
                              <div className="video-container">
                                <video
                                  src="https://servd-anthropic-website.b-cdn.net/production/images/Anthropic_ProductAnimation_Availability_WhiteBG.mp4"
                                  preload="meta"
                                  muted
                                  loop
                                  playsInline
                                  autoPlay
                                  data-triggers="toggleVideo"
                                ></video>
                              </div>
                            </div>
                            <div className="list-content order-1">
                              <div className="h2">Available 24/7</div>
                              <p className="text-b2 spacer-small-mt">
                                Claude is always available, whenever you or your
                                customers need, with servers that are designed
                                to scale and meet demanding workloads.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      id="content-block-4"
                      className="content-block b-tabbedSlider  "
                    >
                      <div className="block-content">
                        <h2 className="heading">Put Claude to work</h2>
                        <div className="tabs-wrapper">
                          <div className="tabs spacer-medium-mt">
                            <button className="btn-tab active" data-index="1">
                              <span className="text-label">
                                Customer Service
                              </span>
                            </button>
                            <button className="btn-tab " data-index="2">
                              <span className="text-label">Legal</span>
                            </button>
                            <button className="btn-tab " data-index="3">
                              <span className="text-label">Coaching</span>
                            </button>
                            <button className="btn-tab " data-index="4">
                              <span className="text-label">Search</span>
                            </button>
                            <button className="btn-tab " data-index="5">
                              <span className="text-label">Back-office</span>
                            </button>
                            <button className="btn-tab " data-index="6">
                              <span className="text-label">Sales</span>
                            </button>
                          </div>
                        </div>
                        <div className="slider-wrapper spacer-large-mt">
                          <div className="slider">
                            <div className="slider-content">
                              <div className="slide-wrapper">
                                <div className="slide slide-1 s:grid s:grid-12">
                                  <div className="asset-container s:col-start-2 s:col-span-5">
                                    <div
                                      className="lazyPicture aspect-ratio "
                                      style={{ Aspect: "75.189393939394%" }}
                                      data-scroll
                                    >
                                      <img
                                        className=""
                                        sizes="(max-width: 699px) 100vw, 50vw"
                                        src="../optimise2.assets-servd.host/anthropic-website/production/images/Claude_Work_Customer_Servicec2be.png?w=1056&amp;h=794&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302477&amp;s=b5ad0d6c5f27a08dd028125e197c65ed"
                                        srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_Work_Customer_Service.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302477&amp;s=471a7ac09d0636730f3e347aa243ca76 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_Work_Customer_Service.png?w=1056&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302477&amp;s=c958647b5acd1ff9393e37ddcc6ee496 1056w"
                                        alt="Claude Work Customer Service"
                                        style={{ objectPosition: "50% 50%" }}
                                      />
                                    </div>
                                  </div>
                                  <div className="description text-b2 s:col-start-7 s:col-span-4">
                                    <p>
                                      Claude ensures speedy and
                                      friendly resolution to customer service
                                      requests, saving costs and increasing
                                      customer satisfaction.  Claude can also be
                                      taught when to hand off tasks to a human
                                      CSR, enabling your team to focus on the
                                      most complex challenges.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="slide-wrapper">
                                <div className="slide slide-2 s:grid s:grid-12">
                                  <div className="asset-container s:col-start-2 s:col-span-5">
                                    <div
                                      className="lazyPicture aspect-ratio "
                                      style={{ Aspect: "75.189393939394%" }}
                                      data-scroll
                                    >
                                      <img
                                        className=""
                                        sizes="(max-width: 699px) 100vw, 50vw"
                                        src="../optimise2.assets-servd.host/anthropic-website/production/images/Claude_Work_Legal042c.png?w=1056&amp;h=794&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678729370&amp;s=30ed5f57cc0c0f5f28d1983e8de3f82c"
                                        srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_Work_Legal.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678729370&amp;s=d68ff747c0cae4335d4703a687d9d9d4 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_Work_Legal.png?w=1056&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678729370&amp;s=8d271f33eb39568cf0bcbcf4f7808767 1056w"
                                        alt="Claude Work Legal"
                                        style={{ objectPosition: "50% 50%" }}
                                      />
                                    </div>
                                  </div>
                                  <div className="description text-b2 s:col-start-7 s:col-span-4">
                                    <p>
                                      Claude is able to parse legal documents
                                      and answer questions about them. Lawyers
                                      can reduce costs and focus on higher level
                                      work.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="slide-wrapper">
                                <div className="slide slide-3 s:grid s:grid-12">
                                  <div className="asset-container s:col-start-2 s:col-span-5">
                                    <div
                                      className="lazyPicture aspect-ratio "
                                      style={{ Aspect: "75.189393939394%" }}
                                      data-scroll
                                    >
                                      <img
                                        className=""
                                        sizes="(max-width: 699px) 100vw, 50vw"
                                        src="../optimise2.assets-servd.host/anthropic-website/production/images/Claude_Work_Coaching4722.png?w=1056&amp;h=794&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302483&amp;s=64c0d2db90d59863e032a7775fe57e78"
                                        srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_Work_Coaching.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302483&amp;s=bab7c3a4c086a74e79b183ce0f839f68 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_Work_Coaching.png?w=1056&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302483&amp;s=24f1b856f5f6379b4ddf4b4cd3f21d52 1056w"
                                        alt="Claude Work Coaching"
                                        style={{ objectPosition: "50% 50%" }}
                                      />
                                    </div>
                                  </div>
                                  <div className="description text-b2 s:col-start-7 s:col-span-4">
                                    <p>
                                      Claude can be an always-available active
                                      listening companion for personal growth as
                                      well as career development, providing a
                                      space to listen or give advice.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="slide-wrapper">
                                <div className="slide slide-4 s:grid s:grid-12">
                                  <div className="asset-container s:col-start-2 s:col-span-5">
                                    <div
                                      className="lazyPicture aspect-ratio "
                                      style={{ Aspect: "75.189393939394%" }}
                                      data-scroll
                                    >
                                      <img
                                        className=""
                                        sizes="(max-width: 699px) 100vw, 50vw"
                                        src="../optimise2.assets-servd.host/anthropic-website/production/images/Claude_Work_Search8275.png?w=1056&amp;h=794&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302461&amp;s=020d7e50a32bd3ee3f7e9700b22c98b9"
                                        srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_Work_Search.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302461&amp;s=69ec5e0edd61e5678002c2e59af25ba2 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_Work_Search.png?w=1056&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302461&amp;s=ba6521ff8943c378bf504168cbba1b35 1056w"
                                        alt="Claude Work Search"
                                        style={{ objectPosition: "50% 50%" }}
                                      />
                                    </div>
                                  </div>
                                  <div className="description text-b2 s:col-start-7 s:col-span-4">
                                    <p>
                                      Claude is able to integrate seamlessly
                                      into web search as well as private search
                                      over knowledge bases, synthesizing search
                                      results triggered by user questions into
                                      natural language answers.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="slide-wrapper">
                                <div className="slide slide-5 s:grid s:grid-12">
                                  <div className="asset-container s:col-start-2 s:col-span-5">
                                    <div
                                      className="lazyPicture aspect-ratio "
                                      style={{ Aspect: "75.189393939394%" }}
                                      data-scroll
                                    >
                                      <img
                                        className=""
                                        sizes="(max-width: 699px) 100vw, 50vw"
                                        src="../optimise2.assets-servd.host/anthropic-website/production/images/Claude_Work_Back-Officefb69.png?w=1056&amp;h=794&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302487&amp;s=3c3aba5b4ffc68590ae8b932c8489f68"
                                        srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_Work_Back-Office.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302487&amp;s=4b31d90376b0683736a993565f10d5b1 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_Work_Back-Office.png?w=1056&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302487&amp;s=d4edbf998135e27021445bd8d3a90e4b 1056w"
                                        alt="Claude Work Back Office"
                                        style={{ objectPosition: "50% 50%" }}
                                      />
                                    </div>
                                  </div>
                                  <div className="description text-b2 s:col-start-7 s:col-span-4">
                                    <p>
                                      Claude is able to handle a wide range of
                                      rote office work. It can extract relevant
                                      information from emails and documents,
                                      categorize and summarize survey responses,
                                      and generally wrangle reams of text with
                                      high speed and accuracy.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="slide-wrapper">
                                <div className="slide slide-6 s:grid s:grid-12">
                                  <div className="asset-container s:col-start-2 s:col-span-5">
                                    <div
                                      className="lazyPicture aspect-ratio "
                                      style={{ Aspect: "75.189393939394%" }}
                                      data-scroll
                                    >
                                      <img
                                        className=""
                                        sizes="(max-width: 699px) 100vw, 50vw"
                                        src="../optimise2.assets-servd.host/anthropic-website/production/images/Claude_Work_Saleseded.png?w=1056&amp;h=794&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302467&amp;s=b5ffb711c91cf6ef06dbcba99f0cd33b"
                                        srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_Work_Sales.png?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302467&amp;s=c124b9f7e5fb79a0bb07c7d08c47d338 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Claude_Work_Sales.png?w=1056&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302467&amp;s=4acdeb1a41772adad05d7ade48593943 1056w"
                                        alt="Claude Work Sales"
                                        style={{ objectPosition: "50% 50%" }}
                                      />
                                    </div>
                                  </div>
                                  <div className="description text-b2 s:col-start-7 s:col-span-4">
                                    <p>
                                      Claude can act as an always-on and
                                      enthusiastic virtual sales representative,
                                      answering customer questions and guiding
                                      them towards products that meet their
                                      needs. Customize Claude with your brand's
                                      personality and tone.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section
                      id="content-block-5"
                      className="content-block b-iconList  "
                    >
                      <div className="block-content">
                        <div className="top-content">
                          <h2 className="heading">
                            Build with Claude&#039;s skills
                          </h2>
                          <div className="description text-b1">
                            Claude’s skills can be combined to simplify even the
                            most complex tasks
                          </div>
                        </div>
                        <div className="list-wrapper">
                          <div className="list list-1">
                            <div className="asset-container">
                              <div
                                className="lazyPicture aspect-ratio "
                                style={{ Aspect: "100%" }}
                                data-scroll
                              >
                                <img
                                  className=""
                                  sizes="100vw"
                                  src="../optimise2.assets-servd.host/anthropic-website/production/images/Claudes_Skills_Text2cfd.png?w=192&amp;h=192&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302206&amp;s=840937b978f46f11cca51a4286f6c920"
                                  srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Claudes_Skills_Text.png?w=192&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302206&amp;s=c03420529b3f127dd81e787d80e004a0 192w"
                                  alt="Claudes Skills Text"
                                  style={{ objectPosition: "50% 50%" }}
                                />
                              </div>
                            </div>

                            <div className="heading h4">
                              Process mountains of text
                            </div>

                            <div className="description text-b2">
                              Whether you&#039;re dealing with documents,
                              emails, FAQs, chat transcripts, records, or
                              something else, Claude is here to help. Claude can
                              edit, rewrite, summarize, classNameify, extract
                              structured data, do Q&amp;A based on the content,
                              and more.
                            </div>
                          </div>
                          <div className="list list-2">
                            <div className="asset-container">
                              <div
                                className="lazyPicture aspect-ratio "
                                style={{ Aspect: "100%" }}
                                data-scroll
                              >
                                <img
                                  className=""
                                  sizes="100vw"
                                  src="../optimise2.assets-servd.host/anthropic-website/production/images/Claudes_Skills_Conversationsa912.png?w=192&amp;h=192&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302207&amp;s=b60e651383ed1e680da8a771e49d65a1"
                                  srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Claudes_Skills_Conversations.png?w=192&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302207&amp;s=440f328e11f803dde140e47357f28496 192w"
                                  alt="Claudes Skills Conversations"
                                  style={{ objectPosition: "50% 50%" }}
                                />
                              </div>
                            </div>

                            <div className="heading h4">
                              Have natural conversations
                            </div>

                            <div className="description text-b2">
                              Claude can take on a variety of roles in a
                              dialogue. Provide details on the role and an FAQ
                              for common questions, and Claude will engage in
                              relevant, naturalistic back-and-forth
                              conversation.
                            </div>
                          </div>

                          <div className="list list-3">
                            <div className="asset-container">
                              <div
                                className="lazyPicture aspect-ratio "
                                style={{ Aspect: "100%" }}
                                data-scroll
                              >
                                <img
                                  className=""
                                  sizes="100vw"
                                  src="../optimise2.assets-servd.host/anthropic-website/production/images/Claudes_Skills_Answers4195.png?w=192&amp;h=192&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302209&amp;s=f8a64c41a20146a8332578c26a88b1d4"
                                  srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Claudes_Skills_Answers.png?w=192&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302209&amp;s=2e28e4861331f33650a4b3d3a339695e 192w"
                                  alt="Claudes Skills Answers"
                                  style={{ objectPosition: "50% 50%" }}
                                />
                              </div>
                            </div>

                            <div className="heading h4">Get answers</div>

                            <div className="description text-b2">
                              Claude has extensive general knowledge honed from
                              its vast training corpus, with detailed background
                              on technical, scientific, and cultural knowledge.
                              Claude can speak a variety of common languages, as
                              well as programming languages.
                            </div>
                          </div>

                          <div className="list list-4">
                            <div className="asset-container">
                              <div
                                className="lazyPicture aspect-ratio "
                                style={{ Aspect: "100%" }}
                                data-scroll
                              >
                                <img
                                  className=""
                                  sizes="100vw"
                                  src="../optimise2.assets-servd.host/anthropic-website/production/images/Claudes_Skills_Answers-18591.png?w=192&amp;h=192&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302210&amp;s=0f90180af314f94da3c3f3cab9e2d7e0"
                                  srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Claudes_Skills_Answers-1.png?w=192&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1678302210&amp;s=4235d9a0f529afd12d67d5c20e682ffc 192w"
                                  alt="Claudes Skills Answers 1"
                                  style={{ objectPosition: "50% 50%" }}
                                />
                              </div>
                            </div>

                            <div className="heading h4">Automate workflows</div>

                            <div className="description text-b2">
                              Claude can handle a variety of basic instructions
                              and logical scenarios, including formatting
                              outputs as desired, following if-then statements,
                              and making a series of logical evaluations in a
                              single prompt.
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section
                      id="content-block-6"
                      className="content-block b-faqs  isLast"
                      data-triggers="inViewOnce"
                      data-trigger-start="top 66%"
                    >
                      <div className="block-label">
                        <h2>FAQs</h2>
                      </div>

                      <div className="block-content spacer-medium-mt">
                        <div className="faqs-container">
                          <div id="faq-container-1" className="faq-container">
                            <input
                              id="faq-1"
                              className="faq-input"
                              name="open-faqs"
                              type="checkbox"
                            />
                            <label
                              htmlFor="faq-1"
                              className="faq-label s:grid s:grid-12"
                            >
                              <div className="faq-title h4 s:col-start-1 s:col-span-10">
                                Is Claude secure with my enterprise data?
                              </div>

                              <span className="faq-icon s:col-start-11 s:col-span-2">
                                <span className="icon-more">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M18.958 31.25V21.042H8.75v-2.084h10.208V8.75h2.084v10.208H31.25v2.084H21.042V31.25h-2.084Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                                <span className="icon-less">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M8.75 21.042v-2.084h22.5v2.084H8.75Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                              </span>
                            </label>

                            <article
                              id="faq-content-1"
                              className="faq-content s:grid s:grid-12"
                            >
                              <div className="faq-post s:col-start-1 s:col-span-6 text-b2">
                                <p>
                                  Yes, Claude uses industry-standard best
                                  practices for data handling and retention. See
                                  our{" "}
                                  <a
                                    href="https://vault.pactsafe.io/s/9f502c93-cb5c-4571-b205-1e479da61794/legal.html#privacy"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                  >
                                    Privacy Policy
                                  </a>{" "}
                                  for more details. All commercial deployments
                                  are covered by Anthropic's Data Protection
                                  Addendum, which is available upon request. 
                                </p>
                              </div>
                            </article>
                          </div>

                          <div id="faq-container-2" className="faq-container">
                            <input
                              id="faq-2"
                              className="faq-input"
                              name="open-faqs"
                              type="checkbox"
                            />
                            <label
                              htmlFor="faq-2"
                              className="faq-label s:grid s:grid-12"
                            >
                              <div className="faq-title h4 s:col-start-1 s:col-span-10">
                                How does the API work?
                              </div>

                              <span className="faq-icon s:col-start-11 s:col-span-2">
                                <span className="icon-more">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M18.958 31.25V21.042H8.75v-2.084h10.208V8.75h2.084v10.208H31.25v2.084H21.042V31.25h-2.084Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                                <span className="icon-less">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M8.75 21.042v-2.084h22.5v2.084H8.75Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                              </span>
                            </label>

                            <article
                              id="faq-content-2"
                              className="faq-content s:grid s:grid-12"
                            >
                              <div className="faq-post s:col-start-1 s:col-span-6 text-b2">
                                <p>
                                  Our API is designed to be a backend that
                                  incorporates Claude into any application
                                  you’ve developed. Your application sends text
                                  to our API, then receives a response via{" "}
                                  <a href="https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events">
                                    server-sent events
                                  </a>
                                  , a streaming protocol for the web. We have{" "}
                                  <a href="https://console.anthropic.com/docs/api">
                                    API documentation
                                  </a>
                                   with drop-in example code in Python and
                                  Typescript to get you started.
                                </p>
                              </div>
                            </article>
                          </div>

                          <div id="faq-container-3" className="faq-container">
                            <input
                              id="faq-3"
                              className="faq-input"
                              name="open-faqs"
                              type="checkbox"
                            />
                            <label
                              htmlFor="faq-3"
                              className="faq-label s:grid s:grid-12"
                            >
                              <div className="faq-title h4 s:col-start-1 s:col-span-10">
                                What versions of Claude are available?
                              </div>

                              <span className="faq-icon s:col-start-11 s:col-span-2">
                                <span className="icon-more">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M18.958 31.25V21.042H8.75v-2.084h10.208V8.75h2.084v10.208H31.25v2.084H21.042V31.25h-2.084Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                                <span className="icon-less">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M8.75 21.042v-2.084h22.5v2.084H8.75Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                              </span>
                            </label>

                            <article
                              id="faq-content-3"
                              className="faq-content s:grid s:grid-12"
                            >
                              <div className="faq-post s:col-start-1 s:col-span-6 text-b2">
                                <p>
                                  We currently offer two versions of Claude.
                                </p>
                                <p>
                                  Claude - our most powerful model, which excels
                                  at a wide range of tasks from sophisticated
                                  dialogue and creative content generation to
                                  detailed instruction following.
                                </p>
                                <p>
                                  Claude Instant - a faster and cheaper yet
                                  still very capable model, which can handle a
                                  range of tasks including casual dialogue, text
                                  analysis, summarization, and document
                                  question-answering.
                                </p>
                              </div>
                            </article>
                          </div>

                          <div id="faq-container-4" className="faq-container">
                            <input
                              id="faq-4"
                              className="faq-input"
                              name="open-faqs"
                              type="checkbox"
                            />
                            <label
                              htmlFor="faq-4"
                              className="faq-label s:grid s:grid-12"
                            >
                              <div className="faq-title h4 s:col-start-1 s:col-span-10">
                                What is your pricing?
                              </div>

                              <span className="faq-icon s:col-start-11 s:col-span-2">
                                <span className="icon-more">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M18.958 31.25V21.042H8.75v-2.084h10.208V8.75h2.084v10.208H31.25v2.084H21.042V31.25h-2.084Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                                <span className="icon-less">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M8.75 21.042v-2.084h22.5v2.084H8.75Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                              </span>
                            </label>

                            <article
                              id="faq-content-4"
                              className="faq-content s:grid s:grid-12"
                            >
                              <div className="faq-post s:col-start-1 s:col-span-6 text-b2">
                                <p>
                                  You can find our model pricing{" "}
                                  <a
                                    href="https://cdn2.assets-servd.host/anthropic-website/production/images/model_pricing_may2023.pdf"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                  >
                                    here
                                  </a>
                                  .
                                </p>
                              </div>
                            </article>
                          </div>

                          <div id="faq-container-5" className="faq-container">
                            <input
                              id="faq-5"
                              className="faq-input"
                              name="open-faqs"
                              type="checkbox"
                            />
                            <label
                              htmlFor="faq-5"
                              className="faq-label s:grid s:grid-12"
                            >
                              <div className="faq-title h4 s:col-start-1 s:col-span-10">
                                What languages does Claude support?
                              </div>

                              <span className="faq-icon s:col-start-11 s:col-span-2">
                                <span className="icon-more">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M18.958 31.25V21.042H8.75v-2.084h10.208V8.75h2.084v10.208H31.25v2.084H21.042V31.25h-2.084Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                                <span className="icon-less">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M8.75 21.042v-2.084h22.5v2.084H8.75Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                              </span>
                            </label>

                            <article
                              id="faq-content-5"
                              className="faq-content s:grid s:grid-12"
                            >
                              <div className="faq-post s:col-start-1 s:col-span-6 text-b2">
                                <p>
                                  Claude has the most training in English, but
                                  also performs well in a range of other common
                                  languages, and still has some ability to
                                  communicate in less common languages. Claude
                                  also has extensive knowledge of common{" "}
                                  <em>programming</em> languages!
                                </p>
                              </div>
                            </article>
                          </div>

                          <div id="faq-container-6" className="faq-container">
                            <input
                              id="faq-6"
                              className="faq-input"
                              name="open-faqs"
                              type="checkbox"
                            />
                            <label
                              htmlFor="faq-6"
                              className="faq-label s:grid s:grid-12"
                            >
                              <div className="faq-title h4 s:col-start-1 s:col-span-10">
                                Can Claude access the internet?
                              </div>

                              <span className="faq-icon s:col-start-11 s:col-span-2">
                                <span className="icon-more">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M18.958 31.25V21.042H8.75v-2.084h10.208V8.75h2.084v10.208H31.25v2.084H21.042V31.25h-2.084Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                                <span className="icon-less">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M8.75 21.042v-2.084h22.5v2.084H8.75Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                              </span>
                            </label>

                            <article
                              id="faq-content-6"
                              className="faq-content s:grid s:grid-12"
                            >
                              <div className="faq-post s:col-start-1 s:col-span-6 text-b2">
                                <p>
                                  No. Claude is designed to be self-contained,
                                  and will respond without searching the
                                  internet. You can, however, provide Claude
                                  with text from the internet and ask it to
                                  perform tasks with that content.
                                </p>
                              </div>
                            </article>
                          </div>

                          <div id="faq-container-7" className="faq-container">
                            <input
                              id="faq-7"
                              className="faq-input"
                              name="open-faqs"
                              type="checkbox"
                            />
                            <label
                              htmlFor="faq-7"
                              className="faq-label s:grid s:grid-12"
                            >
                              <div className="faq-title h4 s:col-start-1 s:col-span-10">
                                What does constitutional training do?
                              </div>

                              <span className="faq-icon s:col-start-11 s:col-span-2">
                                <span className="icon-more">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M18.958 31.25V21.042H8.75v-2.084h10.208V8.75h2.084v10.208H31.25v2.084H21.042V31.25h-2.084Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                                <span className="icon-less">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M8.75 21.042v-2.084h22.5v2.084H8.75Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                              </span>
                            </label>

                            <article
                              id="faq-content-7"
                              className="faq-content s:grid s:grid-12"
                            >
                              <div className="faq-post s:col-start-1 s:col-span-6 text-b2">
                                <p>
                                  Constitutional training is a process for
                                  training a model to adhere to a “constitution”
                                  of desired behavior. The core Anthropic model
                                  has been finetuned with constitutional
                                  training with the goal of becoming helpful,
                                  honest, and harmless. You can learn more about
                                  constitutional training{" "}
                                  <a
                                    href="index/constitutional-ai-harmlessness-from-ai-feedback.html"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                  >
                                    here
                                  </a>
                                  . 
                                </p>
                              </div>
                            </article>
                          </div>

                          <div id="faq-container-8" className="faq-container">
                            <input
                              id="faq-8"
                              className="faq-input"
                              name="open-faqs"
                              type="checkbox"
                            />
                            <label
                              htmlFor="faq-8"
                              className="faq-label s:grid s:grid-12"
                            >
                              <div className="faq-title h4 s:col-start-1 s:col-span-10">
                                What does &quot;HHH&quot; mean?
                              </div>

                              <span className="faq-icon s:col-start-11 s:col-span-2">
                                <span className="icon-more">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M18.958 31.25V21.042H8.75v-2.084h10.208V8.75h2.084v10.208H31.25v2.084H21.042V31.25h-2.084Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                                <span className="icon-less">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M8.75 21.042v-2.084h22.5v2.084H8.75Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                              </span>
                            </label>

                            <article
                              id="faq-content-8"
                              className="faq-content s:grid s:grid-12"
                            >
                              <div className="faq-post s:col-start-1 s:col-span-6 text-b2">
                                <p>
                                  Helpful, Honest, and Harmless (HHH) are three
                                  components of building AI systems (like
                                  Claude) that are aligned with people’s
                                  interests.
                                  <br />
                                  <br />- Helpful: Claude wants to help the user
                                  <br />
                                  <br />- Honest: Claude shares information it
                                  believes to be true, and avoids made-up
                                  information
                                  <br />
                                  <br />- Harmless: Claude will not cooperate in
                                  aiding the user in harmful activities
                                </p>
                                <p>
                                  While no existing model is close to perfection
                                  on HHH, we are pushing the research frontier
                                  in this area and expect to continue to
                                  improve. For more information about how we
                                  evaluate HHH in our models, you can read our
                                  paper{" "}
                                  <a
                                    href="index/training-a-helpful-and-harmless-assistant-with-reinforcement-learning-from-human-feedback.html"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                  >
                                    here
                                  </a>
                                  .
                                </p>
                              </div>
                            </article>
                          </div>

                          <div id="faq-container-9" className="faq-container">
                            <input
                              id="faq-9"
                              className="faq-input"
                              name="open-faqs"
                              type="checkbox"
                            />
                            <label
                              htmlFor="faq-9"
                              className="faq-label s:grid s:grid-12"
                            >
                              <div className="faq-title h4 s:col-start-1 s:col-span-10">
                                How do you further customize Claudeʼs behavior?
                              </div>

                              <span className="faq-icon s:col-start-11 s:col-span-2">
                                <span className="icon-more">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M18.958 31.25V21.042H8.75v-2.084h10.208V8.75h2.084v10.208H31.25v2.084H21.042V31.25h-2.084Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                                <span className="icon-less">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M8.75 21.042v-2.084h22.5v2.084H8.75Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                              </span>
                            </label>

                            <article
                              id="faq-content-9"
                              className="faq-content s:grid s:grid-12"
                            >
                              <div className="faq-post s:col-start-1 s:col-span-6 text-b2">
                                <p>
                                  Claude’s behavior can be extensively modified
                                  using prompting. Prompts can be used to
                                  explain the desired role, task, and background
                                  knowledge, as well as a few examples of
                                  desired responses.
                                </p>
                              </div>
                            </article>
                          </div>

                          <div id="faq-container-10" className="faq-container">
                            <input
                              id="faq-10"
                              className="faq-input"
                              name="open-faqs"
                              type="checkbox"
                            />
                            <label
                              htmlFor="faq-10"
                              className="faq-label s:grid s:grid-12"
                            >
                              <div className="faq-title h4 s:col-start-1 s:col-span-10">
                                Can Claude models be finetuned?
                              </div>

                              <span className="faq-icon s:col-start-11 s:col-span-2">
                                <span className="icon-more">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M18.958 31.25V21.042H8.75v-2.084h10.208V8.75h2.084v10.208H31.25v2.084H21.042V31.25h-2.084Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                                <span className="icon-less">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M8.75 21.042v-2.084h22.5v2.084H8.75Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                              </span>
                            </label>

                            <article
                              id="faq-content-10"
                              className="faq-content s:grid s:grid-12"
                            >
                              <div className="faq-post s:col-start-1 s:col-span-6 text-b2">
                                <p>
                                  In the vast majority of cases, we believe
                                  well-crafted prompts will get you the results
                                  you want without the expense or delay of
                                  fine-tuning. However, some large enterprise
                                  users may significantly benefit from
                                  fine-tuned models. Please contact us to
                                  discuss whether your needs might be best
                                  addressed with a fine-tuned model by filling
                                  out{" "}
                                  <a
                                    href="earlyaccess/index.html"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                  >
                                    this form
                                  </a>
                                  . 
                                </p>
                              </div>
                            </article>
                          </div>

                          <div id="faq-container-11" className="faq-container">
                            <input
                              id="faq-11"
                              className="faq-input"
                              name="open-faqs"
                              type="checkbox"
                            />
                            <label
                              htmlFor="faq-11"
                              className="faq-label s:grid s:grid-12"
                            >
                              <div className="faq-title h4 s:col-start-1 s:col-span-10">
                                How long is Claudeʼs context window?
                              </div>

                              <span className="faq-icon s:col-start-11 s:col-span-2">
                                <span className="icon-more">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M18.958 31.25V21.042H8.75v-2.084h10.208V8.75h2.084v10.208H31.25v2.084H21.042V31.25h-2.084Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                                <span className="icon-less">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M8.75 21.042v-2.084h22.5v2.084H8.75Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                              </span>
                            </label>

                            <article
                              id="faq-content-11"
                              className="faq-content s:grid s:grid-12"
                            >
                              <div className="faq-post s:col-start-1 s:col-span-6 text-b2">
                                <p>
                                  The combined context window for input and
                                  output is about 100,000 tokens, which works
                                  out to roughly 70,000 words, depending on the
                                  type of content.
                                </p>
                              </div>
                            </article>
                          </div>

                          <div id="faq-container-12" className="faq-container">
                            <input
                              id="faq-12"
                              className="faq-input"
                              name="open-faqs"
                              type="checkbox"
                            />
                            <label
                              htmlFor="faq-12"
                              className="faq-label s:grid s:grid-12"
                            >
                              <div className="faq-title h4 s:col-start-1 s:col-span-10">
                                Can Claude do embeddings?
                              </div>

                              <span className="faq-icon s:col-start-11 s:col-span-2">
                                <span className="icon-more">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M18.958 31.25V21.042H8.75v-2.084h10.208V8.75h2.084v10.208H31.25v2.084H21.042V31.25h-2.084Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                                <span className="icon-less">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M8.75 21.042v-2.084h22.5v2.084H8.75Z"
                                      fill="#191919"
                                    />
                                  </svg>{" "}
                                </span>
                              </span>
                            </label>

                            <article
                              id="faq-content-12"
                              className="faq-content s:grid s:grid-12"
                            >
                              <div className="faq-post s:col-start-1 s:col-span-6 text-b2">
                                <p>
                                  Not at this time! We find the open source
                                  SBERT embeddings to be good enough for most
                                  purposes.
                                </p>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>

              <section className="b-news">
                <div className="wrapper">
                  <div className="top-content">
                    <div className="block-label">
                      <h3>Product News</h3>
                    </div>
                  </div>

                  <div
                    className="block-content s:grid s:grid-12 spacer-medium-mt contentFadeUpStagger"
                    data-triggers="inViewOnce"
                    data-trigger-start="center 100%"
                  >
                    <a
                      className="post post-1 stagger-item s:col-start-1 s:col-span-6 m:col-start-1 m:col-span-4"
                      href="index/100k-context-windows.html"
                      data-id="144353"
                      data-categories="product, announcements"
                    >
                      <div className="post-info">
                        <div className="post-heading h4">
                          Introducing 100K Context Windows
                        </div>

                        <div className="post-timestamp text-label">
                          May 11, 2023
                          <span className="is-bullet">&#9679;</span>1 min read
                        </div>
                      </div>
                    </a>

                    <a
                      className="post post-2 stagger-item s:col-start-7 s:col-span-6 m:col-start-5 m:col-span-4"
                      href="index/claude-now-in-slack.html"
                      data-id="59890"
                      data-categories="product, announcements"
                    >
                      <div className="post-info">
                        <div className="post-heading h4">
                          Claude, now in Slack
                        </div>

                        <div className="post-timestamp text-label">
                          Mar 30, 2023
                          <span className="is-bullet">&#9679;</span>3 min read
                        </div>
                      </div>
                    </a>

                    <a
                      className="post post-3 stagger-item s:col-start-1 s:col-span-6 m:col-start-9 m:col-span-4"
                      href="index/introducing-claude.html"
                      data-id="7578"
                      data-categories="product, announcements"
                    >
                      <div className="post-info">
                        <div className="post-heading h4">
                          Introducing Claude
                        </div>

                        <div className="post-timestamp text-label">
                          Mar 14, 2023
                          <span className="is-bullet">&#9679;</span>4 min read
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
                      <h2 className="heading">Add Claude to your team</h2>
                    </div>

                    <div className="contentFade" data-triggers="inViewOnce">
                      <p className="description text-b1">
                        Try Claude and see how AI can add value to your team
                        today.
                      </p>
                    </div>

                    <div className="s:col-start-1 s:col-span-12">
                      <button
                        className="cta-1 btn-primary btn-light contentFadeUp"
                        data-triggers="inViewOnce"
                        data-modal="requestAccess"
                        aria-label="Request Access"
                      >
                        <span className="btn-label" aria-label="Request Access">
                          Request Access
                          <span
                            className="btn-anim"
                            title="Request Access"
                            aria-hidden="true"
                          ></span>
                        </span>
                      </button>
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
