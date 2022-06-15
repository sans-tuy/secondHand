import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

async function onSignIn(user) {
  crashlytics().log('User signed in.');
  await Promise.all([
    crashlytics().setUserId(user.uid),
    crashlytics().setAttribute('credits', String(user.credits)),
    crashlytics().setAttributes({
      role: 'admin',
      followers: '13',
      email: user.email,
      username: user.username,
    }),
  ]);
}

function Home() {
  useEffect(() => {
    crashlytics().log('App mounted.');
  }, []);

  return (
    <View>
      <View>
        <Text>test fixing</Text>
      </View>
      <Button
        title="Sign In"
        onPress={() =>
          onSignIn({
            uid: 'Aa0Bb1Cc2Dd3Ee4Ff5Gg6Hh7Ii8Jj9',
            username: 'Joaquin Phoenix',
            email: 'phoenix@example.com',
            credits: 42,
          })
        }
      />
      <Button title="Test Crash" onPress={() => crashlytics().crash()} />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({});
