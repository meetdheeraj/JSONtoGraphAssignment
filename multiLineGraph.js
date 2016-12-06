var    margin = {top: 30, right: 40, bottom: 30, left: 50},
    width = 600 - margin.left - margin.right,
    height = 270 - margin.top - margin.bottom;

//var    parseDate = d3.time.format("%d-%b-%y").parse;

var x = d3.scale.ordinal()
   .rangeRoundBands([0,width], 0.2,0.2);
var    y = d3.scale.linear().range([height, 0]);

var    xAxis = d3.svg.axis().scale(x)
    .orient("bottom");

var    yAxis = d3.svg.axis().scale(y)
    .orient("left");

var    valueline = d3.svg.line()
    .x(function(d) { return x(d.region); })
    .y(function(d) { return y(d.fat); });

var    valueline2 = d3.svg.line()
    .x(function(d) { return x(d.region); })
    .y(function(d) { return y(d.protein); });

 var    valueline3 = d3.svg.line()
     .x(function(d) { return x(d.region); })
     .y(function(d) { return y(d.carbo); });

var    svg = d3.select(".importData")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.json("Secon_File.JSON", function(error, data) {
    data.forEach(function(d) {
        d.region = d.region;
        d.fat = +d.fat;
        d.protein = +d.protein;
    });

 x.domain(data.map(function(d){
     return d.region;
 }));
    // Scale the range of the data
    //x.domain(d3.extent(data, function(d) { return d.region; }));
    y.domain([0, d3.max(data, function(d) { return Math.max(d.fat, d.protein,d.carbo); })]);

    svg.append("path")        // Add the valueline path.
        .attr("class", "line")
   .style("stroke", "red")
        .attr("d", valueline(data));

    svg.append("path")        // Add the valueline2 path.
        .attr("class", "line")
        .style("stroke", "green")
        .attr("d", valueline2(data));

   svg.append("path")        // Add the valueline2 path.
     .attr("class", "line")
     .style("stroke", "blue")
     .attr("d", valueline3(data));



    svg.append("g")            // Add the X Axis
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")            // Add the Y Axis
        .attr("class", "y axis")
        .call(yAxis);

    svg.append("text")
        .attr("transform", "translate(" + (width+3) + "," + y(data[0].fat) + ")")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", "red")
        .text("fat");

    svg.append("text")
        .attr("transform", "translate(" + (width+3) + "," + y(data[0].protein) + ")")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", "green")
        .text("proteins");

   svg.append("text")
     .attr("transform", "translate(" + (width+3) + "," + y(data[0].carbo) + ")")
     .attr("dy", ".35em")
     .attr("text-anchor", "start")
     .style("fill", "blue")
     .text("carbo");



});
