import { wixAppClient } from '@/app/utils/wix-sdk.app';
import { type NextRequest } from 'next/server';
import { decodeJwt } from '@/app/utils/jwt-verify';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  const body = await request.text();
  console.log('Body here:' + body);
  console.log('JWT here:' + JSON.stringify(decodeJwt(body)));
  // @ts-ignore
  console.log('Headers here: ' + [...request.headers.entries()]);
  // @ts-ignore
  console.log('Active Webhooks:' + [...wixAppClient.webhooks.getRegisteredEvents().keys()]);

  return new Response('OK', {
    status: 200,
  });
}
