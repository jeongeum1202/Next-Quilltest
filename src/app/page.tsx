'use client';

import { Button } from '@/components/common';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section>
        <h1>react 에디터 테스트</h1>
        <br></br>
        <div>
          <Button>
            <Link href="/quill">react-quill 테스트</Link>
          </Button>
          <Button>
            <Link href="/color">react-color, react-colorful 테스트</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
