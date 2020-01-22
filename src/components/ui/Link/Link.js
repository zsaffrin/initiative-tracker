import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(RouterLink)`
  color: inherit;
  text-decoration: inherit;
`;

const Link = (props) => {
  return (
    <StyledLink {...props} />
  )
}

export default Link
