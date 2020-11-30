import httpService from './http.service.js';

function query() {
    const samples = httpService.get('sample');
    return samples;
}

function add(sample) {
    return httpService.post(`sample`, sample);
}

export const sampleService = {
    query,
    add
};