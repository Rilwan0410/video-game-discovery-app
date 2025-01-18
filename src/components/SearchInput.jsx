import { Input, Group, InputAddon, Fieldset } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
function SearchInput({ searchby, setSearchby }) {
  const [input, setInput] = useState("");
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        setSearchby(input);
        setInput("");
      }}
    >
      <Group attached>
        <Input
          placeholder="Search Games..."
          borderRadius={30}
          variant="subtle"
          outline='none'
          border={"none"}
          fontSize="lg"
          width={{ xl: "5xl" }}
          padding="20px"
          paddingY="25px"
          focusRingColor={"black"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <InputAddon
          borderRadius={30}
          fontSize="30px"
          border="none"
          paddingRight="35px"
          cursor="pointer"
          onClick={() => {
            setSearchby(input);
            setInput("");
          }}
        >
          <CiSearch />
        </InputAddon>
      </Group>
    </form>
  );
}

export default SearchInput;
