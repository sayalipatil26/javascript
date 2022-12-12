console.log("=========Question 1st=========");
function first(){
     console.log("New Program");
}
first();
function second(){
    console.log("Sencond new program");
}
second();
console.log("========Question 2nd========");
function personalDetails(firstName,lastName,collegeName) {
    console.log(firstName);
    console.log(lastName);
    console.log(collegeName);
    }
   
    personalDetails("Sayali","Patil"," Kusumatai Rajarambapu Patil");
    console.log("=============Question 3rd==============");
    
    function swapalueDude(Virat,Anushka){
        console.log("Before swap :",Virat,Anushka);
        var temp =Virat ;
        Virat=Anushka;
        Anushka= temp;
        console.log("After swap :",Virat,Anushka);
        }
        swapalueDude("Virat","Anushka");

        swapalueDude(1000,2000);
        console.log("=======Question 4th======");
        function addThreeValue(val1,val2,val3){
            console.log("Addition of Three Value:",val1+val2+val3);
            return"Addition";
        }
        var Addition=addThreeValue(10.23,600,40);
        var Addition=addThreeValue(" hello "," good ","morning");
      