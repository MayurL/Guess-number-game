let number

const generate_number=()=>
{
   number=((Math.trunc(Math.random()*10))%6)+1
   //number=Math.random()
    console.log(number);
}

const generate_number_btn_click=()=>
{
    document.querySelector('#section1').style.display='none';
    document.querySelector('#section2').style.display='none';
    document.querySelector('#section3').style.display='block';

    setTimeout(()=>{
        generate_number();
        
    document.querySelector('#section1').style.display='none';
    document.querySelector('#section2').style.display='block';
    document.querySelector('#section3').style.display='none';


    },300);



}
//
const check_number=()=>
{
    let value=document.querySelector("#field").Value;
    console.log("hi");
    console.log(value+" "+number);
    if(value==number)
    {
        alert("YOu Won");
    }
    else
    {
        alert('you lose')
    }
}