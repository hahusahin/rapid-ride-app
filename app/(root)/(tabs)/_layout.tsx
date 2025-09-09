import { icons } from "@/constants";
import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View
    className={`w-12 h-12 rounded-full items-center justify-center ${focused ? "bg-general-400" : ""}`}
  >
    <Image
      source={source}
      tintColor="white"
      resizeMode="contain"
      className="w-7 h-7"
    />
  </View>
);

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        initialRouteName="home"
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#333333",
            borderRadius: 50,
            overflow: "hidden",
            marginHorizontal: 20,
            // marginBottom: 10,
            height: 65,
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon source={icons.home} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="rides"
          options={{
            title: "Rides",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon source={icons.list} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            title: "Chat",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon source={icons.chat} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon source={icons.profile} focused={focused} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
