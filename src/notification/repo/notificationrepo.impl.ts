
import {IBaseConnection ,BaseRepository,IrepoDetails ,Logger} from '@nana-tec/core';
import { Result } from '@nana-tec/core';
import {INotification, INotificationRepo} from './Inotification.repo';

const notificationRepoDetails:IrepoDetails={
    collectionName: 'notifications'
}

export default class NotificationRepoImpl implements INotificationRepo {
 
     constructor ( private readonly database: IBaseConnection<any> ) {

     }

   async save(notification:INotification): Promise<Result<void>> {
        try {
         await this.database.insert(notificationRepoDetails,notification);
          return Result.success();

        } catch (error) {
            Logger.error(error)
            return Result.fail(error.message) 
        }
    }
   async get(notificationId: string): Promise<Result<INotification>> {
      try {
        const result = await this.database.findOne(notificationRepoDetails,{notificationId:notificationId});
         return Result.ok<INotification>(result);
      } catch (error) {
        Logger.error(error)
        return Result.fail(error.message) 
      }
    }
  async  update(notificationId: string, update: Partial<INotification>): Promise<Result<void>> {
        try {
              await this.database.update(notificationRepoDetails,{notificationId:notificationId},update);
              return Result.success();
        } catch (error) {
            Logger.error(error)
            return Result.fail(error.message)     
        }
    }
    
}