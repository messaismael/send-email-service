import ApiBuilder from 'claudia-api-builder';
import { sesSend } from './sesSend';

const api : any = new ApiBuilder();

api.get('/', (req) => {
  return {success: true, message:"Numerica Ideas Serverless is ready"};
});

api.post('/mail', (req) => {
  const {email, name, message} = req.body;
  
  return sesSend({ emailTo: "messaismael01@gmail.com", emailFrom: email, name: name, message: message})
    .then((res) => {
      return {success: true, message: "Email sent successfull", data: res}
    })
    .catch((err) => {
      return {success: false, message: "Unable to send email", data: err}
    })
});

export = api;