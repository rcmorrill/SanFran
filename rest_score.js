
var margin = {t:0,r:0,b:0,l:0};
var width = $('#plot').width()/3,
    height_box = 200


scaleY = d3.scale.linear().range([0,height_box]).domain([0,900]),
scaleX = d3.scale.linear().domain([40,100]).range([width*.05,width*.95]);
//prescale = d3.scale.linear().domain([dataMin,dataMax]).range([0,1])

// scaleYNorm = d3.scale.linear().domain([0,1]).range([0,height_box]);




function draw(rows){






var axisX = d3.svg.axis()
      .orient('bottom')
      .scale(scaleX)
      .ticks(20)

      //.tickFormat(formatxAxis)


//console.log(byZip);

var plot = d3.select('#plot').selectAll('svg')
    .data(byZip)
    .enter()
    .append('svg')
    .attr('class','smallPlot')





plot.append('text')
.text(function(d){return d.zip})


    plot.each(function(d,i){


    var bins = d3.range(0,100,2),
        histogramValues = d3.layout.histogram()
        .value(function(d){return d.score;})
        .bins(bins)(d.values)



      // var dataMax = d3.max(d3.values(histogramValues))
      // var dataMin = d3.min(d3.values(histogramValues))

      // console.log(dataMax)
      //   prescale = d3.scale.linear().domain([dataMin,dataMax]).range([0,1]);

    var area = d3.svg.area()
      .x(function(d){return scaleX(d.x+ d.dx*2);})
      .y0(function(d){return (height_box*.9) })
      .y1(function(d){return (height_box*.9) - scaleY(d.y)})   
      .interpolate('basis');

    var line = d3.svg.line()
      .x(function(d){return scaleX(d.x+ d.dx*2);})
      .y(function(d){return (height_box*.9) - scaleY(d.y)})  
      .interpolate('basis');

    d3.select(this).selectAll('path.area')
        .data([d])
        .enter()
        .append('path')
        .attr('class','bin')
        .attr('d', function(d){return area(histogramValues)})
        .attr('fill','rgba(12,12,12,.3)')


   d3.select(this).selectAll('path.area')
        .data([d])
        .enter()
        .append('path')
        .attr('class','bin')
        .attr('d', function(d){return line(histogramValues)})
        .attr('fill','none')
        .attr('stroke','black')

plot.append('g').attr('class','multAxis')
        .attr('transform','translate(0,'+height_box*.9+')')
      .call(axisX).attr('opacity',1);




    })

}


 d3.csv('data/rest_scores.csv',parse,dataLoaded);


function dataLoaded(err, rows){

byZip = d3.nest()
    .key(function(d) {return d.zip})
    .entries(rows);

console.log(byZip);
draw(rows);

}


function parse(d){

  //var xStart = scaleX(+d.dim1);

  return{
    zip: +d.business_postal_code,
    score: +d.inspection_score,
  }
}



