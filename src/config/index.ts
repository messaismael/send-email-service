/**
 * Config file
 * @author messaismael
*/

 export const ENV = process.env.NODE_ENV || 'dev';   // The default env is dev.

 export const TO_EMAILS = (process.env.TO_EMAILS || '').split(',');
 