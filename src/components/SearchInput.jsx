import { Input, Group, InputAddon, Fieldset } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import store from "../store/store";
function SearchInput() {
  const [input, setInput] = useState("");
  const { search, setSearch } = store();
  console.log(search);
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        setSearch(input);
        setInput("");
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <Group attached>
        <Input
          placeholder="Search Games..."
          borderRadius={30}
          variant="subtle"
          outline="none"
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
            setSearch(input);
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
