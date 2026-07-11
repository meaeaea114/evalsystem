import { db } from './firebase';
import { collection, query, where, getDocs, doc, writeBatch } from 'firebase/firestore';

export const evaluationService = {
  getAllEvaluations: async () => {
    const evalRef = collection(db, 'evaluations');
    const snapshot = await getDocs(evalRef);
    return snapshot.docs.map((document) => ({ id: document.id, ...document.data() }));
  },

  getEligibleSubjectsForStudent: async (studentId) => {
    const subjectsSnap = await getDocs(collection(db, 'subjects'));
    const allSubjects = subjectsSnap.docs.map((document) => ({ id: document.id, ...document.data() }));

    const evalsSnap = await getDocs(query(collection(db, 'evaluations'), where('studentId', '==', studentId)));
    const allEvals = evalsSnap.docs.map((document) => document.data());

    const passedCodes = allEvals.filter((entry) => entry.status === 'Passed').map((entry) => entry.subjectCode);
    const activeCodes = allEvals.filter((entry) => ['Assigned', 'Pending Pre-req'].includes(entry.status)).map((entry) => entry.subjectCode);

    const eligibleSubjects = allSubjects.filter((subject) => {
      if (passedCodes.includes(subject.id) || activeCodes.includes(subject.id)) return false;

      const reqs = subject.prerequisites || [];
      const missing = reqs.filter((req) => !passedCodes.includes(req));
      return missing.length === 0;
    });

    return {
      passed: passedCodes,
      eligible: eligibleSubjects
    };
  },

  dispatchMultipleAssignments: async (studentId, subjectCodes) => {
    const batch = writeBatch(db);
    const timestamp = new Date().toISOString();

    subjectCodes.forEach((code) => {
      const evalRef = doc(collection(db, 'evaluations'));
      batch.set(evalRef, {
        studentId,
        subjectCode: code,
        status: 'Assigned',
        assignedDate: timestamp,
        missingPrerequisites: [],
        isManualEntry: false,
        remarks: 'Assigned by admin'
      });
    });

    await batch.commit();
    return true;
  },

  addManualTORRecords: async (studentId, entries) => {
    const batch = writeBatch(db);
    const timestamp = new Date().toISOString();

    entries.forEach((entry) => {
      const normalizedEntry = typeof entry === 'string'
        ? { subjectCode: entry, grade: '', status: 'Passed', remarks: 'Manual TOR Entry' }
        : entry;

      const evalRef = doc(collection(db, 'evaluations'));
      batch.set(evalRef, {
        studentId,
        subjectCode: normalizedEntry.subjectCode,
        grade: normalizedEntry.grade || '',
        status: normalizedEntry.status === 'Failed' ? 'Failed' : 'Passed',
        assignedDate: timestamp,
        remarks: normalizedEntry.remarks || 'Manual TOR Entry',
        isManualEntry: true,
        missingPrerequisites: []
      });
    });

    await batch.commit();
    return true;
  }
};