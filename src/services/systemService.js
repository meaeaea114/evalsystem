import { db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const systemService = {
  // Fetch current academic configuration
  getAcademicConfig: async () => {
    try {
      const docRef = doc(db, 'system_settings', 'academic');
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        return snap.data();
      }
      // Fallback default configuration if document doesn't exist yet
      return { activeYear: '2026-2027', activeSemester: '1st Semester' };
    } catch (error) {
      console.error("Failed to fetch academic config:", error);
      throw error;
    }
  },

  // Save updated academic configuration
  updateAcademicConfig: async (config) => {
    try {
      const docRef = doc(db, 'system_settings', 'academic');
      await setDoc(docRef, config, { merge: true });
      return true;
    } catch (error) {
      console.error("Failed to update academic config:", error);
      throw error;
    }
  }
};