import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { Script } from "./_document";
import { useEffect } from "react";
import { NextSeo } from "next-seo";

export default function Product() {
  useEffect(() => {
    setTimeout(() => {
      Script();
    }, 200);
  }, []);
  return (
    <>
      <NextSeo
        title="SuisseGPT a Generative AI model for the modern Enterprise"
        description="
Introducing SuisseGPT - a Private trained Generative AI model for Today's Enterprises, Proudly Hosted in Switzerland."
        openGraph={{
          url: "http://suissegpt.ai",
          title: "SuisseGPT a Generative AI model for the modern Enterprise",
          description:
            "Introducing SuisseGPT - a Private trained Generative AI model for Today's Enterprises, Proudly Hosted in Switzerland.",
        }}
      />
      <Header />
      <div className="page-dom-content">
        <main data-taxi>
          <article data-taxi-view="default" data-handle="product">
            <div className="page-container">
              <div className="product-container">
                <div className="b-headingDescription2Cta">
                  <div className="wrapper">
                    <div className="s:grid s:grid-12">
                      <div className="s:col-start-4 s:col-span-6">
                        <div
                          data-triggers=""
                          data-trigger-stagger="0.2"
                          data-trigger-stagger-from="start"
                        >
                          <div className="heading h0">
                            Meet
                            <br />
                            SuisseGPT
                          </div>
                        </div>
                      </div>
                      <div className="s:col-start-4 s:col-span-6 m:col-start-5 m:col-span-4">
                        <div className="contentFade" data-triggers="inViewOnce">
                          <p className="description text-b1">
                            A State-of-the-art AI Assistant Tailored to Your
                            Tasks, Regardless of Their Magnitude Versatile,
                            Adaptable, and Personalizable
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
                          href="https://usedemand.com/pricing"
                          className="cta-2 btn-secondary btn-light contentFadeUp"
                          data-triggers="inViewOnce"
                          target="_blank"
                          rel="noopener"
                          aria-label="Try SuisseGPT on Demand"
                        >
                          <span className="btn-label">
                            Try SuisseGPT on Demand
                            <span
                              className="btn-anim"
                              title="Try SuisseGPT on Demand"
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
                            Since deploying SuisseGPT in our product, we&#039;re
                            seeing higher user engagement, stronger user
                            feedback and we&#039;re closing more deals.
                          </blockquote>
                          <div className="attribution spacer-micro-mt">
                            <div className="hyphen">
                              <strong>&mdash;&nbsp;</strong>
                            </div>
                            <div>
                              <div className="text-caption">
                                <strong>Loredana Qvist</strong>
                              </div>
                              <div className="text-caption">CEO, Demand</div>
                            </div>
                          </div>
                        </div>
                        <div className="quote-wrapper stagger-item s:col-start-5 s:col-span-4">
                          <blockquote className="h4">
                            Suisseblocks has already been a great partner,
                            helped us scope real estate investment faster and
                            find the right deals in the market in record time.
                          </blockquote>
                          <div className="attribution spacer-micro-mt">
                            <div className="hyphen">
                              <strong>&mdash;&nbsp;</strong>
                            </div>
                            <div>
                              <div className="text-caption">
                                <strong>Robert Shemin</strong>
                              </div>
                              <div className="text-caption">
                                Chief Investment Officer, Realprop
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="quote-wrapper stagger-item s:col-start-9 s:col-span-4">
                          <blockquote className="h4">
                            SuisseGPT's ability to sort through complex deals in
                            no time, sentiment analasis has increased
                            productivity by 10X.
                          </blockquote>
                          <div className="attribution spacer-micro-mt">
                            <div className="hyphen">
                              <strong>&mdash;&nbsp;</strong>
                            </div>
                            <div>
                              <div className="text-caption">
                                <strong>Kai Nowosel</strong>
                              </div>
                              <div className="text-caption">
                                Chief Procurement Officer, Accenture
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
                                  src="https://res.cloudinary.com/dftbihnlb/video/upload/v1684917129/I_d_be_happy_to_help_you_What_is_your_customer_id_1_dsnvyx.mp4"
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
                                Proficient, adaptable, personalized
                              </div>
                              <p className="text-b2 spacer-small-mt">
                                SuisseGPT excels as a delightful corporate
                                representative, a diligent research assistant,
                                an innovative creative collaborator, a
                                proficient task automator, and beyond. Its
                                personality, tone, and behavior can be
                                seamlessly tailored to meet your specific
                                requirements and preferences.
                              </p>
                            </div>
                          </div>
                          <div className="list s:col-start-2 s:col-span-10">
                            <div className="asset-container order-2">
                              <div className="video-container">
                                <video
                                  src="https://res.cloudinary.com/dftbihnlb/video/upload/v1684918128/Copy_of_247_World_Wide_in_your_Datacenter_ukkvem.mp4"
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
                                Effortless Integration Through Standard APIs
                              </div>
                              <p className="text-b2 spacer-small-mt">
                                With minimal effort, SuisseGPT can be integrated
                                into any product or toolchain you are
                                developing.
                              </p>
                            </div>
                          </div>
                          <div className="list s:col-start-2 s:col-span-10">
                            <div className="asset-container order-1">
                              <div className="video-container">
                                <video
                                  src="https://res.cloudinary.com/dftbihnlb/video/upload/v1684917557/Hey_SuisseGPT_I_want_you_to_tell_me_how_to_1_yx3y0e.mp4"
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
                              <div className="h2">Reliable and dependable</div>
                              <p className="text-b2 spacer-small-mt">
                                Thanks to the implementation of Constitutional
                                AI and harmlessness training, you can trust
                                SuisseGPT to accurately represent your company
                                and its needs. SuisseGPT has been programmed to
                                gracefully handle even potentially disagreeable
                                or harmful conversational scenarios.
                              </p>
                            </div>
                          </div>
                          <div className="list s:col-start-2 s:col-span-10">
                            <div className="asset-container order-2">
                              <div className="video-container">
                                <video
                                  src="https://res.cloudinary.com/dftbihnlb/video/upload/v1684917877/247_World_Wide_in_your_Datacenter_xqtwuh.mp4"
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
                                Availability Round the Clock
                              </div>
                              <p className="text-b2 spacer-small-mt">
                                SuisseGPT is perpetually available to you or
                                your customers as required, supported by servers
                                designed to scale and meet demanding workloads.
                                Utilize the Power of SuisseGPT
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
                        <h2 className="heading">Put SuisseGPT to work</h2>
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
                                      SuisseGPT assures quick and cordial
                                      responses to customer service requests,
                                      thereby reducing costs and enhancing
                                      customer satisfaction. SuisseGPT is
                                      capable of learning when to escalate tasks
                                      to a human CSR, allowing your team to
                                      concentrate on the more intricate
                                      challenges.
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
                                        alt="SuisseGPT Work Legal"
                                        style={{ objectPosition: "50% 50%" }}
                                      />
                                    </div>
                                  </div>
                                  <div className="description text-b2 s:col-start-7 s:col-span-4">
                                    <p>
                                      SuisseGPT is equipped to analyze legal
                                      documents and answer questions about them,
                                      enabling lawyers to minimize costs and
                                      concentrate on more strategic tasks.
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
                                        alt="SuisseGPT Work Coaching"
                                        style={{ objectPosition: "50% 50%" }}
                                      />
                                    </div>
                                  </div>
                                  <div className="description text-b2 s:col-start-7 s:col-span-4">
                                    <p>
                                      As an ever-ready active listening
                                      companion, SuisseGPT can aid personal
                                      growth as well as career development,
                                      providing a platform to either listen or
                                      offer advice.
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
                                        alt="SuisseGPT Work Search"
                                        style={{ objectPosition: "50% 50%" }}
                                      />
                                    </div>
                                  </div>
                                  <div className="description text-b2 s:col-start-7 s:col-span-4">
                                    <p>
                                      SuisseGPT can seamlessly integrate with
                                      web search and private search across
                                      knowledge bases, transforming search
                                      results triggered by user queries into
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
                                        alt="SuisseGPT Work Back Office"
                                        style={{ objectPosition: "50% 50%" }}
                                      />
                                    </div>
                                  </div>
                                  <div className="description text-b2 s:col-start-7 s:col-span-4">
                                    <p>
                                      SuisseGPT can handle an array of routine
                                      office tasks. It can extract pertinent
                                      information from emails and documents,
                                      categorize and summarize survey responses,
                                      and generally manage large volumes of text
                                      swiftly and accurately.
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
                                        alt="SuisseGPT Work Sales"
                                        style={{ objectPosition: "50% 50%" }}
                                      />
                                    </div>
                                  </div>
                                  <div className="description text-b2 s:col-start-7 s:col-span-4">
                                    <p>
                                      As an always-on virtual sales
                                      representative, SuisseGPT can answer
                                      customer queries and guide them towards
                                      products that cater to their needs.
                                      SuisseGPT can be customized to reflect
                                      your brand's unique personality and tone.
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
                            Build With the Skills of SuisseGPT
                          </h2>
                          <div className="description text-b1">
                            SuisseGPT’s abilities can be amalgamated to simplify
                            even the most intricate tasks.
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
                                  alt="SuisseGPT Skills Text"
                                  style={{ objectPosition: "50% 50%" }}
                                />
                              </div>
                            </div>

                            <div className="heading h4">
                              Manage Volumes of Text
                            </div>

                            <div className="description text-b2">
                              SuisseGPT is your solution for managing documents,
                              emails, FAQs, chat transcripts, records, or any
                              other text. SuisseGPT can edit, rewrite,
                              summarize, classify, extract structured data, and
                              conduct Q&A based on the content.
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
                                  alt="SuisseGPT Skills Conversations"
                                  style={{ objectPosition: "50% 50%" }}
                                />
                              </div>
                            </div>

                            <div className="heading h4">
                              Engage in Natural Conversations
                            </div>

                            <div className="description text-b2">
                              SuisseGPT can play various roles in a dialogue.
                              Provide details about the role and FAQs for common
                              queries, and SuisseGPT will participate in
                              meaningful and natural conversations.
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
                                  alt="SuisseGPT Skills Answers"
                                  style={{ objectPosition: "50% 50%" }}
                                />
                              </div>
                            </div>

                            <div className="heading h4">Procure Answers</div>

                            <div className="description text-b2">
                              SuisseGPT boasts a wide range of general knowledge
                              derived from its extensive training corpus,
                              encompassing technical, scientific, and cultural
                              knowledge. SuisseGPT is proficient in numerous
                              common languages as well as programming languages.
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
                                  alt="SuisseGPT Skills Answers 1"
                                  style={{ objectPosition: "50% 50%" }}
                                />
                              </div>
                            </div>

                            <div className="heading h4">Automate workflows</div>

                            <div className="description text-b2">
                              SuisseGPT is adept at handling basic instructions
                              and logical scenarios, which include formatting
                              outputs as needed, following if-then statements,
                              and conducting a series of logical evaluations in
                              a single prompt.
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
                                Is SuisseGPT secure with my enterprise data?
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
                                  Yes, SuisseGPT uses industry-standard best
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
                                  incorporates SuisseGPT into any application
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
                                What versions of SuisseGPT are available?
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
                                  We currently offer two versions of SuisseGPT.
                                </p>
                                <p>
                                  SuisseGPT - our most powerful model, which
                                  excels at a wide range of tasks from
                                  sophisticated dialogue and creative content
                                  generation to detailed instruction following.
                                </p>
                                <p>
                                  SuisseGPT Instant - a faster and cheaper yet
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
                                What languages does SuisseGPT support?
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
                                  SuisseGPT has the most training in English,
                                  but also performs well in a range of other
                                  common languages, and still has some ability
                                  to communicate in less common languages.
                                  SuisseGPT also has extensive knowledge of
                                  common <em>programming</em> languages!
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
                                Can SuisseGPT access the internet?
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
                                  No. SuisseGPT is designed to be
                                  self-contained, and will respond without
                                  searching the internet. You can, however,
                                  provide SuisseGPT with text from the internet
                                  and ask it to perform tasks with that content.
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
                                  SuisseGPT) that are aligned with people’s
                                  interests.
                                  <br />
                                  <br />- Helpful: SuisseGPT wants to help the
                                  user
                                  <br />
                                  <br />- Honest: SuisseGPT shares information
                                  it believes to be true, and avoids made-up
                                  information
                                  <br />
                                  <br />- Harmless: SuisseGPT will not cooperate
                                  in aiding the user in harmful activities
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
                                How do you further customize SuisseGPT behavior?
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
                                  SuisseGPT’s behavior can be extensively
                                  modified using prompting. Prompts can be used
                                  to explain the desired role, task, and
                                  background knowledge, as well as a few
                                  examples of desired responses.
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
                                Can SuisseGPT models be finetuned?
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
                                How long is SuisseGPT context window?
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
                                Can SuisseGPT do embeddings?
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
                          SuisseGPT, now on Demand
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
                          Introducing SuisseGPT
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
                      <h2 className="heading">Add SuisseGPT to your team</h2>
                    </div>

                    <div className="contentFade" data-triggers="inViewOnce">
                      <p className="description text-b1">
                        Try SuisseGPT and see how AI can add value to your team
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
