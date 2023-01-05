import React from "react";
import { doc } from "firebase/firestore";
import { useFirestoreDocData, useFirestore } from "reactfire";

export default function BurritoTaste() {
  // easily access the Firestore library
  const burritoRef = doc(useFirestore(), "tryreactfire", "burrito");

  // subscribe to a document for realtime updates. just one line!
  const { status, data } = useFirestoreDocData(burritoRef);

  // easily check the loading status
  if (status === "loading") {
    return <p>Fetching burrito flavor...</p>;
  }

  return <p>The burrito is {data.yummy ? "good" : "bad"}!</p>;
}
