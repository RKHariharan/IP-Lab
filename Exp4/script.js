console.log(5);
function validateMail(){
	var mailid=document.getElementById("mailip");
	var result=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(mailid.value.match(result))
	{
		alert("Valid email address!");
	}
	else
	{
		alert("Invalid email address!");
	}
}
function sumComplex()
{
    var r1=parseInt(document.getElementById('real1').value);
    var i1=parseInt(document.getElementById('im1').value);
    var r2=parseInt(document.getElementById('real2').value);
    var i2=parseInt(document.getElementById('im2').value);
    const complex=[{real:r1,im:i1},{real:r2,im:i2}];
    var sum=(complex[0].real+complex[1].real)+"+i"+(complex[0].im+complex[1].im);
    alert("resulting: complex no:"+sum);
}
function combinations()
{
	var str1=document.value.getElementById("stringip");
    let possible_comb=[];
    for(let i=0;i<str1.length();i++)
    {
        for(let j=i+1;j<str1.length()+1;j++)
        {
            var element=str1.slice(i,j);
            possible_comb.push(element);
        }
    }
    alert(toString(possible_comb));
}



function duplicate_array()
{
    var array=[];
    array.push(Document.getElementById("arrayip").value);
    let temp=[];
    for(let i=0;i<array.length;i++)
    {
        if (array[i] in temp)
        {
            alert(array[i]+"is duplicate");
        }
    }
}