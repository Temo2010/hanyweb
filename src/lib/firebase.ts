import type { FirebaseApp } from "firebase/app";
import type { Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDizKztGd-R4PexSPy_-rg8bTUSCuofbfY",
  authDomain: "hany-s.firebaseapp.com",
  projectId: "hany-s",
  storageBucket: "hany-s.firebasestorage.app",
  messagingSenderId: "655386663941",
  appId: "1:655386663941:web:fb5e8d3799cc02105fd06c",
  measurementId: "G-S6SF9GEL0Y",
};

let firebaseApp: FirebaseApp | undefined;

async function getFirebaseApp(): Promise<FirebaseApp | undefined> {
  if (typeof window === "undefined") return undefined;
  if (firebaseApp) return firebaseApp;

  const [{ initializeApp, getApps }] = await Promise.all([import("firebase/app")]);
  firebaseApp = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  return firebaseApp;
}

export async function getDb(): Promise<Firestore | null> {
  const app = await getFirebaseApp();
  if (!app) return null;

  const { getFirestore } = await import("firebase/firestore");
  return getFirestore(app);
}

export async function saveReview(payload: {
  name: string;
  country: string;
  tour: string;
  rating: number;
  comment: string;
  reviewerDayKey: string;
}) {
  const db = await getDb();
  if (!db) throw new Error("Firebase is not available in this environment.");

  const { addDoc, collection, getDocs, limit, orderBy, query, Timestamp, where } = await import("firebase/firestore");
  const existing = await getDocs(
    query(collection(db, "reviews"), where("reviewerDayKey", "==", payload.reviewerDayKey), limit(1)),
  );

  if (!existing.empty) {
    throw new Error("You have already submitted a review today for this name.");
  }

  await addDoc(collection(db, "reviews"), {
    ...payload,
    createdAt: Timestamp.now(),
  });
}

export async function fetchReviewsFromFirebase() {
  const db = await getDb();
  if (!db) return [];

  const { collection, getDocs, limit, orderBy, query, Timestamp } = await import("firebase/firestore");
  const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"), limit(50));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    const createdAt = data["createdAt"] instanceof Timestamp ? data["createdAt"].toDate().toISOString() : new Date().toISOString();

    return {
      id: doc.id,
      name: data["name"] ?? "",
      country: data["country"] ?? null,
      tour: data["tour"] ?? null,
      rating: data["rating"] ?? 0,
      comment: data["comment"] ?? null,
      createdAt,
    };
  });
}
