import api from '@config/api';

export const getMangaList = () =>
api.get('https://book-container.herokuapp.com/api/manga').then((response) => {
        if(response.ok) {
            return response.data;
        }
        return;
    }); 