try {
  const resultado = converte(123);
  console.log(resultado);
} catch (error: any) {
  if (error instanceof TypeError) {
    console.error("Você digitou um número. Digite um texto e tente novamente!");
  } else {
    console.log("Erro inesperado! Contate o administrador do sistema.");
  }
} finally {
  console.log("Fim do código");
}

export function converte(conteudo: any): string {
  return conteudo.toUpperCase();
}
