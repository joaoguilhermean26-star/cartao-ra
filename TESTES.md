# Registro experimental — tracking do cartão em RA

Aluno: João Guilherme (confirme o nome antes da entrega)
Data: __________ | Celular e navegador: __________
Link do repositório: __________
Link do GitHub Pages: __________

Mantenha o código e o target fixos. Varie apenas uma condição de cada vez. Anote tempo aproximado de detecção, estabilidade, perdas e recuperação. As hipóteses abaixo são previsões, não resultados medidos.

| Condição | Hipótese antes do teste | Resultado observado | Explicação a confirmar |
|---|---|---|---|
| Visualização normal, boa iluminação, cartão frontal (~25 cm) | Reconhecimento rápido e estável | A preencher | Mais detalhes visuais nítidos favorecem as correspondências. |
| Maior distância (~60 cm ou mais) | A detecção pode demorar ou se perder | A preencher | Menos pixels representam o cartão na imagem. |
| Cartão inclinado (~45°) | Pode ocorrer instabilidade | A preencher | A perspectiva altera a aparência dos pontos de referência. |
| Cartão parcialmente coberto (~25%) | Pode perder o rastreamento se regiões importantes forem ocultadas | A preencher | A oclusão reduz os pontos visíveis. |
| Iluminação reduzida | A detecção pode ficar lenta ou instável | A preencher | Baixa luz pode reduzir contraste e aumentar ruído. |

## Questão de análise
O desempenho varia porque o MindAR depende das informações visuais capturadas pela câmera. Distância, ângulo, oclusão e iluminação alteram a nitidez, a quantidade de características identificáveis e a confiabilidade da estimativa de pose, mesmo que o código permaneça igual.

## Conclusão (preencher após experimentar)
Na condição normal, observei __________. A condição que mais prejudicou o rastreamento foi __________, porque __________. Para melhorar o cartão/experiência, eu __________.
