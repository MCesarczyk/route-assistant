import { useState } from "react";
import { getGeocode } from "../../utils/getGeocode";
import Button from "../Button";
import Input from "../Input";
import Dropdown from "./Dropdown";
import { Space } from "../Space/styled";
import { SearchFormWrapper, StyledForm } from "./styled";

interface SearchFormProps {
  label: string,
  placeholder?: string,
  setResult: Function
}

interface address {
  title: string
}

const SearchForm = ({ label, placeholder, setResult }: SearchFormProps) => {
  const [query, setQuery] = useState('');
  const [visible, setVisible] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = async (e: any) => {
    e.preventDefault();

    if (query) {
      const data = await getGeocode(encodeURIComponent(query));
      setResults(data);
      setVisible(true);
    }
  };

  const onQueryChange = (value: string) => {
    const newAddress: address = results.filter(({ id }) => id === value)[0];
    setQuery(newAddress.title);
    setResult(newAddress);
  };

  return (
    <SearchFormWrapper>
      <Space vertical>
        {label}
        <Space>
          <StyledForm onSubmit={handleSearch}>
            <Input
              value={query}
              setValue={setQuery}
              placeholder={placeholder}
            />
            <Dropdown
              visible={visible}
              setVisible={setVisible}
              items={results}
              onItemChange={(value: string) => onQueryChange(value)}
            />
          </StyledForm>
          <Button
            title={"search"}
            onClick={handleSearch}
          />
        </Space>
      </Space>
    </SearchFormWrapper>
  )
};

export default SearchForm;