import { NavButton } from "./styled";

interface navProps {
  page: number,
  setPage: Function,
  total: number
}

const Navigation = ({ page, setPage, total }: navProps) => {
  const decreasePage = () => {
    setPage(page > 1 ? page - 1 : 1);
  };

  const increasePage = () => {
    setPage(page < total ? page + 1 : total);
  };

  return (
    <>
      <NavButton
        disabled={page === 1}
        onClick={decreasePage}
      >
        {"<< Back"}
      </NavButton>
      <NavButton
        disabled={page === total}
        onClick={increasePage}
      >
        {"Next >>"}
      </NavButton>
    </>
  )
};

export default Navigation;