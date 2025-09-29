import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './DashboardScreen.styles';
interface DashboardCardProps {
  title: string;
  value: string;
  color: string;
}

const DashboardScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Implement your refresh logic here
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const DashboardCard = ({ title, value, color }: DashboardCardProps) => (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.cardContainer}>
          <DashboardCard title="Total Users" value="1,234" color="#007AFF" />
          <DashboardCard title="Active Users" value="892" color="#34C759" />
          <DashboardCard title="New Users" value="45" color="#FF9500" />
          <DashboardCard title="Revenue" value="$12,345" color="#5856D6" />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityList}>
            {/* Sample activity items */}
            {[1, 2, 3].map((item) => (
              <View key={item} style={styles.activityItem}>
                <Text style={styles.activityTitle}>Activity {item}</Text>
                <Text style={styles.activityTime}>2 hours ago</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default DashboardScreen;