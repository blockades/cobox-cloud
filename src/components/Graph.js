const { h } = require('mutant')
const d3 = require('d3')

module.exports = function Graph (props = {}, children = []) {
  if (Array.isArray(props)) children = props
  const container = h('div.graph', children)

  var width = 2200,
    height = 610;

  var fill = d3.scale.category20();

  var force = d3.layout.force()
    .size([width, height])
    .nodes([{}])
    .linkDistance(30)
    .charge(-60)
    .on("tick", tick)

  var svg = d3.select(container).append("svg")
    .attr("viewBox", `350 0 ${width} ${height}`)
    .attr("width", width)
    .attr("height", "100%")
    .on("mousedown", mousedown)

  svg.append("rect")
    .attr("width", width)
    .attr("height", height);

  var nodes = force.nodes(),
    links = force.links(),
    node = svg.selectAll(".node"),
    link = svg.selectAll(".link");

  restart();

  return container

  function mousedown() {
    var point = d3.mouse(this),
      node = {x: point[0], y: point[1]},
      n = nodes.push(node)

    nodes.forEach(function(target) {
      var x = target.x - node.x,
        y = target.y - node.y

      if (Math.sqrt(x * x + y * y) < 30) {
        links.push({source: node, target: target})
      }
    })

    restart()
  }

  function tick() {
    link.attr("x1", function(d) { return d.source.x;  })
      .attr("y1", function(d) { return d.source.y;  })
      .attr("x2", function(d) { return d.target.x;  })
      .attr("y2", function(d) { return d.target.y;  })

    node.attr("cx", function(d) { return d.x;  })
      .attr("cy", function(d) { return d.y;  })
  }

  function restart() {
    link = link.data(links)

    link.enter().insert("line", ".node")
      .attr("class", "link")

    node = node.data(nodes)

    node.enter().insert("circle", ".cursor")
      .attr("class", "node")
      .attr("r", 5)
      .call(force.drag)

    force.start()
  }
}
