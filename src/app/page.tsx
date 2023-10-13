import { creators } from "@/modules/user/fixtures";
import CreatorCard from "@/modules/user/components/creator-card";
import Link from "next/link";
import Page from "@/modules/ui/components/page";

export default function Home() {
  return (
    <Page>
      <div className="flex-col">
        {creators.map((creator) => (
          <div className="flex-1" key={creator.id}>
            <Link href={`/creator/${creator.id}`}>
              <CreatorCard creator={creator} className="mb-5" />
            </Link>
          </div>
        ))}
      </div>
    </Page>
  );
}
