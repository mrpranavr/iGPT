import { View, Text } from "react-native";
import React from "react";
import * as DropDownMenu from "zeego/dropdown-menu";
import Colors from "@/constants/Colors";

export type HeaderDropDownProps = {
  title: string;
  selected?: string;
  onSelect: (key: string) => void;
  items: Array<{ key: string; title: string; icon: string }>;
};

const HeaderDropDown = ({
  title,
  selected,
  onSelect,
  items,
}: HeaderDropDownProps) => {
  return (
    <DropDownMenu.Root>
      <DropDownMenu.Trigger>
        <View className="flex-row items-center">
          <Text className="font-[500] text-base">{title}</Text>
          {selected && (
            <Text
              className="ml-2 text-base font-[500]"
              style={{ color: Colors.greyLight }}
            >
              {selected}
            </Text>
          )}
        </View>
      </DropDownMenu.Trigger>

      <DropDownMenu.Content>
        {items.map((item, index) => (
          <DropDownMenu.Item key={item.key} onSelect={() => onSelect(item.key)}>
            <DropDownMenu.ItemTitle>{item.title}</DropDownMenu.ItemTitle>
            <DropDownMenu.ItemIcon
              ios={{
                name: item.icon,
                pointSize: 18,
              }}
            />
          </DropDownMenu.Item>
        ))}
      </DropDownMenu.Content>
    </DropDownMenu.Root>
  );
};

export default HeaderDropDown;
