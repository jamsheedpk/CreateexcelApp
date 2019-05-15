
var express = require('express');
var app = express();

var fs = require('fs');


var arryOfObjEmployee = [{
  "SlNo" :"1",
  "NameOfEmployee": "JAMSHEED.P",
  "Designation": "Clerk",
  "DateOfJoining": "01-11-2012"
},{
  "SlNo" :"2",
  "NameOfEmployee": "SUDHAKUMARI.K",
  "Designation": "F.T.C.M",
  "DateOfJoining": "23-10-2008"
},{
  "SlNo" :"3",
  "NameOfEmployee": "HARISH. S",
  "Designation": "Head Master",
  "DateOfJoining": "05-12-1988"
},
  {
    "SlNo" :"4",
    "NameOfEmployee": "SHAJU.V.R",
    "Designation": "HSA English",
    "DateOfJoining": "12-06-2012"
  },{
    "SlNo" :"5",
    "NameOfEmployee": "SREEKUMAR.S",
    "Designation": "HSA Hindi",
    "DateOfJoining": "13-10-1993"
  }];

var data='SlNo'+'\t'+"Name Of Employee"+'\t'+"Designation"+'\t'+'DateOfJoining'+'\n';
for ( var i = 0; i < arryOfObjEmployee.length; i++) {

     data= data+arryOfObjEmployee[i].SlNo+'\t'
      +arryOfObjEmployee[i].NameOfEmployee+'\t'
      +arryOfObjEmployee[i].Designation+'\t'
      +arryOfObjEmployee[i].DateOfJoining+'\n';
}
fs.appendFile('ExampleName.xls', data, (err) => {
  if (err) throw err;
  console.log('File created..................................plz open (app dir)');
});



app.get('/',function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.listen('3000', function(){
  console.log('running on 3000...');
});

