import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather"; // For search and bell icon
import { MaterialIcons } from "@expo/vector-icons"; // For user icon

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Left Section - Profile */}
      <View style={styles.profileSection}>
        <View style={styles.avatar}>
          <MaterialIcons name="person-outline" size={24} color="white" />
        </View>
        <View>
          <Text style={styles.greeting}>Hi,</Text>
          <Text style={styles.username}>Alex</Text>
        </View>
      </View>
 
      {/* Right Section - Icons */}
      <View style={styles.iconsSection}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="search" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <View style={styles.notificationBadge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
          <Icon name="bell" size={24} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  greeting: {
    fontSize: 14,
    color: "#888",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  iconsSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginLeft: 20,
  },
  notificationBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "green",
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Header;
