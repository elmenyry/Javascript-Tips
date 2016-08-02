$(function(){

var now = new Date();
var maDate = new Date(now);
var nJour = maDate.getDay();
var annee   = now.getFullYear();
var mois    = now.getMonth() + 1;
var jour    = now.getDate();
var nom_jour="";
var nom_mois="";
var event=0;
var nom_jour_pmois=0;
var fin=0;
var annee_now   = now.getFullYear();
var mois_now    = now.getMonth() + 1;
var tesst=0;
var id_event = 1;
var list_events = [ "25/04/2016",  "25/05/2016","25/07/2016","25/07/2016"];
 var objet_data = {
"1" : {id : 1, date : "25/04/2016", titre : 'titre 1 de evenet', description : 'lorem ipsum description', photo : 'images/photo.jpg'},
"2" : {id : 2,date : "25/05/2016", titre : 'titre 2 de evenet', description : 'lorem ipsum description 02', photo : 'images/photo2.jpg'},
"3" :{id : 3,date : "25/07/2016", titre : 'titre 3 de evenet', description : 'lorem ipsum description 03', photo : 'images/photo3.jpg'},
"4" : {id : 4,date : "25/07/2016", titre : 'titre 4 de evenet', description : 'lorem ipsum description 04', photo : 'images/photo4.jpg'}
 }
	var jourx ="";
   var moisx = "";
   var anneex = "";
function getevent(jour_e,mois_e,annee_e)
{
	event=0;


	for(var h=0;h<list_events.length;h++)
	{
	 jourx = list_events[h].substring(0,2);
    moisx = list_events[h].substring(3,5);
    anneex = list_events[h].substring(6,10);

		if ( (jourx==jour_e) &&  (moisx==mois_e) && (anneex==annee_e) )
		{
			event=1;
		}
	}

	return event;

}

function getfin(mois)
{
	var fin=0;
	var tst=annee%4 ;


	if((mois== 1) || (mois== 3) || (mois== 5) || (mois== 7) || (mois== 8) || (mois== 10)|| (mois== 12) )

	{
	fin=31;
	return fin;
	}
	else if(mois== 2)
	{
		if(tst==0)
		{
				fin=29;
		}
		else{
			fin=28;
		}
	
	return fin;
	}
	else{
		fin=30;
		return fin;
	}
}

function getnom_mois(mois)
{
	if(mois==1 || mois==13)
	nom_mois="Janvier";
	else if(mois==2)
	nom_mois="Février";
	else if(mois==3)
	nom_mois="Mars";
	else if(mois==4)
	nom_mois="Avril";
	else if(mois==5)
	nom_mois="Mai";
	else if(mois==6)
	nom_mois="Juin";
	else if(mois==7)
	nom_mois="Juillet";
	else if(mois==8)
	nom_mois="Aout";
	else if(mois==9)
	nom_mois="Septembre";
	else if(mois==10)
	nom_mois="Octobre";
	else if(mois==11)
	nom_mois="Novembre";
	else if(mois==12 || mois==0)
	nom_mois="Décembre";

	return nom_mois;

}

nom_mois=getnom_mois(mois);

$(".mois").prepend("<h2>"+nom_mois+"</h2>"); // num du mois



	for(i=jour;i>1;i--) // le jour du 1er moi
	{
		 if(nJour==0)
		{
			nJour=6;	
		}
		else if(nJour>0)
		{
			nJour--;
		}
	}

if(nJour==0) // dimanche
{
 nJour=7;
}

nom_jour_pmois=nJour;

fin=getfin(mois);
var events=0;
var j=1;
	for(i=nJour;i<(fin+nJour);i++)// ramplire apartir du 1er du moi
	{

		if((j==jour) && (mois==mois_now) && (annee==annee_now) )
		{
		$(".j"+i).prepend("<a data-jour="+j+" href='#' class='now'> "+j+" </a>");
		
		}
		else
		{
			$(".j"+i).prepend("<a data-jour="+j+" href='#'> "+j+" </a>");
		}
		j++;
	}
j=1;
	for(var t=nom_jour_pmois; t<=fin+nom_jour_pmois ; t++)// event
	{
		var ttt=getevent(j,mois,annee);
		if(ttt==1)
		{
			$(".j"+t+" a").addClass("event");
			$(".j"+t+" a").attr("data-id", id_event);
			id_event++;
		}
		else
		$(".j"+t+" a").removeClass("event");
		j++;

	}
	$(".prev").click(function(e){
		e.preventDefault();
			$( "td a" ).remove();
			$( ".mois h2" ).remove();
			if(mois==1)
			{
			mois=12;
			annee--;
			}
			else
			mois--;
			fin=getfin(mois);
			nom_mois=getnom_mois(mois);
			$(".mois").prepend("<h2>"+nom_mois+"</h2>"); // num du mois
			for(i=fin; i>=1; i--)// le jour du 1er moi
			{
				 if(nom_jour_pmois==0)
				{
					nom_jour_pmois=6;	
				}
				else if(nom_jour_pmois>0)
				{
					nom_jour_pmois--;
				}
			}
				if(nom_jour_pmois==0) // dimanche
				{
				 nom_jour_pmois=7;
				}

				var j=1;
				for(i=nom_jour_pmois;i<(fin+nom_jour_pmois);i++)// ramplire apartir du 1er du moi
				{
					var tesstt=getevent(j,mois,annee);

					if((j==jour) && (mois==mois_now) && (annee==annee_now) )
					$(".j"+i).prepend("<a data-jour="+j+" href='#' class='now'> "+j+" </a>");
				
				else
					$(".j"+i).prepend("<a data-jour="+j+" href='#'> "+j+" </a>");
					j++;
				}
j=1;
	for(var t=nom_jour_pmois; t<=fin+nom_jour_pmois ; t++)// event
	{
		var ttt=getevent(j,mois,annee);
		if(ttt==1)
		{
			$(".j"+t+" a").addClass("event");
			$(".j"+t+" a").attr("data-id", id_event);
			id_event++;
		}
		else
		$(".j"+t+" a").removeClass("event");

		j++;
		}
	});	

$(".next").click(function(e){
	e.preventDefault();
			$( "td a" ).remove();
			$( ".mois h2" ).remove();
			if(nom_jour_pmois==7)
				nom_jour_pmois=0;
			for(i=1; i<=fin; i++)// le jour du 1er moi
			{
				 if(nom_jour_pmois==6)
				{
					nom_jour_pmois=0;	
				}
				else if(nom_jour_pmois>=0)
				{
					nom_jour_pmois++;
				}
			}
			if(nom_jour_pmois==0) // dimanche
				{
				 nom_jour_pmois=7;
				}
			if(mois==12)
			{
				mois=1;
				annee++;
			}
			else
			mois++;
			fin=getfin(mois);
			nom_mois=getnom_mois(mois);
			$(".mois").prepend("<h2>"+nom_mois+"</h2>"); // num du mois
			var j=1;
				for(i=nom_jour_pmois;i<(fin+nom_jour_pmois);i++)// ramplire apartir du 1er du moi
				{
					if((j==jour) && (mois==mois_now) && (annee==annee_now) )
					$(".j"+i).prepend("<a data-jour="+j+" href='#' class='now'> "+j+" </a>");
				else
					$(".j"+i).prepend("<a data-jour="+j+" href='#'> "+j+" </a>");
					j++;
				}
j=1;
	for(var t=nom_jour_pmois; t<=fin+nom_jour_pmois ; t++)// event
	{
		
		var ttt=getevent(j,mois,annee);
		if(ttt==1)
		{
			$(".j"+t+" a").addClass("event");
			$(".j"+t+" a").attr("data-id", id_event);
			id_event++;
		}
		else
		$(".j"+t+" a").removeClass("event");

		j++;
	}
});	
$("td").on("click", "a.event", function(e){
	e.preventDefault();
	if( $(this).hasClass("event")) {
		$("p").empty();
		var jour_s=$(this).data("jour");
		$(this).addClass("jour_j");
		var mois_ = mois
		/*$("#event_avtif p").prepend(annee+"/"+mois+"/"+jour_s+"<br/>");
		$("#event_avtif p").prepend(jour_s+"/"+getnom_mois(mois)+"/"+annee+"<br/>");*/
		if( mois_ < 10 ) {
			mois_ = "0"+mois;
		}
		var date_cible = jour_s+"/"+mois_+"/"+annee;
		var titre = "";
		var description = "";
		var photo = "";

		for(y=1;y<=list_events.length;y++)
		{
			if (objet_data[y.toString()].date==date_cible)  

			{
				 titre = objet_data[y.toString()].titre;
				 description = objet_data[y.toString()].description;
				 photo = objet_data[y.toString()].photo;
				$("#event_avtif p").append(titre);
				$("#event_avtif p").append(description);
				$("#event_avtif p").append(photo+" <br/>" );
			}


		}
	}
});
});