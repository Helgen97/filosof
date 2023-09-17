const LanguageTooglerContainer = ({ changeLanguageFunction }) => {
  return (
    <div className="language_toggler-container">
      <select
        onChange={(event) => changeLanguageFunction(event.target.value)}
        className="language_toggler"
        name="language"
        aria-label="Change language of page"
      >
        <option value="ukr">UA</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};

export default LanguageTooglerContainer;
