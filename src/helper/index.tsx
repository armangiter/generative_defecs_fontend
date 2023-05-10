const tabTitle = (newTitle: string) => document.title = newTitle

const updateUrl = (url: string) => url && url.replace("http://minio", "http://128.65.167.198")

export { tabTitle, updateUrl }