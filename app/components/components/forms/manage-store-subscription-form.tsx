'use client';

import * as React from 'react';
import { type z } from 'zod';

import { catchError } from '@/lib/utils';
import { type manageSubscriptionSchema } from '@/lib/validations/stripe';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

type ManageStoreSubscriptionFormProps = z.infer<typeof manageSubscriptionSchema> & {
  isCurrentPlan: boolean;
};

export function ManageStoreSubscriptionForm({ isCurrentPlan }: ManageStoreSubscriptionFormProps) {
  const [isPending, startTransition] = React.useTransition();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    startTransition(async () => {
      try {
        // Replace the manageSubscriptionAction call with your logic
        // const session = await manageSubscriptionAction({
        //   email,
        //   userId,
        //   isSubscribed,
        //   isCurrentPlan,
        //   stripeCustomerId,
        //   stripeSubscriptionId,
        //   stripePriceId,
        // });
        // if (session) {
        //   window.location.href = session.url ?? "/console/billing";
        // }
        console.log('Subscription action logic here');
      } catch (err) {
        catchError(err);
      }
    });
  }

  return (
    <form className='w-full' onSubmit={(e) => onSubmit(e)}>
      <Button className='w-full' disabled={isPending}>
        {isPending && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' aria-hidden='true' />}
        {isCurrentPlan ? 'Manage Subscription' : 'Subscribe'}
      </Button>
    </form>
  );
}
