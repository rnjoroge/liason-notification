import * as  os from 'os';
import {v4 as uuidv4} from 'uuid';
import {IDefinition} from '@nana-tec/core'
import {IEmailConfig} from '../notification/channels/email/iemail';

import nats , {IPGPoolConfig} from '@nana-tec/providers';




const NatsConfig:nats.ConnectionOptions = {
    servers: "localhost:4222"
}

const pgDBConfig:IPGPoolConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'admin123!',
   // database: process.env.DB_NAME || 'unittrust',
    port:parseInt(process.env.DB_PORT || "5432"),
    max: 0,
    idleTimeoutMillis: 0,
    connectionTimeoutMillis: 2000
}

const  email_config:IEmailConfig = {

    host:process.env.EMAIL_HOST || "smtp.office365.com",
    port: Number(process.env.EMAIL_PORT) || 587 ,
    secure: process.env.EMAIL_SECURE ==="false" ? false : false,
    requireTLS: process.env.EMAIL_SECURE==="true" ? false : true,
    auth: {
      user:process.env.EMAIL_USERNAME || 'insuranceonline@liaisongroup.net' ,
      pass:process.env.EMAIL_PASSWORD || 'gzmfqxqsxnnssjhv' ,
    },
    logger:  process.env.EMAIL_LOGGER ==="true" ? false : true,
    from_address:process.env.ZOHO_FROM_ADDRESS || 'insuranceonline@liaisongroup.net'


}


const moduleDefinition:IDefinition={
    name: 'notification',
    version: 'v1',
    description: 'Notification Module'
}



export {

    pgDBConfig ,
    NatsConfig ,
    email_config ,
    moduleDefinition
  }
