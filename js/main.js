function insertar() {
    var header2 = document.getElementById("header");
    var div1 = document.createElement("div");
    var contenedor= document.getElementById('contenedor-boton');
    var content =
      '<nav class="navbar navbar-expand-lg bg-dark text-white "><div class="container-fluid "><a class="navbar-brand  fs-4 font-weight-bold mr-2 text-white" href="#"><i class="bi bi-car-front-fill me-3"></i>Luxury Cars</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav ms-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link active fs-6 text-white" aria-current="page" href="#">INICIO</a></li><li class="nav-item"><a class="nav-link text-white fs-6 text-white" href="#">AYUDA</a></li><li class="nav-item dropdown fs-4"><a class="nav-link text-white fs-6 me-3 dropdown-toggle text-white" href="#" role="button" data-bs-toggle="" >NOSOTROS</a></a></li></ul><form class="d-flex" role="search"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"><button class="btn btn-outline-success" type="button">Search</button></form></div></div></nav>';
    console.log(content);
    div1.innerHTML = content;
    header2.appendChild(div1);
  
    var main = document.getElementById("main");
    var container = document.createElement("div");
    var content =
      '<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel"><div class="carousel-indicators"><button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button><button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button> <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>    </div><div class="carousel-inner"><div class="carousel-item active"><img src="./img/jeep.jpg" class="d-block w-100" alt="..."><div class="carousel-caption d-none d-md-block"><h5>Etiqueta de la primera diapositiva</h5><p>Algún contenido placeholder representativo para la primera diapositiva.</p></div></div><div class="carousel-item"><img src="./img/audi_a5.jpg" class="d-block w-100" alt="..."><div class="carousel-caption d-none d-md-block"><h5>Etiqueta de la segunda diapositiva</h5><p>Algún contenido placeholder representativo para la segunda diapositiva.</p></div></div><div class="carousel-item"><img src="./img/porshe-911.jpg" class="d-block w-100" alt="..."><div class="carousel-caption d-none d-md-block">          <h5>Etiqueta de la tercera diapositiva</h5><p>Algún contenido placeholder representativo para la tercera diapositiva.</p></div></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" ata-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Anterior</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">     <span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Siguiente</<span></button></div>';
    container.innerHTML = content;
    main.appendChild(container);
 
    var footer = document.getElementById("footeer");
    var parr = document.createElement("div");
    var content= 
    '<address class="text-light text-center footeerd"><em><b>Desarrollador</b> Felipe Dulcey </em></address>';
    footer.className="bg-dark"
    parr.innerHTML=content;
    footer.appendChild(parr);
    
    
    contenedor.style.display="none";
  }



