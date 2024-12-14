import { NextResponse } from 'next/server';

export function middleware(req: any) {
    // if (process.env.NODE_ENV === 'development' || process.env.REACT_APP_DISABLE_REDIRECT) {
    //     return NextResponse.next();
    // }
    // Check if the request is over HTTP
    const url = req.nextUrl.clone();
    if (url.protocol === 'http:') {
        // Redirect to HTTPS with a 301 status code
        url.protocol = 'https:';
        console.log(url, "Redirecting to HTTPS")
        return NextResponse.redirect(url, 301);
    }
    // Allow the request to continue if already HTTPS
    return NextResponse.next();
}

// Optionally, you can specify the paths the middleware should run on
export const config = {
    matcher: ['/'],
};
