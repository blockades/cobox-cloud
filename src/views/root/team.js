const nest = require('depnest')
const { h } = require('mutant')

const Container = require('../../components/Container')

exports.gives = nest('views.root.team')

exports.create = (api) => {
  return nest('views.root.team', rootTeam)

  function rootTeam (request, children = []) {
    return Container({ classList: ['root', 'team'] }, [
    ])
  }
}
