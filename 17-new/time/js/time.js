		function leftTime()
		{
			var now=new Date();
			var endYear=2017;//不可修改
			var endMonth=10;//修改截止月份,输入1-12
			var endDay=5;//修改截止日，输入1—31
			var endHour=7;//修改截止小时，输入0-23
			var endMinute=20;//修改截止分钟，输入0-59
			var endSecond=0;//修改截止秒数，输入0-59
			var setTime=new Date(endYear,endMonth-1,endDay,endHour,endMinute,endSecond);
			var s1=now.getTime();
			var s2=setTime.getTime();
			var total=(s2-s1)/1000;
			var day=check(parseInt(total/(24*60*60)));
			var leftDay=total-day*24*60*60;
			var hour=check(parseInt(leftDay/(60*60)));
			var leftHour=total-day*24*60*60-hour*60*60;
			var min=check(parseInt(leftHour/60));
			var leftMin=total-day*24*60*60-hour*60*60-min*60;
			var sec=check(parseInt(leftMin,10));
			document.getElementById("timeReflection").innerHTML = "<span>" + day + "</span><span>  </span>"+ "<span>" + hour +  "</span><span> : </span><span>" + min + "</span><span> : </span><span id='second'>" + sec+ "</span>"; 
			document.getElementById("time").innerHTML = "<span>" + day + "</span><span>  </span>"+ "<span>" + hour +  "</span><span> : </span><span>" + min + "</span><span> : </span><span id='secondR'>" + sec+ "</span>"; 
			function check(i){
				if (i<10&&i>=0)
				{
					return "0"+i;
				}
				else if(i<0) return "0"+"0";
				else return i;
			}
		} 
		setInterval("leftTime()",1000); 
		function timelight(){
			second=document.getElementById("second");
			second.style.boxShadow="0 0 50px white";
			secondR=document.getElementById("secondR");
			secondR.style.boxShadow="0 0 50px white";		
		}
		setTimeout("r()",500);
		function r(){
		setInterval("timelight()",1000);}