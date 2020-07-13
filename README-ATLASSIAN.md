#### Step to configure Atlassian connect
<b>Reference</b>  
[Jira Cloud App Getting started](https://developer.atlassian.com/cloud/jira/platform/getting-started/)

<b>Install ngrok:</b>  
npm install -g ngrok

<b>Run client:</b>  
ng serve --disable-host-check

<b>Expose port using ngrok:</b>  
ngrok http 4200

```Region                        United States (us)  
Web Interface                 http://127.0.0.1:4040  
Forwarding                    http://8fc4b924ca79.ngrok.io -> http://localhost:4200  
Forwarding                    https://8fc4b924ca79.ngrok.io -> http://localhost:4200  
```

1. Copy https URL and replace value of baseUrl into atlassian-connect.json file.  
2. No need to re-run ng server.
3. Go to atlassian cloud instance
4. Manage app, click on Upload App
5. Provide https URL for atlassian-connect.json  
   example: https://8fc4b924ca79.ngrok.io/atlassian-connect.json  

<b>Reference</b>  
[Jira Cloud App Getting started](https://developer.atlassian.com/cloud/jira/platform/getting-started/)