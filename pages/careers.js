import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { useEffect } from "react";
import { Script } from "./_document";
import { NextSeo } from "next-seo";
import Link from "next/link";

export default function Careers() {
  useEffect(() => {
    setTimeout(() => {
      Script();
      animation();
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
        title="SuisseAI - Build the future of AI with SuisseGPT"
        description="SuisseAI - Shape the Horizon of Artificial Intelligence with SuisseGPT, join our team."
        openGraph={{
          url: "http://suisseai.com",
          title: "SuisseAI - Build the future of AI with SuisseGPT",
          description:
            "SuisseAI - Shape the Horizon of Artificial Intelligence with SuisseGPT, join our team.",
        }}
      />
      <Header />
      <div className="page-dom-content">
        <main data-taxi>
          <article data-taxi-view="default" data-handle="careers">
            <div className="page-container">
              <div className="careers-container wrapper">
                <div className="b-hero-cta s:grid s:grid-12">
                  <h1
                    className="heading s:col-start-3 s:col-span-8 "
                    data-triggers=""
                  >
                    <div className="line-wrapper line-first">
                      <span className="line line-1">Join the team</span>
                    </div>
                    <div className="line-wrapper text-right line-second">
                      <span className="line line-2">scaling AI for B2B</span>
                    </div>
                  </h1>

                  <div className="description-wrapper s:col-start-4 s:col-span-6 spacer-medium-mt text-b1">
                    <p>
                      We are a Swiss based Corporation in Zug comprised of a
                      diverse team with extensive expertise across a range of
                      fields and disciplines, including physics, machine
                      learning, public policy, and business. Collaboratively, we
                      evaluate research ideas, forecasting their potential
                      impact and feasibility in furthering our mission. Our
                      cohesive teamwork ensures an effective approach to
                      advancing our goals and do what people thought was
                      impossible.
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
                            src="team1.jpeg"
                            srcSet="team1.jpeg 1024w, team1.jpeg 1152w"
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
                            src="young.jpeg"
                            srcSet="young.jpeg 1024w, young.jpeg 1152w"
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
                            src="keyboard.webp"
                            srcSet="keyboard.webp 1024w, keyboard.webp 1152w"
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
                            src="engineer.jpeg"
                            srcSet="engineer.jpeg 1152w"
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
                            src="running.jpeg"
                            srcSet="running.jpeg 1024w, running.jpeg 1152w"
                            alt="Careers Carousel 05 4 3 2 X"
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
                                src="team1.jpeg"
                                srcSet="team1.jpeg 1024w, team1.jpeg 1152w"
                                alt="Careers Benefits 01 3 4 2 X"
                                style={{ objectPosition: "50% 50%" }}
                              />
                            </div>
                          </div>

                          <div className="list-content order-2">
                            <div className="h4">Learning &amp; Scale</div>

                            <p className="text-b2 spacer-micro-mt">
                              We provide an unparalleled opportunity for career
                              advancement in a rapidly expanding field that is
                              poised to revolutionize businesses indefinitely.
                              Our platform offers a fresh beginning for
                              individuals seeking to scale their professional
                              trajectory and thrive in this transformative
                              landscape.
                            </p>

                            <ul>
                              <li className="text-b2">Profit Sharing</li>
                              <li className="text-b2">
                                Work with the best companies
                              </li>
                              <li className="text-b2">
                                Change businesses forever
                              </li>
                              <li className="text-b2">
                                Unlimited PTO – most staff take between 4-6
                                weeks each year, sometimes more
                              </li>
                              <li className="text-b2">Learning ans Coaching</li>
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
                                src="compensation.jpeg"
                                srcSet="compensation.jpeg 1024w, compensation.jpeg 1440w, compensation.jpeg 1536w"
                                alt="Careers Benefits 02 1 1 2 X"
                                style={{ objectPosition: "50% 50%" }}
                              />
                            </div>
                          </div>

                          <div className="list-content order-1">
                            <div className="h4">Compensation &amp; Support</div>

                            <p className="text-b2 spacer-micro-mt">
                              We offer competitive compensation with significant
                              amounts of equity.
                            </p>

                            <ul>
                              <li className="text-b2">
                                Competitive salary and equity packages
                              </li>
                              <li className="text-b2">
                                Grants to support a charity every year
                              </li>
                              <li className="text-b2">
                                Retirement plan with 2% matching
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
                                src="benefits.webp"
                                srcSet="benefits.webp 1024w, benefits.webp 1440w, benefits.webp 1536w"
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
                                If remote we cover your Wework or similar
                              </li>
                              <li className="text-b2">Commuter coverage</li>
                              <li className="text-b2">
                                Annual Coaching seminers with Suisseblocks
                                private Equity
                              </li>
                              <li className="text-b2">
                                Access to invest in Private Equity through
                                Suisseblocks
                              </li>
                              <li className="text-b2">
                                Retreats to the Swiss Mountains
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
                        The interview process at SuisseAI is tailored to each
                        specific role and candidate, ensuring a comprehensive
                        evaluation. While variations may occur, our standard
                        procedure typically follows the structure outlined
                        below:
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
                      <h4>Step 2</h4>
                      <h2>Interview based on Role</h2>
                      <p>
                        As part of our interview process at SuisseAI, we arrange
                        a discussion between our staff and the candidate to
                        delve into their career interests and relevant
                        experience. This conversation serves as an opportunity
                        for the candidate to gain deeper insights into SuisseAI
                        as a company and its mission. Simultaneously, it enables
                        our staff to better understand the candidate's
                        professional aspirations and evaluate how their skills
                        align with our organization.
                        <br />
                      </p>

                      <h4>Step 3</h4>
                      <h2>Skills Assessment</h2>
                      <ul>
                        <li>
                          For technical roles, you’ll have a one-hour technical
                          screening interview to review your entry level.
                        </li>
                        <li>
                          For operations or policy roles, you’ll get a take-home
                          assignment. These typically involve writing responses
                          to several role-relevant questions; they mayFor
                          candidates applying for operations or policy roles at
                          SuisseAI, a take-home assignment is typically included
                          as part of the interview process. This assignment is
                          designed to assess the candidate's capabilities and
                          suitability for the role. It usually entails crafting
                          written responses to a set of role-specific questions,
                          occasionally necessitating external research. The time
                          commitment for these assignments typically ranges
                          between 2 to 5 hours, depending on the particular
                          role. We believe this allows candidates to showcase
                          their skills and knowledge effectively while striking
                          a balance with their existing commitments.
                          occasionally require some outside research.
                          Assignments usually take between 2-5 hours, depending
                          on the role.
                        </li>
                        <li>
                          The inclusion of a take-home assignment in our
                          interview process at SuisseAI serves multiple
                          purposes. First and foremost, it is implemented to
                          reduce bias and ensure that our hiring decisions are
                          well-informed. By evaluating a candidate's actual
                          work, we gain valuable insights into their potential
                          performance on the job. Simultaneously, the assignment
                          offers candidates a clearer understanding of the
                          nature of work they can expect at SuisseAI. We believe
                          that a candidate's engagement and satisfaction while
                          working on the take-home assignment can serve as an
                          indicator of their suitability for the role. If a
                          candidate demonstrates enthusiasm and enjoys tackling
                          the assignment, it suggests a potential alignment with
                          the responsibilities and challenges of the position.
                          Similarly, if a candidate finds the assignment
                          unappealing or unengaging, it may indicate a mismatch
                          between their interests and the role itself. Overall,
                          the inclusion of a take-home assignment benefits both
                          the candidate and SuisseAI by facilitating a more
                          accurate assessment of skills, work style, and
                          potential job satisfaction.
                        </li>
                        <li>
                          At SuisseAI, we understand and acknowledge that
                          completing work assignments demands time and effort,
                          and we recognize that these assignments may not
                          perfectly mirror the actual responsibilities of the
                          role. Nevertheless, we firmly believe that work tests
                          serve as a valuable complement to interviews and
                          reference checks.
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
                        Technical interviews at SuisseAI are broadly categorized
                        into ‘engineering’ or ‘research’ interviews, and each
                        candidate is given a mix tailored to their skillset.
                        <br />
                        <br />
                        Engineering interviews are carried out in a shared
                        Python coding environment! like Google Colab. Frontend
                        engineering interviews are in JavaScript. They have the
                        form:
                        <br />
                        Here’s a description of a component from our stack.
                        Could you re-implement a toy version of it for me in one
                        hour?
                        <br />
                        <br />
                        These components are ‘chunkier’ than the more common
                        Leet Code problems, and are intended to mimic the
                        day-to-day of engineering at SuisseAI.
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
                        SuisseAI.
                        <br />
                        <br />
                        Research interviews are broader in form. They’ll include
                        some engineering interviews, and some discussions about
                        the kinds of systems we study.
                        <br />
                        <br />
                        Both the research and engineering interview process also
                        include softer questions about your experience and
                        motivations, and time to ask us about SuisseAI.
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
                            input to SuisseAI’s direction and interests as
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
                          <div className="h4">
                            We do not require PhDs, degrees, or previous ML
                            experience
                          </div>
                          <p className="text-b2 spacer-micro-mt">
                            About half of SuisseAI technical staff have a PhD of
                            some sort; about half had prior experience in ML. We
                            have several brilliant colleagues who never went to
                            college.
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
                            SuisseAI staff all come to the office regularly.
                            Most staff live in the Zug Area, though a few live
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
                            We do offer internships.
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
                            1 Open Roles
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
                            <h3>Site Reliability Engineer (Zug)</h3>
                            <p className="text-b2 spacer-micro-mt">
                              We're looking for a Site Reliability Engineer who
                              can work in the European time zone. You'll ensure
                              the high availability and performance of our
                              clusters that power machine learning research and
                              services…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="#"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Opening Soon
                                <span
                                  className="btn-anim"
                                  title="Opening Soon"
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
                            1 Open Roles
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
                              Specialist, who will run the IT asset management,
                              device configuration and deployment, and user
                              support. Successful candidates will have excellent
                              communication skills!
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="#"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Opening Soon
                                <span
                                  className="btn-anim"
                                  title="Opening Soon"
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
                          id="role-content-9"
                          className="role-content s:grid s:grid-12"
                        >
                          <div className="role-post s:col-start-5 s:col-span-6">
                            <h3>Research Engineer</h3>
                            <p className="text-b2 spacer-micro-mt">
                              Note: This is an open role that we keep open on an
                              ongoing basis. We receive many applications for
                              this position, and you may not hear back from us
                              directly if we do not currently have an open role
                              on any of our teams…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="#"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Opening Soon
                                <span
                                  className="btn-anim"
                                  title="Opening Soon"
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
                              href="#"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Opening Soon
                                <span
                                  className="btn-anim"
                                  title="Opening Soon"
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
                            0 Open Roles
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
                              SuisseAI’s mission is to create reliable,
                              interpretable, and steerable AI systems that are
                              Private. We want AI to be safe and beneficial for
                              our customers and for society as a whole. Our team
                              is a quickly growing group of committed business…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="#"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Opening Soon
                                <span
                                  className="btn-anim"
                                  title="Opening Soon"
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
                            1 Open Roles
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
                            <h3>Prompt Engineer and Librarian</h3>
                            <p className="text-b2 spacer-micro-mt">
                              SuisseGPTSuisseAI’s mission is to create reliable,
                              interpretable, and perfect AI systems. We want AI
                              to be safe for our customers and for society as a
                              whole (mission driven). SuisseAI’s AI technology
                              is amongst the most capable and safest in the
                              world…
                            </p>
                            <a
                              className="btn-primary spacer-small-mt"
                              href="#"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="btn-label">
                                Opening Soon
                                <span
                                  className="btn-anim"
                                  title="Opening Soon"
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
                            0 Open Roles
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
                            0 Open Role
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
                            0 Open Role
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
                            0 Open Roles
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
                            0 Open Roles
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
                            0 Open Roles
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
