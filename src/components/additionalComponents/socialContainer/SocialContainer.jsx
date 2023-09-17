import InstagramSvg from "../../svg/instagramSvg";

const SocialContainer = () => {
  return (
    <div className="social-container">
      <a
        href="https://www.instagram.com/filosof_barbershop/"
        target="_blank"
        alt="Barbershop instagram"
        aria-label="Link to barbershop instagram page"
      >
        <InstagramSvg />
      </a>
    </div>
  );
};

export default SocialContainer;
