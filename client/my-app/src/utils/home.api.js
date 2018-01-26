import axios from "axios"

const BASE_URL = "localhost:3030";//"http://172.16.14.102:3030"

export {getRequestdata, sendRequest, getPluginsViews}

function getRequestdata(){
    const url = BASE_URL+"/requests"
    return axios.get(url).then(response => response.data)
}

function getPluginsViews(){
    const url = BASE_URL+"/plugins"
    return axios.get(url).then(response => response.data)
}

function sendRequest(requestId, requestData){
    const url = BASE_URL+"/request/"+requestId
    return axios.post(url,requestData).then(response => response.data)
}
