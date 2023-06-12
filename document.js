// Función que se ejecuta al cargar los datos del XML
$(document).ready(() =>{
    $('#oferta').hide();

    $('#CargarDatos').click(() => {
      $('#CargarDatos').hide();
      $.ajax({
          type: 'GET',
          url: 'oferta.xml',
          dataType: 'xml'

      }).done((data) => {
          $(data).find('ofertas').each(function() {
              let fila = $('<tr>');
                  fila.append($(`<td>${$(this).find
                  ('profesion').text()}</td>`));
                  fila.append($(`<td>${$(this).find
                    ('descripcion').text()}</td>`));

                    $('#oferta tbody').append(fila);
        });
        $('#oferta').show();
      });
    });
  });


// Función que se ejecuta al cargar los datos del JSON

$(document).ready(()=>{
  $("#botonjson").click(function(){
    $("#botonjson").hide();
    $.ajax({
      type: "GET",
      url: "perfil.json",
      dataType: "json"
    }).done((data)=>{
      $.each(data,function(indice, persona){
        let fila = $("<tr>");
        fila.append($(<td>${persona.Nombre}</td>));
        fila.append($(<td>${persona.Correo}</td>));
        fila.append($(<td>${persona.Contrasena}</td>));
        

        $("#oferta tbody").append(fila);
      });
      $("#oferta").show();
    });
  });
});
  