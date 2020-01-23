import Request from 'request';

class Agent {
    constructor(params) {
        this.request = Request;
        this.config = {
            baseUrl: params.baseUrl,
            auth: {
                user: 'api',
                pass: params.apiKey
            },
            hedaers: {
                'Content-Type': 'application/json'
            },
            json: true,
        };
    }

    get(path) {
        return new Promise((resolve, reject) => {
            this.request.get(path, this.config, (error, response) => {
                if (error) {
                    reject(error);
                }
                resolve(response);
            });
        });
    }

    post(path, data) {
        return new Promise((resolve, reject) => {
            this.request.post(path, this.config, (error, response) => {
                if (error) {
                    reject(error);
                }
                resolve(response);
            }).form(data);
        });
    }
}

export default Agent;
