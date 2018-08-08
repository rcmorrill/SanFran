//FINAL PROJEC

var margin = {t:50,r:50,b:50,l:70};
var width = document.getElementById('plot').clientWidth-margin.l-margin.r,
	height = document.getElementById('plot').clientHeight-margin.t-margin.b;


d3.select('#same').classed('hide',true);


var plot = d3.select('.canvas')
	.append('svg')
	.attr('width',width+margin.l+margin.r)
	.attr('height',height+margin.t+margin.b)
	.append('g')
	.attr('class','plot')
	.attr('transform', 'translate ('+width/2+','+height*.033+')');





var scaleMoney = d3.scaleSqrt().domain([0,1700000]).range([.1,20]);




var scaleFunded = d3.scalePoint().domain([
"Catholic Charities CYO",
"Northern California Community Loan Fund",
"Dolores Street Community Services",
"SF LGBT Community Center",
"Central American Resource Center (CARECEN)",
"Eviction Defense Collaborative, Inc.",
"Tenderloin Housing Clinic, Inc.",
"Consumer Credit Counseling Service of San Francisco",
"Maitri Compassionate Care",
"Bay Area Legal Aid",
"San Francisco Housing Development Corporation",
"YMCA of San Francisco (Bayview)",
"Nihonmachi Legal Outreach",
"Mission Neighborhood Centers",
"Larkin Street Youth Services",
"San Francisco Study Center - Housing Rights Committee of San Francisco",
"Chinese for Affirmative Action",
"Urban Services YMCA",
"Compass Family Services",
"Chinatown Community Development Center",
"Donaldina Cameron House",
"Community Youth Center-San Francisco (CYC-SF)",
"AIDS Housing Alliance",
"Uptown Tenderloin, Inc.",
"Causa Justa :: Just Cause",
"Boys & Girls Clubs of San Francisco",
"Corporation for Supportive Housing",
"Veterans Equity Center",
"Bernal Heights Neighborhood Center",
"Renaissance Entrepreneurship Center",
"Mission Economic Development Agency",
"Tides Center / PODER",
"HomeownershipSF",
"Justice & Diversity Center of the Bar Association of San Francisco",
"APA Family Support Services",
"Bernal Heights Housing Corporation",
"Filipino American Development Foundation (FADF)/South of Market Community A",
"Openhouse",
"Vietnamese Youth Development Center",
"Portola Family Connections",
"San Francisco Parks Alliance",
"Wu Yee Children's Services",
"BRIDGE Regional Partners, Inc.",
"Northern California Presbyterian Homes & Services (NCPHS)",
"Rebuilding Together San Francisco",
"Mercy Housing California",
"Hamilton Families",
"APA Family Support Services/YMCA of San Francisco (Bayview)",
"Mujeres Unidas Activas",
"Bayview Hunters Point Multipurpose Senior Services",
"Asian Neighborhood Design",
"Board of Trustees of the Glide Foundation",
"Asian Americans Advancing Justice - Asian Law Caucus",
"GRID Alternatives",
"Positive Resource Center",
"Collective Impact (dba Mo' Magic)",
"SF CLOUT",
"Filipino-American Development Foundation: Filipino Community Center",
"Chinese Progressive Association",
"Episcopal Community Services of San Francisco",
"La Casa de las Madres",
"Gum Moon Residence Hall",
"United Playaz",
"Richmond District Neighborhood Center",
"AIDS Legal Referral Panel of the SF Bay Area",
"La Raza Community Resource Center",
"Tenderloin Neighborhood Development Corporation",
"Friendship House Association of American Indians",
"Southeast Asian Community Center",
"Mission Language and Vocational School, Inc.",
"Compasspoint Nonprofit Services",
"West Bay Pilipino Multi Service Corporation",
"San Francisco AIDS Foundation",
"Lawyers' Committee for Civil Rights of the San Francisco Bay Area",
"Asian Women's Shelter",
"Brava! for Women in the Arts",
"Nihonmachi Little Friends",
"YMCA of San Francisco (Bayview)/Together United Recommitted Forever (T.U.R.F.)",
"Asian Pacific American Community Center",
"Filipino American Development Foundation/Pin@y Educational Partnerships (PE",
"Community Awareness & Treatment Services",
"Homeless Children's Network",
"Filipino American Development Foundation",
"San Francisco Sheriff's Department 5 Keys Charter School",
"Telegraph Hill Neighborhood Association",
"San Francisco Community Empowerment Center",
"Rafiki Coalition for Health and Wellness",
"Swords to Plowshares Veterans Rights Organization",
"Potrero Hill Neighborhood House",
"EARN (Earned Assets Resource Network)",
"Self-Help for the Elderly",
"Urban Solutions",
"YMCA of San Francisco (Chinatown Branch)",
"APA Family Support Services/SCDC",
"Mission Hiring Hall",
"Central City Hospitality House",
"Homeless Prenatal Program, Inc.",
"Mission Asset Fund",
"San Francisco Community Land Trust",
"Instituto Laboral de la Raza",
"Independent Living Resource Center of SF",
"Charity Cultural Services Center",
"Good Samaritan Family Resource Center",
"Community Housing Partnership",
"Arab Cultural and Community Center",
"ASIAN, Inc.",
"Hearing and Speech Center of Northern California",
"Homies Organizing the Mission to Empower Youth (HOMEY)",
"Housing and Economic Rights Advocates",
"La Raza Centro Legal",
"Lavender Youth Rec. & Info. Ct.(LYRIC)",
"Mercy Housing CA XVII",
"My Path",
"Northeast Community Federal Credit Union",
"San Francisco Conservation Corps",
"Sunset District Comm. Develop. Corp. dba Sunset Youth Services",
"The Arc San Francisco",
"Legal Services For Children",
"Community Design Center",
"Mission Neighborhood Health Center",
"Providence Foundation",
"Booker T. Washington Community Service Center",
"Chinese Newcomers Service Center",
"Prevent Child Abuse California",
"Legal Assistance to the Elderly",
"Earned Assets Resource Network/Office of the Treasurer",
"Cross Cultural Family Center",
"Central Market Community Benefit District",
"San Francisco Beautiful",])
.range([height*-.015,height])






