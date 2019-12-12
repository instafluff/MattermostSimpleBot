# MattermostSimpleBot
Simple Chatbot Example For Mattermost Using Webhooks

## Instructions
1. Install NodeJS - https://nodejs.org/en/
2. Open the directory in a Command Prompt/Terminal
3. Download or clone the repository and install dependencies: `npm install`
4. Add an Incoming Webhook URL in your Mattermost Server
5. Add an Outgoing Webhook pointing to the URL of this chatbot server and port like `http://localhost:9898`
6. Create a **.env** file with your Incoming Webhook URL to look like this:
```
INCOMING_WEBHOOK=http://localhost:8065/hooks/7onroscg4pyw8ea1c9dez4gi1c
```
7. Run bot: `npm start`
