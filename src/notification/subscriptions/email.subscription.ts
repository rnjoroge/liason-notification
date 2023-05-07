import { Logger,  IApiEvntSubscriber,IIntergrationEventMessage, IIntergrationEventSubscriber,ESubscriptionType,IIntergrationEventSubscriptionRegistry, Result, IApiEventData} from '@nana-tec/core';

import {IRequestNotification,INotificationRequestHandler} from '../handler/ihandler';




export default class EmailSubscription {

     constructor (private registry:IIntergrationEventSubscriptionRegistry,private notificationHandler:INotificationRequestHandler) {

     }

    async init() {
        try {
            console.log(" ==initializing email===")
            const emailSubscription:IApiEvntSubscriber = {
                apiEventDetails: {
                    name:"sendEmail" ,
                    version:"v1"
                },
                apiEventService: {
                    name:"email",
                    version:"v1"
                },
                apiEventModule: {
                      name:"notification",
                      version:"v1"
                },
                apiEventSchema: {},
                handler: this.handler.bind(this)
            }
            await this.registry.addApiEventSubscriber(emailSubscription) ;
            console.log(" subscription success")
        } catch (error) {
            Logger.error(error)
        }

       
    }

    private async handler(apiEvntData: IApiEventData): Promise<Result<boolean, string>>
    {
        try {
            const NotificationData = apiEvntData.apiEventData as IRequestNotification
            await this.notificationHandler.processNotification(NotificationData);
            return Result.success();
        } catch (error) {
            return Result.fail(error)
        }
    }
  }
 


