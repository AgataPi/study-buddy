import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const StyledAverage = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  background: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 1) return theme.colors.error;
    return theme.colors.grey;
  }};
`;

export const StyledInfo = styled.div`
  padding: 25px 20px;

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  p:first-child {
    display: flex;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
    align-items: center;
  }
  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
