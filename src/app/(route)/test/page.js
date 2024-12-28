import ArticleList from '@/components/pages/news/ArticleList';

export default async function TestPage() {
  return (
    <div style={{ maxWidth: '1000px', width: '100%' }}>
      <ArticleList category={0} />
    </div>
  );
}
