import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { useEffect } from "react";
import { Script } from "./_document";

export default function Context() {
  useEffect(() => {
    setTimeout(() => {
      Script();
    }, 200);
  }, []);
  return (
    <>
      <Header />
      <div className="page-dom-content">
        <main data-taxi="">
          <article data-taxi-view="default" data-handle="postDetail">
            <div className="page-container">
              <div className="post-detail-container">
                <div className="wrapper s:grid s:grid-12">
                  <div className="post-heading s:col-start-2 s:col-span-10 m:col-start-3 m:col-span-8 l:col-start-4 l:col-span-6">
                    <div className="post-detail-types-subjects">
                      <a
                        href="/index?type=product"
                        className="btn-secondary btn-chip"
                      >
                        Product
                      </a>

                      <a
                        href="/index?subjects=announcements"
                        className="btn-secondary btn-chip"
                      >
                        Announcements
                      </a>
                    </div>

                    <h2 className="spacer-medium-mt">
                      Introducing 100K Context Windows
                    </h2>

                    <div className="post-timestamp spacer-medium-mt text-label">
                      May 11, 2023
                      <span className="is-bullet">●</span>1 min read
                    </div>
                  </div>

                  <div className="post-detail s:col-start-2 s:col-span-10 m:col-start-4 m:col-span-6 l:col-start-5 l:col-span-4 text-b2">
                    <figure className="inline-image">
                      <img
                        src="#"
                        alt="100K Context Window Image"
                      />
                    </figure>
                    <p>
                      <br />
                      We’ve expanded Claude’s context window from 9K to 100K
                      tokens, corresponding to around 75,000 words! This means
                      businesses can now submit{" "}
                      <strong>hundreds of pages</strong> of materials for Claude
                      to digest and analyze, and conversations with Claude can
                      go on for hours or even days.
                    </p>
                    <p>
                      The average person can read 100,000 tokens of text in ~5+
                      hours<sup>[1]</sup>, and then they might need
                      substantially longer to digest, remember, and analyze that
                      information. Claude can now do this in less than a minute.
                      For example, we loaded the entire text of The Great Gatsby
                      into Claude-Instant (72K tokens) and modified one line to
                      say Mr. Carraway was “a software engineer that works on
                      machine learning tooling at SuisseGPT.” When we asked the
                      model to spot what was different, it responded with the
                      correct answer in <strong>22 seconds</strong>.
                    </p>
                    <p>
                      Beyond just reading long texts, SuisseGPT can help retrieve
                      information from the documents that help your business
                      run. You can drop multiple documents or even a book into
                      the prompt and then ask Claude questions that require
                      synthesis of knowledge across many parts of the text. For
                      complex questions, this is likely to work substantially
                      better than vector search based approaches. Claude can
                      follow your instructions and return what you’re looking
                      for, as a human assistant would!
                      <br />
                    </p>
                    <figure>
                      <div className="is-iframe-responsive">
                        <iframe
                          src="https://player.vimeo.com/video/825668090?h=b5ca209c0b&amp;title=0&amp;byline=0&amp;portrait=0"
                          style={{ width: "100%", height: "100%" }}
                          frameBorder="0"
                        ></iframe>
                      </div>
                    </figure>

                    <p>
                      Our partners are excited about what larger context windows
                      means for their business. 100K translates into roughly 6
                      hours of audio - AssemblyAI put out a great demonstration
                      of this where they transcribed a long podcast into 58K
                      words and then used Claude for summarization and Q&amp;A.
                      You can watch the full demo{" "}
                      <a
                        href="https://youtu.be/2kFhloXz5_E"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        here
                      </a>
                      . With 100K context windows, you can:
                    </p>
                    <ul>
                      <li>
                        Digest, summarize, and explain dense documents like
                        financial statements or research papers
                      </li>
                      <li>
                        Analyze strategic risks and opportunities for a company
                        based on its annual reports
                      </li>
                      <li>
                        Assess the pros and cons of a piece of legislation
                      </li>
                      <li>
                        Identify risks, themes, and different forms of argument
                        across legal documents.
                      </li>
                      <li>
                        Read through hundreds of pages of developer
                        documentation and surface answers to technical questions
                      </li>
                      <li>
                        Rapidly prototype by dropping an entire codebase into
                        the context and intelligently build on or modify it
                      </li>
                    </ul>
                    <figure>
                      <div className="is-iframe-responsive">
                        <iframe
                          src="https://player.vimeo.com/video/&amp;title=0&amp;byline=0&amp;portrait=0"
                          style={{ width: "100%", height: "100%" }}
                          frameBorder="0"
                        ></iframe>
                      </div>
                    </figure>

                    <p>
                      100K context windows are now available in our API. If you
                      are working with Claude, you can read more about what
                      model versions to call{" "}
                      <a
                        href="https://console.suissegpt.ai/docs/api/reference#-v1-complete"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        here
                      </a>
                      . If you’re not working with SuisseGPT yet, you can request
                      access{" "}
                      <a
                        href="https://www.suissegpt.ai/product"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        here
                      </a>
                      .<br />
                    </p>
                    <p>
                      <sup>[1]</sup>&nbsp;
                      <a href="https://www.sciencedirect.com/science/article/abs/pii/S0749596X19300786">
                        https://www.sciencedirect.com/...
                      </a>
                    </p>

                    <div className="b-social-share">
                      <a
                        href="https://www.facebook.com/sharer/sharer.php?u=https://www.suissegpt.ai/suisseai"
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
                        href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.suissegpt.ai/suisseai"
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
                        href="https://twitter.com/intent/tweet?text=https://www.suissegpt.ai/suisseai"
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
            </div>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
}
