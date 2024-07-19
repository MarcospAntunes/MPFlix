import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 500px;
  height: 500px;
  background-color: ${({ theme }) => theme.div};
  border-radius: 15px;
  color: ${({ theme }) => theme.text};
  text-align: center;

  p {
    width: 400px;
    font-size: 18px;
  }
`;

export { Section };
