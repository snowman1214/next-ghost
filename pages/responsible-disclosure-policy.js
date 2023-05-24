import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { useEffect } from "react";
import { Script } from "./_document";
import { NextSeo } from "next-seo";
import Link from "next/link";

export default function Demand() {
  useEffect(() => {
    setTimeout(() => {
      Script();
    }, 200);
  }, []);
  return (
    <>
      <NextSeo
        title="Suisse AI: Responsible Disclosure Policy"
        description="Responsible Disclosure Policy"
        openGraph={{
          url: "http://suissegpt.ai",
          title:
            "Suisse AI: Responsible Disclosure Policy",
          description:
            "Responsible Disclosure Policy.",
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
                        Research
                      </a>
                    </div>

                    <h2 className="spacer-medium-mt">

                      Responsible Disclosure Policy
                    </h2>

                    <div className="post-timestamp spacer-medium-mt text-label">
                      May 24, 2023
                      <span className="is-bullet">●</span>1 min read
                    </div>
                  </div>

                  <div className="post-detail s:col-start-2 s:col-span-10 m:col-start-4 m:col-span-6 l:col-start-5 l:col-span-4 text-b2">
                    <p className="text-b2">
                      nsuring the safety of our systems and the data of our users is the foremost concern at Suisse AI. We acknowledge and value the contribution of security researchers, whose diligent efforts in identifying and highlighting potential vulnerabilities (as assessed solely by Suisse AI) are integral to our ongoing security measures.
                      <br />
                      <br />
                      Should you uncover a security vulnerability in a Suisse AI system, we request you to immediately report it to disclosure@suisseai.com, including all relevant information (logs, code, proofs of concept), which will assist us in comprehending, validating, and swiftly addressing the issue. Should you have any queries about this policy or are uncertain if your research complies with it, kindly reach out to disclosure@suisseai.com prior to proceeding.
                      <br />
                      <br />
                      Upon responsibly submitting your discoveries to us, you can anticipate:

                      <br />
                      <br />
                       - Immunity from legal repercussions from Suisse AI, provided your research and reporting comply with the relevant laws and legal responsibilities incumbent on Suisse AI.
                      <br />
                      <br />
- Expedited investigation and verification of vulnerability reports.
                      <br />
                      <br />
- Timely resolution of confirmed vulnerabilities.
                      <br />
                      <br />
- Credit for significant vulnerability reports, determined on a case-by-case basis.
                      <br />
                      <br />
                      Correspondingly, your responsibilities include:

                      <br />
                      <br />
- Promptly and responsibly reporting any discovered vulnerabilities exclusively to disclosure@suisseai.com. Be aware that the disclosure of issues to Suisse AI should be unconditional and must never involve extortion or threats.
                      <br />
                      <br />
- Refraining from public disclosure of any vulnerabilities until Suisse AI provides written authorization.
                      <br />
                      <br />
- Avoiding activities leading to data destruction, disruption of Suisse AI systems or user experience, violation of others' privacy, or any illegal or harmful actions.
                      <br />
                      <br />
- Complying with all applicable laws at all times.
                      <br />
                      <br />
                    </p>


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
