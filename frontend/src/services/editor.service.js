import httpService from './http.service.js';

function query() {
    const samples = httpService.get('sample');
    return samples;
}

export const editorService = {
    query
}