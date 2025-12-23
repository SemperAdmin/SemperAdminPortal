import { notFound } from "next/navigation";
import {
  financeCategories,
  financeMcaatQuestions,
  getFinanceQuestionsByCategory,
  type FinanceCategorySlug,
} from "../../../../../data/financeMcaatQuestions";
import FinanceMCAATCategoryContent from "../../../../../components/FinanceMCAATCategoryContent";

type Props = {
  params: Promise<{ category: string }>;
};

// Generate static params for all finance categories
export function generateStaticParams() {
  return financeCategories.map((category) => ({
    category: category.slug,
  }));
}

// Helper to get category by slug
function getCategoryBySlug(slug: string) {
  return financeCategories.find((cat) => cat.slug === slug);
}

// Generate metadata for each category page
export async function generateMetadata({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: "Category Not Found" };
  }

  return {
    title: `${category.name} - Finance MCAAT Inspection Questions`,
    description: `Finance MCAAT inspection questions for ${category.name}`,
  };
}

export default async function FinanceMCAATCategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const questions = getFinanceQuestionsByCategory(category.slug);

  return <FinanceMCAATCategoryContent category={category} questions={questions} />;
}
