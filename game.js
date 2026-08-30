function tom() {
    
    document.getElementById("page1").style.display = 'none';
    document.getElementById("page2").style.display = 'block';
    const video = '<video autoplay loop muted playsinline width="100%"><source src="gojo.mp4"  type="video/mp4">halaman tak mendukung html 5</video>'
                     
    document.getElementById("anim").innerHTML = video;
    }