import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          //header background color
          headerStyle: { backgroundColor: "#3c0a6b" },
          //header text color
          headerTintColor: "white",
          drawerActiveBackgroundColor: "#f0e1ff",
          drawerActiveTintColor: "#3c0a6b",
          drawerStyle: { backgroundColor: "#cccc" },
        }}
      >
        <Drawer.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{
            //header background color
            // headerStyle: { backgroundColor: "#3c0a6b" },
            //header text color
            // headerTintColor: "white",
            drawerLabel: "Welcome Screen",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
            // drawerActiveBackgroundColor: "#f0e1ff",
            // drawerActiveTintColor: "#3c0a6b",
            // drawerStyle: { backgroundColor: "#cccc" },
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
