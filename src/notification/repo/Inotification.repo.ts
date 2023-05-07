
import { Result } from "@nana-tec/core";


export enum ENotificationChannel  {
    "sms"="sms",
    "email"="email",
    "inapp"="inapp"
}

export enum ENotificationStatus {
    "pending"="pending",
    "sent"="sent",
}
export interface ISenderEntity {
  entityId:string;
  entityType:string;
  userid?:string;
}
export interface INotification {
    notificationId:string;
    notificationDate:string;
    notificationStatus:ENotificationStatus;
    notificationChannelDetails:any;
    senderEntity:ISenderEntity;
    notificationResponseDetails:any;
    notificationChannel:ENotificationChannel;

}
export interface INotificationRepo {
    save (notification:INotification):Promise<Result<void>>;
    get(notificationId:string):Promise<Result<INotification>>;
    update(notificationId:string,update:Partial<INotification>):Promise<Result<void>>;
}