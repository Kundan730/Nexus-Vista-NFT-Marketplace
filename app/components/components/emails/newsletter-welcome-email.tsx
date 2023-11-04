import React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text
} from '@react-email/components';

interface NewsletterWelcomeEmailProps {
  firstName?: string;
  fromEmail: string;
  token: string;
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? '';

// Example images (replace with your own images)
const newsletterImages = [
  {
    src: `https://i.postimg.cc/Jnn7d5BZ/image.jpg`,
    alt: 'Services',
    credit: 'Dashboard',
    creditUrl: 'https://www.flashapi.tech/console',
    description: 'Stay tuned for more updates.'
  }
  // {
  //   src: `/images/newsletter/image2.jpg`,
  //   alt: 'Example Image 2',
  //   credit: 'Jane Smith',
  //   creditUrl: 'https://www.example.com',
  //   description: 'This is an example description for Image 2.'
  // }
];

export default function NewsletterWelcomeEmail({
  firstName = 'there',
  fromEmail,
  token
}: NewsletterWelcomeEmailProps) {
  const previewText = `Hi ${firstName}, Thanks for joining our Newsletter`;

  return (
    <Html>
      <Head>
        <title>Flash APIs Newsletter</title>
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className='mx-auto bg-gray-100 font-sans'>
          <Container className='mx-auto my-[40px] max-w-2xl rounded p-4'>
            <Section className='mt-4'>
              <Heading className='text-center text-2xl font-semibold text-gray-800'>
                Flash APIs
              </Heading>
              <Hr className='my-4' />
              <Heading className='text-center text-3xl font-semibold text-gray-700'>
                Welcome to API Insights!
              </Heading>
              <Text className='mb-0 mt-6 text-center text-base'>
                We&apos;re thrilled to have you join our Newsletter, your source for the latest API
                trends and developments.
              </Text>
              <Text className='m-0 text-center text-base'>
                Our monthly newsletter will keep you informed and engaged with the API community.
              </Text>
            </Section>
            <Section className='mt-6'>
              {newsletterImages.map((item) => (
                <Row key={item.alt} className='mt-10'>
                  <Img
                    src={item.src}
                    alt={item.alt}
                    height={424}
                    className='aspect-video w-full object-cover'
                  />
                  <Text className='mb-0 mt-2 text-center text-gray-500'>
                    Visit{' '}
                    <Link href={item.creditUrl} className='text-blue-500 underline'>
                      {item.credit}
                    </Link>{' '}
                    to start the journey.
                  </Text>
                  <Text className='mb-0 mt-4 text-center text-base'>{item.description}</Text>
                </Row>
              ))}
            </Section>
            <Section className='mt-4 text-center text-gray-500'>
              <Text className='my-4'>
                We&apos;re excited to embark on this API journey together! If you have any questions
                or suggestions, please feel free to reach out to us at{' '}
                <Link href={`mailto:${fromEmail}`} className='text-blue-500 underline'>
                  {fromEmail}
                </Link>
              </Text>
              <Text className='mb-0 mt-4'>@ Flash APIs {new Date().getFullYear()}</Text>
              <Text className='m-0'>
                If you prefer not to receive these emails, you can{' '}
                <Link
                  href={`${baseUrl}/console/email-preferences?token=${token}`}
                  className='text-blue-500 underline'
                >
                  unsubscribe here
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
