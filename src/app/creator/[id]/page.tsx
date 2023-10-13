"use client";

import { creators } from "@/modules/user/fixtures";
import CreatorCard from "@/modules/user/components/creator-card";
import { useParams } from "next/navigation";
import Page from "@/modules/ui/components/page";

export default function Creator({}) {
  const params = useParams<{ id: string }>();
  const queryId = parseInt(params.id as string);

  const creator = creators.find(({ id }) => queryId === id);

  return (
    <Page>
      {!creator && (
        <div>
          <h2>Error!</h2>
          <p>Could not find the creator with id {queryId}</p>
        </div>
      )}
      {creator && <CreatorCard creator={creator} showDetails />}
    </Page>
  );
}
