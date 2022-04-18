const MARGIN = { LEFT:100, RIGHT:10, TOP:10, BOTTOM:130}
const WIDTH = 600 - MARGIN.LEFT - MARGIN.RIGHT
const HEIGHT = 400 - MARGIN.TOP - MARGIN.BOTTOM

const svg = d3.select("#chart-area").append("svg")
                .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
                .attr("height",HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)

//group for rects
const g = svg.append("g")
            .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)


//labels X
g.append("text")
    .attr("class","x axis-label")
    .attr("x", WIDTH/2)
    .attr("y", HEIGHT + 110)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("The World's tallest buildings")

//labels Y
g.append("text")
    .attr("class","y axis-label")
    .attr("x", -(HEIGHT/2))
    .attr("y", -60)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("Height (m)")

d3.json("data/buildings.json").then(data => {
    data.forEach(d => {
        d.height = Number(d.height)
    })

//Band Scale(starting x, width)
const x = d3.scaleBand()
            .domain(data.map(d=>d.name))
            .range([0, WIDTH])
            .paddingInner(0.3)
            .paddingOuter(0.2)

//test band Scale
console.log(x("Lotte World Tower"))

//Linear Scale
const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.height)])
            .range([HEIGHT,0])

//scales 
const xAxisCall = d3.axisBottom(x)
g.append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0, ${HEIGHT})`)
    .call(xAxisCall)
    .selectAll("text")
        .attr("y", "10")
        .attr("x", "-5")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-40)")

const yAxisCall = d3.axisLeft(y)
    .ticks(3)
    .tickFormat(d=>d+"m")
g.append("g")
    .attr("calls", "y axis")
    .call(yAxisCall)


//cirtual rects created in a temp area of D3
const rects = g.selectAll("rect")
    .data(data)

//Enter selection(enter the rects into the DOM)
rects.enter().append("rect")
            .attr("y",d => y(d.height))
            .attr("x", (d,i) => x(d.name))
            .attr("width", x.bandwidth)
            .attr("height", d => HEIGHT - y(d.height))
            .attr("fill", "blue")

});