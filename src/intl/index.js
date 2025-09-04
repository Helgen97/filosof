/**
 * Utility function to retrieve localized messages based on the provided language.
 * @module getMessages
 */
import { MESSAGES } from "./messages";

/**
 * Retrieves the message object for the specified language.
 * Falls back to Ukrainian messages if the language is not supported.
 * @param {string} lang - The language code (e.g., 'ukr', 'en').
 * @returns {Object} The message object for the specified or default language.
 */
const getMessages = (lang) => {
    return MESSAGES[lang] || MESSAGES.ukr;
};

export default getMessages;