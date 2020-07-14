const AgentService = require('@/Agent');
const config = require('./config.dist');

describe('Agent', () => {
    config.agent.baseUrl = 'https://api.mailgun.net/v3/';
    const Agent = new AgentService(config.agent.baseUrl);

    it('Needs to return an error on get method', async () => {
        try {
            await Agent.get('http://invalid.path');
        } catch (e) {
            expect(e).toBeTruthy();
        }
    });

    it('Needs to return an error on post method', async () => {
        try {
            await Agent.post('http://invalid.path', {
                key: 'value'
            });
        } catch (e) {
            expect(e).toBeTruthy();
        }
    });
});
