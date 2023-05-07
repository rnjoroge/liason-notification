




import ModuleInstance from '@nana-tec/core/lib/core/domain/module';
import { IModuleInstanceDefinition,IDomainEventStore,IDomainEventBus,IntergrationEventBroker,IApiRegistry ,IApiServer ,} from '@nana-tec/core';



export default class NotificationModule extends ModuleInstance {

    constructor (
        moduleInstanceDefinition:IModuleInstanceDefinition,
        serviceDomainStore:IDomainEventStore,
        serviceDomainEventBus:IDomainEventBus,
        serviceIntergrationBus:IntergrationEventBroker ,
        apiRegistry:IApiRegistry,
        apiServer:IApiServer ,
   ) {
    super(moduleInstanceDefinition,serviceDomainStore,serviceDomainEventBus,serviceIntergrationBus,apiRegistry,apiServer);
   }

}