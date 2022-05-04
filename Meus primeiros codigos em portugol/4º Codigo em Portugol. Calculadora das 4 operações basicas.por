programa
{
	
	funcao inicio()
	{
		inteiro contador,limite,resultado,tabuada,A,B

		escreva("Qual tabuada você quer fazer? " + "\n" )
		escreva("\n" + "1 - Adição 2 - Subtração 3 - Multiplicação 4 - Divisão" + "\n" + "\n")
		leia(tabuada)

		se(tabuada==1){

			escreva("\n" + "Qual numero da tabuada você deseja? ")
			leia(A)

			escreva("\n" + "Qual o limite a ser Somado? ")
			leia(B)

			contador = 1
			limite = B
			
			faca{

			resultado = A + contador
			escreva(A + " + " + contador +  " = " + resultado + "\n")
			contador ++
		}enquanto(contador<=limite)
		
		
		}

		se(tabuada==2){

			escreva("\n" + "Qual numero da tabuada você deseja? ")
			leia(A)

			escreva("\n" + "Qual o limite a ser Subtraido? ")
			leia(B)
			
			contador = 1
			limite = B
			
			faca{

			resultado = contador - A  
			escreva(A + " - " + contador +  " = " + resultado + "\n")
			contador ++
		}enquanto(contador<=limite)
		
		
		}

		se(tabuada==3){

			escreva("\n" + "Qual numero da tabuada você deseja? ")
			leia(A)

			escreva("\n" + "Qual o limite a ser Multiplicado? ")
			leia(B)
			
			contador = 1
			limite = B
			
			faca{

			resultado = contador * A 
			escreva(A + " * " + contador +  " = " + resultado + "\n")
			contador ++
		}enquanto(contador<=limite)
		
		
		}

		se(tabuada==4){

			escreva("\n" + "Qual numero da tabuada você deseja? ")
			leia(A)

			escreva("\n" + "Qual o limite a ser Dividido? ")
			leia(B)
			
			contador = 1
			limite = B
			
			faca{

			resultado = contador / A
			escreva(A + " / " + contador +  " = " + resultado + "\n")
			contador ++
		}enquanto(contador<=limite)
		
		
		}

		senao{

			escreva("\n" + "OUSAS IR CONTRA A ORDEM????" + "\n")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1433; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */