import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-size: cover;
  background-image: linear-gradient(${props => props.gradientValue});
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  margin-top: 150px;
`
export const Paragraph = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
`
export const UnOrderList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
`
export const ColorInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Input = styled.input`
  border-radius: 2px;
  background-color: transparent;
  width: 100px;
  height: 50px;
  cursor: pointer;
  outline: none;
  border: none;
`
export const Label = styled.label`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`
export const Button = styled.button`
  background-color: #00c9b7;
  color: #000000;
  padding: 12px;
  width: 150px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  opacity: 0.5;
  margin-top: 40px;
`
