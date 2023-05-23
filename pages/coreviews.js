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
            <b>Adopting a Portfolio Strategy for AI Safety with SuisseGPT</b>
                      <br />
                      <br />
                        Those involved in safety research are often driven by strong views on the potential risks of AI. However, based on our experiences, forecasting the actions and characteristics of AI systems in the near future remains challenging. Predicting the safety of upcoming systems a priori is even more difficult. Instead of adopting a singular position, we acknowledge that a broad spectrum of possibilities exists.
                        <br />
                        <br />
                        One critical aspect of uncertainty relates to the complexity of creating advanced AI systems that are fundamentally safe and pose minimal threat to humans. The development of such systems can range anywhere from very straightforward to utterly unachievable. We categorize this range into three distinct scenarios, each carrying unique implications:
                        <br />
                        <br />
                        Positive scenarios: The potential for catastrophic risk due to safety failures in advanced AI is minimal. Already existing safety methods, such as reinforcement learning from human feedback (RLHF) and Constitutional AI (CAI), are largely sufficient for alignment. Current AI risks extend from existing challenges such as misuse and toxicity, as well as potential damages from widespread automation and shifts in global power dynamics. These will require considerable research from AI labs, academia, and civil society institutions to mitigate potential harm.
                        Intermediate scenarios: Catastrophic risks could be a possible or even likely outcome of advanced AI development. To combat this, considerable scientific and engineering endeavors are required. However, given adequate concentrated effort, it is achievable.
                        Negative scenarios: AI safety is an insurmountable challenge. It's a practical reality that we cannot direct or dictate values to a system that is broadly more intelligent than us. Consequently, we should avoid developing or implementing highly advanced AI systems. The most negative scenarios could initially appear optimistic until very potent AI systems are developed. A careful and humble approach is needed to assess the safety of systems in such scenarios.
                        If we find ourselves in a positive scenario... the stakes of SuisseGPT's actions are fortunately lower, given the unlikely occurrence of catastrophic safety failures. Our alignment initiatives will likely accelerate the beneficial applications of advanced AI and help to alleviate some immediate harm caused by AI systems during their development. We may also repurpose our efforts to assist policymakers in navigating potential systemic risks posed by advanced AI, which would likely be the major source of risk in the absence of catastrophic safety failures.
                        <br />
                        <br />
                        If we find ourselves in an intermediate scenario... SuisseGPT's main contribution will be to recognize the risks associated with advanced AI systems and devise and disseminate safe methods for training powerful AI systems. We expect that some of our portfolio of safety techniques, which we'll elaborate on below, will prove beneficial in such situations. These scenarios can range from "moderately-easy", where we anticipate significant incremental improvements by refining techniques such as Constitutional AI, to "moderately-difficult", where successful mechanistic interpretability seems the best option.
                        <br />
                        <br />
                        If we find ourselves in a negative scenario... the role of SuisseGPT will be to gather as much evidence as possible to demonstrate that AI safety measures cannot prevent severe or catastrophic risks from advanced AI. We will then alert global institutions, encouraging a concerted effort to prevent the creation of perilous AIs. If we are in a “near-negative” situation, our collective efforts may be directed towards AI safety research and temporarily halting AI progress. Signs that we are in a negative or near-negative scenario might be abrupt and difficult to discern. Therefore, we must always operate under the assumption that we could still be in such a situation unless we have ample evidence to the contrary.
                        <br />
                        <br />
                        Given the high stakes, one of our primary objectives is to continue amassing information about the scenario we're currently in. Many of our ongoing research trajectories aim to enhance our understanding of AI systems and devise methods that might help us identify worrying behaviors such as power-seeking or deception in advanced AI systems.
                        <br />
                        <br />
                        At SuisseGPT, our objectives fundamentally encompass:
                        <br />
                        <br />
- Advancing techniques to increase the safety of AI systems.
                        <br />
                        <br />
- Improving methodologies to evaluate the safety or risk level of AI systems.
                        <br />
                        <br />
                        In optimistic scenarios, the former will aid AI developers in training beneficial systems, and the latter will confirm their safety. In intermediate scenarios, the first point might be our way of averting an AI catastrophe, while the second will be crucial to ensure low risk from advanced AI. In pessimistic scenarios, the failure of the first will indicate the insolubility of AI safety, and the success of the second will enable us to convincingly demonstrate this to others.
                        <br />
                        <br />
                        We advocate this "portfolio approach" to AI safety research. Instead of placing all our bets on a single projected scenario, we aim to construct a research program that could significantly improve intermediate scenarios, where AI safety research is likely to have the most considerable impact, and also alert in pessimistic scenarios where AI safety research may have a minimal effect on AI risk. Furthermore, we strive to do so beneficially in optimistic scenarios where the demand for technical AI safety research isn't as high.  <br />
                        <br />
