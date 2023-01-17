with open(file='arquivo.csv', mode='r', encoding='utf8')  as arquivo:
    coluna_valores =[] # ----> Adiciona essa variavel para guardar os valores
    linha = arquivo.readline()
    linha = arquivo.readline()
    while linha:
      linha_separada = linha.split(sep=',')
      valor_venda = linha_separada[1]  # ---> pega o valor da linha
      coluna_valores.append(valor_venda) # -----> joga o valor para dentro da variavel
      linha = arquivo.readline()
print(coluna_valores) # ----> aqui você le os valores que foram jogados 




"""""
def extrai_coluna_csv(nome_arquivo: str, indice_coluna: int):

  coluna = []

    


  with open(file=nome_arquivo, mode= 'r' , encoding='utf8') as na:# leia o arquivo com o comando 'with' utilizando o parametro 'nome_arquivo'
   linha = na.readline()
   linha = na.readline()
   while linha:
     linha_separada = linha.split(sep=',')
     indice = linha_separada[indice_coluna]
     coluna.append(indice)
     linha = na.readline()


  # extraia a coluna do arquivo utilizando o parametro 'indice_coluna'
  
    
  return coluna


# extrair a coluna valor_manutencao
valor_manutencao = extrai_coluna_csv(nome_arquivo='arquivo.csv', indice_coluna=2)
print(valor_manutencao) # deve retornar ['med', 'vhigh', 'vhigh', ...]
"""