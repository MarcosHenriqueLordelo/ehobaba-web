import styled from "styled-components";

interface ContainerProps {
  onDelete?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.section};
  border-radius: 12px;
  height: 90px;
  align-self: center;
  margin-bottom: 10px;
  overflow: visible;
  ${({ onDelete }) => onDelete && "margin-top: 10px;"}
`;

export const Content = styled.div`
  height: 100%;
  flex-direction: row;
  padding: 8px 16px;
  position: relative;
  overflow: visible;
`;

export const LeftContainer = styled.div`
  flex: 1;
  justify-content: space-between;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.font};
  font-size: 20px;
  max-height: calc(1.2em * 1);
  font-weight: bold;
  text-transform: capitalize;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  width: 100%;
  overflow: hidden;
`;

export const PositionLabel = styled.p`
  color: ${({ theme }) => theme.colors.action};
  font-size: 40px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const DeleteBtnContainer = styled.div`
  position: absolute;
  right: -10px;
  top: -10px;
  background-color: ${({ theme }) => theme.colors.error};
  border-radius: 50px;
  padding: 6px;
`;
