import { creators } from "@/modules/user/fixtures";
import CreatorCard from "@/modules/user/components/creator-card";
import Link from "next/link";
import Header from "@/modules/ui/components/header";

export default function Home() {
  return (
    <main className="bg-background h-full flex-col">
      <Header />
      {creators.map((creator) => (
        <div className="flex-1 mx-12" key={creator.id}>
          <Link href={`/creator/${creator.id}`}>
            <CreatorCard creator={creator} className="mb-5" />
          </Link>
        </div>
      ))}
    </main>
  );
}
