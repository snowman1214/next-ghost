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
                      Today, we are thrilled to announce the launch of our ground-breaking innovation - the first-ever Private Generative AI model, designed and built in the heart of Switzerland, the global symbol of privacy, stability, and innovation.

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
