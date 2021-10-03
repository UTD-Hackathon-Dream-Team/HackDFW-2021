import * as React from "react";
import { Badge, VStack } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

function Header() {
  return (
    <VStack mr={6}>
      <Badge
        colorScheme="danger"
        rounded="999px"
        mb={-4}
        mr={-4}
        zIndex={1}
        variant="solid"
        alignSelf="flex-end"
        _text={{
          fontSize: 8,
        }}
      >
        8
      </Badge>
      <FontAwesome
        mx={{
          base: "auto",
          md: 0,
        }}
        p="2"
        _text={{
          fontSize: 14,
        }}
        name="diamond"
        size={29}
        color="black"
      />
    </VStack>
  );
}

export default Header;
