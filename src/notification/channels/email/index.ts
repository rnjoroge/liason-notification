import {email_config} from '../../../config/config';
import EmailImpl  from './email.impl';

const emailImpl = new EmailImpl(email_config);
export {emailImpl}