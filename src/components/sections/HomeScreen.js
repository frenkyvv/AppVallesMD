import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import SEO from "../layout/seo"
import styled from "styled-components"
import BlueBack from "../../components/backgrounds/WaveBackground"
import Boton2ap from "../botones/Boton2"

export default function Main() {
  return (
    <Wrapper>
      <SEO title="Home" />
      <InnerWrapper>
        <PostBack>
          <BlueBack />
        </PostBack>
        <h1>VallesMD</h1>
        <p>Bienvenido a la App del VallesMD</p>
        <InnerText>_______________________________________</InnerText>

        <ButtonWrapper>
          <Link to="/page-2">
            <Boton2ap text="Dopamina" />
          </Link>
          <Link to="/page-3">
            <Boton2ap text="Dobutamina" />
          </Link>
          <Link to="/page-4">
            <Boton2ap text="Deficit de Agua" />
          </Link>
          <Link to="/page-5">
            <Boton2ap text="Bicarbonato" />
          </Link>
          <Link to="/page-6">
            <Boton2ap text="Sodio Corregido" />
          </Link>
          <Link to="/page-7">
            <Boton2ap text="Alteplase" />
          </Link>
          <Link to="/page-8">
            <Boton2ap text="Osmolaridad" />
          </Link>
          <Link to="/page-9">
            <Boton2ap text="SIR" />
          </Link>
          <Link to="/page-10">
            <Boton2ap text="Hiperton" />
          </Link>
        </ButtonWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: linear-gradient(180deg, #e2f9fb 0%, #cfd6d6 70%);
  text-align: center;
  h1 {
    font-size: 50px;
    font-weight: 600;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
  }
  p {
    font-size: 16px;
    margin-top: -10px;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
  }
  height: 800px;
  z-index: 0;
  position: relative;
`
const InnerText = styled.p`
  font-size: 13px;
  line-height: 130%;
  margin-top: -10px;
  margin-bottom: 10px;
`
const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 170px 170px;
  grid-gap: 15px;
  margin-top: 20px;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-left: 40px;
`
const PostBack = styled.div`
  position: relative;
  top: -60px;
`
const InnerWrapper = styled.div``
