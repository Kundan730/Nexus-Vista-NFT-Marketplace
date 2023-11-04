'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useSignUp } from '@clerk/nextjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { z } from 'zod';
import { useTransition } from 'react';

import { catchClerkError } from '@/lib/utils';
import { authSchema } from '@/lib/validations/auth';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/icons';
import { PasswordInput } from '@/components/password-input';

type Inputs = z.infer<typeof authSchema>;

export function SignUpForm() {
  const router = useRouter();
  const { isLoaded, signUp } = useSignUp();
  const [isPending, startTransition] = useTransition();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  });

  const message = (
    <div className='flex items-center'>
      <div className='mr-4'>
        {' '}
        {/* Add spacing between the icon and text */}
        <Icons.email className='h-8 w-8' /> {/* Add the message icon */}
      </div>
      <div>
        <p className='mb-1'>
          {' '}
          {/* Apply margin-bottom to create space between lines */}
          Check your email.
        </p>
        <p>We sent you a 6-digit verification code.</p>
      </div>
    </div>
  );

  function onSubmit(data: Inputs) {
    if (!isLoaded) return;

    startTransition(async () => {
      try {
        await signUp.create({
          username: data.username,
          emailAddress: data.email,
          password: data.password
        });

        // Send email verification code
        await signUp.prepareEmailAddressVerification({
          strategy: 'email_code'
        });

        router.push('/auth/signup/verify-email');
        toast.message(message);
      } catch (err) {
        catchClerkError(err);
      }
    });
  }

  return (
    <Form {...form}>
      <form
        className='grid gap-4'
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder='Enter username' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='Enter your email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder='**********' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending}>
          {isPending && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' aria-hidden='true' />}
          Continue
          <span className='sr-only'>Continue to email verification page</span>
        </Button>
      </form>
    </Form>
  );
}
