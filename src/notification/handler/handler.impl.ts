import { v4 as uuidv4 } from 'uuid';
import { Result,Logger } from '@nana-tec/core';
import {INotificationRequestHandler, IRequestNotification} from './ihandler';
import {IEmailProvider ,Email} from '../channels/email/iemail';
import {INotificationRepo ,INotification,ENotificationStatus ,ENotificationChannel} from '../repo/Inotification.repo';

export default class NotificationHandler  implements INotificationRequestHandler {

    constructor (private emailProvider:IEmailProvider,private notificationRepo:INotificationRepo ,private defaultFrom:string) {

    }
  async  processNotification(notificationRequest: IRequestNotification): Promise<Result<string>> {

     try {

         
        const incomingNotification:INotification = {
            notificationId: uuidv4(),
            notificationDate: new Date().toISOString(),
            notificationStatus: ENotificationStatus.pending ,
            notificationChannelDetails: notificationRequest,
            senderEntity: notificationRequest.sender,
            notificationResponseDetails: {},
            notificationChannel:ENotificationChannel.email
        }

        await this.notificationRepo.save(incomingNotification);

        const emailRequest:Email = {
            from: this.defaultFrom,
            to: notificationRequest.to,
            subject: notificationRequest.notificationTitle,
            text: notificationRequest.notificationMessage
        }

        console.log("  === Handling Notification Event ====")

       const notificationResponse= await this.emailProvider.send(emailRequest);
       incomingNotification.notificationResponseDetails=notificationResponse;
       incomingNotification.notificationStatus =ENotificationStatus.sent;
       await this.notificationRepo.update(incomingNotification.notificationId,incomingNotification);
        
       return Result.ok(incomingNotification.notificationId);
        
     } catch (error) {
        Logger.error(error)
        return Result.fail(error.message) 
     }
    }

}