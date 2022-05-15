import { pages } from "../../assets/pages";
import { NavButton } from "./styled";

interface navProps {
  page: number,
  setPage: Function
}

const Navigation = ({ page, setPage }: navProps) => {
  const decreasePage = () => {
    setPage(page > 1 ? page - 1 : 1);
  };

  const increasePage = () => {
    setPage(page < pages.length ? page + 1 : pages.length);
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
        disabled={page === pages.length}
        onClick={increasePage}
      >
        {"Next >>"}
      </NavButton>
    </>
  )
};

export default Navigation;