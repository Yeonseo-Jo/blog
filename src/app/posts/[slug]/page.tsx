interface CategorizePostsPageProps {
  params: { slug: string };
}

export default function CategorizePostsPage({ params }: CategorizePostsPageProps) {
  return <div>CategorizePostListPage - {params.slug}</div>;
}
