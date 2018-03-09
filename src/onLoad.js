/*onload module. This doesn't seem quite right, should everything be
be wrapped up into one function like this? Especially with side effects?
*/
const title = (title) =>  title;
const bannerImg = (imgsrc) => imgsrc;
const copyBlurb = (copy) => copy;

const createLandingpage = (title, imgsrc, copy) => {
	var parentDiv = document.getElementById("content")
	var pageTitle = document.createElement('h1'); 
	var bannerImg = document.createElement('img');
	var blurb = document.createElement('div');
	pageTitle.innerHTML = title;
	//banner styling
  	bannerImg.setAttribute("src", imgsrc);
  	bannerImg.className = "img-responsive";
  	bannerImg.style.width=((504*screen.width)/1280)+'px';
	bannerImg.style.height=((124*screen.height)/800)+'px';
	//Content styling
  	blurb.innerHTML = copy;
  	blurb.className = "text-success";
	parentDiv.appendChild(pageTitle);
	parentDiv.appendChild(bannerImg);
	parentDiv.appendChild(blurb);
	return pageTitle;
  	return bannerImg;
  	return blurb;
}

export default createLandingpage;