var scaleAreaX = d3.scaleLinear().domain([1,7])
.range([width*-.35,width*.5])

var scaleAreaY = d3.scaleLinear().domain([1,4])
.range([height*-.02,height*.02])

var scaleDist = d3.scaleLinear().domain([0,1800000])
.range([width*-.35,width*.5])

var scaleDist = d3.scaleLinear().domain([0,1800000])
.range([width*-.35,width*.5])



var scaleFunder = d3.scalePoint().domain([
		'General Fund',
		'HOPWA',
		'Housing Trust Fund',
		'CDBG',
		'ESG',
		'SOMA',
		'Other',])
.range([width*-.35,width*.5])

var scaleColor = d3.scaleOrdinal().domain([2,1,3]).range(['rgb(213,34,40','rgb(230,175,37)','rgb(39,43,102)'])


//hard coded = not ideal

plot.append('text')
        .attr('x',scaleAreaX(.5))
        .attr('y',scaleAreaY(1.5))
        .text('Community Building / Planning').attr('class','labels programs')
plot.append('text')
        .attr('x',scaleAreaX(.8))
        .attr('y',scaleAreaY(2.5))
        .text('Capital Projects').attr('class','labels programs')
plot.append('text')
        .attr('x',scaleAreaX(.8))
        .attr('y',scaleAreaY(3.5))
        .text('Access to Housing').attr('class','labels programs')
plot.append('text')
        .attr('x',scaleAreaX(.8))
        .attr('y',scaleAreaY(4.5))
        .text('Legal Services').attr('class','labels programs')
plot.append('text')
        .attr('x',scaleAreaX(1.5))
        .attr('y',scaleAreaY(1.5))
        .text('Organizational Capacity Building').attr('class','labels programs')
