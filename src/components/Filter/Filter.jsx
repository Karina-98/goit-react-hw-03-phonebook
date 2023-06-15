import { Conteiner, Input } from "./Filter.styled";

export const Filter = ({ value, onChange }) => {
  return (
    <Conteiner>
      <p>Find contacts by name</p>
      <Input
        type="text"
        name="filter"
        placeholder="Enter name"
        value={value}
        onChange={onChange}
      />
    </Conteiner>
  );
};
