import styled from 'styled-components'

export const Main = styled.main`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  height: 100px;
  width: auto;
`

export const Paragraph = styled.p`
  color: #e2e8f0;
  font-family: Roboto;
  margin-bottom: 100px;
  font-size: 24px;
`

export const Button = styled.button`
  color: #ffffff;
  font-size: 18px;
  background-color: #06b6d4;
  border: none;
  outline: none;
  padding: 12px 24px;
  border-radius: 10px;
  cursor: pointer;
`
