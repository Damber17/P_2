import { Suspense } from 'react';
import BookNowClient from './BookNowClient';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookNowClient />
    </Suspense>
  );
}