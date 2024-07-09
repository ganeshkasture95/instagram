import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor:"black", tabBarShowLabel:false}}>
      <Tabs.Screen name="index"
        options={{
          title: 'Home',
          tabBarIcon:({color})=><FontAwesome name="home" size={26} color={color} />
        }}
      />

      <Tabs.Screen name="new"
        options={{
          title: 'New',
          tabBarIcon:({color})=><FontAwesome name="plus" size={26} color={color} />
        }}
      />

      <Tabs.Screen name="profile"
        options={{
          title: 'Profile',
          tabBarIcon:({color})=><FontAwesome name="user" size={26} color={color} />
        }}
      />

    </Tabs>
  );
}
