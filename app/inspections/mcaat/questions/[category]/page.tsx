import { notFound } from "next/navigation";
import { getCategoryBySlug, mcaatQuestions } from "../../../../../data/mcaatQuestions";
import MCCATCategoryContent from "../../../../../components/MCCATCategoryContent";

type Props = {
  params: Promise<{ category: string }>;
};

// Generate static params for all categories
export function generateStaticParams() {
  return mcaatQuestions.map((category) => ({
    category: category.slug,
  }));
}

// Generate metadata for each category page
export async function generateMetadata({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: "Category Not Found" };
  }

  return {
    title: `${category.name} - MCAAT Inspection Questions`,
    description: category.description,
  };
}

export default async function MCCATCategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return <MCCATCategoryContent category={category} />;
}
