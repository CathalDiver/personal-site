import React from 'react'
import { Jumbotron, Container } from 'reactstrap'
import {
  Tabs,
  Tab,
  Typography,
  Box,
  AppBar,
  Grid,
  ButtonBase
} from '@material-ui/core'
import profile from '../profile.json'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import cathalPic from '../images/cathalPic.jpg'

import Experience from './Experience'
import Education from './Education'
import ComingSoon from './ComingSoon'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={5}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  topContainer: {
    backgroundColor: '#64b5f6'
  },
  image: {
    height: '20vmin',
    marginRight: '10px',
    borderRadius: '150px'
  }
}))

export default function Profile() {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  return (
    <div className={classes.root}>
      <Jumbotron className={classes.topContainer}>
        <Container>
          <Grid container spacing={10}>
            <Grid item>
              <ButtonBase>
                <img
                  src={cathalPic}
                  className={classes.image}
                  alt="Cathal Diver"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <h1 className="display-3">{profile.title}</h1>
              <p className="lead">{profile.summary}</p>
            </Grid>
          </Grid>
        </Container>
      </Jumbotron>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          centered
        >
          <Tab label="Professional" {...a11yProps(0)} />
          <Tab label="Educational" {...a11yProps(1)} />
          <Tab label="Skills" {...a11yProps(2)} />
          <Tab label="About Me" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Experience />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ComingSoon />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <ComingSoon />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <ComingSoon />
        </TabPanel>
      </SwipeableViews>
    </div>
  )
}
