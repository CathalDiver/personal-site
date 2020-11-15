import React from 'react'
import { Container } from 'reactstrap'
import { Email, LinkedIn, GitHub } from '@material-ui/icons'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <hr />
        <Container>
          <a href="https://www.linkedin.com/in/cathal-diver-775bb9a5/">
            <LinkedIn />
          </a>
          <a href="mailto: cathal@cathaldiver.com">
            <Email />
          </a>
          <a href="https://github.com/CathalDiver">
            <GitHub />
          </a>
        </Container>
      </footer>
    )
  }
}

export default Footer
