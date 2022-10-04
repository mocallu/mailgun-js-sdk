const Request = require('request');

class Agent {
    constructor(params) {
        this.request = Request;
        this.config = {
            baseUrl: params.baseUrl,
            auth: {
                user: 'api',
                pass: params.apiKey
            },
            headers: {
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
        this.config.formData = data;
        return new Promise((resolve, reject) => {
            this.request.post(path, this.config, (error, response) => {
                if (error) {
                    reject(error);
                }
                resolve(response);
            });
        });
    }
}

module.exports = Agent;