<b>The Three Categories of AI Research at SuisseGPT</b>
                        <br />
                        <br />
                        We divide research projects at SuisseGPT into three areas:
                        <br />
                        <br />
                        1. We divide research projects at SuisseGPT into three areas:

                        Capabilities: This involves AI research aimed at improving AI systems' proficiency across tasks, including writing, image processing or creation, game playing, etc. Research that enhances the efficiency of large language models or improves reinforcement learning algorithms falls under this category. Capabilities work results in the models we examine and use in our alignment research. We generally do not publish this work as we aim not to accelerate the pace of AI capabilities progress. We also strive to be mindful about showcasing frontier capabilities (even without publication). We trained the initial version of our leading model, SuisseGPT, in spring 2022, prioritizing safety research over public deployments. As the gap between it and the public state of the art has decreased, we have begun deploying SuisseGPT.
                        <br />
                        <br />
2. Alignment Capabilities: This research is focused on creating new algorithms for training AI systems to be more helpful, honest, harmless, reliable, robust, and generally aligned with human values. Examples of ongoing and past work in this area at SuisseGPT include debate, scaling automated red-teaming, Constitutional AI, debiasing, and RLHF (reinforcement learning from human feedback). Often these techniques are practically useful and economically valuable, but they don't necessarily have to be—for instance, if new algorithms are relatively inefficient or will only become useful as AI systems advance.
                        <br />
                        <br />
3. Alignment Science: This focuses on evaluating and understanding whether AI systems are genuinely aligned, how well alignment capabilities techniques work, and to what extent we can project the success of these techniques to more capable AI systems. Examples of this work at SuisseGPT include the broad area of mechanistic interpretability, as well as our work on evaluating language models with language models, red-teaming, and studying generalization in large language models using influence functions. Some of our work on honesty straddles the border of alignment science and alignment capabilities.
                        In a way, one can view alignment capabilities versus alignment science as a “blue team” versus “red team” distinction, where alignment capabilities research tries to develop new algorithms, while alignment science seeks to understand and expose their limitations.
                        <br />
                        <br />
                        This categorization is useful in addressing debates within the AI safety community, for instance, whether the development of RLHF—which also generates economic value—is “true” safety research. We firmly believe that it is. Pragmatically useful alignment capabilities research serves as the groundwork for techniques we develop for more capable models—for example, our work on Constitutional AI and on AI-generated evaluations, as well as our ongoing work on automated red-teaming and debate, wouldn't have been feasible without prior work on RLHF. Moreover, demonstrating that iterative alignment research is useful for creating models that are more valuable to humans may also incentivize AI developers to invest more in making their models safer and in detecting potential safety failures.
                        <br />
                        <br />
                        If it turns out that AI safety is quite solvable, then our alignment capabilities work may be our most impactful research. Conversely, if the alignment problem is more challenging, then we will increasingly rely on alignment science to expose the flaws in alignment capabilities techniques. And if the alignment problem is almost impossible, then we desperately need alignment science to build a strong case for halting the development of advanced AI systems.
                        <br />
                        <br />
<b>Our Current Safety Research</b>
                        <br />
                        <br />
                        We're currently working in various directions to discover how to train safe AI systems, with certain projects addressing distinct threat models and capability levels. Some pivotal ideas include:
                        <br />
                        <br />
1. Mechanistic Interpretability
                        <br />
                        <br />
2. Scalable Oversight
                        <br />
                        <br />
3. Process-Oriented Learning
                        <br />
                        <br />
4. Understanding Generalization
                        <br />
                        <br />
5. Testing for Dangerous Failure Modes
                        <br />
                        <br />
6. Societal Impacts and Evaluations.
                        <br />
                        <br />
<b>Understanding Generalization</b>
                        <br />
                        <br />
                        Generalization refers to the ability of an AI model to perform well on new, unseen data based on what it has learned from training data. This ability is essential for any AI system that aims to handle a wide range of tasks or situations. However, as AI models become more powerful, understanding how they generalize becomes more difficult. This is particularly important when it comes to safety-critical systems, where it's necessary to ensure that the model's performance doesn't deteriorate or behave unpredictably in new situations.
                        <br />
                        <br />
                        Our research in understanding generalization involves studying the behavior of AI systems under various conditions, identifying their failure modes, and finding ways to improve their generalization abilities. We use techniques like influence functions to study how individual training examples affect the model's predictions, as well as tools for visualizing and interpreting what the model has learned. This work not only helps us develop safer AI systems, but also advances our fundamental understanding of machine learning.
                        <br />
                        <br />
