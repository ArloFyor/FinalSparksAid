import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase'; // Assuming these are imported
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';

const CompanionBody = () => {
  const [companionEmails, setCompanionEmails] = useState([]);
  const [companionData, setCompanionData] = useState([]);

  useEffect(() => {
    const fetchCompanionEmails = async () => {
      const userEmail = auth.currentUser.email;
      const sanitizedEmail = userEmail.replace(/\./g, '_');
      const userDocRef = doc(db, 'users', sanitizedEmail);
      const companionCollectionRef = collection(userDocRef, 'companions');

      const companionEmails = [];
      try {
        const snapshot = await getDocs(companionCollectionRef);
        snapshot.forEach((doc) => {
          companionEmails.push(doc.data().email);
        });
      } catch (error) {
        console.error('Error fetching companion emails:', error);
      }

      setCompanionEmails(companionEmails);
      fetchCompanionData(companionEmails);
    };

    fetchCompanionEmails();
  }, []);

  const fetchCompanionData = async (companionEmails) => {
    const userDocRef = doc(db, 'users', auth.currentUser.email.replace(/\./g, '_'));
    const companionsQuery = query(collection(userDocRef, 'companions')),
      companionsSnapshot = await getDocs(companionsQuery);

    const companionDocs = companionsSnapshot.docs.map((doc) => doc.data());

    const companionFullNamesAndAges = [];

for (const companion of companionDocs) {
      const companionEmail = companion.email;

      if (companionEmails.includes(companionEmail)) {
        const userDocRef = doc(db, 'users', companionEmail.replace(/\./g, '_'));
        const userDocSnapshot = await getDoc(userDocRef);
        const userData = userDocSnapshot.data();

        companionFullNamesAndAges.push({
          fullName: userData.fullName,
          age: userData.age,
        });
      }
    }

    setCompanionData(companionFullNamesAndAges);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Companions</Text>
      {companionEmails.length > 0 ? (
        <View style={styles.emailList}>
          {companionEmails.map((email) => (
            <Text key={email} style={styles.emailText}>
              {email}
            </Text>
          ))}
        </View>
      ) : (
        <Text style={styles.noDataText}>No companions found.</Text>
      )}

      {companionData.length > 0 && (
        <View style={styles.dataList}>
          {companionData.map((data) => (
            <Text key={data.fullName} style={styles.dataText}>
              {data.fullName} - {data.age}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emailList: {
    // Add styles for the email list container (optional)
  },
  emailText: {
    fontSize: 18,
    marginBottom: 5,
  },
  noDataText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'gray',
  },
  dataList: {
    // Add styles for the data list container (optional)
  },
  dataText: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default CompanionBody;