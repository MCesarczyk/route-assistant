import { DropdownList, DropdownWrapper, ListItem } from "./styled";

interface DropdownProps {
  visible: boolean,
  onItemChange: Function,
  setVisible: Function,
  items: {
    id: string,
    title: string
  }[]
}

const Dropdown = ({ visible, onItemChange, setVisible, items }: DropdownProps) => {
  const onItemClick = (id: string) => {
    onItemChange(id);
    setVisible(false);
  };

  return (
    <DropdownWrapper>
      <DropdownList
        data-testid="dropdown"
        visible={visible ? 'visible' : ''}
      >
        {items.map(item => (
          <ListItem key={item.id} onClick={() => onItemClick(item.id)}>
            {item.title}
          </ListItem>
        ))}
      </DropdownList>
    </DropdownWrapper>
  )
};

export default Dropdown;