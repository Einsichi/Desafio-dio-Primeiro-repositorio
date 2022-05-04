programa
{
	
	funcao inicio()
	{

			real nota1,nota2,nota3,nota4,media
			cadeia aluno

			escreva("Qual seu nome? ")
			leia(aluno)

			escreva("\n" + "Qual a sua nota um? ")
			leia(nota1)

			escreva("Qual a sua nota dois? ")
			leia(nota2)

			escreva("Qual a sua nota três? ")
			leia(nota3)

			escreva("Qual a sua nota quatro? ")
			leia(nota4)

			media = (nota1+nota2+nota3+nota4)/4

			escreva("\n" + "A sua media é: " + media + "\n")

			se(media>=10) {

				escreva("\n" + "Tu és brabo!" + "\n")
			}

			senao{

				escreva("\n" + "Você é mais forte que isso!" + "\n")
			}
			
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 499; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */