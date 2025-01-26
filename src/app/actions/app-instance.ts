import { decodeJwt } from '@/app/utils/jwt-verify';

export const parseAccessToken = (token: string) => {
  console.log('TOKEN 1: ' + token);
  return decodeJwt(token.replace(/.*JWS\./, ''));
};
