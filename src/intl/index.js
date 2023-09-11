import * as LANGUAGES from '../constants/languages';
import { MESSAGES } from "./messages"
const DEFAULT_LANG = LANGUAGES.ua;

const getMessages = (lang) => {
    return lang === DEFAULT_LANG
        ? MESSAGES.ukr
        : MESSAGES[lang];
};

export default getMessages;