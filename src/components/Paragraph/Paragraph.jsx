import styled from "styled-components"

export const Paragraph = ({text}) => {
  return (
    <StyledParagraph>{text}</StyledParagraph>
  )
}

const StyledParagraph = styled.p`
      font-family: Roboto;
      font-weight: 300;
      line-height: 21.09px;
      text-align: left;
`
