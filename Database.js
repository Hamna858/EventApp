// // database.js
// import { getFirestore, collection, addDoc } from '@react-native-firebase/firestore';
// import { auth } from './Firebase';

// const firestore = getFirestore();

// const addVenue = async (venueData) => {
//   const user = auth.currentUser;

//   try {
//     await addDoc(collection(firestore, 'venues'), {
//       userId: user.uid,
//       ...venueData,
//     });

//     console.log('Venue added successfully!');
//     return { success: true, message: 'Venue added successfully' };
//   } catch (error) {
//     console.error('Error adding venue:', error.message);
//     return { success: false, message: 'Error adding venue' };
//   }
// };

// export { addVenue };

