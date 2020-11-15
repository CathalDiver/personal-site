import moment from 'moment'

export function formatDuration(duration) {
  const years = parseInt(duration / 12)
  const months = duration > 12 ? duration % 12 : duration
  return (
    (years > 0 ? years + ' year' + (years > 1 ? 's' : '') + ' and ' : '') +
    (months > 0 ? months + ' month' + (months > 1 ? 's' : '') : '')
  )
}

export function totalDuration(roles) {
  return roles.reduce(function (cnt, role) {
    const startDate = moment(role.startDate)
    const timeEnd = moment(
      role.currentJob ? new Date() : new Date(role.endDate)
    )
    const duration = moment.duration(timeEnd.diff(startDate))
    return Number(cnt) + Number(duration.asMonths().toPrecision(1))
  }, 0)
}
