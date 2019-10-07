<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>YouTube Data API V3</title>

    <!-- Bootstrap core CSS -->
    <link href="./public/css/bootstrap.min.css" rel="stylesheet" >
  </head>
  <body>
    <header class="bg-dark">
       
        <nav class="navbar navbar-light">
            <a class="navbar-brand text-white">YouTube</a>
            <div class="container">
                <form class="form" method="get" action="https://www.googleapis.com/youtube/v3/search" style="width:700px; margin-left:auto; margin-right:auto;">
                    <div class="input-group" >
                        <input type="text" class="form-control" name="q" placeholder="Search..." aria-label="Youtube Search" aria-describedby="button-addon2">
                        <div class="input-group-append">
                            <button type="submit" class="btn btn-outline-light" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </nav>
        
        
    
    </header>

    <main role="main">

        <div class="container">
        
       
            <div class="embed-responsive embed-responsive-16by9 d-none mt-5">
                <iframe class="embed-responsive-item" src="" allowfullscreen></iframe>
            </div>
       

            <ul class="list-unstyled video-list mt-5"></ul>
        </div>

    </main>


    <script src="./public/js/jquery.min.js"></script>
    <script src="./public/js/bootstrap.bundle.min.js"></script>
    <script src="./public/js/moment.js"></script>
    <script src="./public/js/script.js"></script>
    </body>
</html>
