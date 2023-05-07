import * as nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import {Email, IEmailProvider,IEmailConfig ,IEmailResponse ,EEmailResponseStatus} from './iemail';
import { Logger } from "@nana-tec/core";

export default class EmailImpl implements IEmailProvider {
   private transporter: nodemailer.Transporter;

   constructor (private config:IEmailConfig) {

      this.init(config);
   }

    private async init (config:IEmailConfig) {
     try {
        //Logger.info(" === Transporter config == ")

       // console.log(" === Config === ",nodemailer)
        this.transporter = nodemailer.createTransport(config);
        Logger.info(" Email transporter initiated ==")
     }
     catch (err) {
console.error(err)
        Logger.error(err.message)
     }
    }
    async send(email: Email): Promise<IEmailResponse> {
        try {
            Logger.info(" Sending Email : "+email)
            if(!email) {
                throw new Error(' Email has no content ')
            }
     
          let emailResp= await  this.transporter.sendMail({ 
                from: email.from +' <' + this.config.from_address + '>',
                to: email.to,
                cc: email.cc,
                bcc: email.bcc,
                subject: email.subject,
                text: email.text,
                html: email.html,
            })
            //impliment iff contains attachment 
            let resp:IEmailResponse={
                status:EEmailResponseStatus.success,
                ref:emailResp.messageId,
                details:emailResp
            }

            return resp;
        }
        catch (err) {

            Logger.error(err);
            let resp:IEmailResponse={
                status:EEmailResponseStatus.error,
                ref:"n/a",
                details:err.message
            }
            return resp;
        }
    }
    
}