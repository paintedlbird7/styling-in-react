import styled from 'styled-components';

const Button = ({ buttonText }) => {
  return <StyledButton>{buttonText}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  background-color: #86ba8a;
  border-radius: 8px;
  color: #3d3d3d;
  padding: 15px 50px;
  font-size: 24pt;
  width: 300px;
`;
