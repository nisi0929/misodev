import { TypoWrapper } from '../components/atom/TypoWrapper.tsx';
import { useEffect, useState } from 'preact/hooks';
import DOMPurify from 'dompurify';
import { LinkTo } from '../components/atom/LinkTo.tsx';
type TProps = {
  title: string;
  content: string;
};
export default function ArticleContent({ title, content }: TProps) {
  const [sanitized, setSanitized] = useState('');
  useEffect(() => {
    setSanitized(DOMPurify.sanitize(content));
  }, []);

  return (
    <div class="w-11/12 md:w-4/5 m-auto py-5">
      <TypoWrapper
        element="h1"
        className="py-10 border-b-2 text-center"
        children={title}
      />
      <div class="bg-white p-5 md:p-10 rounded-md">
        <div dangerouslySetInnerHTML={{ __html: sanitized }} id="contents" />
        <div class="text-center">
          <LinkTo href="/articles">記事一覧へ</LinkTo>
        </div>
      </div>
    </div>
  );
}