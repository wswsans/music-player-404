$(() => {
	$("html").on("keydown", (event) => {
		switch (event.code) {
			case "Slash":
				if (!(event.metaKey || event.ctrlKey)) return;
				$("div#shadow").stop().fadeToggle(100); $("div#dialog").stop().fadeToggle(100);
				break;
			case "Escape":
				$("div#shadow")[0].style.display = $("div#dialog")[0].style.display = "none";
				break;
		}
	})
	$("div#shadow").click(() => {$("div#shadow").stop().fadeToggle(100); $("div#dialog").stop().fadeToggle(100)});
	let i = 0;
	window.setInterval(() => {
		if (i == 1) {
			$("*")[Math.floor(Math.random() *$("*").length)].innerText = "";
			i = Math.floor(Math.random() *10);
		} else if (i == 0){
			$("*")[Math.floor(Math.random() *$("*").length)].innerHTML = "";
			i = Math.floor(Math.random() *50)+1;
		} else {
			i = Math.floor(Math.random() *50);
		}
		console.log(i)
	}, Math.floor(Math.random() *100)+10);
})
