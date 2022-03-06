import { SES, AWSError } from 'aws-sdk';
import { SendEmailRequest } from 'aws-sdk/clients/ses';
import { PromiseResult } from 'aws-sdk/lib/request';

let ses = new SES({ region: "us-east-1" });

type FormData = {
  emailTo: string;
  emailFrom: string;
  message:string;
  name:string;
}

export const sesSend= (formData: FormData): Promise<PromiseResult<SES.SendEmailResponse, AWSError>> => {

  const {emailTo, emailFrom, message, name} = formData;
  
  var params: SendEmailRequest = {
    Destination: {
      ToAddresses: [emailTo],
    },
    Message: {
      Body: {
        Text: { Data: "From Contact: " + name + "\n\n\n" + message },
      },
      Subject: { Data: "Contacted from NumericaIdeas Website"},
    },
    Source: emailFrom,
  };

  return ses.sendEmail(params).promise();
}
