import { ChangeEvent } from "react";
import axios from "axios"

const tabTitle = (newTitle: string) => document.title = newTitle

const updateUrl = (url: string) => url && url.replace("http://minio", "http://128.65.167.198")

const urlToLocal = (url: string) =>
    axios.get(url, {
        responseType: 'blob'
    })
        .then((response: any) => {
            return window.URL.createObjectURL(response.data)
        });

const readDataURL = (event: ChangeEvent<HTMLInputElement>): Promise<string> => {

    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (typeof reader.result === 'string') {
                resolve(reader.result);
            } else {
                reject(new Error('Failed to read file data as string'));
            }
        };

        reader.onerror = () => {
            reject(reader.error);
        };

        if (event.currentTarget && event.currentTarget.files) {
            reader.readAsDataURL(event.currentTarget.files[0]);
        } else {
            reject(new Error('No file selected'));
        }
    });
};

async function urlToFile(url: string) {
    const response = await fetch(url);
    const data = await response.blob();
    const metadata = { type: data.type };
    const filename = url.substring(url.lastIndexOf('/') + 1);
    return new File([data], filename, metadata);
}

export { tabTitle, updateUrl, urlToLocal, readDataURL, urlToFile }