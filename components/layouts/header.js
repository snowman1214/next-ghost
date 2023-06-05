import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import logomobile from "./logowhite.svg";
import Image from "next/image";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const ChangeState = () => {
    setIsMobile(!isMobile);
  };
  return (
    <header className="core-header">
      <div className="wrapper">
        <Link href="/">
          <div className="logo">
            <Image src={logo} alt="dd"></Image>
          </div>
        </Link>
        <button
          className="btn-core-mobile"
          onClick={() => ChangeState()}
          aria-label="Navigation menu"
        >
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
          <Link href="/product">SuisseGPT</Link>
          <Link href="/legal">LegalGPT</Link>
          <Link href="/research">Research</Link>
          <Link href="/company">Company</Link>
          <Link href="/news">News</Link>
          <Link href="/careers">Careers</Link>
          <div className="nav-cta-wrapper" data-section-slugs="product">
            <a
                href="https://form.nativeforms.com/XNHej1jZmYTMm5Gca1Db"

                data-triggers="inViewOnce"
                target="_blank"
                rel="noopener"
                aria-label="Request SuisseGPT on Demand"
            >
            <button
              className="btn-primary btn-nav-cta"
              data-modal="requestAccess"
            >
              <span className="btn-label">
                Request Access
                <span
                  className="btn-anim"
                  title="Request Access"
                  aria-hidden="false"
                ></span>
              </span>
            </button>
              </a>
          </div>
        </nav>
        <div
          className="core-mobile-nav wrapper xs:grid xs:grid-2"
          style={isMobile ? { display: "block" } : { display: "none" }}
        >
          <div className="controls xs:grid xs:grid-2 xs:col-start-1 xs:col-span-2">
            <div className="logo-mark xs:col-start-1 xs:col-span-1">
              <div className="logo">
                <Image src={logomobile} alt="dd"></Image>
              </div>
              <Link href="/">
                <svg
                  width="46"
                  height="32"
                  viewBox="0 0 46 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                ></svg>
              </Link>
            </div>
            <button
              className="btn-close-mobile-nav xs:col-start-2 xs:col-span-1"
              onClick={() => ChangeState()}
            >
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
                <Link href="/product">SuisseGPT</Link>
              </li>

              <li>
                <Link href="/legal">LegalGPT</Link>
              </li>
              <li>
                <Link href="/research">Research</Link>
              </li>
              <li>
                <Link href="/">Index</Link>
              </li>
              <li>
                <Link href="/">Company</Link>
              </li>
              <li>
                <Link href="/news">News</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>

              <li>
                <Link href="company">Company</Link>
              </li>
              <li>
                <Link href="news">News</Link>
              </li>
              <li>
                <Link href="careers">Careers</Link>
              </li>
            </ul>
            <ul className="footer-additional">
              <li>
                <a href="mailto:info@suissegpt.ai">Email</a>
              </li>
              <li>
                <a
                  href="https://twitter.com/usedemand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/demand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link href="/terms" target="_blank" rel="noopener noreferrer">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/responsible-disclosure-policy">
                  Responsible Disclosure Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-bottom xs:col-start-1 xs:col-span-2">
            <div className="copyright">&copy; 2023 SuisseBlocks Group AG</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
