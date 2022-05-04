programa
{
	
	funcao inicio()
	{
		cadeia cesta[][]={{"Guerreiro","100"},{"Mago","200"},{"Assassino","300"}}

		escreva("\n" + "Soldados: ")			//Está linha mostra o soldado. Ou seja, vai mostrar o Guerreiro ou Mago ou Assassino
		escreva(cesta[2][0])				// Está linha mostra a localização do assassino, representado pelo numero 2, ou seja, o numero da linha dele
		
		
		escreva("\n" + "Quantidade: ")		//Está linha mostra a quantidade dos Soldados
		escreva(cesta[2][1] + "\n")			//Está linha mostra a localização do assassino, representado pelo numero 2 cujo é a linha e o numero 1 cujo é a coluna

		//A unica coisa que muda quando procuramos pela localização é a coluna. A linha não muda!!
		//Ou seja, o unico numero que NÃO MUDA é o 1, na linha 13!!!! Ele é a coluna. A linha é o respectivo numero na frente dele!!
		//LINHA NÃO MUDA, APENAS  A COLUNA!!!!!
	
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 862; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */