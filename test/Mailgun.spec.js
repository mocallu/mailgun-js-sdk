const MailgunService = require('@/Mailgun');
const config = require('./config.dist');

describe('Mailgun', () => {
    const Mailgun = new MailgunService(config.agent);

    it('Needs to send an e-mail using Mailgun', async () => {
        const result = await Mailgun.sendMessage(config.agent.domain, config.message);
        expect(result.statusCode).toBe(200);
    });

    it('Needs to return a list of domains from Mailgun', async () => {
        const result = await Mailgun.getDomains();
        expect(result.statusCode).toBe(200);
    });

    it('Needs to return a specific domain from Mailgun', async () => {
        const result = await Mailgun.getDomains(config.agent.domain);
        expect(result.statusCode).toBe(200);
    });
});
