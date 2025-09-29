import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { authRoutes } from '../modules/auth/pages/authRouteConfig';

export type RouteItem = {
  name: string;
  component: React.ComponentType<any>;
  title: string;
  options?: NativeStackNavigationOptions;
};

export const routes: RouteItem[] = [
  ...authRoutes,
];
