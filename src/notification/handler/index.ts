import NotificationHandler from './handler.impl';
import {emailImpl} from '../channels/email';
import {notificationRepoImpl} from '../repo';

const notificationHandler = new NotificationHandler(emailImpl,notificationRepoImpl,'info@wizglobal.co.ke');
export {notificationHandler}