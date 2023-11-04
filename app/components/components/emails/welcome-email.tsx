import React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text
} from '@react-email/components';

interface WelcomeEmailProps {
  firstName?: string;
  fromEmail: string;
}

export default function WelcomeEmail({ firstName = 'there', fromEmail }: WelcomeEmailProps) {
  const previewText = `Hey👋 ${firstName}, happy to see you onboard.`;

  return (
    <Html>
      <Head>
        <title>Welcome to Flash APIs</title>
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className='mx-auto bg-gray-100 font-sans'>
          <Container className='mx-auto my-[40px] max-w-2xl rounded p-4'>
            <Section className='mt-4'>
              <Heading className='text-center text-2xl font-semibold text-gray-800'>
                Welcome to Flash APIs
              </Heading>
              <Text className='mb-0 mt-6 text-center text-base'>
                Hi {firstName}, we&apos;re thrilled to have you on our platform!
              </Text>
              <Text className='m-0 text-center text-base'>
                Your source for the latest API trends and developments.
              </Text>
              <Text className='m-0 text-center text-base'>
                Visit{' '}
                <Link
                  href={`https://www.flashapi.tech/console`}
                  className='text-blue-500 underline'
                >
                  Dashboard
                </Link>
              </Text>
            </Section>
            <Section className='mt-4 text-center text-gray-500'>
              <Text className='my-4'>
                We&apos;re excited to embark on this API journey together. If you have any questions
                or suggestions, please feel free to reach out to us at{' '}
                <Link href={`mailto:${fromEmail}`} className='text-blue-500 underline'>
                  {fromEmail}
                </Link>
              </Text>
              <Text className='mb-0 mt-4'>@ Flash APIs {new Date().getFullYear()}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
