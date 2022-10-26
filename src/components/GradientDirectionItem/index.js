import {ListItem, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {list, clickGradient, isActive} = props
  const {displayText, value} = list

  const onClickButton = () => {
    clickGradient(value)
  }

  return (
    <>
      <ListItem>
        <Button type="button" isActive={isActive} onClick={onClickButton}>
          {displayText}
        </Button>
      </ListItem>
    </>
  )
}

export default GradientDirectionItem
