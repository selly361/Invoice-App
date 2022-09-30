import React, { useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { ArrowDownIcon } from "../../assets/icons";

const Wrap = styled.div`
  position: relative;
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  width: 200px;
  height: 150px;
 background-color: ${({theme}) => theme.colors.bgFilterBox};
 transform: translate(-25%);
 bottom: -150px;
`;

const DropDownSelector = styled.h5``;

const FilterTag = styled.h5`

 color: ${({theme}) => theme.colors.textPrimary};

  svg {
    transition: 1s transform ease;
  }

  &.active {
    svg {
      transform: rotate(180deg);
    }
  }
`;

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
          <DropDownSelector></DropDownSelector>
          <DropDownSelector></DropDownSelector>
          <DropDownSelector></DropDownSelector>
        </DropDown>
      )}
    </Wrap>
  );
};

export default DropDownFilter;
