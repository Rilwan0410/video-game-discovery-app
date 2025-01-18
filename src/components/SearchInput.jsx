import { Input, Group, InputAddon } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { InputGroup } from "../components/ui/input-group";
function SearchInput() {
  return (
    <Group attached>
      <Input
      placeholder="Search Games..."
        borderRadius={30}
        variant="subtle"
        border={'none'}
        fontSize="lg"
        width={{ xl: "5xl" }}
        padding="20px"
        paddingY="25px"
        focusRingColor={"black"}
      />
      <InputAddon borderRadius={30} fontSize='30px' border='none' paddingRight='35px' cursor='pointer'>
        <CiSearch />
      </InputAddon>
    </Group>
  );
}

export default SearchInput;
