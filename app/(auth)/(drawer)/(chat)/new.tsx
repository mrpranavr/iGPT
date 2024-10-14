import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { useClerk } from "@clerk/clerk-expo";
import { defaultStyles } from "@/constants/Styles";
import { Stack } from "expo-router";
import HeaderDropDown from "@/components/HeaderDropDown";

const NewChat = () => {
  const { signOut } = useClerk();
  const [gptVersion, setGptVersion] = useState("3.5");

  return (
    <View style={defaultStyles.pageContainer}>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <HeaderDropDown 
              title="ChatGPT" 
              onSelect={(key) => setGptVersion(key)} 
              selected={gptVersion}
              items= {[
                {key: '3.5', title: 'GPT-3.5', icon: 'bolt'},
                {key: '4o', title: 'GPT-4o', icon: 'sparkles'},
              ]}
            />
          ),
        }}
      />
      <Button title="Sign Out" onPress={() => signOut} />
    </View>
  );
};

export default NewChat;
