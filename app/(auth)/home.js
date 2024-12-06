import { StyleSheet, Text, View } from "react-native";
import { useUser } from '@clerk/clerk-expo';
import { Link } from "expo-router";

export default function Home() {
  const { user } = useUser();

  return (
    <View>
      <Text>Página Home</Text>
      <Text>Email: {user?.emailAddresses[0].emailAddress}</Text>

      <Link href="../app/(auth)/profile">
        Meu perfil
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  
});