import { FunctionComponent, PropsWithChildren } from "react";
import Header from "@/modules/ui/components/header";

const Page: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <main className="bg-background h-full px-12">
    <Header />
    {children}
  </main>
);

export default Page;
