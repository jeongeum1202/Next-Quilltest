'use client';

import ContentRegister from '@/components/domain/contents/register/ContentRegister';
import SignageEditor from '@/components/domain/contents/register/SignageEditor';

export default function HomePage() {
  return (
    <main>
      <section>
        <h1>react-quill 에디터 테스트</h1>
        <br></br>
        <SignageEditor />
      </section>
    </main>
  );
}
