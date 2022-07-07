import styled, { keyframes } from 'styled-components'
import TripleLogo from '../../../assets/images/tripleLogo.png'
import BadgeApple from '../../../assets/images/badgeApple.png'
import PlayStore from '../../../assets/images/playStore.png'

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 550px;
`
export const SectionInner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  height: 400px;
`
export const PopUpAnimation = keyframes`
from {
  transform: translateY(20px);
  opacity: 0;
}
to {
  transform: translateY(0);
  opacity: 1;
}
`
export const AnimationDiv = styled.div`
  width: 400px;
  animation: ${PopUpAnimation} 700ms ease-in-out;
`
export const LogoDiv = styled(AnimationDiv)`
  position: relative;
  height: 400px;
  background-image: url(${TripleLogo});
  background-size: 400px 338px;
  background-repeat: no-repeat;
  background-position: center;

  span {
    position: absolute;
    left: 140px;
    bottom: 70px;
    font-family: sans-serif;
    font-size: 15px;
    color: var(--color-gray700);
  }
`
export const StatsDiv = styled(AnimationDiv)`
  animation-delay: 100ms;
  p {
    font-size: 36px;
    letter-spacing: -1px;
    margin-bottom: 20px;
    strong {
      font-weight: bold;
    }
  }
`
export const AwardsDiv = styled(AnimationDiv)`
  display: flex;
  height: 54px;
  margin-top: 50px;
  animation-delay: 200ms;
  white-space: nowrap;
`
interface AwardDivProps {
  playStore?: boolean
}
export const AwardDiv = styled.div<AwardDivProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 39px;
  padding-left: 62px;
  background-size: 54px 54px;
  background-repeat: no-repeat;
  background-image: url(${(props) =>
    props.playStore ? PlayStore : BadgeApple});

  span {
    font-family: sans-serif;
    font-size: 14px;
    font-weight: bold;
    line-height: 22px;
    color: var(--color-gray800);
  }
`
