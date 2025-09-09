import { SignedIn, useClerk, useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

export default function Profile() {
  const { user } = useUser();

  const { signOut } = useClerk();
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await signOut();
      // Redirect to your desired page
      router.replace("/");
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <SignedIn>
      <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Sign out</Text>
      </TouchableOpacity>
    </SignedIn>
  );
}
