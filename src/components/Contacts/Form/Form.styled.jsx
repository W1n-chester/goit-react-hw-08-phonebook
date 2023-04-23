import styled from '@emotion/styled';

export const ContactForm = styled.form`
  padding-top: 20px;
  margin-bottom: 16px;
  /* width: 300px;
  height: 300px; */
  button {
    display: block;
    font-size: 18px;
    width: 150px;
    margin: 0 auto;
    /* margin-top: 30px; */
    border: 1px, solid, black;
    border-radius: 5px;
    background-color: white;
    /* border-style: none; */

    cursor: pointer;
    :hover {
      background-color:  #e84a5f;;
    }
  }
`;
export const Label = styled.label`
  font-size: 18px;

  display: block;
  width: 300px;
  padding-bottom: 20px;
  margin: 0 auto;
  input {
    width: 300px;
    display: block;
    margin: 0 auto;
    :hover {
      border-color: #e84a5f;
    }
  }
`;