plot.append('text')
        .attr('x',scaleAreaX(1.5))
        .attr('y',scaleAreaY(2.5))
        .text('Housing Development Grants').attr('class','labels programs')
plot.append('text')
        .attr('x',scaleAreaX(1.7))
        .attr('y',scaleAreaY(3.5))
        .text('Eviction Prevention').attr('class','labels programs')
plot.append('text')
        .attr('x',scaleAreaX(1.5))
        .attr('y',scaleAreaY(4.5))
        .text('Neighborhood & Business Coord.').attr('class','labels programs')
plot.append('text')
        .attr('x',scaleAreaX(2.7))
        .attr('y',scaleAreaY(3.5))
        .text('Financial Counseling Pilot').attr('class','labels programs')
plot.append('text')
        .attr('x',scaleAreaX(2.7))
        .attr('y',scaleAreaY(4.5))
        .text('Service Connection').attr('class','labels programs')
plot.append('text')
        .attr('x',scaleAreaX(3.8))
        .attr('y',scaleAreaY(3.5))
        .text('Financial Education').attr('class','labels programs')
plot.append('text')
        .attr('x',scaleAreaX(3.5))
        .attr('y',scaleAreaY(4.5))
        .text('Supportive Housing for PLWHA').attr('class','labels programs')
plot.append('text')
        .attr('x',scaleAreaX(4.5))
        .attr('y',scaleAreaY(3.5))
        .text('Foundational Competencies').attr('class','labels programs')
plot.append('text')
        .attr('x',scaleAreaX(4.5))
        .attr('y',scaleAreaY(4.5))
        .text('Sustainable Homeownership').attr('class','labels programs')
plot.append('text')
        .attr('x',scaleAreaX(5.8))
        .attr('y',scaleAreaY(3.5))
        .text('Homeless Services').attr('class','labels programs')
plot.append('text')
        .attr('x',scaleAreaX(5.5))
        .attr('y',scaleAreaY(4.5))
        .text('Transitional Housing & Services').attr('class','labels programs')
 plot.append('text')
        .attr('x',scaleAreaX(6.5))
        .attr('y',scaleAreaY(3.5))
        .text('Housing Place-Based Services').attr('class','labels programs')       




//funding source labels

var scaleFunderLabels = d3.scaleLinear().domain([1,7])
.range([width*-.38,width*.49])



 plot.append('text')
        .attr('x',scaleFunderLabels(1))
        .attr('y',height*.02)
        .text('General Fund').attr('class','labels funders') 

plot.append('text')
	    .attr('x',scaleFunderLabels(2))
	    .attr('y',height*.02)
	    .text('HOPWA').attr('class','labels funders')        

 plot.append('text')
        .attr('x',scaleFunderLabels(3))
        .attr('y',height*.02)
        .text('Housing Trust Fund').attr('class','labels funders') 

plot.append('text')
	    .attr('x',scaleFunderLabels(4))
	    .attr('y',height*.02)
	    .text('CDBG').attr('class','labels funders')

 plot.append('text')
        .attr('x',scaleFunderLabels(5))
        .attr('y',height*.02)
        .text('ESG').attr('class','labels funders') 

plot.append('text')
	    .attr('x',scaleFunderLabels(6))
	    .attr('y',height*.02)
	    .text('SOMA').attr('class','labels funders')

plot.append('text')
	    .attr('x',scaleFunderLabels(7))
	    .attr('y',height*.02)
	    .text('Other').attr('class','labels funders')


d3.selectAll('.labels').classed('hide',true);


//initial labels

 plot.append('text')
        .attr('x',width*.2)
        .attr('y',height*.005)
        .text('Public Service')
        .attr('class','PublicService labels2')

 plot.append('text')
        .attr('x',width*.2)
        .attr('y',height*.01)
        .text('Infrastructure')
        .attr('class','Infrastructure labels2')

 plot.append('text')
        .attr('x',width*.2)
        .attr('y',height*.015)
        .text('Community Development')
        .attr('class','CommunityDev labels2')

