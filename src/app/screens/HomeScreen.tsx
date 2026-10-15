import { useUsersQuery } from "@/src/services/query/useAuthQuery";
import React from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  const { data, isLoading, error, refetch, isRefetching } = useUsersQuery();

  const throwError = () => {
    throw new Error("Testing Error Boundary");
  };

  // FIRST LOAD
  if (isLoading)
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 10, color: "#555" }}>Loading Users...</Text>
      </View>
    );

  // ERROR STATE
  if (error)
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Something went wrong</Text>

        <Pressable
          style={[styles.button, { backgroundColor: "#007AFF" }]}
          onPress={refetch}
        >
          <Text style={styles.buttonText}>Retry</Text>
        </Pressable>
      </View>
    );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F6F6F6" }}>
      <View style={{ padding: 20 }}>
        <Text style={styles.title}>Users List</Text>
        <Text style={styles.subTitle}>Fetched using React Query</Text>

        {/* BUTTONS ROW */}
        <View style={styles.row}>
          <Pressable
            style={[
              styles.button,
              { flex: 1, opacity: isRefetching ? 0.6 : 1 },
            ]}
            onPress={refetch}
            disabled={isRefetching}
          >
            <Text style={styles.buttonText}>
              {isRefetching ? "Refreshing..." : "Refresh"}
            </Text>
          </Pressable>

          <Pressable
            style={[styles.button, { backgroundColor: "#FF3B30", flex: 1 }]}
            onPress={throwError}
          >
            <Text style={styles.buttonText}>Test Error</Text>
          </Pressable>
        </View>

        {/* SMALL REFRESH LOADER */}
        {isRefetching && (
          <View
            style={{
              marginTop: 12,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size="small" />
            <Text style={{ marginLeft: 8, color: "#555" }}>
              Refreshing data...
            </Text>
          </View>
        )}

        {/* USER CARDS */}
        <View style={{ marginTop: 20 }}>
          {data?.map((u: any) => (
            <View key={u.id} style={styles.card}>
              <Text style={styles.cardTitle}>{u.name}</Text>
              <Text style={styles.cardSubtitle}>ID: {u.id}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = {
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#222",
  },

  subTitle: {
    marginTop: 4,
    color: "#666",
    fontSize: 14,
  },

  row: {
    flexDirection: "row",
    gap: 12,
    marginTop: 20,
  },

  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  errorText: {
    fontSize: 20,
    color: "#FF3B30",
    fontWeight: "700",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  cardSubtitle: {
    marginTop: 6,
    color: "#666",
  },
};
