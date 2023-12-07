import {
    collection,
    doc,
    onSnapshot,
    orderBy,
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
    const habitsQuery = query(
        habitsRef,
        where("active", "==", true),
        orderBy("order", "asc")
    );

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
