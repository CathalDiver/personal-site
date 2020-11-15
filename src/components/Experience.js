import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography } from '@material-ui/core'
import { experiences } from '../profile'
import moment from 'moment'

import { formatDuration, totalDuration } from '../utils/helpers'

import Accordion from './Accordion'
import Image from './Image'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto'
  },
  img: {
    width: 128,
    height: 128,
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  }
}))

export default function Experience() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {experiences.map(function (experience, i) {
          moment.locale('en')
          return (
            <Grid container spacing={10}>
              <Image
                imageDetails={{
                  src: experience.logo,
                  alt: experience.companyName,
                  imgClass: classes.img
                }}
              />
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Typography gutterBottom variant="subtitle1">
                    <h3>
                      <a href={experience.url}>{experience.companyName}</a> -{' '}
                      <span className="jobLocation">{experience.location}</span>
                    </h3>
                    <Typography>
                      <b>
                        Time at {experience.companyName}:{' '}
                        {formatDuration(totalDuration(experience.roles))}
                      </b>
                    </Typography>
                    <Typography>
                      {experience.companyDescription.map((paragraph) => {
                        return <Typography>{paragraph}</Typography>
                      })}
                    </Typography>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    My roles at {experience.companyName} were:
                    {experience.roles.map(function (role, i) {
                      const startDate = moment(role.startDate)
                      const timeEnd = moment(
                        role.currentJob ? new Date() : new Date(role.endDate)
                      )
                      const duration = Number(
                        moment
                          .duration(timeEnd.diff(startDate))
                          .asMonths()
                          .toPrecision(1)
                      )
                      const timeline = `${startDate.format('MMM YYYY')} - ${
                        role.currentJob ? 'Present' : timeEnd.format('MMM YYYY')
                      } ${formatDuration(duration)}`

                      return (
                        <Accordion
                          key={i}
                          role={{
                            ...role,
                            i,
                            timeline
                          }}
                        />
                      )
                    })}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          )
        })}
      </Paper>
    </div>
  )
}
