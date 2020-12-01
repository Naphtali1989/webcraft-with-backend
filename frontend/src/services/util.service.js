import axios from 'axios';

export const utilService = {
    applyDrag,
    makeId,
    getImgs,
    uploadImg,
    videoSearch
}

function makeId() {
    return Math.random().toString(36).substring(2, 12)
}

function applyDrag(cmps, dragResult) {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return cmps;
    const result = [...cmps];
    let itemToAdd = payload;
    if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
    }
    if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
    }
    return result;
};

async function getImgs(term) {
    const apiKey = 'DL-fOJKfzUbQ2irbF2Oleeza3GuX2LyJ-mVPCUJsJc8';
    const res = await axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=30&query=${term}&client_id=${apiKey}`);
    const imgs = res.data.results.map(img => img.urls);
    return imgs;
}


// async function videoSearch(searchTerm) {
//     const apiKey = 'AIzaSyA_MERVsO7PK2D2LJpZNW9hZe0y8e103po'
//     const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${apiKey}&q=${searchTerm}`);
//     const videos = res.data.items.map(video => {
//         const { videoId } = video.id
//         const { url } = video.snippet.thumbnails.default
//         const { title } = video.snippet
//         return {
//             title,
//             videoId,
//             url,
//         }
//     })
//     return videos
// }
async function videoSearch(searchTerm) {
    const apiKey = 'AIzaSyA_MERVsO7PK2D2LJpZNW9hZe0y8e103po';
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${apiKey}&q=${searchTerm}`);
    const data = await res.json();
    const videos = data.items.map(video => {
        console.log('all video', video);
        const { videoId } = video.id
        const { url } = video.snippet.thumbnails.default
        const { title } = video.snippet
        console.log(videoId);
        console.log('url:', url);
        console.log('title:', title);
        return {
            title,
            videoId,
            url
        }
    })
    console.log(videos);
    return videos
}





async function uploadImg(ev) {
    const UPLOAD_PRESET = 'tfdzm5iy';
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/dpro0mdti/image/upload`;
    const FORM_DATA = new FormData();
    FORM_DATA.append('file', ev.target.files[0]);
    FORM_DATA.append('upload_preset', UPLOAD_PRESET);
    try {
        const res = await axios.post(UPLOAD_URL, FORM_DATA);
        return res.data;
    } catch (err) {
        console.error('ERROR!', err);
    }
}