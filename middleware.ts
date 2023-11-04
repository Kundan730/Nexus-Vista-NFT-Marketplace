import { NextResponse } from 'next/server';
// import { type UserRole } from '@/app/types';
import { clerkClient } from '@clerk/nextjs';
import { authMiddleware } from '@clerk/nextjs/server';

export default authMiddleware({
  // Public routes are routes that don't require authentication
  publicRoutes: [
    '/',
    '/dashboard',
    '/auth/login(.*)',
    '/auth/signup(.*)',
    '/auth/sso-callback(.*)',
    '/categories(.*)',
    '/products(.*)',
    '/blog(.*)',
    '/about(.*)',
    '/contact(.*)',
    '/terms(.*)',
    '/privacy(.*)',
    '/api(.*)'
  ],
  ignoredRoutes: ['/api/webhook/user'],

  async afterAuth(auth, req) {
    if (auth.isPublicRoute) {
      //  For public routes, we don't need to do anything
      return NextResponse.next();
    }

    const url = new URL(req.nextUrl.origin);

    if (!auth.userId) {
      //  If user tries to access a private route without being authenticated,
      //  redirect them to the sign in page
      url.pathname = '/auth/login';
      return NextResponse.redirect(url);
    }

    // Set the user's role to user if it doesn't exist
    const user = await clerkClient.users.getUser(auth.userId);

    if (!user) {
      throw new Error('User not found.');
    }
  }
});

export const config = {
  matcher: ['/console/:path*', '/((?!.*\\..*|_next).*)', '/', '/(api)(.*)']
};

// import { withAuth } from 'next-auth/middleware';

// export default withAuth({
//   pages: {
//     signIn: '/'
//   }
// });

// export const config = {
//   matcher: ['/console/:path*']
// };
