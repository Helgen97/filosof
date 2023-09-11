const MainScreenLinkContainer = ({ href, linkText }) => {
  return (
    <div className="main_screen_link-container">
      <a
        href={href}
        className="main_screen-link"
        target="_blank"
        rel="noreferrer"
      >
        {linkText}
      </a>
    </div>
  );
};

export default MainScreenLinkContainer;
