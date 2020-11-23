import { create } from 'apisauce';



const apiClient = create({
    baseURL: "http://172.16.0.31/api",
});

apiClient.get('/listings').then(response => {
    if (!response.ok) {
        response.problem;
    }
})