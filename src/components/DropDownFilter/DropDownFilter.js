import { ArrowDownIcon, CheckIcon } from "../../assets/icons";
import React, { useState } from "react";
import styled, { ThemeContext } from "styled-components";

const Wrap = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
`;

const DropDown = styled.div`
  position: absolute;
  width: 170px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.bgFilterBox};
  transform: translate(-25%);
  bottom: -150px;
  display: flex;
  flex-flow: column;
  padding: 1rem;
  justify-content: space-around;
  border-radius: 9px;
  box-shadow: ${({theme}) => theme.colors.bgFilterBoxShadow} 1px 1px 5px;
`;

const DropDownSelector = styled.h5``;

const FilterTag = styled.h5`
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  display: flex;
  gap: .4rem;

  
  svg {
    transition: 1s transform ease;
  }

  &.active {
    svg {
      transform: rotate(180deg);
    }
  }
`;

const Filter = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  height: max-content;
  justify-content: space-between;
`;

const CheckBox = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${({ theme }) => theme.colors.bgFilter};
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: 3px;

  &.active {
    background-color: ${({ theme }) => theme.colors.purple};
  }
`;

const Hide = styled.span`


  @media (max-width: 700px){
    display: none;
  }
`

const DropDownFilter = ({ setFilter, filter }) => {
  const [open, setOpen] = useState(false);

  const filters = [
    { status: "Paid" },
    { status: "Pending" },
    { status: "Draft" },
  ];
  return (
    <Wrap>
      <FilterTag
        className={open ? "active" : ""}
        onClick={() => setOpen((e) => !e)}
      >
        Filter <Hide>by status</Hide> <ArrowDownIcon />
      </FilterTag>
      {open && (
        <DropDown>
          {filters.map((f) => (
            <DropDownSelector>
              <Filter
                onClick={() =>
                  setFilter((prev) => ({
                    ...prev,
                    [f.status.toLowerCase()]: !filter[f.status.toLowerCase()],
                  }))
                }
              >
                {f.status}
                <CheckBox
                  className={filter[f.status.toLowerCase()] && "active"}
                >
                  {filter[f.status.toLowerCase()] && <CheckIcon />}
                </CheckBox>
              </Filter>
            </DropDownSelector>
          ))}
        </DropDown>
      )}
    </Wrap>
  );
};

export default DropDownFilter;

// <DropDownSelector>
// <Filter onClick={() => setFilter(prev => ({ ...prev, paid: !filter.paid }))}>Paid <CheckBox className={filter.paid && "active"}>{filter.paid && <CheckIcon />}</CheckBox></Filter>
// </DropDownSelector>
// <DropDownSelector onClick={() => setFilter(prev => ({ ...prev, pending: !filter.pending }))}>
// <Filter>Pending <CheckBox>{filter.pending && <CheckIcon />}</CheckBox></Filter>
// </DropDownSelector>
// <DropDownSelector onClick={() => setFilter(prev => ({ ...prev, draft: !filter.draft }))}>
// <Filter>Draft <CheckBox>{filter.draft && <CheckIcon />}</CheckBox></Filter>
// </DropDownSelector>
