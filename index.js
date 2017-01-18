var getData = (function($){
	var URL = "https://api.github.com/repos/KJSCE-Codecell/kjsce-codecell.github.io/commits"
	$.get(URL,function(data,status){
			console.log(data);
			var img;
			var thumbnail_b = "<a class='thumbnail' href='";
			var thumbnail_m = "'>";
			var thumbnail_a = "</a>";
			var img_b = "<img src='";
			var img_a = "' alt='' class='img-responsive'>";
			var container_b = "<div class='col-md-3 col-xs-3' id='author'><div class='container-fluid'>";
			var container_a = "</div>";	
			var caption_b =  "<div class='caption'>";
			var caption_a = "</div></div>";
			var h2_b = " <strong> by "
			var h2_a = "</strong>"
			var commit_message_b = "<p> Commit Message: ";
			var commit_message_a = "</p>";
			//console.log(template)
			data.forEach(function(d){
				author = d.author;
				//console.log(d.commit.message);
				var mes = d.commit.message;
				var date = d.commit.committer.date;
				console.log(date);
				// img = "<img src=" + author.avatar_url + "/>  <h2>" +author.login +"</h2> <h3>"+mes+"</h3>"
				var template = 
				container_b +
					thumbnail_b + d.author.html_url + thumbnail_m + 
						img_b + 
							d.author.avatar_url + 
						img_a +  
					thumbnail_a +
					caption_b +
						h2_b + 
							author.login +
						h2_a +
						commit_message_b +
							mes+
						commit_message_a+
					caption_a +
				 container_a;
			$('#contrib').append(template);

			});
			
	});


})($);