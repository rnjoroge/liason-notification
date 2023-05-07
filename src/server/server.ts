
//import {microserviceConnection} from '../shared/microservice';
import { Logger } from '@nana-tec/core';
import {pGConnection} from '../shared/database';
import {natsConnImpl ,natsIntergrationBusImpl} from '../shared/module/nats.impl';
import * as notification from '../notification';


import notificationModule from '../shared/module';

import *  as tmmodule from '../shared/module';

export default class ModuleServer  {
    
    constructor () {
 
    }



   async startUp () {
      try {
   
        //await pGConnection.connect();
        //await natsConnImpl.connect();
       // await natsIntergrationBusImpl.start();
        await notification.emailSubscription.init()
        await notificationModule.startModule();
        
  
        Logger.info(" == Start up sucess  Success ==")
      }
      catch (err) {
        Logger.info(" == Error on starup ==");
        Logger.error(err);
        this.shutdown(err);
      }

    }

   async  shutdown(err:Error) {
      try {
        await notificationModule.StopModule();
        await pGConnection.disconnect();
        await natsConnImpl.disconnect();
        Logger.info(" == Shutdown Success ==")
        process.exit(0);
      }
      catch (err) {
        Logger.error(err)
        Logger.info(" == Shutdown Not Succcess ==")
        process.exit(1);
      }

    }

}

