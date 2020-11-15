import React from 'react'
import { Container, Row, Col, Media } from 'reactstrap'
import { studies } from '../profile.json'

export default function Education({ imageDetails }) {
  return (
    <Container>
      <Row>
        <Col>
          {studies.map(function (study, i) {
            return (
              <Media key={i}>
                <Media left top href={study.url}>
                  <Media object src={study.logo} alt={study.institute} />
                </Media>
                <Media body>
                  <Media heading>
                    <a href={study.url}>{study.institute}</a>
                  </Media>
                  {[
                    {
                      key: 'Title',
                      value: study.title
                    },
                    {
                      key: 'Graduation Year',
                      value: study.graduationYear
                    },
                    {
                      key: 'Duration',
                      value: study.durationInYears + ' year(s)'
                    }
                  ].map(function (object, i) {
                    return (
                      <div>
                        <Row>
                          <Col className="formLabel">{object.key}:</Col>
                        </Row>
                        <Row>
                          <Col>{object.value}</Col>
                        </Row>
                      </div>
                    )
                  })}
                </Media>
              </Media>
            )
          })}
        </Col>
      </Row>
    </Container>
  )
}
