var days = {
  '0':"monday",
  '1':"tuesday",
  '2':"wednesday",
  '3':"thursday",
  '4':"friday",
  '5':"satureday",
  '6':"sunday"
}
var Employees = [   {     resourceId: 1,     name: "John Doe"   },   {     resourceId: 2,     name: "Alexander Adam"   } ];

var Timesheet = [   {     "date": "2021-03-01",     "hours": 2,     "resouceId": 1,       }, 
{     "date": "2021-03-02",     "hours": 6,     "resouceId": 1,       },   
{     "date": "2021-03-03",     "hours": 7,     "resouceId": 1,       },  
{     "date": "2021-03-04",     "hours": 4.5,     "resouceId": 1,       },  
{     "date": "2021-03-05",     "hours": 3.2,     "resouceId": 1,       },  
{     "date": "2021-03-01",     "hours": 2,     "resouceId": 2,       },   
{     "date": "2021-03-02",     "hours": 6,     "resouceId": 2,       },   
{     "date": "2021-03-03",     "hours": 7,     "resouceId": 2,       },  
{     "date": "2021-03-04",     "hours": 4.5,     "resouceId": 2,       },   
{     "date": "2021-03-05",     "hours": 3.2,     "resouceId": 2,       } ];


for(i in Timesheet)
{
  console.log(i)
}