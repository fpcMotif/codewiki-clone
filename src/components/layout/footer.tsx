import { GoogleForDevelopersLogo } from "@/components/icons/google-for-developers-logo";
import { GoogleLogo } from "@/components/icons/google-logo";

export function Footer() {
  return (
    <app-footer>
      <footer className="footer-content centered">
        <div
          aria-label="Google for developers logo"
          className="google-for-dev"
          role="img"
        >
          <GoogleLogo />
          <GoogleForDevelopersLogo />
        </div>
        <div className="footer-links">
          <a
            data-i18n="footer.privacy"
            href="https://policies.google.com/privacy"
            rel="noopener noreferrer"
            target="_blank"
          >
            Privacy Policy
          </a>
          <a
            data-i18n="footer.terms"
            href="https://policies.google.com/terms"
            rel="noopener noreferrer"
            target="_blank"
          >
            Terms
          </a>
          <a
            data-i18n="footer.developers"
            href="https://developers.google.com/site-terms"
            rel="noopener noreferrer"
            target="_blank"
          >
            Developers
          </a>
          <a
            data-i18n="footer.support"
            href="https://support.google.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Support
          </a>
          <a
            data-i18n="footer.developerSite"
            href="https://developers.google.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Developer Site
          </a>
          <a
            href="https://www.google.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google
          </a>
        </div>
        <div className="footer-locale">
          {/* Language selector removed */}
        </div>
      </footer>
    </app-footer>
  );
}
