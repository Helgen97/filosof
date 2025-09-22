/**
 * QuoteWidget displays a daily quote based on the day of the year and current language.
 * It includes social media sharing buttons and a toggle to show/hide the widget.
 * @module QuoteWidget
 */
import { useState, useEffect, memo } from "react";
import { QUOTES } from "../../../constants/constants";
import { useLanguageContext } from "../../../context/SiteContext";
import TwitterSvg from "../../svg/TwitterSvg";
import ThreadsSvg from "../../svg/ThreadsSvg";
import TelegramSvg from "../../svg/TelegramSvg";
import { useIntl } from "react-intl";

/**
 * QuoteWidget component.
 * @returns {JSX.Element|null} The quote widget or null if data is not available.
 */
const QuoteWidget = () => {
  // State to store the selected quote object and its language-specific content
  const [quotes, setQuotes] = useState(null);
  const [quote, setQuote] = useState(null);
  // State to control widget visibility
  const [isVisible, setIsVisible] = useState(false);
  // Current language from context
  const { appLang } = useLanguageContext();
  // Internationalization hook for localized strings
  const { formatMessage } = useIntl();

  /**
   * Effect to select a quote based on the day of the year and update on language change.
   * Combines quote selection and language-specific content setting for efficiency.
   */
  useEffect(() => {
    // Calculate the day of the year
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const quoteIndex = dayOfYear <= 366 ? dayOfYear - 1 : 365;

    // Select quote
    const selectedQuotes = QUOTES[quoteIndex];
    setQuotes(selectedQuotes);

    // Set language-specific quote with fallback to English
    const selectedQuote = selectedQuotes.quotes[appLang || "uk"];
    setQuote(selectedQuote);
  }, [appLang]);

  /**
   * Toggles the visibility of the quote widget.
   */
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  // Return null if quotes or quote data is unavailable
  if (!quotes || !quote) return null;

  // Generate share text and URLs for social media
  const shareText = `"${quote.quote}" — ${quote.author}`;
  const urlVars = `?url=${encodeURIComponent(
    window.location.origin
  )}&text=${encodeURIComponent(shareText)}`;

  const twitterUrl = `https://x.com/intent/tweet${urlVars}`;
  const threadsUrl = `https://www.threads.net/intent/post${urlVars}`;
  const telegramUrl = `https://t.me/share/url${urlVars}`;

  return (
    <div className="quote-widget-container">
      <div
        className={`quote-widget ${
          isVisible ? "quote-widget--visible" : "quote-widget--hidden"
        }`}
      >
        <button
          className="quote-widget__handle"
          onClick={toggleVisibility}
          aria-label={formatMessage({ id: "quote_widget_toggle" })}
          aria-expanded={isVisible}
        >
          <span className="quote-widget__handle-text">
            {formatMessage({ id: "quote_widget_title" })}
          </span>
        </button>
        <div className="quote-widget__content">
          <p className="quote-widget__quote">"{quote.quote}"</p>
          <p className="quote-widget__author">— {quote.author}</p>
          {quotes.isSpecial && (
            <p className="quote-widget__special">{quote.holiday}</p>
          )}
        </div>
        <div className="quote-widget__socials">
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="quote-widget__social-icon"
            aria-label={formatMessage({ id: "share_twitter" })}
          >
            <TwitterSvg />
          </a>
          <a
            href={threadsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="quote-widget__social-icon"
            aria-label={formatMessage({ id: "share_threads" })}
          >
            <ThreadsSvg />
          </a>
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="quote-widget__social-icon"
            aria-label={formatMessage({ id: "share_telegram" })}
          >
            <TelegramSvg />
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(QuoteWidget);
