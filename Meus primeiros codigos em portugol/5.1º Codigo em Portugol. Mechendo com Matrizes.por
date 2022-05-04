programa
{
	
	funcao inicio()
	{
							//Lembando que cadeia é um tipo de variavel. String.
		cadeia frutas [4]		//Esta linha indica o numero de espaços alocados, ou seja, 4 espaços.
		inteiro contador = 0	
		
		frutas[0]="Guerreiro1"	// O numero dentro dos colchetes, indica o local onde esta armazenado a objeto "Guerreiros"
		frutas[1]="Guerreiro2"
		frutas[2]="Guerreiro3"
		frutas[3]="Guerreiro4"

		faca{				//Laço de repetição

		escreva(frutas[contador] + "\n" + "\n")     //Onde está escrito "contador", era para estar originalmente o indice(numero) do guerreiro escolhido. Mas ai não daria para listar todos de uma vez. Ai colocamos o contador pra mostrar todos. Contador é o laço de repetição.
		contador++			


		}enquanto (contador<=3) //Condição de parada do contador
		














		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 782; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */