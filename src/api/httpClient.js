import axios from "axios";
const instance = axios.create({
    baseURL: "https://trello.backend.tests.nekidaem.ru/api/v1",
    headers: {
        'Content-type': 'application/json'
    }
})

export default instance