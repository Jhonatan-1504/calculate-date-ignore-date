import { useIgnoreList } from "@/store/ignore/list";
import { Stack, SearchBox } from "@fluentui/react";

function SearchIgnore() {
  const {setSearch} = useIgnoreList()

  return (
    <Stack styles={{ root: { marginTop: 10 } }}>
      <SearchBox
        underlined
        placeholder="Buscar"
        onChange={(_,newValue)=>setSearch(newValue ?? "")}
      />
    </Stack>
  );
}

export default SearchIgnore;
