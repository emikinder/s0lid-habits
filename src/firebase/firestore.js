import {
    collection,
    doc,
    onSnapshot,
    query,
    setDoc,
    updateDoc,
    where,
} from "firebase/firestore";
import { db } from "./firebase";

const USERS_COLLECTION = "users";
const HABITS_COLLECTION = "habits";

export function subscribeToHabits(uid, setHabits, setLoading) {
    const userDoc = doc(db, USERS_COLLECTION, uid);
    const habitsRef = collection(userDoc, HABITS_COLLECTION);
    const habitsQuery = query(habitsRef, where("active", "==", true));

    const unsubscribe = onSnapshot(habitsQuery, (querySnapshot) => {
        const habitsRaw = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setHabits(habitsRaw);
        setLoading(false);
    });

    return unsubscribe;
}

// ok
export async function insertHabit(uid, habit) {
    try {
        const userDoc = doc(db, USERS_COLLECTION, uid);
        const habitsCollection = collection(userDoc, HABITS_COLLECTION);
        const newHabitDoc = doc(habitsCollection);
        habit.id = newHabitDoc.id;
        await setDoc(newHabitDoc, habit);
    } catch (error) {
        console.error("Error inserting habit: ", error);
    }
}

// ok
export async function updateHabit(uid, habitId, habit) {
    try {
        const habitDoc = doc(
            db,
            USERS_COLLECTION,
            uid,
            HABITS_COLLECTION,
            habitId
        );
        await updateDoc(habitDoc, habit);
    } catch (error) {
        console.error("Error updating habit: ", error);
    }
}

// export function addReceipt(uid, date, locationName, address, items, amount, imageBucket) {
//     addDoc(collection(db, RECEIPT_COLLECTION), { uid, date, locationName, address, items, amount, imageBucket });
// }

// export async function getHabits(uid, setHabits, setIsLoadingHabits) {
//     const habitsQuery = query(
//         collection(db, HABITS_COLLECTION),
//         where("userid", "==", uid)
//         // orderBy("date", "desc")
//     );

//     const unsubscribe = onSnapshot(habitsQuery, async (snapshot) => {
//         let allHabits = [];
//         for (const documentSnapshot of snapshot.docs) {
//             const habit = documentSnapshot.data();
//             allHabits.push({
//                 ...habit,
//                 // date: habit["date"].toDate(),
//                 // id: documentSnapshot.id,
//                 // imageUrl: await getDownloadURL(receipt["imageBucket"]),
//             });
//         }
//         setHabits(setHabits);
//         setIsLoadingHabits(false);
//     });
//     return unsubscribe;
// }

//  // Updates receipt with @docId with given information.
// export function updateReceipt(docId, uid, date, locationName, address, items, amount, imageBucket) {
//     setDoc(doc(db, RECEIPT_COLLECTION, docId), { uid, date, locationName, address, items, amount, imageBucket });
//   }

//   // Deletes receipt with given @id.
//   export function deleteReceipt(id) {
//     deleteDoc(doc(db, RECEIPT_COLLECTION, id));
//   }

// import { query, getDocs, collection, where, addDoc } from "firebase/firestore";
// import { db } from "./firebase";

// export const getUserHabits = async ({ user }) => {
//     console.log("user", user);
//     try {
//         const userQuery = query(
//             collection(db, "habits"),
//             where("userId", "==", user.uid)
//         );
//         const userSnapshot = await getDocs(userQuery);

//         // if (userSnapshot.docs.length === 0) {
//         //     await addDoc(collection(db, "habits"), {
//         //         userId: user.uid,
//         //         habits: [],
//         //     });
//         //     return []; // New user was created
//         // }
//         return userSnapshot.docs[0].data().habits; // User already exists
//     } catch (error) {
//         console.error("Error creating user: ", error);
//         throw error;
//     }
// };
