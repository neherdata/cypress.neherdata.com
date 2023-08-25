import ndslogo from "./ndslogo.png";
import "./App.css";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas, faSignal, faSignal5 } from "@fortawesome/free-solid-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";
import {
  faAppStoreIos,
  faFacebook,
  faFacebookMessenger,
  faGithub,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFax, faPhone } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ndslogo} className="App-logo" alt="logo" />
        <h1>Neher Data Systems</h1>
        <p>
          106 Secretariat Ct
          <br />
          Tinton Falls, New Jersey 07724
          <br />
          United States
        </p>

        <div className="icon-bar-1">
          <a href="mailto:hello@neherdata.com?cc=tyler@neherdata.com, joe@neherdata.com&subject=Contact%20Neher%20Data%20Systems%20%5Bneherdata.com%5D">
            <FontAwesomeIcon
              data-cy="email"
              icon={faEnvelope}
              inverse
              style={{
                fontSize: "1em",
                border: "1px solid white",
                borderRadius: "0.25em",
                padding: "0.25em",
              }}
            />
          </a>
          <a href="tel:+17326143717">
            <FontAwesomeIcon
              data-cy="telephone"
              icon={faPhone}
              inverse
              style={{
                fontSize: "1em",
                border: "1px solid white",
                borderRadius: "0.25em",
                padding: "0.25em",
              }}
            />
          </a>
          <a href="fax:+17323387791">
            <FontAwesomeIcon
              data-cy="fax"
              icon={faFax}
              inverse
              style={{
                fontSize: "1em",
                border: "1px solid white",
                borderRadius: "0.25em",
                padding: "0.25em",
              }}
            />
          </a>
        </div>

        <div className="icon-bar-2">
          <a href="https://www.github.com/neherdata">
            <FontAwesomeIcon
              data-cy="github"
              icon={faGithub}
              inverse
              style={{
                fontSize: "1em",
                border: "1px solid white",
                borderRadius: "0.25em",
                padding: "0.25em",
              }}
            />
          </a>
          <a href="https://www.facebook.com/neherdata">
            <FontAwesomeIcon
              data-cy="facebook"
              icon={faFacebook}
              inverse
              style={{
                fontSize: "1em",
                border: "1px solid white",
                borderRadius: "0.25em",
                padding: "0.25em",
              }}
            />
          </a>
          <a href="https://wa.me/message/V3ZSOBODWGPPE1">
            <FontAwesomeIcon
              data-cy="whatsapp"
              icon={faWhatsapp}
              inverse
              style={{
                fontSize: "1em",
                border: "1px solid white",
                borderRadius: "0.25em",
                padding: "0.25em",
              }}
            />
          </a>
          <a href="https://www.instagram.com/neherdata">
            <FontAwesomeIcon
              data-cy="instagram"
              icon={faInstagram}
              inverse
              style={{
                fontSize: "1em",
                border: "1px solid white",
                borderRadius: "0.25em",
                padding: "0.25em",
              }}
            />
          </a>
          <a href="https://m.me/neherdata">
            <FontAwesomeIcon
              data-cy="facebook-messenger"
              icon={faFacebookMessenger}
              inverse
              style={{
                fontSize: "1em",
                border: "1px solid white",
                borderRadius: "0.25em",
                padding: "0.25em",
              }}
            />
          </a>
          <a href="https://apps.apple.com/us/developer/neher-co-data-systems-llc/id1619722081">
            <FontAwesomeIcon
              data-cy="apple-app-store"
              icon={faAppStoreIos}
              inverse
              style={{
                fontSize: "1em",
                border: "1px solid white",
                borderRadius: "0.25em",
                padding: "0.25em",
              }}
            />
          </a>
        </div>
        <br />
      </header>
      <footer className="App-footer">
        <div className="footer-copyright">
          <br />
          <code>© 2023 Neher Data Systems</code>
        </div>
        <div className="footer-links">
          <br />
          <a data-cy="tos-link" href="https://tos.neherdata.com">
            Terms of Service
          </a>{" "}
          |{" "}
          <a data-cy="privacy-link" href="https://privacy.neherdata.com">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
