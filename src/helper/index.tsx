import axios from "axios"

const tabTitle = (newTitle: string) => document.title = newTitle

const updateUrl = (url: string) => url && url.replace("http://minio", "http://128.65.167.198")

const urlToBlob = (url: string) =>
    axios.get(url, {
        responseType: 'blob'
    })
        .then(response => {
            return window.URL.createObjectURL(response.data)
        });


export { tabTitle, updateUrl, urlToBlob }