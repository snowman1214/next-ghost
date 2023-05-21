const Footer = () => {
    return (
        <footer className="core-footer">
            <div className="wrapper xs:grid xs:grid-2 s:grid-12">
                <div className="logo-mark xs:col-start-1 xs:col-span-1">
                    <a href="index.html" aria-label="AI logo mark">
                        <svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.73 0h-6.945L38.45 32h6.945L32.73 0ZM12.665 0 0 32h7.082l2.59-6.72h13.25l2.59 6.72h7.082L19.929 0h-7.264Zm-.702 19.337 4.334-11.246 4.334 11.246h-8.668Z" fill="#FAFAF7"/></svg>
                    </a>
                </div>
                <div className="footer-top xs:col-start-1 xs:col-span-2 s:grid s:grid-6 s:col-start-5 s:col-span-8 m:col-start-5 m:col-span-6">
                    <ul className="footer-primary s:col-start-1 s:col-span-2">
                        <li><a href="product" >Product</a></li>
                        <li><a href="research" >Research</a></li>
                        <li><a href="index-2.html" >Index</a></li>
                        <li><a href="company" >Company</a></li>
                        <li><a href="indexfb19.html?subjects=announcements" >News</a></li>
                        <li><a href="careers" >Careers</a></li>
                    </ul>
                    <hr className="hide-on-desktop" />
                    <ul className="footer-social s:col-start-3 s:col-span-2">
                        <li><a href="mailto:press@suisseblocks.com" >Press Inquiries</a></li>
                        <li><a href="mailto:support@suisseblocks.com" >Support</a></li>
                        <li><a href="https://twitter.com/Jqvist" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://www.linkedin.com/company/suisseblocks/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                    <hr className="hide-on-desktop" />
                    <ul className="footer-legal s:col-start-5 s:col-span-2">
                        <li><a href="https://suisseblocks.com/#terms" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
                        <li><a href="https://suisseblocks.com/#privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                        <li><a href="responsible-disclosure-policy.html" >Responsible Disclosure Policy</a></li>
                    </ul>
                </div>
                <div className="footer-bottom xs:col-start-1 xs:col-span-2 s:col-start-5 s:col-span-8 m:col-start-11 m:col-span-2">
                    <div className="copyright">&copy; 2023 Suisseblocks Group AG</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
