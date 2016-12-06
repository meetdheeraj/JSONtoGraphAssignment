<<<<<<< HEAD
var fs=require('fs');
//var fileName = './JSONnew.js';
//var file = require(fileName);
var country="";
var rowNum=0;
var requiredArray=[];
var indexAll=[];
var barGraphAr=[];
var lineGraphAr=[];
var txtJSON;
var noCountry=0;
var noCountryAr=[];

var Netherlands={
	country:'Netherlands',
	salt: 0,
	sugar: 0,
	fats: 0,
	carbo: 0,
	pro: 0,
};
var UK={
  country:'United Kingdom',
  salt: 0,
  sugar: 0,
  fats: 0,
  carbo: 0,
  pro: 0,
};
var France={
  country:'France',
  salt: 0,
  sugar: 0,
  fats: 0,
  carbo: 0,
  pro: 0,
};
var Germany={
  country:'Germany',
  salt: 0,
  sugar: 0,
  fats: 0,
  carbo: 0,
  pro: 0,
};
var Spain={
	country:'Spain',
	salt: 0,
	sugar: 0,
	fats: 0,
	carbo: 0,
	pro: 0,
};
var Canada={
	country:'Canada',
	salt: 0,
	sugar: 0,

};
var USA={
	country:'USA',
	salt: 0,
	sugar: 0,
};
var Australia={
	country:'Australia',
	salt: 0,
	sugar: 0,
};
var South_Africa={
	country:'South Africa',
	salt: 0,
	sugar: 0,
};
//salt 116 ,sugar 102,fat 65, protein 112,carbohydrate 101

