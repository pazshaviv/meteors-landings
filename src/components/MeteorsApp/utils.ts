import { Meteor } from '../../common/interfaces'

export const filterByYear = (year: string, meteors: Meteor[]) => {
  if (year == '') return []

  return meteors.filter(function (meteor) {
    return meteor.year != undefined && meteor.year.includes(year)
  })
}

export const filterByMass = (mass: number, meteors: Meteor[]) => {
  return meteors.filter(function (meteor: Meteor) {
    return meteor.mass && meteor.mass >= mass
  })
}
