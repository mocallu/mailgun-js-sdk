# Mailgun Node SDK
A simple Mailgun SDK to send e-mails.
Fork of https://github.com/mocallu/mailgun-js-sdk

## Install
```shell
npm install @nuteruls/mailgun-js-sdk
```

## Setup
```javascript
const MailgunSDK = require('mailgun-js-sdk');
const Mailgun = new MailgunSDK({
    apiKey: 'YOUR_API_KEY', // Required
    baseUrl: 'https://api.eu.mailgun.net/v3/'
});
```

## Send a message
```javascript
async function sendMessage() => {
    const domain = 'domain.used.on.mailgun.org';
    const message = {
        from: 'From Name <from@email.com>',
        to: 'To <to@email.com>',
        subject: 'Mocallu Mailgun SDK Test',
        text: 'This is a simple e-mail test',
        html: `<html><strong>This is a simple e-mail test</strong></html>`,
        'o:tag': 'test-sdk',
        'o:testmode': true,
    };
    const result = await Mailgun.sendMessage(domain, message);
    console.log(result);
};
sendMessage();
```

## Getting domains
```javascript
const domainsList = Mailgun.getDomains();
const domain = Mailgun.getDomains('especific.domain.mailgun.org');
```

> This SDK is not finished, feel free to help on development.