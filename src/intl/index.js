import * as LANGUAGES from '../constants/languages';
const DEFAULT_LANG = LANGUAGES.ua;

const getMessages = (lang) => {
    const defaultMessages = require(`./messages.ua.json`);
    let messages;
    try {
        messages = lang === DEFAULT_LANG
            ? defaultMessages
            : require(`./messages.${lang.toLowerCase()}.json`);
    } catch (e) {
        messages = defaultMessages;
    }

    return Object
        .entries(defaultMessages)
        .reduce((result, [defaultMessageKey, defaultMessageText]) => ({
            ...result,
            [defaultMessageKey]: messages[defaultMessageKey] || defaultMessageText,
        }), {});
};

export default getMessages;