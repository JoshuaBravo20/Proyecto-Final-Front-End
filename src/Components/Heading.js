import React from 'react'

function Heading() {
    return (
        <div>
            <div class="container-fluid">
                <div>
                    <div class="row">
                        <div id="texto1" class="col-8  mt-5">
                            <div class="row"><h1 class="ml-3">The First Heading  <h1 class="text-secondary"> Will Catch Your Eye</h1></h1></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac turpis id massa ultricies congue non sed elit. Sed sed purus a nunc eleifend rhoncus. Donec enim purus, interdum mollis dictum eu, aliquam at odio. </p>
                        </div>

                        <div class="col-4">
                            <img class="rounded-circle mt-5 mb-5 float-right" id="imagen1" src="https://us.hola.com/imagenes/noticias-de-actualidad/2009/09/21/michael-jackson.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heading