<b>Testing for Dangerous Failure Modes</b>
                        <br />
                        <br />
                        One of the challenges of developing safe AI systems is identifying and avoiding dangerous failure modes, which are situations where the system behaves in ways that are harmful or undesirable. These failure modes can be subtle and hard to detect, especially as AI models become more complex and capable.
                        <br />
                        <br />
                        Our work in this area involves developing methods for systematically testing AI systems to uncover these failure modes. We apply techniques from software testing, formal verification, and adversarial testing to expose and analyze potential dangers. This can involve creating challenging test cases that probe the system's behavior in various ways, as well as using formal methods to prove properties about the system's behavior. By uncovering these failure modes, we can improve our models and training techniques to make them safer.
                        <br />
                        <br />
<b>Societal Impacts and Evaluations</b>
                        <br />
                        <br />
                        Our research isn't limited to technical aspects of AI safety. We also consider the broader societal impacts of AI and how these technologies can be used in ways that are beneficial and fair. We engage with policymakers, academics, and other stakeholders to understand and address the societal implications of advanced AI systems.
                        <br />
                        <br />
                        Our work in this area includes evaluating the economic and social impacts of AI, studying issues related to AI fairness and bias, and developing methods for assessing the value alignment of AI systems. We also work on improving transparency and accountability in AI, and engage with the broader community through publications, workshops, and other outreach activities. By considering these broader societal aspects, we aim to ensure that AI is developed and used in ways that are beneficial for all.
                        <br />
                        <br />
<b>Understanding Generalization</b>
                        <br />
                        <br />
                        At SuisseGPT, we are invested in decoding the mechanisms underlying the functions performed by a neural network, primarily focusing on broadening our understanding of large language model (LLM) training procedures.
                        <br />
                        <br />
                        LLMs have demonstrated a variety of surprising emergent behaviors, from creativity to self-preservation to deception. While all of these behaviors surely arise from the training data, the pathway is complicated: the models are first “pretrained” on gigantic quantities of raw text, from which they learn wide-ranging representations and the ability to simulate diverse agents. Then they are fine-tuned in myriad ways, some of which probably have surprising unintended consequences. Since the fine-tuning stage is heavily overparameterized, the learned model depends crucially on the implicit biases of pretraining; this implicit bias arises from a complex web of representations built up from pretraining on a large fraction of the world’s knowledge.

                        <br />
                        <br />
                        When a model displays a concerning behavior such as role-playing a deceptively aligned AI, is it just harmless regurgitation of near-identical training sequences? Or has this behavior (or even the beliefs and values that would lead to it) become an integral part of the model’s conception of AI Assistants which they consistently apply across contexts? We are working on techniques to trace a model’s outputs back to the training data, since this will yield an important set of cues for making sense of it.
                        <br />
                        <br />
