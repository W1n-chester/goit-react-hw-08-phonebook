import styled from '@emotion/styled';
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  button {
    display: block;
    
    
    margin: 0 auto;

    border: 1px, solid, black;
    border-radius: 5px;
    background-color: white;

    cursor: pointer;
    :hover {
      background-color: #e84a5f;
    }
  }
`;
export const Username = styled.p`
  font-weight: 700;
  span{
    color: #e84a5f;
  }
`;