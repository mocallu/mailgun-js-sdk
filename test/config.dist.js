module.exports = {
    agent: {
        apiKey: 'YOUR_API_KEY',
        domain: 'domain.used.on.mailgun.org',
        baseUrl: 'https://api.mailgun.net/v3/',
    },
    message: {
        from: 'From Name <from@email.com>',
        to: 'To <to@email.com>',
        subject: 'Mocallu Mailgun SDK Test',
        text: 'This is a simple e-mail test',
        html: () => `<html><strong>${this.message.text}</strong></html>`,
        'o:tag': 'test-sdk',
        'o:testmode': true,
    }
};
