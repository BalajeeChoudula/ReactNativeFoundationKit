import { RouteItem } from "navigation/navigationconfig";
import SignInScreen from "./SigIn/SignInScreen";
import SignUpScreen from "./SignUp/SignUpScreen";

export const authRoutes: RouteItem[] = [
  {
    name: 'SignIn', // This is the route name
    component: SignInScreen,
    title: 'Sign In',
    options: { headerShown: true }, // Optional: You can add screen options here
  },
  {
    name: 'SignUp',
    component: SignUpScreen,
    title: 'Sign Up',
    options: { headerShown: true }, // Optional: You can add screen options here
  },
];
