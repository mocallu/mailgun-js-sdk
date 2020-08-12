const Agent = require('./Agent');

class Mailgun {
    constructor(config) {
        this.agent = new Agent(config);
    }

    getDomains(domain = '') {
        if (domain) {
            return this.agent.get(`/domains/${domain}`);
        }
        return this.agent.get('/domains');
    }

    sendMessage(domain, data) {
        return this.agent.post(`/${domain}/messages`, data);
    }
}

module.exports = Mailgun;