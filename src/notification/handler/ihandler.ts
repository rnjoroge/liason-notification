import { Result  } from "@nana-tec/core";
import {ISenderEntity} from '../repo/Inotification.repo';





export enum ENotificationType {
    "email"="email",
    "sms"="sms",
    "inapp"="inapp"
}
export interface IRequestNotification {
  sender:ISenderEntity;
  notificationType:ENotificationType;
  notificationTitle:string;
  notificationMessage:string;
  notificationExternalRef:string;
  to:string[];
  notificationEventname:string;  // the event that raised this notification in the form {version}.{module} // will use the form to extract module and service
  notificationReplyInbox?:string;  // if set where to send the notification on success


}

export interface INotificationRequestHandler  {

    processNotification (notificationRequest:IRequestNotification) :Promise<Result<string>>
}