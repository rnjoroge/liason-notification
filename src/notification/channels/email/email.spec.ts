import {email_config} from '../../../config/config';
import {Email,EEmailResponseStatus} from './iemail'
import EmailImpl from './email.impl';


describe('notification.email', ()=>{

    var emailImpl:EmailImpl;

    it('it should create an instance of email ', ()=>{
        emailImpl = new EmailImpl(email_config)
        expect(true).toBe(true)
    })

    it('it should send a test email ',async ()=>{
        const emailtoSend:Email= {
            from: 'info@wizglobal.co.ke',
            to: ['robert.njoroge.muthumbi@gmail.com'],
            subject: 'Test Wizglobal Email',
            text: 'Hi Robert Testing Wizglobal email'
        }
       let emailResponse= await emailImpl.send(emailtoSend);
       if(emailResponse.status==EEmailResponseStatus.success) {
        expect(true).toBe(true)
       }
       else{
        expect(true).toBe(false)
       }
       
    })

})