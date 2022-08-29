import { GiFlyingTarget } from "react-icons/gi";
import { BsFacebook, BsTelegram, BsTwitter, BsWhatsapp } from "react-icons/bs";

import "./styles.scss";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <div>
        <span className="footerTitle">O que é o ZipHunter?</span>

        <div className="footerDescription">
          <h3>Quem Somos</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
            magna fermentum iaculis eu non diam phasellus vestibulum. Senectus
            et netus et malesuada fames ac. Tellus in hac habitasse platea
            dictumst. Sed id semper risus in hendrerit gravida. In ornare quam
            viverra orci sagittis eu volutpat. Netus et malesuada fames ac
            turpis. Amet commodo nulla facilisi nullam vehicula. Dictum varius
            duis at consectetur lorem donec. Urna condimentum mattis
            pellentesque id. Ut pharetra sit amet aliquam id.
          </p>
        </div>

        <div className="footerInfos">
          <div className="logo">
            <div className="zipHunter">
              <span>Zip</span>Hunter
            </div>
            <GiFlyingTarget />
          </div>

          <div className="socialMedias">
            <span>Compartilhe</span> nas redes sociais
            <div>
              <BsWhatsapp />
              <BsTwitter />
              <BsFacebook />
              <BsTelegram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
