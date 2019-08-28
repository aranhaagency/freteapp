import React from "react"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import Layout from "../layouts/index.js"

export default ({ location }) => {
  return (
    <Layout location={location}>
      <h1>Somos a Frete App.</h1>
      <p>
       Mudamos o conceito de entrega no Brasil. 
      </p>
      <div class="StaticLoggedOutHomePage-delightItem">
        <span class="Icon Icon--discover"></span>
        <div>
          <div class="StaticLoggedOutHomePage-delightItemTitle">Conectamos</div>
          <div class="StaticLoggedOutHomePage-delightItemText">27 mil areas que não fazem parte da cobertura de entrega tradicional brasileira
.</div>
        </div>
      </div>
      <div class="StaticLoggedOutHomePage-delightItem">
        <span class="Icon Icon--discover"></span>
        <div>
          <div class="StaticLoggedOutHomePage-delightItemTitle">Oferecemos</div>
          <div class="StaticLoggedOutHomePage-delightItemText">O Serviço de entrega mais completo e humanizado do mercado.</div>
        </div>
      </div>
      <div class="StaticLoggedOutHomePage-delightItem">
        <span class="Icon Icon--discover"></span>
        <div>
          <div class="StaticLoggedOutHomePage-delightItemTitle">Faça Parte</div>
          <div class="StaticLoggedOutHomePage-delightItemText">freteapp@protonmail.com</div>
        </div>
      </div>
    </Layout>
  )
}
