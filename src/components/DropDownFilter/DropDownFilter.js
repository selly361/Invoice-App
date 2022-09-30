import React, { useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { ArrowDownIcon, CheckIcon } from "../../assets/icons";
import iconCheckSvg from '../../assets/icons/icon-check.svg'


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

const Filter = styled.h5`
  color: ${({theme}) => theme.colors.textPrimary};
  display: flex;
  gap: 1rem;
  height: max-content;
`

const CheckBox = styled.div`
  background-color: ${({theme}) => theme.colors.bgFilter}; 

  &.active {
    background-image: url(${iconCheckSvg});
  }
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
            <Filter onClick={() => setFilter(prev => ({ ...prev, pending: !filter.paid }))}>Paid <CheckBox className={filter?.paid ? "active" : ''} /></Filter>
          </DropDownSelector>
          <DropDownSelector onClick={() => setFilter(prev => ({ ...prev, pending: !filter?.pending }))}>
            <Filter>Pending <CheckBox className={filter?.pending ? "active" : ''} /></Filter>
          </DropDownSelector>
          <DropDownSelector onClick={() => setFilter(prev => ({ ...prev, draft: !filter?.draft }))}>
            <Filter>Draft <CheckBox className={filter?.draft ? "active" : ''} /></Filter>
          </DropDownSelector>
        </DropDown>
      )}
    </Wrap>
  );
};

export default DropDownFilter;
