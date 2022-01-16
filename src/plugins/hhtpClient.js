import httpClient from '../api/httpClient'
httpClient.interceptors.request.use((request) => {
    const token = localStorage.getItem('token')
    if (token) {
        request.headers.common.Authorization = `JWT ${localStorage.getItem('token')}`
    }
    return request
})