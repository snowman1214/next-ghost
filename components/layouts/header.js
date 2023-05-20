import Link from "next/link";

const Header = () => {
  return (
    <header className="core-header">
      <div className="wrapper">
        <a className="core-logo-link" href="index.html" aria-label="Home">
          <div className="logo-lottie"></div>
        </a>
        <button className="btn-core-mobile" aria-label="Navigation menu">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.418 25.375v-2.083h29.166v2.083H5.418Zm0-8.667v-2.083h29.166v2.083H5.418Z"
              fill="#191919"
            />
          </svg>
        </button>
        <nav className="core-nav">
          <Link href="/product">Product</Link>
          <Link href="/research">Research</Link>
          <Link href="/company">Company</Link>
          <Link href="/news">News</Link>
          <Link href="/careers">Careers</Link>
          <div className="nav-cta-wrapper" data-section-slugs="product">
            <button
              className="btn-primary btn-nav-cta"
              data-modal="requestAccess"
            >
              <span className="btn-label">
                Request Access
                <span
                  className="btn-anim"
                  title="Request Access"
                  aria-hidden="true"
                ></span>
              </span>
            </button>
          </div>
        </nav>
        <div className="core-mobile-nav wrapper xs:grid xs:grid-2">
          <div className="controls xs:grid xs:grid-2 xs:col-start-1 xs:col-span-2">
            <div className="logo-mark xs:col-start-1 xs:col-span-1">
              <a href="index.html">
                <svg
                  width="46"
                  height="32"
                  viewBox="0 0 46 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.73 0h-6.945L38.45 32h6.945L32.73 0ZM12.665 0 0 32h7.082l2.59-6.72h13.25l2.59 6.72h7.082L19.929 0h-7.264Zm-.702 19.337 4.334-11.246 4.334 11.246h-8.668Z"
                    fill="#FAFAF7"
                  />
                </svg>
              </a>
            </div>
            <button className="btn-close-mobile-nav xs:col-start-2 xs:col-span-1">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m10.543 30.958-1.5-1.5 9.5-9.458-9.5-9.458 1.5-1.5 9.458 9.5 9.458-9.5 1.5 1.5-9.5 9.458 9.5 9.458-1.5 1.5-9.458-9.5-9.458 9.5Z"
                  fill="#FAFAF7"
                />
              </svg>
            </button>
          </div>
          <div className="footer-top xs:col-start-1 xs:col-span-2">
            <ul className="footer-primary">
              <li>
                <Link href="/product">Product</Link>
              </li>
              <li>
                <a href="research.html">Research</a>
              </li>
              <li>
                <a href="index-2.html">Index</a>
              </li>
              <li>
                <a href="company.html">Company</a>
              </li>
              <li>
                <a href="indexfb19.html?subjects=announcements">News</a>
              </li>
              <li>
                <a href="careers.html">Careers</a>
              </li>
            </ul>
            <ul className="footer-additional">
              <li>
                <a href="mailto:info@anthropic.com">Email</a>
              </li>
              <li>
                <a
                  href="https://twitter.com/AnthropicAI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/anthropicresearch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://legal.anthropic.com/#terms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="https://legal.anthropic.com/#privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="responsible-disclosure-policy.html">
                  Responsible Disclosure Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom xs:col-start-1 xs:col-span-2">
            <div className="copyright">&copy; 2023 Anthropic PBC</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
