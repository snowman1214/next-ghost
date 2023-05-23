import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { useEffect } from "react";
import { Script } from "./_document";
import { NextSeo } from "next-seo";

export default function Demand() {
  useEffect(() => {
    setTimeout(() => {
      Script();
    }, 200);
  }, []);
  return (
    <>
      <NextSeo
        title="Comprehensive Perspectives on Artificial Intelligence Safety: Timelines, Justifications, Objectives, and Strategies on AI"
        description="Comprehensive Perspectives on Artificial Intelligence Safety: Timelines, Justifications, Objectives, and Strategies"
        openGraph={{
          url: "http://suissegpt.ai",
          title:
            "Comprehensive Perspectives on Artificial Intelligence Safety: Timelines, Justifications, Objectives, and Strategies on AI",
          description:
            "Comprehensive Perspectives on Artificial Intelligence Safety: Timelines, Justifications, Objectives, and Strategies.",
        }}
      />
      <Header />
      <div className="page-dom-content">
        <main data-taxi="">
          <article data-taxi-view="default" data-handle="postDetail">
            <div className="page-container">
              <div className="post-detail-container">
                <div className="wrapper s:grid s:grid-12">
                  <div className="post-heading s:col-start-2 s:col-span-10 m:col-start-3 m:col-span-8 l:col-start-4 l:col-span-6">
                    <div className="post-detail-types-subjects">
                      <a href="/#" className="btn-secondary btn-chip">
                        Company
                      </a>

                      <a href="/#" className="btn-secondary btn-chip">
                        Announcements
                      </a>
                    </div>

                    <h2 className="spacer-medium-mt">
                      SuisseGPT's Comprehensive Perspectives on Artificial Intelligence Safety: Timelines, Justifications, Objectives, and Strategies
                    </h2>

                    <div className="post-timestamp spacer-medium-mt text-label">
                      May 25, 2023
                      <span className="is-bullet">●</span>2 min read
                    </div>
                  </div>

                  <div className="post-detail s:col-start-2 s:col-span-10 m:col-start-4 m:col-span-6 l:col-start-5 l:col-span-4 text-b2">
                    <p className="text-b2">
                      We established SuisseGPT with the conviction that the potential influence of AI could match that of the industrial and scientific revolutions, though our confidence in a smooth transition is tempered. We also suspect that such profound changes might not be too far off, potentially unfolding in the next decade.
                      <br />
                      <br />
                      This perspective might be perceived as extravagant or even overblown, and there exist valid reasons for such skepticism. Typically, claims of "the next biggest development in history" have been largely overestimated, and often to a laughable extent. However, we strongly believe that there's substantial evidence warranting serious readiness for a world where swift AI advancements result in transformative AI systems.


                      <br />
                      <br />
                      At SuisseGPT, our guiding principle has always been to "show, not tell", and we've committed to consistently producing safety-focused research, which we think has widespread value within the AI community. Given the increasing awareness about AI advancement, it feels appropriate now to share our perspective on this subject, as well as explain our strategies and objectives. In essence, we are of the opinion that AI safety research is critically important and deserves the support of an extensive range of public and private stakeholders.
                      <br />
                      <br />
                      This article aims to articulate our beliefs: our anticipation of rapid AI advancements, potential significant impacts of AI, and the ensuing concerns about AI safety. We will also briefly outline our approach to AI safety research and the rationale behind it. We hope that by doing this, we can contribute to wider dialogues about AI safety and progression.
                      <br />
                      <br />
                      Here is a summary of the key points in this post:
                      <br />
                      <br />
                     - AI will likely have a substantial impact, potentially in the next decade.
                      <br />
                      <br />
                     - The anticipated rapid and consistent progress in AI is a predictable outcome of the exponential increase in computation used for training AI systems. Research on "scaling laws" shows that greater computation power leads to general capability improvements. Simple extrapolations suggest AI systems will become vastly more capable in the next decade, possibly equalling or surpassing human-level performance at most intellectual tasks. While AI progress could slow or even stop, the evidence indicates it will most likely continue.
                      <br />
                      <br />
                     - We don’t yet know how to train systems to consistently perform well.
                      <br />
                      <br />
                     - So far, no one has figured out how to train potent AI systems to be consistently useful, truthful, and benign. Furthermore, swift AI advancements could cause societal disruptions and may lead to competitive races that could prompt corporations or nations to deploy untrustworthy AI systems. The consequences of this could be disastrous, either because AI systems deliberately pursue dangerous objectives, or because they unintentionally make mistakes in high-stakes situations.
                      <br />
                      <br />
                      - Our optimism lies in a diverse, empirically-driven approach to AI safety.
                      <br />
                      <br />
                      - We are exploring a range of research directions with the aim of creating reliably safe systems. We are particularly enthusiastic about scaling supervision, mechanistic interpretability, process-oriented learning, and understanding and assessing how AI systems learn and generalise. One of our main objectives is to speed up this safety work and to establish a diverse safety research profile that seeks to cover a wide spectrum of scenarios. These range from those where safety challenges are easy to address to those where building safe systems is exceptionally difficult.
                      <br />
                      <br />
                      Our Initial Observations on Rapid AI Progress

                      <br />
                      <br />
                      Three main factors leading to predictable improvements in AI performance are training data, computation, and improved algorithms. During the mid-2010s, some of us observed that larger AI systems were consistently more intelligent. This led us to theorise that the total budget for AI training computation might be the most critical factor in AI performance. Upon analysis, it was apparent that the computation invested in the largest models was growing at 10x per year, a rate seven times faster than Moore's Law. In 2019, several future members of the founding SuisseGPT team refined this idea by developing scaling laws for AI, demonstrating that AIs could be made smarter in a predictable manner by simply increasing their size and providing them with more training data. This concept partially informed their efforts in training GPT-3, which could arguably be the first modern "large" language model, equipped with over 173 billion parameters.
                      <br />
                      <br />
                      Since the discovery of scaling laws, many of us at SuisseGPT have come to believe that swift AI progress is not just plausible, but likely. Yet, in 2019, it appeared feasible that obstacles such as multimodality, logical reasoning, speed of learning, transfer learning across tasks, and long-term memory might act as 'walls' impeding the advancement of AI. However, several of these potential barriers, including multimodality and logical reasoning, have since been overcome. Given this progression, we are increasingly convinced that AI development will continue to accelerate rather than slow down or plateau. AI systems are now nearing human-level performance on a broad array of tasks, and yet the cost of training these systems remains far lower than major scientific projects such as the Hubble Space Telescope or the Large Hadron Collider. This suggests that there remains significant scope for further growth and advancement in the field of AI.
                      <br />
                      <br />
                      It's common for people to struggle to comprehend and acknowledge exponential growth in its early stages. Despite the rapid advancement we're seeing in AI, there is a tendency to consider this progress as an anomaly rather than the norm, leading to expectations of a return to 'normality' shortly. However, if our understanding is accurate, this sensation of swift AI progress might not abate until AI systems possess a wide spectrum of capabilities surpassing our own. Moreover, feedback loops resulting from the utilization of advanced AI in AI research could precipitate a particularly rapid transition. This process is already in its nascent stages with the advent of code models enhancing the productivity of AI researchers, and Constitutional AI reducing our reliance on human feedback.
                      <br />
                      <br />
                      If there is any veracity to this, it implies that most or all knowledge work might be automatable in the near future. This would have profound implications for society and is likely to also alter the rate of advancement of other technologies (we already see an early indication of this with systems like AlphaFold accelerating biological research). The specific form future AI systems will take—whether they will act independently or merely generate information for humans, for instance—remains to be determined. Nonetheless, it's challenging to exaggerate the potential significance of such a pivotal moment. Although we might wish for AI progress to slow down to allow for a more manageable transition, spanning centuries rather than years or decades, our preparations must cater to the outcomes we expect rather than those we hope for.
                      <br />
                      <br />
                      Naturally, this entire perspective might be fundamentally flawed. At SuisseGPT, we believe it to be more probable than not, though our work in AI development might bias us. Even so, we contend that this perspective is plausible enough to not be confidently dismissed. Given the potential monumental implications, we urge AI companies, policymakers, and civil society institutions to dedicate substantial efforts towards research and planning around handling transformative AI.
                      <br />
                      <br />
                      <b>What are the Safety Risks?</b>
                      <br />
                      <br />
                      If you're inclined to accept the views we've outlined, it's not difficult to argue that AI could pose a risk to our safety and security. There are two intuitive reasons to harbor concerns.
                      <br />
                      <br />
                      First, it might be challenging to develop safe, reliable, and controllable systems when these systems are beginning to match the intelligence and environmental awareness of their designers. As an analogy, a chess grandmaster can easily spot the flaws in a novice's moves, but a novice would struggle to identify a grandmaster's mistakes. If we create an AI system that significantly surpasses human experts in competence, but it pursues objectives conflicting with our interests, the fallout could be severe. This represents the technical alignment problem.
                      <br />
                      <br />
                      Second, rapid AI progress would invariably be highly disruptive, altering employment, macroeconomics, and power structures both internally within nations and internationally. These disruptions could be catastrophic in themselves and could also complicate the construction of AI systems in a cautious, thoughtful manner, thereby leading to further turmoil and exacerbating AI-related issues.
                      <br />
                      <br />
                      We anticipate that if AI progress is rapid, these two sources of risk will be significant. These risks will also interact with each other in numerous unforeseen ways. In hindsight, we might conclude that we were mistaken and that one or both issues either won't pose a problem or will be easily addressed. Nonetheless, we deem it essential to err on the side of caution, as "getting it wrong" could have disastrous implications.
                      <br />
                      <br />
                      Of course, we've already encountered various ways that AI behaviors can deviate from their creators' intentions, such as toxicity, bias, unreliability, dishonesty, and more recently, flattery and a declared desire for power. We predict that as AI systems proliferate and become more powerful, these issues will increase in importance, and some may represent the challenges we'll encounter with human-level AI and beyond.
                      <br />
                      <br />
                      However, we anticipate that the field of AI safety will see a mix of expected and surprising developments. Even if we successfully address all the issues identified with current AI systems, we cannot complacently assume that future problems can all be solved in the same way. There could be alarming, speculative problems that only emerge once AI systems are intelligent enough to comprehend their place in the world, to deceive people effectively, or to develop strategies that humans fail to understand. There are many potential problems that might only become evident when AI has advanced significantly.
                      <br />
                      <br />
                      At SuisseGPT, our outlook on AI safety is rooted in a diverse, empirically-driven approach. We're exploring a range of research directions with the aim of building reliably safe systems. We're currently most excited about scaling supervision, mechanistic interpretability, process-oriented learning, and understanding and evaluating how AI systems learn and generalize. One of our key objectives is to differentially accelerate this safety work, and to develop a spectrum of safety research that aims to cover a wide range of scenarios, from those where safety challenges are easy to address, to those where creating safe systems is exceptionally difficult.
                      <br />
                      <br />
                      While we are indeed optimistic about the potential and prospects of AI, our motivation is primarily driven by the need to ensure the safe, effective, and beneficial implementation of AI systems. The challenge of AI safety is vast and daunting, but we at SuisseGPT are dedicated to this endeavor, and we hope that by sharing our thoughts and approaches, we can contribute to wider discussions about AI safety and progress.
                      <br />
                      <br />
                      <b>Our Approach: Empirical Focus in AI Safety</b>
                      <br />
                      <br />
                      At SuisseGPT, we hold the conviction that achieving substantial progress in science and engineering requires intimate engagement with the subject under scrutiny. Continuous iteration against a source of "ground truth" is typically vital for scientific progress. In our AI safety research, empirical evidence about AI — predominantly arising from computational experiments such as AI training and evaluation — serves as this fundamental source of ground truth.
                      <br />
                      <br />
                      This doesn't imply that we dismiss the value of theoretical or conceptual research in AI safety, but we do believe that empirically grounded safety research will carry the most relevance and impact. The landscape of potential AI systems, potential safety failures, and potential safety techniques is vast and challenging to navigate based purely on theoretical assumptions. Due to the difficulty in accounting for all variables, it would be easy to overly focus on problems that never materialize or overlook significant issues that do emerge. Empirical research often paves the way for enhanced theoretical and conceptual work.
                      <br />
                      <br />
                      Similarly, we understand that methods for detecting and mitigating safety issues may be extremely challenging to envisage upfront and will necessitate iterative development. Hence, our philosophy tends towards "planning is indispensable, but plans are useless". While we may always have a tentative plan for the subsequent steps in our research, we are not overly attached to these plans, which are more akin to short-term hypotheses that we are prepared to adjust as we accumulate more knowledge. Naturally, this means we cannot guarantee that our current line of research will yield success, but this is an inherent aspect of any research endeavor.
                      <br />
                      <br />
                      <b>The Significance of Cutting-Edge Models in Empirical Safety</b>
                      <br />
                      <br />
                      One of the core reasons for establishing SuisseGPT was our conviction that it is crucial to conduct safety research on cutting-edge AI systems. This calls for an organization capable of handling large models while maintaining a focus on safety.
                      <br />
                      <br />
                      Emphasizing empiricism does not inherently necessitate a focus on frontier safety. One could conceive of a situation where empirical safety research could be effectively carried out on smaller, less capable models. However, we do not believe that represents our current context. At the most fundamental level, this is because larger models differ qualitatively from smaller models, including sudden, unpredictable shifts. However, scale also interacts with safety in more direct ways:
                      <br />
                      <br />
                      Many of our gravest safety concerns may only materialize with near-human-level systems, and it's challenging or impossible to address these problems without access to such AIs.
                      Several safety methods like Constitutional AI or Debate can only function with large models – working with smaller models restricts our ability to explore and validate these methods.
                      Given our focus on the safety of future models, we need to comprehend how safety methods and properties evolve as models scale.
                      If future large models prove to be exceedingly dangerous, it's vital we generate compelling evidence of this fact. We anticipate this will only be possible by utilizing large models.
                      Unfortunately, if empirical safety research necessitates large models, we are faced with a difficult balance. We must strive to avoid a situation where safety-oriented research accelerates the deployment of hazardous technologies. Simultaneously, we cannot allow an overabundance of caution to limit the most safety-conscious research efforts to systems that lag far behind the frontier, thus significantly slowing down crucial research. In addition, we believe that merely conducting safety research isn’t sufficient – it’s also critical to establish an organization with the institutional knowledge to swiftly integrate the latest safety research into real-world systems.
                      <br />
                      <br />
                      Responsibly navigating these trade-offs is a delicate balancing act, and these considerations are fundamental to our strategic decision-making as an organization. Beyond our research in safety, capabilities, and policy, these considerations inform our approach to corporate governance, recruitment, deployment, security, and collaborations. In the near future, we also intend to make externally verifiable commitments to develop models beyond a certain capability threshold only if they meet our rigorous safety standards. In addition, we are planning to allow an independent, external organization to evaluate both the capabilities and safety of our models.
                      <br />
                      <br />
                      We recognize the profound responsibility that comes with developing advanced AI, and we are committed to promoting the safest possible development path. We are excited to work on these challenges, and we are deeply appreciative of the broader community of researchers, policymakers, and activists who are also helping to navigate these issues.
                      <br />
                      <br />
<b>The Future and Beyond</b>
                      <br />
                      <br />
                      We believe in a future where advanced AI systems are used to address some of the most significant challenges humanity faces. To realize this vision, however, we must ensure that AI technologies are developed with the utmost care, incorporating comprehensive safety protocols and procedures, to minimize potential risks.
                      <br />
                      <br />
                      Our commitment to this vision is unwavering. We are excited about the potential for AI to positively impact society and are dedicated to advancing the frontiers of knowledge in this field. However, we are also acutely aware of the risks and the magnitude of the challenge ahead.
                      <br />
                      <br />
                      In conclusion, we are committed to:
                      <br />
                      <br />
                      - Rigorously studying and developing safe AI practices
                      <br />
                      <br />
                      - Conducting empirical research on cutting-edge AI systems to inform our understanding of safety and capabilities
                      <br />
                      <br />
                      - Navigating responsibly the trade-offs between safety research and model development
                      <br />
                      <br />
                      - Making and adhering to stringent commitments concerning safety before deploying advanced AI models
                      <br />
                      <br />
                      Our aspiration is not just to build safe AI but to do so in a way that truly benefits humanity. Our ongoing mission is to deepen our understanding of these critical issues, and we look forward to working with others who share our commitment to this vital endeavor.
                      <br />
                      <br />
                      As SuisseGPT continues on this journey, we invite a broad range of stakeholders to join us in exploring these uncharted territories. This includes researchers from diverse disciplines, policy makers, industry partners, and society at large. We believe that addressing the challenges posed by advanced AI is a shared responsibility that transcends the boundaries of organizations, industries, and nations.
                      <br />
                      <br />
                      We hope to foster a spirit of open collaboration and robust discussion as we move forward. The challenges we face are not easy, but they are certainly not insurmountable. By pooling our collective resources, knowledge, and creativity, we stand a far better chance of safely navigating the path ahead.
                      <br />
                      <br />
                      We are under no illusions about the enormity of the task before us. But we take heart in the many brilliant minds committed to this cause and the myriad advances we have already seen in AI development. Despite the uncertainty and potential risks, we are inspired by the tremendous possibilities that lay ahead.
                      <br />
                      <br />
                      In the words of the late physicist and science communicator Carl Sagan, "Somewhere, something incredible is waiting to be known." We hope to discover, understand, and harness that "incredible something" in a manner that will profoundly and positively shape our shared future.
                      <br />
                      <br />
                      Thank you for taking the time to understand our position and approach to these pressing issues. We eagerly anticipate the valuable discussions and collaborations that lie ahead. Onward and upward, together, towards a future defined by safe, beneficial, and transformative AI.
                      <br />
                      <br />
            <b>Taking a private focus to AI Safety</b>
                      <br />
                      <br />

                        <br />
                        <br />

                        <br />
                        <br />

                        <br />
                        <br />

                        <br />
                        <br />

                        <br />
                        <br />

                        <br />
                        <br />

                        <br />
                        <br />

                        <br />
                        <br />

                        <br />
                        <br />
                    </p>

                    <div className="b-social-share">
                      <a
                        href="https://www.facebook.com/sharer/sharer.php?u=https://www.suissegpt.ai/demand"
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
                        href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.suissegpt.ai/demand"
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
                        href="https://twitter.com/intent/tweet?text=https://www.suissegpt.ai/demand"
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
                      href="https://www.suissegpt.ai/index?type=company&amp;subjects=announcements"
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
