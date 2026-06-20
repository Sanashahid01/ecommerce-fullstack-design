import { db } from './firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export const clearAllProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const deletePromises = querySnapshot.docs.map(document => 
      deleteDoc(doc(db, 'products', document.id))
    );
    await Promise.all(deletePromises);
    console.log('All products deleted!');
    alert('All products cleared from Firebase!');
  } catch (error) {
    console.error('Error clearing products:', error);
    alert('Error: ' + error.message);
  }
};