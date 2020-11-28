import httpService from './http.service.js';

function query() {
    const samples = httpService.get('sample');
    // console.log('samples:', samples);
    return samples;
}

//**Todo -> add sample for admins easily */
function add(sample) {
    return httpService.post(`sample`, sample);
}



export const sampleService = {
    query,
    add
};