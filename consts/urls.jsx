export const HEADERS = new Headers({
    Accept: "application/vnd.api+json",
});

export const SERVER_URL = 'https://webwork.best';
export const API_URL = '/api/';
//export const KNOWLEDGE_BASE = 'knowledge-base';

/**
 * Endpoint URLs.
 *
 * @type {{}}
 */
export const URLS = {
    HOME: SERVER_URL + API_URL + 'home',
    KNOWLEDGE_BASE: SERVER_URL + API_URL + 'knowledge-base',
    KNOWLEDGE_NODES: SERVER_URL + API_URL + 'knowledge-base/nodes',
    CATEGORIES: SERVER_URL + API_URL + 'categories',
    CATEGORY: SERVER_URL + API_URL + 'category',
    TERM: SERVER_URL + API_URL + 'term',
    CARD_ITEM: SERVER_URL + API_URL + 'card',
    SESSION: SERVER_URL + '/session/token',
    WEBFORM: SERVER_URL + '/webform_rest/submit?_format=json',
    CONTACT: '/webform/contact/api'
}
