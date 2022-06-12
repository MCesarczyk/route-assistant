import { useEffect, useState } from "react";
import { getGeocode } from "../../utils/getGeocode";
import Button from "../Button";
import Input from "../Input";
import Dropdown from "./Dropdown";
import { Space } from "../Space/styled";
import { SearchFormWrapper, StyledForm } from "./styled";
import { Location } from "../../common/interfaces";

interface SearchFormProps {
  label: string,
  placeholder?: string,
  result: Location | undefined,
  setResult: Function
}

interface Address {
  title: string
}

const SearchForm = ({ label, placeholder, result, setResult }: SearchFormProps) => {
  const [query, setQuery] = useState<string>('');
  const [visible, setVisible] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (result) {
      setQuery(result.title)
    }
  }, []);

  const handleSearch = async (e: any) => {
    e.preventDefault();

    if (query && typeof (query) === 'string') {
      const data = await getGeocode(encodeURIComponent(query));
      setResults(data);
      setVisible(true);
    }
  };

  const onQueryChange = (value: string) => {
    const newAddress: Address = results.filter(({ id }) => id === value)[0];
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