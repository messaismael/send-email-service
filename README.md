# Send Email Service



## Getting started

**Send Email Service** it's a Lambda function which allows you to send email using **AWS SES**, **Lambda Function**, **TypeScript** and **Claudia** for deployment.

## Install

```
$ git clone https://gitlab.com/numericaideas/ni-email-service.git
$ cd ni-email-service
$ npm install
```

#### Installing and configuring claudia

You can follow this [link](https://claudiajs.com/tutorials/installing.html).
##### Notice
By default we use **us-east-1** as AWS region where we create our Lambda function

## Deploy
  
  To deploy your function, you can use the following command before this you should delete the  **claudia.json**  file.
  ```
  $ npm run claudia-start
  ```

  To update your function you can use:
  ```
  $ npm run claudia-update
  ```