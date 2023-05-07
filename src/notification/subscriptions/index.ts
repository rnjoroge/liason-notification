import {intergrationRegistry} from '../../shared/module/nats.impl';
import {notificationHandler} from '../handler';
import EmailSubscription from './email.subscription';

const emailSubscription = new EmailSubscription(intergrationRegistry,notificationHandler);
export {emailSubscription}