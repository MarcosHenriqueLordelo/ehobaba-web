import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SectionLabel = styled.span`
  line-height: 28px;
  font-size: 22px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.font};
  text-transform: capitalize;
  margin-left: 16px;
`;

export const HorizontalScroll = styled.div`
  flex-direction: row;
  overflow-x: scroll;
  padding-left: 16px;
  scrollbar-width: none;
`;