var simulation1 = d3.forceSimulation()
	.force('x',d3.forceX().strength(.01))
	.force('y', d3.forceY().strength(.01))
	.force('collide', d3.forceCollide(5))
	.velocityDecay(.1)
	.alpha(.4)



d3.csv('data/funding_breakOut.csv',parse).then(function(data){



var histoAxis = d3.axisBottom(scaleDist);

plot.append('g')
	.attr('class','labels axisHist')
	.attr('transform', 'translate (0,'+height*.023+')')
	.call(histoAxis)

plot.selectAll('.lines')
	.data(data)
	.enter()
	.append('rect')
	.attr('class','labels lines')
	.attr('x', width*-.5)
	.attr('y',function(d){return scaleFunded(d.funded)+2})
	.attr('height',1)
	.attr('width',width)
	.attr('fill','rgba(154,154,154,.1')





var grouping = plot.selectAll('.nodes')
	.data(data)
	.enter()
	.append('g')

var plotting = grouping.append('circle')
	.attr('class','nodes')
	.attr('r',0)
	.attr('fill',function(d){ return scaleColor(d.type)})
	.on('click', function(d){
		d3.select(this)
		.attr('fill','white')
		.attr('stroke',function(d){ return scaleColor(d.type)})})



var moneyLabel = grouping.append('text')
	.attr('class','labels moneyLabels')
	.attr('transform','translate(2,-2)')
	.text (function(d){return d.money})



var texting = plot.selectAll('.longLabels')
	.data(data)
	.enter()
	.append('text')
	.attr('class','labels longLabels')
	.text(function(d){return d.funded})
	.attr('x', width*-.5)
	.attr('y',function(d){return scaleFunded(d.funded)})
d3.selectAll('.labels').classed('hide',true);

plotting.transition()
 	.duration(500)
 	.delay(50)
 	 .attrTween("r", function(d) {
      var i = d3.interpolate(0, d.r);
      return function(t) { return d.r = i(t); };
    });

simulation1.nodes(data)
    .on('tick', ticked)


function ticked(){
	plotting
		.attr('cx', function(d){
			return d.x
		})
		.attr('cy', function(d){
			return d.y
		})

    moneyLabel
		.attr('x', function(d){
			return d.x
		})
		.attr('y', function(d){
			return d.y
		})
}




d3.selectAll('.btn').on('click', function(){
    var selection = d3.select(this).attr('id');

		  if (selection == 'encode'){


			d3.select('#same').classed('hide',false)
			d3.select('#encode').classed('hide',true)

			plotting.transition().duration(700)
				.attr('r',function(d){return scaleMoney(d.money)})
		simulation1
		.force('r',null)
			.force('collide', d3.forceCollide(function(d){return scaleMoney(d.money)+1}))
			.velocityDecay(.5)
			.alpha(.2)
			.restart()

		}

		else if (selection == 'same'){


			d3.select('#same').classed('hide',true)
			d3.select('#encode').classed('hide',false)
		  	d3.selectAll('.moneyLabels').classed('hide',true)

			plotting.transition()//.duration(700)
				.attr('r',4)
		simulation1
			//.force('r',null)
			.force('collide', d3.forceCollide(5))
			.velocityDecay(.5)
			.alpha(.7)
			.restart()




		}
		else if (selection == '1'){

			d3.selectAll('.labels').classed('hide',true)
		  	d3.selectAll('.programs').classed('hide',false)
		  	d3.selectAll('.labels2').classed('hide',true)

			simulation1
			.force('r',null)
			.force('x',d3.forceX(function(d) {return scaleAreaX(d.xPlace)}).strength(1))
			.force('y', d3.forceY(function(d){return scaleAreaY(d.yPlace)}).strength(1))
			.velocityDecay(.5)
			.alpha(.2)
			.restart()

		}
		else if (selection =='2'){

			d3.selectAll('.labels').classed('hide',true)
		    d3.selectAll('.axisHist').classed('hide',false)
		    d3.selectAll('.labels2').classed('hide',true)


			d3.select('#same').classed('hide',true)
			d3.select('#encode').classed('hide',false)
			plotting.transition()
				.attr('r',4)
		simulation1
			.force('collide', d3.forceCollide(5))
			.force('r',null)
			.force('x',d3.forceX(function(d) {return scaleDist(d.money)}).strength(1))
			.force('y', d3.forceY().strength(.3))
			.velocityDecay(.5)
			.alpha(.5)
			.restart()

		}

		else if (selection =='3'){

			d3.selectAll('.labels').classed('hide',true)
		    d3.selectAll('.axisHist').classed('hide',false)
		    d3.selectAll('.labels2').classed('hide',true)
			d3.select('#same').classed('hide',true)
			d3.select('#encode').classed('hide',false)
			plotting.transition()
				.attr('r',4)
		simulation1
			.force('collide', d3.forceCollide(5))
			.force('r',null)
			.force('x',d3.forceX(function(d) {return scaleDist(d.money)}).strength(.7))
			.force('y', d3.forceY(function(d){return scaleAreaY(d.type)}).strength(1))
			.velocityDecay(.5)
			.alpha(.2)
			.restart()

		}

		else if (selection =='4'){
			d3.selectAll('.labels').classed('hide',true)
d3.selectAll('.labels2').classed('hide',true)
			simulation1
			//.force('x',d3.forceX().strength(.4))
			//.force('y', d3.forceY(function(d) {return scaleProject(d.projectNum)}).strength(1))
			.velocityDecay(.5)
			.force('x',null)
			.force('y',null)
			.force('r', d3.forceRadial(200))
			.alpha(.8)
			.restart()

		}

		else if (selection =='5'){
			d3.selectAll('.labels').classed('hide',true)
		 d3.selectAll('.funders').classed('hide',false)
d3.selectAll('.labels2').classed('hide',true)

			simulation1
			.force('r',null)
			.force('x',d3.forceX(function(d) {return scaleFunder(d.funder)}).strength(.7))
			.force('y', d3.forceY().strength(.4))
			.velocityDecay(.6)
			.alpha(.5)
			.restart()

		}

		else if (selection =='6'){
			d3.selectAll('.labels').classed('hide',true)
		  	d3.selectAll('.longLabels').classed('hide',false)
		  	d3.selectAll('.lines').classed('hide',false)
		  	d3.selectAll('.moneyLabels').classed('hide',false)
		  	d3.selectAll('.labels2').classed('hide',true)


			simulation1
			.force('r',null)
			.force('x',d3.forceX(function(d) {return scaleFunder(d.funder)}).strength(.4))
			.force('y', d3.forceY(function(d){return scaleFunded(d.funded)}).strength(.4))
			.velocityDecay(.6)
			.alpha(.9)
			.restart()

		}



		

})



///////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

}); //end primary function

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function parse(d){

//Need to clean up a bit

	// var test = scaleY(d.track);
	// var scaleYStart = d3.scaleLinear().domain([1,11]).range([height*.4,height*.6]);
	// var test2 = scaleYStart(d.track);
	 //var divide = scaleStart(d.primary);

var scaleXStart = d3.scaleLinear().domain([1,2000000]).range([width*.25, width*.75])
var starterX = scaleXStart(+d.Total)

console.log(starterX);

	return{
		project: d.ProjectID,
		projectNum: +d.ProjectID_num,
		//x: starterX +Math.random()*5,
		// x: width/2 +Math.random()*5,
		r:4,
		// y: height/2 + Math.random()*5,
		funded: d.AgencyName,
		xPlace: +d.X_place,
		yPlace: +d.Y_place,
		area: d.ProgramArea,
		money:+d.Total,
		type:d.Type,
		funder: d.fundingAgency,

	}
}



