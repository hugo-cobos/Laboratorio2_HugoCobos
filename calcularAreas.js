//Crear Funciones para llamar
//Funciones y Calcular areas

let calcSurface = (figure) =>{
    const surfaces = require ('./surfaces.js')


    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    //Validar la figura a calcular

    switch(figure){
        case 'square':
            process.stdout.write('Por favor ingrese el lado del cuadrado: ');
            process.stdin.on('data', (chunck) =>{
                let side = parseFloat(chunck);
                let surface = surfaces.square(side);

            process.stdout.write(`La superficie del cuadrado es ${ surface } metros cuadrados\n `);
            process.stdin.destroy();

        });
            break;


        case 'triangle':
            process.stdout.write('Por favor ingrese la base y la altura del triangulo, seprado por un espacio: ');
            process.stdin.on('data', (chunck) =>{
                let baseAndHeight = chunck.split(' ');
                let base = parseFloat(baseAndHeight[0]);
                let height = parseFloat(baseAndHeight[1]);
                let surface = surfaces.triangle(base, height);

            process.stdout.write(`La superficie del triangulo es ${ surface } metros cuadrados\n `);
            process.stdin.destroy();

        });
            break;


        case 'rectangle':
            process.stdout.write('Por favor ingrese la base y la altura del rectangulo, separados por un espacio: ');
            process.stdin.on('data', (chunck) =>{
                let baseAndHeight = chunck.split(' ');
                let base = parseFloat(baseAndHeight[0]);
                let height = parseFloat(baseAndHeight[1]);
                let surface = surfaces.rectangle(base, height);

            process.stdout.write(`La superficie del triangulo es ${ surface } metros cuadrados\n `);
            process.stdin.destroy();

        });
            break;

        
        case 'circle':
            process.stdout.write('Por favor ingrese el radio de un circulo:');
            process.stdin.on('data', (chunk) => {
                let surface = surfaces.circle(parseFloat(chunk));
            process.stdout.write(`La superficie del circulo es ${surface} metros cuadrados \n `);
            process.stdin.destroy();

        });
          break;


        case 'ellipse':
            process.stdout.write('Por favor ingrese el valor de A y el valor de B del elipse, separados por un espacio: ');
            process.stdin.on('data', (chunk) => {
                let baseAndHeight = chunk.split(' ');
                let base = parseFloat(baseAndHeight[0]);
                let height = parseFloat(baseAndHeight[1]);          
                let surface = surfaces.ellipse(base, height);
      
            process.stdout.write(`La superficie del la elipse es de ${ surface } metros cuadradros \n `);
            process.stdin.destroy();
      
        });
            break;

        default: 
            process.stdout.write('opcion incorrecta. por favor intentalo de nuevo');
            process.stdout.write('Nombre de las figuras disponibles: square, triangule, rectangle, circle, ellipse');
            process.exit();
            break;

         }
         
    }
      calcSurface(process.argv[2]);
      process.on('exit', () =>{
      process.stdout.write('Hasta la proxima \n');
      
    });