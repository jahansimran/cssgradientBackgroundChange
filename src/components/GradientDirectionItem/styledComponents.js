import styled from 'styled-components'

export const Button = styled.button`
  background-color: #ffffff;
  color:${props => (props.isActive ? '#334155' : '#1e293b')}
  padding: 10px;
  width: 100px;
  height:40px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  outline: none;
  cursor: pointer;
`
export const ListItem = styled.li`
  margin: 3px;
`
