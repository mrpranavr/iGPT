import {
  ActivityIndicator,
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams, useRouter } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { useSignIn, useSignUp } from "@clerk/clerk-expo";

const login = () => {
  const { type } = useLocalSearchParams<{ type: string }>();
  const [loading, setLoading] = useState(false);
  const [emailAddress, setEmailAddress] = useState("icarustestclerk_test@gmail.com");
  const [password, setPassword] = useState("IcarusTest123");

  const {signIn, isLoaded, setActive} = useSignIn()
  const {signUp, isLoaded: signUpLoaded, setActive: signUpSetActive } = useSignUp()

  const router = useRouter()

  const onSignUpPress = async () => {
    if (!signUpLoaded) {
      return;
    }
    setLoading(true);

    try {
      // Create the user on Clerk
      const result = await signUp.create({
        emailAddress,
        password,
      });
      console.log('signup - result: ', result)
      // This indicates the user is signed in
      signUpSetActive({ session: result.createdSessionId });
      console.log('SESSION ID RECEIVED HERE !!!')
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);
    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err: any) {
      Alert.alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={70}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          {loading && (
            <View style={defaultStyles.loadingOverlay}>
              <ActivityIndicator size="large" color="#fff" />
            </View>
          )}

          <Image
            source={require("../assets/images/logo-dark.png")}
            style={styles.logo}
          />

          <Text style={styles.title}>
            {type === "login" ? "Welcome Back" : "Create your Account"}
          </Text>

          <View style={{ marginBottom: 30 }}>
            <TextInput
              autoCapitalize="none"
              placeholder="Email"
              style={styles.inputField}
              value={emailAddress}
              onChangeText={setEmailAddress}
            />
            <TextInput
              autoCapitalize="none"
              placeholder="Password"
              style={styles.inputField}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {type === "login" ? (
            <TouchableOpacity
              onPress={onSignInPress}
              style={[defaultStyles.btn, styles.btnPrimary]}
            >
              <Text style={styles.btnPrimaryText}>Login</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={onSignUpPress}
              style={[defaultStyles.btn, styles.btnPrimary]}
            >
              <Text style={styles.btnPrimaryText}>Create Account</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logo: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginVertical: 80,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 12,
    padding: 10,
    backgroundColor: "#fff",
  },
  btnPrimary: {
    backgroundColor: Colors.primary,
  },
  btnPrimaryText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFF",
  },
});
