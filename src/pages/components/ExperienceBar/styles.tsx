import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${props => props.theme.colors.grayLine};
    margin: 0 1.5rem;
    position: relative;
  }
`
interface ProgressionBarProps {
  progression: number
}
export const ProgressionBar = styled.div<ProgressionBarProps>`
  height: 4px;
  width: ${props => props.progression}%;
  border-radius: 5px;
  background: ${props => props.theme.colors.green};

  span {
    left: ${props => props.progression}%;
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
  }
`
