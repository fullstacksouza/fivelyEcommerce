import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import { Container } from './styles';

export default function Profile(props) {
  const options = [
    {
      action: "MyOrders",
      title: "My orders",
      description: "Already have 12 orders"
    },
    {
      action: "MyOrders",
      title: "Shipping adresses",
      description: "3 addresses"
    },
    {
      action: "PaymentMethods",
      title: "Payment methods",
      description: "Visa **34"
    },
    {
      action: "MyOrders",
      title: "Promocodes",
      description: "You have special promocodes"
    },
    {
      action: "MyOrders",
      title: "My reviews",
      description: "Reviews for 4 items"
    },
    {
      action: "Settings",
      title: "Settings",
      description: "Notifications, password"
    }
  ];
  return (
    <View style={{ flex: 1, backgroundColor: "#1E1F28" }}>
      <View
        style={{
          paddingHorizontal: 17,
          flexDirection: "row",
          marginTop: 27
        }}
      >
        <Image source={require("../../../assets/img/ava.png")} />
        <View
          style={{
            marginLeft: 17
          }}
        >
          <Text style={{ color: "#F7F7F7", fontSize: 18 }}>Matilda Brown</Text>
          <Text style={{ color: "#ABB4BD" }}>matildabrown@mail.com</Text>
        </View>
      </View>

      <FlatList
        style={{ marginBottom: "35.5%" }}
        data={options}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate(item.action)}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 15,
              paddingVertical: 18,
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderColor: "#000000",
              alignItems: "center"
            }}
          >
            <View>
              <Text style={{ color: "#F7F7F7", fontSize: 16 }}>
                {item.title}
              </Text>
              <Text style={{ fontSize: 11, color: "#ABB4BD", marginTop: 8 }}>
                {item.description}
              </Text>
            </View>
            <Ionicons name="ios-arrow-forward" color="#F7F7F7" size={25} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
