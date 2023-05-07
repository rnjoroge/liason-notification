
export interface auth {
    user: string,
    pass: string,
}
export interface IEmailConfig {
    host:string;
    port: number;
    secure: boolean;
    requireTLS: boolean;
    auth: auth;
    logger: boolean;
    from_address:string;
}
export interface Email {
    from: string;
    to: Array<string>;
    cc?: Array<string>;
    bcc?: Array<string>;
    subject: string;
    text: string;
    html?: string;
}

export enum EEmailResponseStatus {
    "success"="success",
    "error"="error"
}

export interface IEmailResponse {
    ref:string;
    status:EEmailResponseStatus;
    details:any;
}



export interface IEmailProvider {
    send (email:Email):Promise<IEmailResponse>;
}