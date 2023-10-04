import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { ChevronDownIcon, SearchIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline"

const Header = () => {
  return (
    <View>
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full" />

        <View className=" flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      <View className="flex-row items-center space-x-2 mx-4 px-3">
        <View className="rounded-sm flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color='blue' size={25} />
          <TextInput placeholder="Restaurants and cuisines"
            keyboadType="default" />
        </View>
        <AdjustmentsVerticalIcon size={25} color="#00CCBB" />
      </View>
    </View>
  );
};

export default Header;
