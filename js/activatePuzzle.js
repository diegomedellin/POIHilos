/**
 * MIT License

Copyright (c) 2017 deepakshajan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

var options = {
				   solution: 			[[null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	 'O',	null,	null,   null,   null,   null,    'M',   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	 'I',	 'N',	 'P',	 'U',	 'T',	null,   null,   null,   null,    'U',   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	 'T',	null,	null,    'I',   null,   null,    'L',   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	'S',	null,	null,	 'P',	null,	null,    'T',   null,   null,    'T',   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	'C',	 'O',	'N',	 'C',	 'U',	 'R',	 'R',    'E',    'N',    'C',    'I',   'A',    null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	'C',	null,	'O',	 'T',	null,	null,    'R',   null,   null,    'T',   null,   null,    null,   null,   null,   null,   null],
		                                [null,	null,	null,	'K',	null,   'N',	null,	null,	null,    'A',   null,   null,    'A',   null,    null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	'E',	null,	'C',	null,	null,	null,    'T',   null,   null,    'R',   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	'T',	null,	'U',	null,	null,	null,    'I',   null,   null,    'E',    null,    null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	'S',	null,	'R',	null,	null,	null,    'V',   null,   null,    'A',    null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	'R',	null,	null,	null,    'O',   null,   null,   null,    null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	'E',	null,	null,	null,    'S',   'T',   'R',   'E',    'A',   'M',   'S',   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	'N',	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	'T',	null,	null,	null,   null,   null,   null,    null,    null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	'E',	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	'S',	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null]],


		            index: 				[[null,  null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,      2,   null,   null,   null,   null,   null,      8,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,      1,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,      6,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,      3,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,      4,   null,   null,   5,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,      7,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null]],

		         questions_across: [	  "1. Stream que está ligado a alguna fuente de entrada para el proceso, por ejemplo, teclado o socket. ​",
											"4. Es el número máximo de flujos de ejecución secuenciales (hilos) que podría estar ejecutando simultáneamente.",
											"7. Una abstracción utilizada cuando se leen o escriben archivos, o cuando se realiza una comunicación mediante sockets."
	                                  		],

		         questions_down: [		 "2. Stream que está ligado a una salida del proceso, por ejemplo, monitor o socket.",
		                                 "3. Los streams son una abstracción utilizada cuando se leen o escriben archivos, o cuando se realiza una comunicación mediante _______.",
		                                 "5. Servidores que atienden a varios clientes al mismo tiempo. Más aún, mientras están atendiendo siguen escuchando.",
		                                 "6. Servidores que atienden a los clientes de manera secuencial",
		                                 "8. La __________ de computadoras se divide en dos campos: procesos y threads (o procesos de poco peso)."]

	};


		cwp_nmsp.activateCWP(document.getElementById("myPuzzle"),false,options);