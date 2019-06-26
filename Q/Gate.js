
/*



Number of inputs

Number of outputs

Formula for application
	(Usually a matrix to multiply against the inputs)
	But can also be measurement (collapse) gate
	or a Bloch Sphere or other visualization gate



*/


Q.Gate = function( operation, label, name ){




	`
	
		SEE ALSO
	
	https://en.wikipedia.org/wiki/Quantum_logic_gate
	`


	this.index = Q.Gate.index ++
	
	this.label = 
		typeof label === 'string'
		? label 
		: 'g'

	this.name =
		typeof name === 'string'
		? name
		: 'Unlabeled'

	this.applyTo = 
		typeof operation === 'function' 
		? operation 
		: function(){ Q.warn( `Gate #${this.index} (“${this.name}”) has no operation function.` )}
}




Object.assign( Q.Gate, {

	index: 0,
	help: function(){ return Q.help( this )},
	constants: {},
	createConstant: Q.createConstant,
	createConstants: Q.createConstants
})




Q.Gate.createConstants(

	'IDENTITY', new Q.Gate( 

		function( qubit ){

			return qubit//  No need to even multiply by identity matrix ;)
		},
		'I', 'Identity'
	),
	'MEASURE', new Q.Gate( 

		function( qubit ){

			return qubit.collapse()
		},
		'M', 'Measure'
	),




	'HADAMARD', new Q.Gate( function( qubit ){

			return new Q.Qubit( Q.Matrix.HADAMARD.multiply( qubit ))
		},
		'H', 'Hadamard' ),
	
	'PAULI_X', new Q.Gate( function( qubit ){

			return new Q.Qubit( Q.Matrix.PAULI_X.multiply( qubit ))
		},
		'X', 'Pauli X' ),
	
	'PAULI_Y', new Q.Gate( function( qubit ){

			return new Q.Qubit( Q.Matrix.PAULI_Y.multiply( qubit ))
		},
		'Y', 'Pauli Y' ),
	
	'PAULI_Z', new Q.Gate( function( qubit ){

			return new Q.Qubit( Q.Matrix.PAULI_Z.multiply( qubit ))
		},
		'Z', 'Pauli Z' ),
	
	'PHASE', new Q.Gate( function( qubit ){

			return new Q.Qubit( Q.Matrix.PHASE.multiply( qubit ))
		},
		'S', 'Phase' ),
	
	'PI_8', new Q.Gate( function( qubit ){

			return new Q.Qubit( Q.Matrix.PI_8.multiply( qubit ))
		},
		'T', 'π ÷ 8' ),




	'CONTROLLED_NOT', new Q.Gate( function( controlQubit, targetQubit ){

			return Q.Matrix.CONTROLLED_NOT.multiply( controlQubit.multiplyTensor( targetQubit ))
		},
		'C', 'Controlled Not (C-Not)' ),




	/*





	'SWAP', new Q.Gate(
		[ 1, 0, 0, 0 ],
		[ 0, 0, 1, 0 ],
		[ 0, 1, 0, 0 ],
		[ 0, 0, 0, 1 ]),

	'CONTROLLED_Z', new Q.Gate(
		[ 1, 0, 0,  0 ],
		[ 0, 1, 0,  0 ],
		[ 0, 0, 1,  0 ],
		[ 0, 0, 0, -1 ]),

	'CONTROLLED_PHASE', new Q.Gate(
		[ 1, 0, 0, 0 ],
		[ 0, 1, 0, 0 ],
		[ 0, 0, 1, 0 ],
		[ 0, 0, 0, new Q.ComplexNumber( 0, 1 )]),




	'TOFFOLI', new Q.Gate(
		[ 1, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 1, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 1, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 1, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 1, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 1, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 1 ],
		[ 0, 0, 0, 0, 0, 0, 1, 0 ]),

	'CONTROLLED_SWAP', new Q.Gate(//  Fredkin
		[ 1, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 1, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 1, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 1, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 1, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 1, 0 ],
		[ 0, 0, 0, 0, 0, 1, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 1 ])
	*/




	'BLOCH_SPHERE',
	new Q.Gate( 

		function( qubit ){

			//  Make a new Bloch Sphere visualizer!
		},
		'B', 'Bloch Sphere visualizer'
	)
)




Object.assign( Q.Gate.prototype, {

	toText: function(){

		return `-${this.label}-`
	},
	toDiagram: function(){


		//  Hadamard
		//   ┌───┐
		//  ─┤ H ├─
		//   └───┘

	},
	toHtml: function(){

		return `<div class="gate">${this.label}</div>`
	}
})