var Denmark={
	country:'Denmark',
	fats: 0,
	carbo: 0,
	pro: 0,
};
var Sweden={
	country:'Sweden',
	fats: 0,
	carbo: 0,
	pro: 0,
};
var Norway={
	country:'Norway',
	fats: 0,
	carbo: 0,
	pro: 0,
};
var Belgium={
	country:'Belgium',
	fats: 0,
	carbo: 0,
	pro: 0,
};
var Switzerland={
	country:'Switzerland',
	fats: 0,
	carbo: 0,
	pro: 0,
};
var Portugal={
	country:'Portugal',
	fats: 0,
	carbo: 0,
	pro: 0,
};
var Greece={
	country:'Greece',
	fats: 0,
	carbo: 0,
	pro: 0,
};
var Italy={
	country:'Italy',
	fats: 0,
	carbo: 0,
	pro: 0,
};
var Croatia={
	country:'Croatia',
	fats: 0,
	carbo: 0,
	pro: 0,
};
var Albania={
	country:'Albania',
	fats: 0,
	carbo: 0,
	pro: 0,
};
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('FoodFacts.csv')
});
lineReader.on('line', function (str) {

  row=str.split(new RegExp(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));

  noCountry++;
  var headings;
  if(rowNum==0)
  {

    headings = row;
    rowNum++;

    for(var i=0; i<headings.length; i++){
      if(headings[i]=="countries_en" || headings[i]=="salt_100g" || headings[i]=="sugars_100g" || headings[i]=="fat_100g" || headings[i]=="proteins_100g" || headings[i]=="carbohydrates_100g")
      {

        indexAll.push(i);
        requiredArray.push(headings[i]);

      }
    }



  }
  else
  {

    country= row[indexAll[0]];

    var fat_index= indexAll[1];
    var carbo_index= indexAll[2]
    var sugar_index= indexAll[3];
    var pro_index= indexAll[4];
    var salt_index= indexAll[5];


    switch (country)
    {
		case 'France' :
						if(row[salt_index]!="")
						France.salt=parseFloat(France.salt)+parseFloat(row[salt_index]);
						if(row[sugar_index]!="")
						France.sugar=parseFloat(France.sugar)+parseFloat(row[sugar_index]);
						if(row[fat_index]!="")
						France.fats=parseFloat(France.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						France.pro=parseFloat(France.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						France.carbo=parseFloat(France.carbo)+parseFloat(row[carbo_index]);
						break;


		case 'United Kingdom' :
						if(row[salt_index]!="")
						UK.salt=parseFloat(UK.salt)+parseFloat(row[salt_index]);
						if(row[sugar_index]!="")
						UK.sugar=parseFloat(UK.sugar)+parseFloat(row[sugar_index]);
						if(row[fat_index]!="")
						UK.fats=parseFloat(UK.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						UK.pro=parseFloat(UK.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						UK.carbo=parseFloat(UK.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Netherlands' :
						if(row[salt_index]!="")
						Netherlands.salt=parseFloat(Netherlands.salt)+parseFloat(row[salt_index]);
						if(row[sugar_index]!="")
						Netherlands.sugar=parseFloat(Netherlands.sugar)+parseFloat(row[sugar_index]);
						if(row[fat_index]!="")
						Netherlands.fats=parseFloat(Netherlands.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Netherlands.pro=parseFloat(Netherlands.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Netherlands.carbo=parseFloat(Netherlands.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Canada' :
						if(row[salt_index]!="")
						Canada.salt=parseFloat(Canada.salt)+parseFloat(row[salt_index]);
						if(row[sugar_index]!="")
						Canada.sugar=parseFloat(Canada.sugar)+parseFloat(row[sugar_index]);
						break;

//In file there were two instances (USA and United States). So both are captured here.
		case 'USA' :
						if(row[salt_index]!="")
						USA.salt=parseFloat(USA.salt)+parseFloat(row[salt_index]);
						if(row[sugar_index]!="")
						USA.sugar=parseFloat(USA.sugar)+parseFloat(row[sugar_index]);
						break;

		case 'United States' :
						if(row[salt_index]!="")
						USA.salt=parseFloat(USA.salt)+parseFloat(row[salt_index]);
						if(row[sugar_index]!="")
						USA.sugar=parseFloat(USA.sugar)+parseFloat(row[sugar_index]);
						break;


		case 'Australia' :
						if(row[salt_index]!="")
						Australia.salt=parseFloat(Australia.salt)+parseFloat(row[salt_index]);
						if(row[sugar_index]!="")
						Australia.sugar=parseFloat(Australia.sugar)+parseFloat(row[sugar_index]);
						break;

		case 'Germany' :
						if(row[salt_index]!="")
						Germany.salt=parseFloat(Germany.salt)+parseFloat(row[salt_index]);
						if(row[sugar_index]!="")
						Germany.sugar=parseFloat(Germany.sugar)+parseFloat(row[sugar_index]);
						if(row[fat_index]!="")
						Germany.fats=parseFloat(Germany.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Germany.pro=parseFloat(Germany.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Germany.carbo=parseFloat(Germany.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Spain' :
						if(row[salt_index]!="")
						Spain.salt=parseFloat(Spain.salt)+parseFloat(row[salt_index]);
						if(row[sugar_index]!="")
						Spain.sugar=parseFloat(Spain.sugar)+parseFloat(row[sugar_index]);
						if(row[fat_index]!="")
						Spain.fats=parseFloat(Spain.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Spain.pro=parseFloat(Spain.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Spain.carbo=parseFloat(Spain.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'South Africa' :
						if(row[salt_index]!="")
						South_Africa.salt=parseFloat(South_Africa.salt)+parseFloat(row[salt_index]);
						if(row[sugar_index]!="")
						South_Africa.sugar=parseFloat(South_Africa.sugar)+parseFloat(row[sugar_index]);
						break;

		case 'Denmark' :
						if(row[fat_index]!="")
						Denmark.fats=parseFloat(Denmark.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Denmark.pro=parseFloat(Denmark.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Denmark.carbo=parseFloat(Denmark.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Sweden' :
						if(row[fat_index]!="")
						Sweden.fats=parseFloat(Sweden.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Sweden.pro=parseFloat(Sweden.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Sweden.carbo=parseFloat(Sweden.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Norway' :
						if(row[fat_index]!="")
						Norway.fats=parseFloat(Norway.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Norway.pro=parseFloat(Norway.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Norway.carbo=parseFloat(Norway.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Belgium' :
						if(row[fat_index]!="")
						Belgium.fats=parseFloat(Belgium.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Belgium.pro=parseFloat(Belgium.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Belgium.carbo=parseFloat(Belgium.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Switzerland' :
						if(row[fat_index]!="")
						Switzerland.fats=parseFloat(Switzerland.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Switzerland.pro=parseFloat(Switzerland.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Switzerland.carbo=parseFloat(Switzerland.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Portugal' :
						if(row[fat_index]!="")
						Portugal.fats=parseFloat(Portugal.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Portugal.pro=parseFloat(Portugal.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Portugal.carbo=parseFloat(Portugal.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Greece' :
						if(row[fat_index]!="")
						Greece.fats=parseFloat(Greece.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Greece.pro=parseFloat(Greece.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Greece.carbo=parseFloat(Greece.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Italy' :
						if(row[fat_index]!="")
						Italy.fats=parseFloat(Italy.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Italy.pro=parseFloat(Italy.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Italy.carbo=parseFloat(Italy.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Croatia' :
						if(row[fat_index]!="")
						Croatia.fats=parseFloat(Croatia.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Croatia.pro=parseFloat(Croatia.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Croatia.carbo=parseFloat(Croatia.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Albania' :
						if(row[fat_index]!="")
						Albania.fats=parseFloat(Albania.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Albania.pro=parseFloat(Albania.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Albania.carbo=parseFloat(Albania.carbo)+parseFloat(row[carbo_index]);
						break;

		default: //console.log("********************************There's error - No Country *************************************");
				 //noCountryAr.push(noCountry);
    }

  }//-----end else-----

 });//------end readline-----


lineReader.on('close',function(){
	console.log("Inside close");
	console.log("----------------Bar Graph Array Creation------------------");

	createBarGraphArray(UK);

	createBarGraphArray(France);
	createBarGraphArray(Netherlands);
	createBarGraphArray(Germany);
	createBarGraphArray(Spain);

	barGraphAr.push(Canada);
	barGraphAr.push(Australia);
	barGraphAr.push(South_Africa);

	barGraphAr.push(USA);

    console.log(barGraphAr);

    //create Bar Graph array
    function createBarGraphArray(objToCopy){
		var obj=Object.assign({}, objToCopy);
		delete obj.fats;
		delete obj.carbo;
		delete obj.pro;
		barGraphAr.push(obj);


     }

     console.log("----------------Line Graph Array Creation------------------");

     var north=[UK,Denmark,Sweden ,Norway];
     var central=[France,Belgium,Germany ,Switzerland,Netherlands];
     var south=[Portugal,Greece,Italy ,Spain,Croatia,Albania];
     var northEurope=createRegionObject(north,'North Europe');
     var centralEurope=createRegionObject(central,'Central Europe');
     var southEurope=createRegionObject(south,'South Europe');
     lineGraphAr.push(northEurope);
     lineGraphAr.push(centralEurope);
     lineGraphAr.push(southEurope);
     console.log(lineGraphAr);



     function createRegionObject(objArray,reg){
       let fat=0;
       let carbo=0;
       let protein=0;
       for(let i of objArray){
       fat=parseFloat(fat)+parseFloat(i.fats);
       carbo=parseFloat(carbo)+parseFloat(i.carbo);
       protein=parseFloat(protein)+parseFloat(i.pro);

     }

       var regionObj={
         region:reg,
         fat:fat,
         carbo:carbo,
         protein:protein,
       };


       return regionObj;
     }
//Writing JSOn file
//This variable will be used for writing into file
//txtJSON=JSON.stringify(barGraphAr)+"\n\n"+JSON.stringify(lineGraphAr);
txtJSON=JSON.stringify(barGraphAr);
fs.writeFile("JSONFile_Bar.json", txtJSON, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
txtJSON=JSON.stringify(lineGraphAr);
fs.writeFile("JSONFile_Line.json", txtJSON, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

 //console.log("No country rows are ::"+noCountryAr );

});
=======
var fs=require('fs');
//var fileName = './JSONnew.js';
//var file = require(fileName);
var country="";
var rowNum=0;
var requiredArray=[];
var indexAll=[];
var barGraphAr=[];
var lineGraphAr=[];
var txtJSON;
var noCountry=0;
var noCountryAr=[];

var Netherlands={
	country:'Netherlands',
	salt: 0,
	sugar: 0,
	fats: 0,
	carbo: 0,
	pro: 0,
};
var UK={
  country:'United Kingdom',
  salt: 0,
  sugar: 0,
  fats: 0,
  carbo: 0,
  pro: 0,
};
var France={
  country:'France',
  salt: 0,
  sugar: 0,
  fats: 0,
  carbo: 0,
  pro: 0,
};
var Germany={
  country:'Germany',
  salt: 0,
  sugar: 0,
  fats: 0,
  carbo: 0,
  pro: 0,
};
var Spain={
	country:'Spain',
	salt: 0,
	sugar: 0,
	fats: 0,
	carbo: 0,
	pro: 0,
};
var Canada={
	country:'Canada',
	salt: 0,
	sugar: 0,

};
var USA={
	country:'USA',
	salt: 0,
	sugar: 0,
};
var Australia={
	country:'Australia',
	salt: 0,
	sugar: 0,
};
var South_Africa={
	country:'South Africa',
	salt: 0,
	sugar: 0,
};
//salt 116 ,sugar 102,fat 65, protein 112,carbohydrate 101

var Denmark={
	country:'Denmark',
	fats: 0,
	carbo: 0,
	pro: 0,
};
var Sweden={
	country:'Sweden',
	fats: 0,
	carbo: 0,
	pro: 0,
};
var Norway={
	country:'Norway',
	fats: 0,
	carbo: 0,
	pro: 0,
};
var Belgium={
	country:'Belgium',
	fats: 0,
	carbo: 0,
	pro: 0,
};
var Switzerland={
	country:'Switzerland',
	fats: 0,
	carbo: 0,
	pro: 0,
};
var Portugal={
	country:'Portugal',
	fats: 0,
	carbo: 0,
	pro: 0,
};
var Greece={
	country:'Greece',
	fats: 0,
	carbo: 0,
	pro: 0,
};
var Italy={
	country:'Italy',
	fats: 0,
	carbo: 0,
	pro: 0,
};
var Croatia={
	country:'Croatia',
	fats: 0,
	carbo: 0,
	pro: 0,
};
var Albania={
	country:'Albania',
	fats: 0,
	carbo: 0,
	pro: 0,
};
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('FoodFacts.csv')
});
lineReader.on('line', function (str) {

  row=str.split(new RegExp(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));

  noCountry++;
  var headings;
  if(rowNum==0)
  {

    headings = row;
    rowNum++;

    for(var i=0; i<headings.length; i++){
      if(headings[i]=="countries_en" || headings[i]=="salt_100g" || headings[i]=="sugars_100g" || headings[i]=="fat_100g" || headings[i]=="proteins_100g" || headings[i]=="carbohydrates_100g")
      {

        indexAll.push(i);
        requiredArray.push(headings[i]);

      }
    }



  }
  else
  {

    country= row[indexAll[0]];

    var fat_index= indexAll[1];
    var carbo_index= indexAll[2]
    var sugar_index= indexAll[3];
    var pro_index= indexAll[4];
    var salt_index= indexAll[5];


    switch (country)
    {
		case 'France' :
						if(row[salt_index]!="")
						France.salt=parseFloat(France.salt)+parseFloat(row[salt_index]);
						if(row[sugar_index]!="")
						France.sugar=parseFloat(France.sugar)+parseFloat(row[sugar_index]);
						if(row[fat_index]!="")
						France.fats=parseFloat(France.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						France.pro=parseFloat(France.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						France.carbo=parseFloat(France.carbo)+parseFloat(row[carbo_index]);
						break;


		case 'United Kingdom' :
						if(row[salt_index]!="")
						UK.salt=parseFloat(UK.salt)+parseFloat(row[salt_index]);
						if(row[sugar_index]!="")
						UK.sugar=parseFloat(UK.sugar)+parseFloat(row[sugar_index]);
						if(row[fat_index]!="")
						UK.fats=parseFloat(UK.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						UK.pro=parseFloat(UK.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						UK.carbo=parseFloat(UK.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Netherlands' :
						if(row[salt_index]!="")
						Netherlands.salt=parseFloat(Netherlands.salt)+parseFloat(row[salt_index]);
						if(row[sugar_index]!="")
						Netherlands.sugar=parseFloat(Netherlands.sugar)+parseFloat(row[sugar_index]);
						if(row[fat_index]!="")
						Netherlands.fats=parseFloat(Netherlands.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Netherlands.pro=parseFloat(Netherlands.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Netherlands.carbo=parseFloat(Netherlands.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Canada' :
						if(row[salt_index]!="")
						Canada.salt=parseFloat(Canada.salt)+parseFloat(row[salt_index]);
						if(row[sugar_index]!="")
						Canada.sugar=parseFloat(Canada.sugar)+parseFloat(row[sugar_index]);
						break;

//In file there were two instances (USA and United States). So both are captured here.
		case 'USA' :
						if(row[salt_index]!="")
						USA.salt=parseFloat(USA.salt)+parseFloat(row[salt_index]);
						if(row[sugar_index]!="")
						USA.sugar=parseFloat(USA.sugar)+parseFloat(row[sugar_index]);
						break;

		case 'United States' :
						if(row[salt_index]!="")
						USA.salt=parseFloat(USA.salt)+parseFloat(row[salt_index]);
						if(row[sugar_index]!="")
						USA.sugar=parseFloat(USA.sugar)+parseFloat(row[sugar_index]);
						break;


		case 'Australia' :
						if(row[salt_index]!="")
						Australia.salt=parseFloat(Australia.salt)+parseFloat(row[salt_index]);
						if(row[sugar_index]!="")
						Australia.sugar=parseFloat(Australia.sugar)+parseFloat(row[sugar_index]);
						break;

		case 'Germany' :
						if(row[salt_index]!="")
						Germany.salt=parseFloat(Germany.salt)+parseFloat(row[salt_index]);
						if(row[sugar_index]!="")
						Germany.sugar=parseFloat(Germany.sugar)+parseFloat(row[sugar_index]);
						if(row[fat_index]!="")
						Germany.fats=parseFloat(Germany.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Germany.pro=parseFloat(Germany.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Germany.carbo=parseFloat(Germany.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Spain' :
						if(row[salt_index]!="")
						Spain.salt=parseFloat(Spain.salt)+parseFloat(row[salt_index]);
						if(row[sugar_index]!="")
						Spain.sugar=parseFloat(Spain.sugar)+parseFloat(row[sugar_index]);
						if(row[fat_index]!="")
						Spain.fats=parseFloat(Spain.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Spain.pro=parseFloat(Spain.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Spain.carbo=parseFloat(Spain.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'South Africa' :
						if(row[salt_index]!="")
						South_Africa.salt=parseFloat(South_Africa.salt)+parseFloat(row[salt_index]);
						if(row[sugar_index]!="")
						South_Africa.sugar=parseFloat(South_Africa.sugar)+parseFloat(row[sugar_index]);
						break;

		case 'Denmark' :
						if(row[fat_index]!="")
						Denmark.fats=parseFloat(Denmark.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Denmark.pro=parseFloat(Denmark.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Denmark.carbo=parseFloat(Denmark.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Sweden' :
						if(row[fat_index]!="")
						Sweden.fats=parseFloat(Sweden.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Sweden.pro=parseFloat(Sweden.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Sweden.carbo=parseFloat(Sweden.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Norway' :
						if(row[fat_index]!="")
						Norway.fats=parseFloat(Norway.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Norway.pro=parseFloat(Norway.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Norway.carbo=parseFloat(Norway.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Belgium' :
						if(row[fat_index]!="")
						Belgium.fats=parseFloat(Belgium.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Belgium.pro=parseFloat(Belgium.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Belgium.carbo=parseFloat(Belgium.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Switzerland' :
						if(row[fat_index]!="")
						Switzerland.fats=parseFloat(Switzerland.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Switzerland.pro=parseFloat(Switzerland.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Switzerland.carbo=parseFloat(Switzerland.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Portugal' :
						if(row[fat_index]!="")
						Portugal.fats=parseFloat(Portugal.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Portugal.pro=parseFloat(Portugal.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Portugal.carbo=parseFloat(Portugal.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Greece' :
						if(row[fat_index]!="")
						Greece.fats=parseFloat(Greece.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Greece.pro=parseFloat(Greece.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Greece.carbo=parseFloat(Greece.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Italy' :
						if(row[fat_index]!="")
						Italy.fats=parseFloat(Italy.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Italy.pro=parseFloat(Italy.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Italy.carbo=parseFloat(Italy.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Croatia' : 
						if(row[fat_index]!="")
						Croatia.fats=parseFloat(Croatia.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Croatia.pro=parseFloat(Croatia.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Croatia.carbo=parseFloat(Croatia.carbo)+parseFloat(row[carbo_index]);
						break;

		case 'Albania' :
						if(row[fat_index]!="")
						Albania.fats=parseFloat(Albania.fats)+parseFloat(row[fat_index]);
						if(row[pro_index]!="")
						Albania.pro=parseFloat(Albania.pro)+parseFloat(row[pro_index]);
						if(row[carbo_index]!="")
						Albania.carbo=parseFloat(Albania.carbo)+parseFloat(row[carbo_index]);
						break;

		default: //console.log("********************************There's error - No Country *************************************");
				 //noCountryAr.push(noCountry);
    }

  }//-----end else-----

 });//------end readline-----


lineReader.on('close',function(){
	console.log("Inside close");
	console.log("----------------Bar Graph Array Creation------------------");

	createBarGraphArray(UK);

	createBarGraphArray(France);
	createBarGraphArray(Netherlands);
	createBarGraphArray(Germany);
	createBarGraphArray(Spain);

	barGraphAr.push(Canada);
	barGraphAr.push(Australia);
	barGraphAr.push(South_Africa);

	barGraphAr.push(USA);

    console.log(barGraphAr);

    //create Bar Graph array
    function createBarGraphArray(objToCopy){
		var obj=Object.assign({}, objToCopy);
		delete obj.fats;
		delete obj.carbo;
		delete obj.pro;
		barGraphAr.push(obj);


     }

     console.log("----------------Line Graph Array Creation------------------");

     var north=[UK,Denmark,Sweden ,Norway];
     var central=[France,Belgium,Germany ,Switzerland,Netherlands];
     var south=[Portugal,Greece,Italy ,Spain,Croatia,Albania];
     var northEurope=createRegionObject(north,'North Europe');
     var centralEurope=createRegionObject(central,'Central Europe');
     var southEurope=createRegionObject(south,'South Europe');
     lineGraphAr.push(northEurope);
     lineGraphAr.push(centralEurope);
     lineGraphAr.push(southEurope);
     console.log(lineGraphAr);



     function createRegionObject(objArray,reg){
       let fat=0;
       let carbo=0;
       let protein=0;
       for(let i of objArray){
       fat=parseFloat(fat)+parseFloat(i.fats);
       carbo=parseFloat(carbo)+parseFloat(i.carbo);
       protein=parseFloat(protein)+parseFloat(i.pro);

     }

       var regionObj={
         region:reg,
         fat:fat,
         carbo:carbo,
         protein:protein,
       };


       return regionObj;
     }
//Writing JSOn file
//This variable will be used for writing into file
//txtJSON=JSON.stringify(barGraphAr)+"\n\n"+JSON.stringify(lineGraphAr);
txtJSON=JSON.stringify(barGraphAr);
fs.writeFile("JSONFile_Bar.JSON", txtJSON, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
txtJSON=JSON.stringify(lineGraphAr);
fs.writeFile("JSONFile_Line.JSON", txtJSON, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

 //console.log("No country rows are ::"+noCountryAr );

});
>>>>>>> bdba042cbd109d7b4d645d56d23a7d1e8b8a7282
