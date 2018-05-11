$(() => {

	// add menu items
	$.getJSON("data/menu.json", (data) => {
		//console.log(data);

		//empty paragraphs
		$("p").addClass("hide");

		addMenuItems(data.products);

		const menuArray = data.products;
		console.log(menuArray);

		////////////////////		
		function addMenuItems(menuArray) {
			//add Beverage	
			$("#menu").append("<h3>Beverage</h3>");
			
			menuArray.forEach((product) => {

				if (product.type == "beverage") {
					let $menuBeverage = $("<table>")
					$("#menu").append($menuBeverage);
					$menuBeverage.addClass("col-sm-0");
					const $img = $("<img>");
				
					const src = "images/" + product.img;
					$img.addClass("col-sm-0");
					const imgAltText = "Sorry, no image.";
					const imageTag = makeImageHTML(src, imgAltText);
										
					$menuBeverage.append(`<td>${product.name}</td>+<td>${product.price}</td>`);
					$menuBeverage.append(imageTag);

					
				


					

				}

			});

		}
		///////////////////////
		// add bakery products	
		$("#menu").append("<h3>Bakery</h3>");
		
		menuArray.forEach((product) => {

			
			if (product.type == "bakery") {
					const $menuBakery = $("<table>")
				$("#menu").append($menuBakery);
					const $img = $("<img>");
					const src = "images/" + product.img;
				$img.addClass("col-sm-12");
					const imgAltText = "Sorry, no image.";
					const imageTag = makeImageHTML(src, imgAltText);
					
				$menuBakery.append(`<td>${product.name}</td>+<td>${product.price}</td>`);
				$menuBakery.append(imageTag);


			}

		});

		///////////////////		
		//add other
		$("#menu").append("<h3>Other</h3>");
			

		menuArray.forEach((product) => {

			if (product.type == "other") {
				
				let $menuOther = $("<table>")
				$("#menu").append($menuOther);
					const $img = $("<img>");
				
					const src = "images/" + product.img;
				$img.addClass("col-sm-12");
					const imgAltText = "Sorry, no image.";
					const imageTag = makeImageHTML(src, imgAltText);
					$menuOther.append(`<td>${product.name}</td>+<td>${product.price}</td>`);
				$menuOther.append(imageTag);

				
			}

		});

	});


	///////////////BREAK FOR LOCATION

	// adding location
	$.getJSON("data/locations.json", (data) => {
		console.log(data);
		addLocationsData(data.locations);
	//	addHours(data.locations);



		function addLocationsData() {
			let $article = $("<article>");
			$("#locations").append($article);

			const $locationArray = data.locations;
			
			$locationArray.forEach((location) => {
			addLocation(location, $article);
			

			});
		}

		
		function addLocation(location, $article){
			//	let $article = $("<article>");
				$("#locations").append($article);
				$article.append(`<h3>${location.name}</h3>`);

				$article.append("<h4>Weekly Hours</h4>");
				addHours(location.hours, $article);
				console.log(location.hours, $article);

				$article.append("<h4>Staff Members</h4>");
				
			addStaff(location.staff, $article);
		}
		////////////adding  hours

		function addHours(hoursArray, $article) {
			console.log(hoursArray);
				
				hoursArray.forEach((hours) => {
				let $ulhours = $("<ul>");
					$article.append($ulhours);
					addLocationHours(hours, $article);
					console.log(hoursArray);


			});


		}
		
		function addLocationHours(hours, $article) {
			let $ulHourList = $("<ul>");
			$article.append($ulHourList);
			
			$ulHourList.append(`<li>${hours.day + " : " + hours.time}</li>`)
			
			
			console.log($ulHourList);
		}

	

		function addStaff(staffArray, $article) {
			console.log(staffArray);
			staffArray.forEach((member) => {

				//set up to hold div
				const $staffDiv = $("<div>");
				$article.append($staffDiv);
				addStaffMember(member, $staffDiv);

			});
		}

		
		function addStaffMember(member, $article) {
			console.log(member);

			const $staffDiv = $("<div>");
			$article.append($staffDiv);
			
			const $img = $("<img>");
				
			const src = "images/" + member.img;
			$img.addClass("col-sm-4");
			const imgAltText = `Image of ${member.name}.`
			
			const imageTag = makeImageHTML(src, imgAltText);
			$staffDiv.append(imageTag);
			$staffDiv.append(`<h5>${member.name}</h5>`);
			$staffDiv.append(`<p>${member.text}</p>`)
			$staffDiv.attr("img-responsive");
			
			
			
			
		}

	});




//////////////////////////////
	function makeImageHTML(src, alt) {

		const $img = $("<img>");
		$img.attr("src", src);
		$img.attr("alt", alt);
		$img.append(src);
		return $img;
		


	}



});