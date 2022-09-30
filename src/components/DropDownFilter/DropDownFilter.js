import React, { useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { ArrowDownIcon, CheckIcon } from "../../assets/icons";


const Wrap = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
`;

const DropDown = styled.div`
  position: absolute;
  width: 200px;
  height: 150px;
 background-color: ${({ theme }) => theme.colors.bgFilterBox};
 transform: translate(-25%);
 bottom: -150px;
 display: flex;
 flex-flow: column;
 padding: 1rem;
 justify-content: start;
 align-content: space-around;
`;

const DropDownSelector = styled.h5``;

const FilterTag = styled.h5`

 color: ${({ theme }) => theme.colors.textPrimary};

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
  color: ${({theme}) => theme.colors.textPrimary};
  display: flex;
  gap: 1rem;
  height: max-content;
`

const CheckBox = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${({theme}) => theme.colors.bgFilter}; 

  
`

const DropDownFilter = ({ setFilter, filter }) => {
  const [open, setOpen] = useState(false);
  return (
    <Wrap>
      <FilterTag
        className={open ? "active" : ""}
        onClick={() => setOpen((e) => !e)}
      >
        Filter by status <ArrowDownIcon />
      </FilterTag>
      {open && (
        <DropDown>
          <DropDownSelector>
            <Filter onClick={() => setFilter(prev => ({ ...prev, paid: !filter.paid }))}>Paid <CheckBox>{filter.paid && <CheckIcon />}</CheckBox></Filter>
          </DropDownSelector>
          <DropDownSelector onClick={() => setFilter(prev => ({ ...prev, pending: !filter.pending }))}>
            <Filter>Pending <CheckBox>{filter.pending && <CheckIcon />}</CheckBox></Filter>
          </DropDownSelector>
          <DropDownSelector onClick={() => setFilter(prev => ({ ...prev, draft: !filter.draft }))}>
            <Filter>Draft <CheckBox>{filter.draft && <CheckIcon />}</CheckBox></Filter>
          </DropDownSelector>
        </DropDown>
      )}
    </Wrap>
  );
};

export default DropDownFilter;
