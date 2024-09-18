import NewsList from "@/components/NewsList";

export default async function NewsPage() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/news");

  if (!response.ok) {
    throw new Error("Failed to fetch news.");
  }

  const data = await response.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={data} />
    </>
  );
}
