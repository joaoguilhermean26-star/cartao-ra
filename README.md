# Meu Cartão Profissional em RA
Atividade prática de Realidade Aumentada — Aula 02. HTML, CSS, JavaScript, MindAR 1.2.5 e A-Frame 1.5.0.

## 1. Cartão e autoria
O cartão preto e dourado com QR Code do GitHub está em `assets/images/cartao.png`. Confira nome, formação, habilidades e projetos antes de entregar. Os quatro painéis têm fontes SVG editáveis. O trabalho pede autoria: explique o auxílio de IA de acordo com as regras do professor.

## 2. Target incluído
O arquivo `assets/targets/targets.mind` foi fornecido pelo aluno e já está incluído. Contém um target de 1657 x 949 pixels, as mesmas dimensões do cartão atual. O reconhecimento deve ser confirmado pela câmera. Se modificar a imagem, compile novamente no https://hiukim.github.io/mind-ar-js-doc/tools/compile/ e substitua o arquivo .mind.

## 3. Executar e publicar
Não é necessário npm. Use Live Server no VS Code ou `python -m http.server 8000` no terminal na raiz da pasta e acesse http://localhost:8000. Câmera exige contexto seguro; localhost é permitido, mas o IP HTTP da rede normalmente não é.

Crie um repositório vazio chamado `cartao-ra` no GitHub. Com o target já incluído:
```sh
git init
git add .
git commit -m "Cartao profissional em realidade aumentada"
git branch -M main
git remote add origin https://github.com/joaoguilhermean26-star/cartao-ra.git
git push -u origin main
```
No GitHub, vá a Settings > Pages > Build and deployment > Source: Deploy from a branch > main > /(root) > Save. Abra a URL HTTPS que o GitHub apresentar após a publicação. Os scripts CDN precisam de internet.

## 4. Teste no celular
Abra o site publicado, toque em Iniciar experiência RA e permita o acesso. Imprima cartao.png (sem recortar ou distorcer) ou abra a imagem em outro dispositivo. Aponte a câmera para o cartão. O painel aparece ancorado ao cartão; os botões selecionam quatro blocos de informações em RA. O cubo demonstra Rotation; o painel usa Position e Scale. Preencha TESTES.md após realizar os cinco testes sem alterar o código.

## 5. Entrega
- PNG final do cartão.
- Repositório com o código e targets.mind.
- Link HTTPS do GitHub Pages.
- Registro dos testes e conclusão baseada nas observações reais.

Documentação: https://hiukim.github.io/mind-ar-js-doc/ e https://aframe.io/docs/.
