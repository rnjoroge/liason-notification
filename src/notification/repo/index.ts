import {repoImpl} from '../../shared/database';
import NotificationRepoImpl from './notificationrepo.impl';

const notificationRepoImpl = new NotificationRepoImpl(repoImpl);

export {notificationRepoImpl}
