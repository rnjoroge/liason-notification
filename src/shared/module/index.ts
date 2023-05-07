import {moduleDefinition} from '../../config/config';
import {natsEventStore,natsDomainEventBusImpl,natsIntergrationBusImpl,natsApiserver} from './nats.impl';
import {IModuleInstanceDefinition } from '@nana-tec/core';
import MemoryApiRegistry from '@nana-tec/core/lib/core/api/api.registry';
import NotificationModule from './notification.module';
import  { v4 as uuidv4 } from 'uuid';
const memoryApiRegistry = new MemoryApiRegistry();

const trustModuleDefinition:IModuleInstanceDefinition = {
    moduleInstanceID: uuidv4(),
    name: moduleDefinition.name,
    version: moduleDefinition.version,
    description: moduleDefinition.description
}


const notificationModule = new NotificationModule(trustModuleDefinition,natsEventStore,natsDomainEventBusImpl,natsIntergrationBusImpl,memoryApiRegistry,natsApiserver);

export default notificationModule;