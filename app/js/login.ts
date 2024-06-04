window.onload = function () {
	var headTag = document.getElementsByTagName("head")[0];
	const linkforCSSfile = document.createElement("link");
	linkforCSSfile.href = "./../../app/css/login.css";
	linkforCSSfile.type = "text/css";
	linkforCSSfile.rel = "stylesheet";
	headTag.appendChild(linkforCSSfile);
	document.body.appendChild(headTag);
};
