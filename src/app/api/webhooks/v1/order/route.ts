import { wixAppClient } from '@/app/utils/wix-sdk.app';
import { type NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log('Body here:' + JSON.stringify(body));
  console.log('Headers here: ' + [...request.headers.entries()]);
  console.log('Active Webhooks:' + [...wixAppClient.webhooks.getRegisteredEvents().keys()]);

  return new Response('OK', {
    status: 200,
  });
}
