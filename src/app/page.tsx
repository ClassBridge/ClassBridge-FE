import ClassCard from "@/components/common/ClassCard";
import Header from "@/components/common/Header";
import { mockClassCardContent } from "@/lib/mock";

export default function HomePage() {
  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <Header />
      <ClassCard size="small" content={mockClassCardContent} />
    </main>
  );
}
