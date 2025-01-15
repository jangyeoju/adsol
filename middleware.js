import { NextResponse } from 'next/server';

export function middleware(request) {
  // HTTP 요청을 HTTPS로 리다이렉트
  if (request.headers.get('x-forwarded-proto') !== 'https') {
    const url = request.nextUrl.clone();
    url.protocol = 'https';
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}