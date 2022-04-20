const d = document;

export default function enviardatosdeformulario(url){
    d.addEventListener("submit", (e) => {
        // preventDefault cancela el evento del submit
        e.preventDefault();

        const $form = d.querySelector(".contact-form"),
         $loader=d.querySelector(".contact-form-loader"),
         $response = d.querySelector(".contact-form-response"),
         $inputs = d.querySelectorAll(".contact-form [required]");

         var parametrosAjax = new FormData();
        parametrosAjax.append("proceso", "CONTACTO_INSERT");
        $inputs.forEach(input =>{
            parametrosAjax.append(input.name,input.value);
        })


         $loader.classList.remove("none");

         $.ajax({
            url: url,
            type: "POST",
            data: parametrosAjax,
            contentType: false,
            cache: false,
            processData: false,
            async: false,
            success: function (resultado) {
              res = resultado;
              if (resultado == 0) {
                  alert(`Ocurrió un error ${resultado}`)
              } else {
        
              }
            },
          })

        //  setTimeout(()=>{
            $loader.classList.add("none");
            $response.classList.remove("none");
            // $form.reset();
            setTimeout(() => {$response.classList.add("none");}, 3000);
        // },3000);
    })
}