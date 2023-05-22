import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { Animation } from "./_document";
import { useEffect } from "react";
import { Script } from "./_document";

export default function Careers() {
  useEffect(() => {
    Animation();
    setTimeout(() => {
      Script();
    }, 200);
  }, []);
  return (
    <>
      <Header />
      <div className="page-dom-content">
        <main data-taxi>
          <article data-taxi-view="default" data-handle="careers">
            <div className="page-container">
              <div className="careers-container wrapper">
                <div className="b-hero-cta s:grid s:grid-12">
                  <h1
                    className="heading s:col-start-3 s:col-span-8 "
                    data-triggers="splitWords"
                  >
                    <div className="line-wrapper ">
                      <span className="line line-1">Join the team</span>
                    </div>
                    <div className="line-wrapper text-right">
                      <span className="line line-2">scaling AI for B2B</span>
                    </div>
                  </h1>

                  <div className="description-wrapper s:col-start-4 s:col-span-6 spacer-medium-mt text-b1">
                    <p>
                      We’re a public benefit corporation based in San Francisco.
                      Our team’s experience spans a variety of backgrounds and
                      disciplines, from physics and machine learning to public
                      policy and business. We work as a cohesive team that
                      collectively forecasts the impact and tractability of
                      research ideas in advancing our mission.
                    </p>
                  </div>

                  <div className="cta-wrapper s:col-start-1 s:col-span-12 spacer-medium-mt">
                    <a
                      className="btn-primary"
                      href="#open-roles"
                      aria-label="See Open Roles"
                    >
                      <span className="btn-label">
                        See Open Roles
                        <span
                          className="btn-anim"
                          title="See Open Roles"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </a>
                  </div>
                </div>

                <div
                  className="b-draggableSlider slideLeftFade"
                  data-triggers="inViewOnce"
                  data-trigger-start="center 100%"
                >
                  <div className="slider-wrapper">
                    <div className="slider">
                      <div className="slide">
                        <div
                          className="lazyPicture aspect-ratio "
                          style={{ "--aspect": "75%" }}
                          data-scroll
                        >
                          <img
                            className=""
                            sizes="(max-width: 699px) 100vw, 33vw"
                            src="../optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-01_4_3%402X0b83.jpg?w=1152&amp;h=864&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250575&amp;s=74e21dfa16a0807f10cb833e578b5da8"
                            srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-01_4_3@2X.jpg?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250575&amp;s=f0fbf2e4453c49139dfe81418bc2959b 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-01_4_3@2X.jpg?w=1152&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250575&amp;s=5d5b89b110bfc0e7dadecb4a7606a608 1152w"
                            alt="Careers Carousel 01 4 3 2 X"
                            style={{ objectPosition: "50% 50%" }}
                          />
                        </div>
                      </div>
                      <div className="slide">
                        <div
                          className="lazyPicture aspect-ratio "
                          style={{ "--aspect": "133.33333333333%" }}
                          data-scroll
                        >
                          <img
                            className=""
                            sizes="(max-width: 699px) 100vw, 33vw"
                            src="../optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-02_3_4%402X5283.jpg?w=1152&amp;h=1536&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250575&amp;s=27ab7491e09cf5c23c39ff65be769c19"
                            srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-02_3_4@2X.jpg?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250575&amp;s=9b78c1ba51bc63f1be88e358aa333261 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-02_3_4@2X.jpg?w=1152&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250575&amp;s=e9c701a554d37f70ffae050a0bf536e0 1152w"
                            alt="Careers Carousel 02 3 4 2 X"
                            style={{ objectPosition: "50% 50%" }}
                          />
                        </div>
                      </div>
                      <div className="slide">
                        <div
                          className="lazyPicture aspect-ratio "
                          style={{ "--aspect": "100%" }}
                          data-scroll
                        >
                          <img
                            className=""
                            sizes="(max-width: 699px) 100vw, 33vw"
                            src="../optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-03_1_1%402X5800.jpg?w=1152&amp;h=1152&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250576&amp;s=79b15c1fe9e319ed25b10fe9b6c9a153"
                            srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-03_1_1@2X.jpg?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250576&amp;s=0257f703f6a39d265a75cb8f859fd67e 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-03_1_1@2X.jpg?w=1152&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250576&amp;s=66a7066431350a04820c32f6b7cc1484 1152w"
                            alt="Careers Carousel 03 1 1 2 X"
                            style={{ objectPosition: "50% 50%" }}
                          />
                        </div>
                      </div>
                      <div className="slide">
                        <div
                          className="lazyPicture aspect-ratio "
                          style={{ "--aspect": "133.33333333333%" }}
                          data-scroll
                        >
                          <img
                            className=""
                            sizes="(max-width: 699px) 100vw, 33vw"
                            src="../optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-04_3_4%402X8aa6.jpg?w=1152&amp;h=1536&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250575&amp;s=324cd8ffbfc0d5dad12e22ed1dbb52fa"
                            srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-04_3_4@2X.jpg?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250575&amp;s=1dc8ff76cdc0ab852b9c753a9ca693a0 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-04_3_4@2X.jpg?w=1152&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250575&amp;s=55c420bb72107d21eead4b75cf197566 1152w"
                            alt="Careers Carousel 04 3 4 2 X"
                            style={{ objectPosition: "50% 50%" }}
                          />
                        </div>
                      </div>
                      <div className="slide">
                        <div
                          className="lazyPicture aspect-ratio "
                          style={{ "--aspect": "75%" }}
                          data-scroll
                        >
                          <img
                            className=""
                            sizes="(max-width: 699px) 100vw, 33vw"
                            src="../optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-05_4_3%402Xb48b.jpg?w=1152&amp;h=864&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250577&amp;s=5f0548cda4ff2dabdacf3a8e00ed3a54"
                            srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-05_4_3@2X.jpg?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250577&amp;s=a2e278e68b9f9eefbccf5a1cf0fc1e71 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-05_4_3@2X.jpg?w=1152&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250577&amp;s=4b207b0eae41b2d07e7132ffa66c0fed 1152w"
                            alt="Careers Carousel 05 4 3 2 X"
                            style={{ objectPosition: "50% 50%" }}
                          />
                        </div>
                      </div>
                      <div className="slide">
                        <div
                          className="lazyPicture aspect-ratio "
                          style={{ "--aspect": "100%" }}
                          data-scroll
                        >
                          <img
                            className=""
                            sizes="(max-width: 699px) 100vw, 33vw"
                            src="../optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-06_1_1%402Xdf67.jpg?w=1152&amp;h=1152&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250578&amp;s=76ce742bd9459bafa69adaa564313961"
                            srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-06_1_1@2X.jpg?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250578&amp;s=b7bf3d7aa0e860053130bebc1c3d4d1a 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-06_1_1@2X.jpg?w=1152&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250578&amp;s=ea350c449a80f9ebd0f13191ba39b0f2 1152w"
                            alt="Careers Carousel 06 1 1 2 X"
                            style={{ objectPosition: "50% 50%" }}
                          />
                        </div>
                      </div>
                      <div className="slide">
                        <div
                          className="lazyPicture aspect-ratio "
                          style={{ "--aspect": "75%" }}
                          data-scroll
                        >
                          <img
                            className=""
                            sizes="(max-width: 699px) 100vw, 33vw"
                            src="../optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-07_4_3%402X3223.jpg?w=1152&amp;h=864&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250578&amp;s=99f6d0273368b8b425cb5375549e3cfe"
                            srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-07_4_3@2X.jpg?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250578&amp;s=d934d68b06a5922faeb5ce74f6cba9ab 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-07_4_3@2X.jpg?w=1152&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250578&amp;s=3f85fcf6bfc8a22d23f2173ae400f377 1152w"
                            alt="Careers Carousel 07 4 3 2 X"
                            style={{ objectPosition: "50% 50%" }}
                          />
                        </div>
                      </div>
                      <div className="slide">
                        <div
                          className="lazyPicture aspect-ratio "
                          style={{ "--aspect": "133.33333333333%" }}
                          data-scroll
                        >
                          <img
                            className=""
                            sizes="(max-width: 699px) 100vw, 33vw"
                            src="../optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-08_3_4%402Xef87.jpg?w=1152&amp;h=1536&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250578&amp;s=446ee7c98fcb1938fb9b8c0349585869"
                            srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-08_3_4@2X.jpg?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250578&amp;s=aa686b11814f00d192d08e649397d1d3 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Carousel-08_3_4@2X.jpg?w=1152&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250578&amp;s=0bed34f27e8c71387c9fa539f5c61657 1152w"
                            alt="Careers Carousel 08 3 4 2 X"
                            style={{ objectPosition: "50% 50%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content-blocks">
                  <section
                    id="content-block-1"
                    className="content-block b-labelStaggeredAssetLists isFirst  s:grid s:grid-12"
                    data-triggers="inViewOnce"
                  >
                    <div className="block-label h3 s:col-start-1 s:col-span-4">
                      What We Offer
                    </div>

                    <div className="block-content s:col-start-1 s:col-span-12">
                      <div className="block-lists ">
                        <div className="list ">
                          <div className="asset-container order-1">
                            <div
                              className="lazyPicture aspect-ratio "
                              style={{ "--aspect": "133.33333333333%" }}
                              data-scroll
                            >
                              <img
                                className=""
                                sizes="(max-width: 699px) 100vw, 50vw"
                                src="../optimise2.assets-servd.host/anthropic-website/production/images/Careers_Benefits-01_3_4%402X2566.jpg?w=1152&amp;h=1536&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250572&amp;s=3d7c6d63b05ad230b709e66099c15d10"
                                srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Benefits-01_3_4@2X.jpg?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250572&amp;s=3dedce96e00d35f7d95642b01542ad0a 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Benefits-01_3_4@2X.jpg?w=1152&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250572&amp;s=2dd4768119973824f96df0af9d4b9410 1152w"
                                alt="Careers Benefits 01 3 4 2 X"
                                style={{ objectPosition: "50% 50%" }}
                              />
                            </div>
                          </div>

                          <div className="list-content order-2">
                            <div className="h4">Health &amp; Wellness</div>

                            <p className="text-b2 spacer-micro-mt">
                              We offer a range of benefits to best support your
                              and your family&#039;s wellbeing.
                            </p>

                            <ul>
                              <li className="text-b2">
                                Comprehensive health, dental, and vision
                                insurance for you and your dependents
                              </li>
                              <li className="text-b2">
                                Inclusive fertility benefits via Carrot
                                Fertility
                              </li>
                              <li className="text-b2">
                                Generous subsidy for OneMedical
                              </li>
                              <li className="text-b2">
                                21 weeks of paid parental leave
                              </li>
                              <li className="text-b2">
                                Unlimited PTO – most staff take between 4-6
                                weeks each year, sometimes more
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="list ">
                          <div className="asset-container order-2">
                            <div
                              className="lazyPicture aspect-ratio "
                              style={{ "--aspect": "100%" }}
                              data-scroll
                            >
                              <img
                                className=""
                                sizes="(max-width: 699px) 100vw, 50vw"
                                src="../optimise2.assets-servd.host/anthropic-website/production/images/Careers_Benefits-02_1_1%402X8842.jpg?w=1536&amp;h=1536&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250572&amp;s=9c49c66cb7627c570acb5a8bed1297eb"
                                srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Benefits-02_1_1@2X.jpg?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250572&amp;s=6e64a4ed376e32b889ab829963d6db3f 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Benefits-02_1_1@2X.jpg?w=1440&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250572&amp;s=9450759ebd731413d3a82cbcffb9e1e0 1440w, https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Benefits-02_1_1@2X.jpg?w=1536&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250572&amp;s=06e22e6380d9903afb18faa69164ab6d 1536w"
                                alt="Careers Benefits 02 1 1 2 X"
                                style={{ objectPosition: "50% 50%" }}
                              />
                            </div>
                          </div>

                          <div className="list-content order-1">
                            <div className="h4">Compensation &amp; Support</div>

                            <p className="text-b2 spacer-micro-mt">
                              We offer competitive compensation with significant
                              amounts of equity. Your equity can be multiplied
                              if you choose to donate a portion of it to
                              charity.
                            </p>

                            <ul>
                              <li className="text-b2">
                                Competitive salary and equity packages
                              </li>
                              <li className="text-b2">
                                Optional equity donation matching at a 3:1
                                ratio, up to 50% of your equity grant
                              </li>
                              <li className="text-b2">
                                401(k) plan with 4% matching
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="list ">
                          <div className="asset-container order-1">
                            <div
                              className="lazyPicture aspect-ratio "
                              style={{ "--aspect": "75%" }}
                              data-scroll
                            >
                              <img
                                className=""
                                sizes="(max-width: 699px) 100vw, 50vw"
                                src="../optimise2.assets-servd.host/anthropic-website/production/images/Careers_Benefits-03_4_3%402X1f45.jpg?w=1536&amp;h=1152&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250573&amp;s=97b05e3d7609abb00727b5a0c1ad5a84"
                                srcSet="https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Benefits-03_4_3@2X.jpg?w=1024&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250573&amp;s=52a1fbb826112418fb0a8a4e74bd3abe 1024w, https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Benefits-03_4_3@2X.jpg?w=1440&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250573&amp;s=41624f70af48ef2a27e43f8f2e08251b 1440w, https://optimise2.assets-servd.host/anthropic-website/production/images/Careers_Benefits-03_4_3@2X.jpg?w=1536&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1674250573&amp;s=79b554f5178df075f058f559f2cb7da2 1536w"
                                alt="Careers Benefits 03 4 3 2 X"
                                style={{ objectPosition: "50% 50%" }}
                              />
                            </div>
                          </div>

                          <div className="list-content order-2">
                            <div className="h4">Additional Benefits</div>

                            <p className="text-b2 spacer-micro-mt">
                              We’re continually upgrading our benefits program
                              so we can meet the needs of our entire team.
                            </p>

                            <ul>
                              <li className="text-b2">
                                $500/month flexible wellness stipend
                              </li>
                              <li className="text-b2">Commuter coverage</li>
                              <li className="text-b2">
                                Annual education stipend
                              </li>
                              <li className="text-b2">
                                A home office improvement stipend when you first
                                join
                              </li>
                              <li className="text-b2">
                                Relocation support for those moving to the Bay
                                Area
                              </li>
                              <li className="text-b2">
                                Daily lunches in the office
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section
                    className="content-block b-labelRichText   s:grid s:grid-12"
                    data-triggers="inViewOnce"
                  >
                    <div className="block-label h3 s:col-start-1 s:col-span-4">
                      How We Hire
                    </div>

                    <div className="block-content s:col-start-5 s:col-span-8 text-b2 is-bulleted">
                      <p className="text-b1">
                        The interview process at Anthropic varies based on role
                        and candidate, but our standard process looks like this:
                      </p>
                      <p>
                        <br />
                        <br />
                      </p>
                      <h4>Step 1</h4>
                      <h2>Resume</h2>
                      <p>
                        Submit your resume via our website.
                        <br />
                      </p>
                      <h4>Step 2 </h4>
                      <h2>(Role-dependent) Exploratory chat</h2>
                      <p>
                        You’ll have a chat with one of our staff to discuss your
                        career interests and relevant experience, and learn more
                        about Anthropic.
                        <br />
                      </p>

                      <h4>Step 3</h4>
                      <h2>Skills Assessment</h2>
                      <ul>
                        <li>
                          For technical roles, you’ll have a one-hour technical
                          screening interview.
                        </li>
                        <li>
                          For operations or policy roles, you’ll get a take-home
                          assignment. These typically involve writing responses
                          to several role-relevant questions; they may
                          occasionally require some outside research.
                          Assignments usually take between 2-5 hours, depending
                          on the role.
                        </li>
                        <li>
                          We include this to minimize bias and make
                          well-informed hiring decisions. We think seeing a
                          candidate’s work helps us assess how they might
                          actually perform on the job; similarly, the assignment
                          gives candidates a better idea of what their work at
                          Anthropic might entail. If a candidate likes working
                          through their take-home, that is one indicator that
                          they would enjoy taking on the role, and vice versa.
                        </li>
                        <li>
                          We recognize that completing work assignments requires
                          time and effort, and that they are not perfectly
                          reflective of the role’s work. Nonetheless, we think
                          that work tests are a useful complement to interviews
                          and reference checks.
                        </li>
                      </ul>
                      <h4>Step 4</h4>
                      <h2>Team Screen</h2>
                      <p>
                        You'll have a conversation with either the Hiring
                        Manager or a member of your potential team. 
                      </p>
                      <h4>Step 5</h4>
                      <h2>Interview Panel</h2>
                      <ul>
                        <li>
                          For technical roles, you’ll have 3-4 more one-hour
                          technical interviews, plus a culture interview.
                        </li>
                        <li>
                          For operations or policy roles, you’ll have 3-5 hours
                          of interviews, including a culture interview.
                        </li>
                      </ul>
                      <h4>Step 6</h4>
                      <h2>Final Checks</h2>
                      <p>
                        We’ll ask for some references, and have you chat with
                        our leadership.
                      </p>
                      <h4>Step 7</h4>
                      <h2>Offer</h2>
                      <p>We’ll make you an offer!</p>
                    </div>
                  </section>

                  <section
                    className="content-block b-labelRichText   s:grid s:grid-12"
                    data-triggers="inViewOnce"
                  >
                    <div className="block-label h3 s:col-start-1 s:col-span-4">
                      Technical Interviews
                    </div>

                    <div className="block-content s:col-start-5 s:col-span-8 text-b2 is-bulleted">
                      <p>
                        Technical interviews at Anthropic are broadly
                        categorized into ‘engineering’ or ‘research’ interviews,
                        and each candidate is given a mix tailored to their
                        skillset.
                        <br />
                        <br />
                        Engineering interviews are usually carried out in a
                        shared Python coding environment, like Google Colab.
                        Frontend engineering interviews are in JavaScript. They
                        have the form:
                        <br />
                        Here’s a description of a component from our stack.
                        Could you re-implement a toy version of it for me in one
                        hour?
                        <br />
                        <br />
                        These components are ‘chunkier’ than the more common
                        LeetCode problems, and are intended to mimic the
                        day-to-day of engineering at Anthropic.
                        <br />
                        <br />
                        We are particularly interested in your thought process
                        and how you attack the problem. You’ll be allowed to
                        look things up with Google, but it’s still important to
                        be familiar with Python syntax and the standard library.
                        We primarily code in Python, and a common reason
                        candidates fail interviews is that they're not fully
                        comfortable in Python.
                        <br />
                        <br />
                        Only one of our engineering interviews touches on
                        machine learning topics, and you can ask to pass on that
                        one if you wish. You do not need to learn anything about
                        machine learning before interviewing as an engineer at
                        Anthropic.
                        <br />
                        <br />
                        Research interviews are broader in form. They’ll include
                        some engineering interviews, and some discussions about
                        the kinds of systems we study.
                        <br />
                        <br />
                        Both the research and engineering interview process also
                        include softer questions about your experience and
                        motivations, and time to ask us about Anthropic.
                      </p>
                    </div>
                  </section>

                  <section
                    id="content-block-4"
                    className="content-block b-labelHeadingLists   isLast s:grid s:grid-12"
                    data-triggers="inViewOnce"
                    data-trigger-start="top 100%"
                  >
                    <div className="block-label h3 s:col-start-1 s:col-span-4">
                      Other Things
                    </div>

                    <div className="block-content s:col-start-1 s:col-span-12 m:col-start-5 m:col-span-8">
                      <div className="block-lists is-masonry">
                        <div className="post-col post-col-1"></div>
                        <div className="post-col post-col-2"></div>

                        <div className="post ">
                          <div className="h4">
                            Engineers here do lots of research, and researchers
                            do lots of engineering
                          </div>
                          <p className="text-b2 spacer-micro-mt">
                            While there’s historically been a division between
                            engineering and research in machine learning, we
                            think that boundary has dissolved with the advent of
                            large models. The distribution of candidates we
                            interview is strongly bimodal in both engineering
                            and research experience however, and we have
                            necessarily tailored our interview structure to
                            that.
                            <br />
                            <br />
                            - If you’ve an engineering background, please apply
                            as an engineer. You’ll perform much better in the
                            interviews, and if you join you’ll have as much
                            input to Anthropic’s direction and interests as
                            anyone else.
                            <br />
                            <br />- As evidence towards this: all of our papers
                            have engineers as authors, and often as first
                            author. Research and engineering hires all share a
                            single title - ‘Member of Technical Staff’.
                          </p>
                        </div>

                        <div className="post ">
                          <div className="h4">
                            We value direct evidence of ability
                          </div>
                          <p className="text-b2 spacer-micro-mt">
                            If you’ve done interesting independent research,
                            written an insightful blog post, or made substantial
                            contributions to open-source software, put that at
                            the top of your resume!
                          </p>
                        </div>

                        <div className="post ">
                          <div className="h4">Feedback</div>
                          <p className="text-b2 spacer-micro-mt">
                            We do not provide feedback on resumes or interviews.
                          </p>
                        </div>

                        <div className="post ">
                          <div className="h4">Visas</div>
                          <p className="text-b2 spacer-micro-mt">
                            Anthropic sponsors visas! We aren&#039;t able to
                            sponsor them for every role and every candidate;
                            operations roles are especially difficult to
                            support. But if we make you an offer, we will make
                            every effort to get you into the United States, and
                            we retain an immigration lawyer to help with this.
                          </p>
                        </div>

                        <div className="post ">
                          <div className="h4">Green cards</div>
                          <p className="text-b2 spacer-micro-mt">
                            Once you’re eligible, we’re also keen to sponsor
                            green cards!
                          </p>
                        </div>

                        <div className="post ">
                          <div className="h4">
                            We do not require PhDs, degrees, or previous ML
                            experience
                          </div>
                          <p className="text-b2 spacer-micro-mt">
                            About half of Anthropic technical staff have a PhD
                            of some sort; about half had prior experience in ML.
                            We have several brilliant colleagues who never went
                            to college.
                          </p>
                        </div>

                        <div className="post ">
                          <div className="h4">Remote interviewing</div>
                          <p className="text-b2 spacer-micro-mt">
                            All our interviews are conducted over Google Meet.
                            We prefer PST office hours, but we can be flexible
                            if that’s difficult for you.
                          </p>
                        </div>

                        <div className="post ">
                          <div className="h4">Rejection</div>
                          <p className="text-b2 spacer-micro-mt">
                            If things don’t work out, we’ll email you. If you’ve
                            applied but haven’t heard from us for a while, we’re
                            sorry - we’re a small team and sometimes we get a
                            lot of applicants. We’ll email you when we’ve made a
                            decision.
                          </p>
                        </div>

                        <div className="post ">
                          <div className="h4">Re-applying</div>
                          <p className="text-b2 spacer-micro-mt">
                            Similarly, if interviews don’t work out this time,
                            you’re welcome to re-apply after 12 months, and
                            earlier if something materially changes about your
                            experience or skills.
                          </p>
                        </div>

                        <div className="post ">
                          <div className="h4">Remote work</div>
                          <p className="text-b2 spacer-micro-mt">
                            Anthropic staff all come to the office regularly.
                            Most staff live in the Bay Area, though a few live
                            further away and come in for one week a month. We
                            also understand that moving can take time, so as a
                            transitional phase some folks start while fully
                            remote.
                          </p>
                        </div>

                        <div className="post ">
                          <div className="h4">Offer timing</div>
                          <p className="text-b2 spacer-micro-mt">
                            If we make an offer, we’re happy to give you time to
                            think about it and finish up any other interview
                            processes you’re going through.
                          </p>
                        </div>

                        <div className="post ">
                          <div className="h4">Internships</div>
                          <p className="text-b2 spacer-micro-mt">
                            We do not offer internships.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                <section
                  id="open-roles"
                  className="b-openRoles is-inview"
                  data-triggers="inViewOnce"
                  data-trigger-start="top 66%"
                >
                  <div className="block-label">
                    <h3>Open Roles</h3>
                  </div>

                  <div className="block-content spacer-medium-mt">
                    <div className="open-roles-container">
                      <div id="role-container-11" className="role-container">
                        <input
                          id="role-11"
                          className="role-input"
                          name="open-roles"
                          type="checkbox"
                        />
                        <label
                          htmlFor="role-11"
                          className="role-label s:grid s:grid-12"
                        >
                          <h4 className="role-title s:col-start-1 s:col-span-4">
                            Systems
                          </h4>
                          <span className="role-count text-label s:col-start-5 s:col-span-6">
                            2 Open Roles
                          </span>
                          <span className="role-icon s:col-start-11 s:col-span-2">
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
                                ></path>
                              </svg>
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
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </label>
                        <article
                          id="role-content-11"
                          className="role-content s:grid s:grid-12"
                        >
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Senior Infrastructure Engineer</h3>
                            <p className="text-b2 spacer-micro-mt">
                              The systems we build are the foundation to our
                              research. You'll touch all parts of our code and
                              infrastructure, whether that’s building
                              large-scale distributed systems, improving the
                              robustness and reliability of large langua…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/46e8dfc4-dd8e-4aaf-b76c-6a4eb4d0f05b"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Site Reliability Engineer (London)</h3>
                            <p className="text-b2 spacer-micro-mt">
                              We're looking for a Site Reliability Engineer who
                              can work in the UK time zone. You'll ensure the
                              high availability and performance of our
                              Kubernetes clusters that power machine learning
                              research and services…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/ce4d8201-3f82-47c6-8f85-893633964205"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                        </article>
                      </div>
                      <div id="role-container-10" className="role-container">
                        <input
                          id="role-10"
                          className="role-input"
                          name="open-roles"
                          type="checkbox"
                        />
                        <label
                          htmlFor="role-10"
                          className="role-label s:grid s:grid-12"
                        >
                          <h4 className="role-title s:col-start-1 s:col-span-4">
                            Security
                          </h4>
                          <span className="role-count text-label s:col-start-5 s:col-span-6">
                            5 Open Roles
                          </span>
                          <span className="role-icon s:col-start-11 s:col-span-2">
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
                                ></path>
                              </svg>
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
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </label>
                        <article
                          id="role-content-10"
                          className="role-content s:grid s:grid-12"
                        >
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>IT Support Specialist</h3>
                            <p className="text-b2 spacer-micro-mt">
                              We are looking for an entry level IT Support
                              Specialist, who will take ownership of IT asset
                              management, device configuration and deployment,
                              and user support. Successful candidates will have
                              excellent communication skills, a…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/f5c4dd19-9016-4a8f-8b5c-40b1d9c6e0fb"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>IT Support Specialist (London)</h3>
                            <p className="text-b2 spacer-micro-mt">
                              We are looking for an entry level IT Support
                              Specialist, who will take ownership of IT asset
                              management, device configuration and deployment,
                              and user support. Successful candidates will have
                              excellent communication skills, a…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/5be0c8d3-0d10-41fc-8b27-2a8ba24feb45"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Security &amp; Privacy Engineer</h3>
                            <p className="text-b2 spacer-micro-mt">
                              You want to ensure Anthropic’s success enabled by
                              regulatory compliance. You understand how to
                              develop engineering for privacy and compliance
                              controls while minimizing friction for staff,
                              particularly our engineers and produc…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/fa89b679-44ed-4a81-9ac8-92cb6f994624"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Security Engineer &amp; Compliance Manager</h3>
                            <p className="text-b2 spacer-micro-mt">
                              At Anthropic, we believe new AI capabilities are
                              best achieved through secure foundations, not in
                              spite of them. As capabilities grow more advanced,
                              it is critical that progress moves forward safely
                              and for the benefit of all…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/95a1e700-e9b9-4e28-8edf-0e37b1dc12e6"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Senior Software Security Engineer</h3>
                            <p className="text-b2 spacer-micro-mt">
                              You want to protect Anthropic's most valuable
                              assets from both opportunists and nation states.
                              You live in a Secure by Design mindset, and
                              understand how to communicate that vision to
                              software engineers and leaders. You under…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/3b9ed1d3-84f7-4c90-91dd-749496d8668c"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                        </article>
                      </div>
                      <div id="role-container-9" className="role-container">
                        <input
                          id="role-9"
                          className="role-input"
                          name="open-roles"
                          type="checkbox"
                        />
                        <label
                          htmlFor="role-9"
                          className="role-label s:grid s:grid-12"
                        >
                          <h4 className="role-title s:col-start-1 s:col-span-4">
                            Research &amp; Engineering
                          </h4>
                          <span className="role-count text-label s:col-start-5 s:col-span-6">
                            4 Open Roles
                          </span>
                          <span className="role-icon s:col-start-11 s:col-span-2">
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
                                ></path>
                              </svg>
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
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </label>
                        <article
                          id="role-content-9"
                          className="role-content s:grid s:grid-12"
                        >
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Inference Service Engineering Manager</h3>
                            <p className="text-b2 spacer-micro-mt">
                              Our missionAnthropic is an AI safety and research
                              company that’s working to build reliable,
                              interpretable, and steerable AI systems. Large,
                              general systems of today can have significant
                              benefits, but can also be unpredictable…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/19264368-c86b-4e02-b583-bdba6fa33114"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Research Engineer</h3>
                            <p className="text-b2 spacer-micro-mt">
                              Note: This is an "evergreen" role that we keep
                              open on an ongoing basis. We receive many
                              applications for this position, and you may not
                              hear back from us directly if we do not currently
                              have an open role on any of our teams…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/436ca148-6440-460f-b2a2-3334d9b142a5"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Research Scientist</h3>
                            <p className="text-b2 spacer-micro-mt">
                              Note: This is an "evergreen" role that we keep
                              open on an ongoing basis. We receive many
                              applications for this position, and you may not
                              hear back from us directly if we do not currently
                              have an open role on any of our teams…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/eb9e6d83-626c-4f59-8a0e-fa7c413b2014"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Senior Software Engineer</h3>
                            <p className="text-b2 spacer-micro-mt">
                              Note: This is an "evergreen" role that we keep
                              open on an ongoing basis. We receive many
                              applications for this position, and you may not
                              hear back from us directly if we do not currently
                              have an open role on any of our teams…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/9ba1d7b4-5b21-4ac9-86f3-875a15c8a091"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                        </article>
                      </div>
                      <div id="role-container-8" className="role-container">
                        <input
                          id="role-8"
                          className="role-input"
                          name="open-roles"
                          type="checkbox"
                        />
                        <label
                          htmlFor="role-8"
                          className="role-label s:grid s:grid-12"
                        >
                          <h4 className="role-title s:col-start-1 s:col-span-4">
                            Product (Trust and Safety)
                          </h4>
                          <span className="role-count text-label s:col-start-5 s:col-span-6">
                            3 Open Roles
                          </span>
                          <span className="role-icon s:col-start-11 s:col-span-2">
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
                                ></path>
                              </svg>
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
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </label>
                        <article
                          id="role-content-8"
                          className="role-content s:grid s:grid-12"
                        >
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Trust and Safety Analyst</h3>
                            <p className="text-b2 spacer-micro-mt">
                              Anthropic’s mission is to create reliable,
                              interpretable, and steerable AI systems. We want
                              AI to be safe and beneficial for our customers and
                              for society as a whole. Our quickly growing
                              business team is a group of committed…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/0a243b90-3ccc-47df-8be3-bd2e9e02d968"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Trust and Safety Policy Manager</h3>
                            <p className="text-b2 spacer-micro-mt">
                              Anthropic’s mission is to create reliable,
                              interpretable, and steerable AI systems. We want
                              AI to be safe and beneficial for our customers and
                              for society as a whole.As a Trust and Safety
                              policy manager, you will be responsib…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/180dd02e-2998-4d74-a729-6b5c1f38521f"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Trust and Safety Threat Investigator</h3>
                            <p className="text-b2 spacer-micro-mt">
                              Anthropic’s mission is to create reliable,
                              interpretable, and steerable AI systems. We want
                              AI to be safe and beneficial for our customers and
                              for society as a whole. As a threat investigator
                              on the Trust and Safety team, you…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/d728c097-cee5-4f1a-9ee1-f8b44ba3cdd7"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                        </article>
                      </div>
                      <div id="role-container-7" className="role-container">
                        <input
                          id="role-7"
                          className="role-input"
                          name="open-roles"
                          type="checkbox"
                        />
                        <label
                          htmlFor="role-7"
                          className="role-label s:grid s:grid-12"
                        >
                          <h4 className="role-title s:col-start-1 s:col-span-4">
                            Product (Sales)
                          </h4>
                          <span className="role-count text-label s:col-start-5 s:col-span-6">
                            1 Open Role
                          </span>
                          <span className="role-icon s:col-start-11 s:col-span-2">
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
                                ></path>
                              </svg>
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
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </label>
                        <article
                          id="role-content-7"
                          className="role-content s:grid s:grid-12"
                        >
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Enterprise Account Executive</h3>
                            <p className="text-b2 spacer-micro-mt">
                              Anthropic’s mission is to create reliable,
                              interpretable, and steerable AI systems. We want
                              AI to be safe and beneficial for our customers and
                              for society as a whole. Our team is a quickly
                              growing group of committed business…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/671ceefc-e7c9-4a83-9edb-1feeb5566928"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                        </article>
                      </div>
                      <div id="role-container-6" className="role-container">
                        <input
                          id="role-6"
                          className="role-input"
                          name="open-roles"
                          type="checkbox"
                        />
                        <label
                          htmlFor="role-6"
                          className="role-label s:grid s:grid-12"
                        >
                          <h4 className="role-title s:col-start-1 s:col-span-4">
                            Product (Research &amp; Engineering)
                          </h4>
                          <span className="role-count text-label s:col-start-5 s:col-span-6">
                            8 Open Roles
                          </span>
                          <span className="role-icon s:col-start-11 s:col-span-2">
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
                                ></path>
                              </svg>
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
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </label>
                        <article
                          id="role-content-6"
                          className="role-content s:grid s:grid-12"
                        >
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Design Lead</h3>
                            <p className="text-b2 spacer-micro-mt">
                              We are looking for an experienced design leader to
                              create and cultivate the design culture at
                              Anthropic, a safety-focused organization at the
                              forefront of AI research. As Design Lead you will
                              set the overall design vision and…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/3cee20df-daee-4f13-be46-971ea995324c"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Principal Product Designer</h3>
                            <p className="text-b2 spacer-micro-mt">
                              We are looking for an experienced designer to join
                              the design team at Anthropic, a safety-focused
                              organization at the forefront of AI research. As
                              Senior Product Designer, you will research and
                              design how users interact with…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/a3d92c73-443e-429e-ad3d-f3ece914b2e8"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Prompt Engineer and Librarian</h3>
                            <p className="text-b2 spacer-micro-mt">
                              Anthropic’s mission is to create reliable,
                              interpretable, and steerable AI systems. We want
                              AI to be safe for our customers and for society as
                              a whole.Anthropic’s AI technology is amongst the
                              most capable and safe in the worl…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/e3cde481-d446-460f-b576-93cab67bd1ed"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Research Engineer - Product</h3>
                            <p className="text-b2 spacer-micro-mt">
                              Anthropic’s mission is to create reliable,
                              interpretable, and steerable AI systems. We want
                              AI to be safe for our customers and for society as
                              a whole.You care about making safe, steerable,
                              trustworthy systems and are excited…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/3bfd8fb0-7841-498e-9672-40a22b2131a9"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Senior Software Engineer - Product</h3>
                            <p className="text-b2 spacer-micro-mt">
                              Anthropic’s mission is to create reliable,
                              interpretable, and steerable AI systems. We want
                              AI to be safe for our customers and for society as
                              a whole. We are looking for a senior software
                              engineer to join our product team an…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/8b85d37f-6201-489a-853e-a4523aeb45b8"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Senior Software Engineer (London) - Product</h3>
                            <p className="text-b2 spacer-micro-mt">
                              Anthropic’s mission is to create reliable,
                              interpretable, and steerable AI systems. We want
                              AI to be safe for our customers and for society as
                              a whole. We are looking for a senior software
                              engineer to join our product team an…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/e89010c4-219b-476d-a141-5fea2c46879a"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Software Engineer - Trust and Safety</h3>
                            <p className="text-b2 spacer-micro-mt">
                              Anthropic’s mission is to create reliable,
                              interpretable, and steerable AI systems. We want
                              AI to be safe for our customers and for society as
                              a whole. We are looking for software engineers to
                              help build safety and oversight…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/c6a4fe8d-b41f-4491-9d3c-a4d38eef5069"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Technical Product Manager</h3>
                            <p className="text-b2 spacer-micro-mt">
                              Anthropic’s mission is to create reliable,
                              interpretable, and steerable AI systems. We want
                              AI to be safe for our customers and for society as
                              a whole. Putting our models out in the real world
                              - if done carefully - could help…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/5a893c9f-3a2a-4bba-b8f6-62fa6d0fd6c9"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                        </article>
                      </div>
                      <div id="role-container-5" className="role-container">
                        <input
                          id="role-5"
                          className="role-input"
                          name="open-roles"
                          type="checkbox"
                        />
                        <label
                          htmlFor="role-5"
                          className="role-label s:grid s:grid-12"
                        >
                          <h4 className="role-title s:col-start-1 s:col-span-4">
                            Product (Business &amp; Operations)
                          </h4>
                          <span className="role-count text-label s:col-start-5 s:col-span-6">
                            2 Open Roles
                          </span>
                          <span className="role-icon s:col-start-11 s:col-span-2">
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
                                ></path>
                              </svg>
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
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </label>
                        <article
                          id="role-content-5"
                          className="role-content s:grid s:grid-12"
                        >
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Business Operations</h3>
                            <p className="text-b2 spacer-micro-mt">
                              Anthropic’s mission is to create reliable,
                              interpretable, and steerable AI systems. We want
                              AI to be safe and beneficial for our customers and
                              for society as a whole. Our quickly growing
                              business team is a group of committed…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/501d1401-e53c-4f9d-a3dc-2791f3190181"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Product Support Specialist</h3>
                            <p className="text-b2 spacer-micro-mt">
                              Anthropic’s mission is to create reliable,
                              interpretable, and steerable AI systems. We want
                              AI to be safe and beneficial for our customers and
                              for society as a whole. Our quickly growing
                              business team is a group of committed…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/feeaa0e5-f355-4556-99ef-805923a528dd"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                        </article>
                      </div>
                      <div id="role-container-4" className="role-container">
                        <input
                          id="role-4"
                          className="role-input"
                          name="open-roles"
                          type="checkbox"
                        />
                        <label
                          htmlFor="role-4"
                          className="role-label s:grid s:grid-12"
                        >
                          <h4 className="role-title s:col-start-1 s:col-span-4">
                            Policy
                          </h4>
                          <span className="role-count text-label s:col-start-5 s:col-span-6">
                            1 Open Role
                          </span>
                          <span className="role-icon s:col-start-11 s:col-span-2">
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
                                ></path>
                              </svg>
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
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </label>
                        <article
                          id="role-content-4"
                          className="role-content s:grid s:grid-12"
                        >
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Public Policy Manager (Product)</h3>
                            <p className="text-b2 spacer-micro-mt">
                              Anthropic’s mission is to create reliable,
                              interpretable, and steerable AI systems. We want
                              AI to be safe and beneficial for our customers and
                              for society as a whole. As a Public Policy Manager
                              (Product) on the Public Policy…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/b110d63c-4b8b-4371-86dd-6f27c4de7b2e"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                        </article>
                      </div>
                      <div id="role-container-3" className="role-container">
                        <input
                          id="role-3"
                          className="role-input"
                          name="open-roles"
                          type="checkbox"
                        />
                        <label
                          htmlFor="role-3"
                          className="role-label s:grid s:grid-12"
                        >
                          <h4 className="role-title s:col-start-1 s:col-span-4">
                            Operations
                          </h4>
                          <span className="role-count text-label s:col-start-5 s:col-span-6">
                            1 Open Role
                          </span>
                          <span className="role-icon s:col-start-11 s:col-span-2">
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
                                ></path>
                              </svg>
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
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </label>
                        <article
                          id="role-content-3"
                          className="role-content s:grid s:grid-12"
                        >
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Recruiter</h3>
                            <p className="text-b2 spacer-micro-mt">
                              You want to help Anthropic address one of its
                              biggest bottlenecks by building a talented and
                              diverse staff. You’ll help oversee our recruitment
                              pipeline to ensure a well informed decision and a
                              positive experience. You’ll wor…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/b79a39a9-5fed-4c7a-b02c-4cc53e36df48"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                        </article>
                      </div>
                      <div id="role-container-2" className="role-container">
                        <input
                          id="role-2"
                          className="role-input"
                          name="open-roles"
                          type="checkbox"
                        />
                        <label
                          htmlFor="role-2"
                          className="role-label s:grid s:grid-12"
                        >
                          <h4 className="role-title s:col-start-1 s:col-span-4">
                            Legal
                          </h4>
                          <span className="role-count text-label s:col-start-5 s:col-span-6">
                            2 Open Roles
                          </span>
                          <span className="role-icon s:col-start-11 s:col-span-2">
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
                                ></path>
                              </svg>
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
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </label>
                        <article
                          id="role-content-2"
                          className="role-content s:grid s:grid-12"
                        >
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>
                              Associate General Counsel - Commercial/Technology
                              Transactions
                            </h3>
                            <p className="text-b2 spacer-micro-mt">
                              Join the team making AI safe.Anthropic is seeking
                              a highly qualified Associate General Counsel to
                              lead commercial and technology transactions at
                              Anthropic. We’ll rely on you to help us develop
                              and negotiate partnerships and c…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/b232e963-6852-4177-bc3f-927443198411"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Product Counsel</h3>
                            <p className="text-b2 spacer-micro-mt">
                              Join the team making AI safe.Anthropic is seeking
                              a thoughtful, multidisciplinary product counsel to
                              support our teams building and deploying
                              innovative AI systems and products. As a member of
                              the Product Counsel function, yo…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/395287aa-d433-438d-8a85-2f6ca9456975"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                        </article>
                      </div>
                      <div id="role-container-1" className="role-container">
                        <input
                          id="role-1"
                          className="role-input"
                          name="open-roles"
                          type="checkbox"
                        />
                        <label
                          htmlFor="role-1"
                          className="role-label s:grid s:grid-12"
                        >
                          <h4 className="role-title s:col-start-1 s:col-span-4">
                            Leadership Support
                          </h4>
                          <span className="role-count text-label s:col-start-5 s:col-span-6">
                            2 Open Roles
                          </span>
                          <span className="role-icon s:col-start-11 s:col-span-2">
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
                                ></path>
                              </svg>
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
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </label>
                        <article
                          id="role-content-1"
                          className="role-content s:grid s:grid-12"
                        >
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Chief of Staff to the CEO</h3>
                            <p className="text-b2 spacer-micro-mt">
                              As Chief of Staff to the CEO, you will scope and
                              drive many of Anthropic’s most important strategic
                              initiatives and engage with high-level questions
                              fundamental to both the company and the broader
                              societal impacts of artifici…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/721e7a4a-64b9-476d-913f-2510753a3263"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Team Assistant</h3>
                            <p className="text-b2 spacer-micro-mt">
                              As a Team Assistant, you will report to Daniela
                              Amodei’s Chief of Staff, and work directly with
                              the leadership team to ensure Anthropic runs
                              smoothly. This is an incredible opportunity to
                              work alongside some of the brightest…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/0eae2370-1879-4d15-801b-d3d50a9f0c89"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                        </article>
                      </div>
                      <div id="role-container-0" className="role-container">
                        <input
                          id="role-0"
                          className="role-input"
                          name="open-roles"
                          type="checkbox"
                        />
                        <label
                          htmlFor="role-0"
                          className="role-label s:grid s:grid-12"
                        >
                          <h4 className="role-title s:col-start-1 s:col-span-4">
                            Finance and Accounting
                          </h4>
                          <span className="role-count text-label s:col-start-5 s:col-span-6">
                            4 Open Roles
                          </span>
                          <span className="role-icon s:col-start-11 s:col-span-2">
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
                                ></path>
                              </svg>
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
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </label>
                        <article
                          id="role-content-0"
                          className="role-content s:grid s:grid-12"
                        >
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Financial Analyst</h3>
                            <p className="text-b2 spacer-micro-mt">
                              We are looking to hire a Financial Analyst to join
                              our Financial Planning and Analysis team at
                              Anthropic. You will participate in key processes
                              such as annual planning, variance analysis,
                              financial modeling, KPI setting and r…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/8331ffad-d6d3-47db-8058-3e711859580a"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Senior Accountant</h3>
                            <p className="text-b2 spacer-micro-mt">
                              Anthropic is seeking an experienced Senior
                              Accountant to oversee day-to-day accounting
                              operations and manage key financial functions. In
                              this role, you will take ownership of monthly
                              financial reporting, payroll, accounts pay…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/86de1f62-e77a-4f13-998a-ee6f413c7eed"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Staff Accountant</h3>
                            <p className="text-b2 spacer-micro-mt">
                              Anthropic is looking for a detail-oriented Staff
                              Accountant to join our growing finance team. In
                              this role, you will manage key accounting
                              processes like accounts payable/receivable,
                              payroll, financial reporting, and fixed as…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/4514416d-3803-4ceb-aa72-ea085fa971ba"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Strategic Finance and Investor Relations</h3>
                            <p className="text-b2 spacer-micro-mt">
                              Join the finance team at Anthropic and help build
                              the future of safe AI! We are looking for our
                              first Strategic Finance and Investor Relations
                              hire to work closely with our executive team. In
                              this critical role, you will deve…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="https://jobs.lever.co/Anthropic/434881d1-5bda-46e6-b2ea-28cdfd625e4c"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Learn More &amp; Apply
                                <span
                                  className="btn-anim"
                                  title="Learn More &amp; Apply"
                                  aria-hidden="true"
                                ></span>
                              </span>
                            </a>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
}
