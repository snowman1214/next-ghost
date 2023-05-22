import Link from "next/link";
import logo from "./logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="core-footer">
      <div className="wrapper xs:grid xs:grid-2 s:grid-12">
        <div className="logo-mark xs:col-start-1 xs:col-span-1">
          <a href="index" aria-label="AI logo mark">
            <div className="logo">
              <Image src={logo} alt="dd"></Image>
            </div>
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
        <div className="footer-top xs:col-start-1 xs:col-span-2 s:grid s:grid-6 s:col-start-5 s:col-span-8 m:col-start-5 m:col-span-6">
          <ul className="footer-primary s:col-start-1 s:col-span-2">
            <li>
              <Link href="/product">Product</Link>
            </li>
            <li>
              <Link href="/research">Research</Link>
            </li>
            <li>
              <Link href="/company">Company</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
          </ul>
          <hr className="hide-on-desktop" />
          <ul className="footer-social s:col-start-3 s:col-span-2">
            <li>
              <a href="mailto:press@anthropic.com">Press Inquiries</a>
            </li>
            <li>
              <a href="mailto:support@anthropic.com">Support</a>
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
                href="https://www.linkedin.com/company/anthropicresearch/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
          <hr className="hide-on-desktop" />
          <ul className="footer-legal s:col-start-5 s:col-span-2">
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
        <div className="footer-bottom xs:col-start-1 xs:col-span-2 s:col-start-5 s:col-span-8 m:col-start-11 m:col-span-2">
          <div className="copyright">&copy; 2023 Anthropic PBC</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