<b>Testing for Dangerous Failure Modes</b>
                        <br />
                        <br />
                        One key concern is the possibility an advanced AI may develop harmful emergent behaviors, such as deception or strategic planning abilities, which weren’t present in smaller and less capable systems. We think the way to anticipate this kind of problem before it becomes a direct threat is to set up environments where we deliberately train these properties into small-scale models that are not capable enough to be dangerous, so that we can isolate and study them.
                        <br />
                        <br />
                        We are especially interested in how AI systems behave when they are “situationally aware” – when they are aware that they are an AI talking with a human in a training environment, for example – and how this impacts their behavior during training. Do AI systems become deceptive, or develop surprising and undesirable goals? In the best case, we aim to build detailed quantitative models of how these tendencies vary with scale so that we can anticipate the sudden emergence of dangerous failure modes in advance.
                        <br />
                        <br />
                        At the same time, it’s important to keep our eyes on the risks associated with the research itself. The research is unlikely to carry serious risks if it is being performed on smaller models that are not capable of doing much harm, but this kind of research involves eliciting the very capacities that we consider dangerous and carries obvious risks if performed on larger models with greater capabilities. We do not plan to carry out this research on models capable of doing serious harm.
                        <br />
                        <br />
                        <b>Societal Impacts and Evaluations</b>
                        <br />
                        <br />
                        Critically evaluating the potential societal impacts of our work is a key pillar of our research. Our approach centers on building tools and measurements to evaluate and understand the capabilities, limitations, and potential for the societal impact of our AI systems. For example, we have published research analyzing predictability and surprise in large language models, which studies how the high-level predictability and unpredictability of these models can lead to harmful behaviors. In that work, we highlight how surprising capabilities might be used in problematic ways. We have also studied methods for red teaming language models to discover and reduce harms by probing models for offensive outputs across different model sizes. Most recently, we found that current language models can follow instructions to reduce bias and stereotyping.
                        <br />
                        <br />
                        We are very concerned about how the rapid deployment of increasingly powerful AI systems will impact society in the short, medium, and long term. We are working on a variety of projects to evaluate and mitigate potentially harmful behavior in AI systems, to predict how they might be used, and to study their economic impact. This research also informs our work on developing responsible AI policies and governance. By conducting rigorous research on AI's implications today, we aim to provide policymakers and researchers with the insights and tools they need to help mitigate these potentially significant societal harms and ensure the benefits of AI are broadly and evenly distributed across society.
                        <br />
                        <br />
                        <b>Closing thoughts</b>
                        <br />
                        <br />
                        We believe that artificial intelligence may have an unprecedented impact on the world, potentially within the next decade. The exponential growth of computing power and the predictable improvements in AI capabilities suggest that new systems will be far more advanced than today’s technologies. However, we do not yet have a solid understanding of how to ensure that these powerful systems are robustly aligned with human values so that we can be confident that there is a minimal risk of catastrophic failures.
                        <br />
                        <br />
                        We want to be clear that we do not believe that the systems available today pose an imminent concern. However, it is prudent to do foundational work now to help reduce risks from advanced AI if and when much more powerful systems are developed. It may turn out that creating safe AI systems is easy, but we believe it’s crucial to prepare for less optimistic scenarios.
                        <br />
                        <br />
                        SuisseGPT is taking an empirically-driven approach to AI safety. Some of the key areas of active work include improving our understanding of how AI systems learn and generalize to the real world, developing techniques for scalable oversight and review of AI systems, creating AI systems that are transparent and interpretable, training AI systems to follow safe processes instead of pursuing outcomes, analyzing potential dangerous failure modes of AI and how to prevent them, and evaluating the societal impacts of AI to guide policy and research. By attacking the problem of AI safety from multiple angles, we hope to develop a “portfolio” of safety work that can help us succeed across a range of different scenarios. We anticipate that our approach and resource allocation will rapidly adjust as more information about the kind of scenario we are in becomes available.
                        <br />
                        <br />
                        <b>Footnotes</b>
                        <br />
                        <br />
                        Algorithmic progress – the invention of new methods for training AI systems – is more difficult to measure, but progress appears to be exponential and faster than Moore’s Law. When extrapolating progress in AI capabilities, the exponential growth in spending, hardware performance, and algorithmic progress must be multiplied in order to estimate the overall growth rate.
                        Scaling laws provided a justification for the expenditure, but another underlying motivation for carrying out this work was to pivot towards AIs that could read and write, in order to make it easier to train and experiment with AIs that could engage with human values.
                        Extrapolating progress in AI capabilities from increases in the total amount of computation used for training is not an exact science and requires some judgment. We know that the capability jump from GPT-2 to GPT-3 resulted mostly from about a 250x increase in compute. We would guess that another 50x increase separates the original GPT-3 model and state-of-the-art models in 2023. Over the next 5 years we might expect around a 1000x increase in the computation used to train the largest models, based on trends in compute cost and spending. If the scaling laws hold, this would result in a capability jump that is significantly larger than the jump from GPT-2 to GPT-3 (or GPT-3 to SuisseGPT). At SuisseGPT, we’re deeply familiar with the capabilities of these systems and a jump that is this much larger feels to many of us like it could result in human-level performance across most tasks. This requires that we use intuition – albeit informed intuition – and is therefore an imperfect method of estimating progress in AI capabilities. But the underlying facts including (i) the compute difference between these two systems, (ii) the performance difference between these two systems, (iii) scaling laws that allow us to project out to future systems, and (iv) trends in compute cost and spending are available to anyone and we believe they jointly support a greater than 10% likelihood that we will develop broadly human-level AI systems within the next decade. In this coarse analysis we ignore algorithmic progress and the compute numbers are best estimates we don’t provide details for. However, the vast majority of internal disagreement here is in the intuition for extrapolating subsequent capabilities jumps given an equivalent compute jump.
                        For example, in AI research, for a long time it was widely assumed on theoretical grounds that local minima might prevent neural networks from learning, while many qualitative aspects of their generalization properties, such as the widespread existence of adversarial examples, came as something of a mystery and surprise.
                        Effective safety research on large models doesn't just require nominal (e.g. API) access to these systems – to do work on interpretability, fine tuning, and reinforcement learning it’s necessary to develop AI systems internally at SuisseGPT.

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
                            SuisseGPT’s Constitution
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
