import styled from "styled-components";

import React from "react";

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;


  &.Paid {
    background-color: ${({ theme }) => theme.colors.statusPaid};
  }

  &.Draft {
    background-color: ${({ theme }) => theme.colors.statusDraft};
  }

  &.Pending {
    background-color: ${({ theme }) => theme.colors.statusPending};
  }
`;

const Wrapper = styled.div`
  height: 40px;
  width: 95px;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 5px;
  justify-content: center;


  &.Pending {
    background-color: ${({ theme }) => theme.colors.statusPendingBg};
  }

  &.Paid {
    background-color: ${({ theme }) => theme.colors.statusPaidBg};
  }

  &.Draft {
    background-color: ${({ theme }) => theme.colors.statusDraftBg};
  }
`;

const StatusName = styled.h5`
  &.Pending {
    color: ${({ theme }) => theme.colors.statusPending};
  }

  &.Paid {
    color: ${({ theme }) => theme.colors.statusPaid};
  }

  &.Draft {
    color: ${({ theme }) => theme.colors.statusDraft};
  }

`

const Status = ({ status }) => {
  return (
    <Wrapper className={status}>
      <StatusName className={status}>{status}</StatusName>
      <Circle className={status} />
    </Wrapper>
  );
};

export default Status;
