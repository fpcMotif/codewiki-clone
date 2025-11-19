import Cube from "@/components/cube";
import { ActionIcon } from "@/components/icons/action-icon";
import { ArrowIcon } from "@/components/icons/arrow-icon";

export function BrowserSection() {
  return (
    <section className="browser-section">
      <div className="browser-section-content">
        <h2 data-i18n="browserSection.title">
          Add the missing dimension to your software
        </h2>
        <div className="desktop-graphic">
          <div className="screen shine">
            <div className="screen-content">
              <a
                className="browser-section-cta"
                href="https://codewiki.google/github.com/google-gemini/gemini-cli"
                rel="noopener"
                target="_blank"
              >
                <div className="browser-section-cta-content">
                  <ActionIcon />
                  <p data-i18n="browserSection.cta">See Code Wiki in action</p>
                  <ArrowIcon />
                </div>
              </a>
              <Cube />
              <div className="browser-bar">
                <div className="browser-dots">
                  <div className="dot" />
                  <div className="dot" />
                  <div className="dot" />
                </div>
                <div className="address-bar" />
              </div>
            </div>
          </div>
          <div className="base" />
        </div>
      </div>
    </section>
  );
}
