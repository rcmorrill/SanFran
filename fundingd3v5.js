//FINAL PROJEC

var margin = {t:50,r:50,b:50,l:70};
var width = document.getElementById('plot').clientWidth-margin.l-margin.r,
	height = document.getElementById('plot').clientHeight-margin.t-margin.b;


var plot = d3.select('.canvas')
	.append('svg')
	.attr('width',width+margin.l+margin.r)
	.attr('height',height+margin.t+margin.b)
	.append('g')
	.attr('class','plot')
	.attr('transform', 'translate ('+width/2+','+height*.05+')');




var scaleMoney = d3.scaleSqrt().domain([0,1700000]).range([4,20]);


// var scaleD = d3.scaleLinear().domain([1,0]).range([100,400]);
// var scaleX = d3.scaleLinear().domain([0,12]).range([0,width]);
// var scaleCX = d3.scaleLinear().domain([0,100]).range([0,width]);
// var scaleCY= d3.scaleLinear().domain([0,100]).range([height,35]);
// var scaleI= d3.scaleLinear().domain([1,53]).range([0,width]);
// var scaleStart=d3.scaleOrdinal().domain([2,1,0]).range([width*.30,width*.5,width*.7])



		// project: d.ProjectID,
		// funded: d.AgencyName,
		// area: d.ProgramArea,
		// money:+d.Total,

var scaleTypeRow1 = d3.scalePoint().domain([
'Capital Projects',
'Community Building and Neighborhood Planning',
'Housing Development Grants',
'Organizational Capacity Building',
'Public Services - Access to Housing',
'Public Services - Eviction Prevention',
'Public Services - Financial Counseling Integration Pilot',
'Public Services - Financial Education',
'Public Services - Foundational Competencies',
'Public Services - Homeless Services',
'Public Services - Housing Place-Based Services',
'Public Services - Legal Services',
'Public Services - Neighborhood and Business Coordination',
'Public Services - Service Connection',
'Public Services - Supportive Housing for PLWHA',
'Public Services - Sustainable Homeownership',
'Public Services - Transitional Housing & Services'])
.range([width*-.4,width*.5])



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
.range([0,height])






var scaleAreaX = d3.scaleLinear().domain([1,7])
.range([width*-.4,width*.4])

var scaleAreaY = d3.scaleLinear().domain([1,4])
.range([height*.0,height*.06])

var scaleDist = d3.scaleLinear().domain([0,1800000])
.range([width*-.4,width*.4])

var scaleDist = d3.scaleLinear().domain([0,1800000])
.range([width*-.4,width*.4])



var scaleFunder = d3.scalePoint().domain([
		'General Fund',
		'HOPWA',
		'Housing Trust Fund',
		'CDBG',
		'ESG',
		'SOMA',
		'Other',])
.range([width*-.4,width*.4])

var scaleColor = d3.scaleOrdinal().domain([2,1,3]).range(['rgb(213,34,40','rgb(227,175,37)','rgb(39,43,102)'])


var simulation1 = d3.forceSimulation()
	.force('x',d3.forceX().strength(.01))
	.force('y', d3.forceY().strength(.01))
	.force('collide', d3.forceCollide(6))
	.velocityDecay(.1)
	.alpha(.4)



d3.csv('data/funding_breakOut.csv',parse).then(function(data){

console.log(data);

var plotting = plot.selectAll('.nodes')
	.data(data)
	.enter()
	.append('circle')
	.attr('class','nodes')
	.attr('r',0)
	.attr('fill',function(d){ return scaleColor(d.type)})
	.on('click', function(d){
		d3.select(this)
		.attr('fill','white')
		.attr('stroke',function(d){ return scaleColor(d.type)})})



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
}

d3.selectAll('.btn').on('click', function(){
    var selection = d3.select(this).attr('id');

		  if (selection == '0'){
			plotting.transition().duration(700)
				.attr('r',function(d){return scaleMoney(d.money)})
		simulation1
		.force('r',null)
			.force('collide', d3.forceCollide(function(d){return scaleMoney(d.money)+1}))
			.velocityDecay(.5)
			.alpha(.2)
			.restart()

		}

		else if (selection == '0.1'){
			plotting.transition()//.duration(700)
				.attr('r',5)
		simulation1
			.force('r',null)
			.force('collide', d3.forceCollide(6))
			.velocityDecay(.4)
			.alpha(.6)
			.restart()



		}
		else if (selection == '1'){

			simulation1
			.force('r',null)
			.force('x',d3.forceX(function(d) {return scaleAreaX(d.xPlace)}).strength(1))
			.force('y', d3.forceY(function(d){return scaleAreaY(d.yPlace)}).strength(1))
			.velocityDecay(.5)
			.alpha(.2)
			.restart()

		}
		else if (selection =='2'){

			simulation1
			.force('r',null)
			.force('x',d3.forceX(function(d) {return scaleDist(d.money)}).strength(.7))
			.force('y', d3.forceY().strength(.3))
			.velocityDecay(.5)
			.alpha(.2)
			.restart()

		}

		else if (selection =='3'){

			simulation1
			.force('r',null)
			.force('x',d3.forceX(function(d) {return scaleDist(d.money)}).strength(.7))
			.force('y', d3.forceY(function(d){return scaleAreaY(d.type)}).strength(1))
			.velocityDecay(.5)
			.alpha(.2)
			.restart()

		}

		else if (selection =='4'){

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

			simulation1
			.force('r',null)
			.force('x',d3.forceX(function(d) {return scaleFunder(d.funder)}).strength(.5))
			.force('y', d3.forceY().strength(.3))
			.velocityDecay(.5)
			.alpha(.2)
			.restart()

		}

		else if (selection =='6'){

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
		r:5,
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



