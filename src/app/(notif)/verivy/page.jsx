import { Suspense } from "react";
import Verify from "./VerivyLink";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
            <Verify />
        </Suspense>
      
  );
}
