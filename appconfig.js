


const txtTarea = document.getElementById('txtTarea');
const dtpFechaLimite = document.getElementById('dtpFechaLimite');
const btnAgregar = document.getElementById('btnAgregar');


let ListaTareas= []


    btnAgregar.addEventListener('click', function(event) {
        event.preventDefault(); 
      
        const tarea = txtTarea.value;
        const fechaLimite = dtpFechaLimite.value;
      
       
        const nuevaTarea = {
          
          tarea: tarea,
          fechaLimite: fechaLimite,
          estado: "Sin Realizar"
        };
      
       
        ListaTareas.push(nuevaTarea)
        
        mostrarTarea(nuevaTarea);
      
       
        txtTarea.value = '';
        dtpFechaLimite.value = '';
      
      
      });



      function mostrarTarea(nuevaTarea) {
    
        const tbody = tabla.querySelector('tbody');
      
       
        const fila = document.createElement('tr');
      
       
        const celdaNumero = document.createElement('td');
        const celdaTarea = document.createElement('td');
        const celdaFechaLimite = document.createElement('td');
        const celdaEliminar = document.createElement('td');
      
      
        celdaNumero.textContent = "#"; // Set row number based on existing rows
        celdaTarea.textContent = nuevaTarea.tarea;
        celdaFechaLimite.textContent = nuevaTarea.fechaLimite;
      
        
        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn', 'btn-primary'); 
        btnEliminar.textContent = nuevaTarea.estado; 
      
        btnEliminar.addEventListener('click', () => {
            if (nuevaTarea.estado === 'Sin Realizar') {
              nuevaTarea.estado = 'Realizado';
              btnEliminar.textContent = 'Realizado'; 
            }
          });
        
        celdaEliminar.appendChild(btnEliminar); 
      
        
        fila.appendChild(celdaNumero);
        fila.appendChild(celdaTarea);
        fila.appendChild(celdaFechaLimite);
        fila.appendChild(celdaEliminar);
      
        
        tbody.appendChild(fila);
        console.log(ListaTareas)
      }
    
    








  