import { Suspense } from "react";
import SendLink from "./SendLink";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <SendLink />
    </Suspense>
  );
}
