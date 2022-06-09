import * as React from "react"
import PropTypes from 'prop-types';
import styled from 'styled-components'

import Layout from "../components/layout"
import About from "../sections/about"
import Contact from "../sections/contact"
import Product from "../sections/product"
import Distributors from "../sections/distributors"

const MainContainer = styled.main`
`

const IndexPage = () => {
  return (
    <Layout>
      <MainContainer className="fillHeight">
        <About />
        <Product />
        <Distributors />
        <Contact />
      </MainContainer>
    </Layout>
  )
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
