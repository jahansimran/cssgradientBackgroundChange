import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  Heading,
  Paragraph,
  UnOrderList,
  InputContainer,
  ColorInputContainer,
  Input,
  Button,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  clickGradient = direction => {
    this.setState({activeGradientDirection: direction})
  }

  onGenerateBtn = () => {
    const {activeGradientDirection, fromColorInput, toColorInput} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  render() {
    const {
      activeGradientDirection,
      fromColorInput,
      toColorInput,
      gradientValue,
    } = this.state

    return (
      <MainContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <UnOrderList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              list={each}
              clickGradient={this.clickGradient}
              isActive={activeGradientDirection === each.value}
            />
          ))}
        </UnOrderList>
        <Paragraph>Pick the Colors</Paragraph>
        <InputContainer>
          <ColorInputContainer>
            <Paragraph>{fromColorInput}</Paragraph>
            <Input
              type="color"
              value={fromColorInput}
              onChange={this.onChangeFromColor}
            />
          </ColorInputContainer>
          <ColorInputContainer>
            <Paragraph>{toColorInput}</Paragraph>
            <Input
              type="color"
              value={toColorInput}
              onChange={this.onChangeToColor}
            />
          </ColorInputContainer>
        </InputContainer>
        <Button type="button" onClick={this.onGenerateBtn}>
          Generate
        </Button>
      </MainContainer>
    )
  }
}

export default GradientGenerator
