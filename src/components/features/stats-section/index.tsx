import * as Styled from './statsSection.style'
import useCountUp from '../../../hooks/useCountUp'

export default function StatsSection() {
  const travelers = useCountUp(700)
  const reviews = useCountUp(100)
  const plans = useCountUp(470)
  return (
    <Styled.Section>
      <Styled.SectionInner>
        <Styled.LogoDiv>
          <span>2021년 12월 기준</span>
        </Styled.LogoDiv>
        <div>
          <Styled.StatsDiv>
            <p>
              <strong>{travelers}만 명</strong>의 여행자
            </p>
            <p>
              <strong>{reviews}만 개</strong>의 여행 리뷰
            </p>
            <p>
              <strong>{plans}만 개</strong>의 여행 일정
            </p>
          </Styled.StatsDiv>
          <Styled.AwardsDiv>
            <div className="googlePlayStore awardsDiv">
              <span>
                2018 구글 플레이스토어
                <br /> 올해의 앱 최우수상 수상
              </span>
            </div>
            <div className="badgeApple awardsDiv">
              <span>
                2018 애플 앱스토어
                <br /> 오늘의 여행앱 선정
              </span>
            </div>
          </Styled.AwardsDiv>
        </div>
      </Styled.SectionInner>
    </Styled.Section>
  )
}
