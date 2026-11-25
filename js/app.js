// app.js desenvolvido com auxilio de i.a

const scene = document.querySelector('a-scene');
const target = document.querySelector('#target');
const painel = document.querySelector('#painel');
const status = document.querySelector('#status');
const inicio = document.querySelector('#inicio');
const controles = document.querySelector('#controles');
const instrucao = document.querySelector('#instrucao');
const iniciar = document.querySelector('#iniciar');
const parar = document.querySelector('#parar');
const abas = document.querySelectorAll('[data-painel]');
let arSystem;
let ativo = false;

function mensagem(texto, detectado = false) {
  status.textContent = texto;
  status.classList.toggle('detectado', detectado);
  status.classList.toggle('erro', !detectado && /erro|não foi|não carregou|use |abra |não encontrado/i.test(texto));
}

function prepararCena() {
  arSystem = scene.systems['mindar-image-system'];
  if (!arSystem) {
    mensagem('MindAR não carregou. Confira a conexão com a internet.');
    return;
  }
  iniciar.disabled = false;
  mensagem('Pronto para iniciar.');
}

if (scene.hasLoaded) prepararCena();
else scene.addEventListener('loaded', prepararCena);

// Verifica se o target foi compilado antes de solicitar a câmera.
iniciar.addEventListener('click', async () => {
  iniciar.disabled = true;
  try {
    if (location.protocol === 'file:') {
      throw new Error('Abra pelo Live Server ou GitHub Pages, não pelo arquivo HTML.');
    }
    if (!window.isSecureContext || !navigator.mediaDevices) {
      throw new Error('Use HTTPS (GitHub Pages) ou localhost.');
    }
    let resposta;
    try {
      resposta = await fetch('./assets/targets/targets.mind');
    } catch {
      throw new Error('Não foi possível acessar o target. Confira o servidor e a conexão.');
    }
    if (!resposta.ok || resposta.headers.get('content-type')?.includes('text/html')) {
      throw new Error('Target não encontrado. Confira assets/targets/targets.mind.');
    }
    ativo = true;
    inicio.hidden = true;
    controles.hidden = false;
    mensagem('Iniciando câmera...');
    await arSystem.start();
  } catch (erro) {
    voltarInicio(erro.message || 'Não foi possível iniciar a câmera.');
  }
});

// Eventos de detecção e perda do cartão.
scene.addEventListener('arReady', () => {
  if (!ativo) return;
  parar.disabled = false;
  mensagem('Câmera ativa. Aponte para o cartão.');
});
scene.addEventListener('arError', () => {
  voltarInicio('Não foi possível iniciar a RA. Confira câmera, target e permissões.');
});
target.addEventListener('targetFound', () => {
  if (!ativo) return;
  mensagem('Cartão reconhecido!', true);
  instrucao.textContent = 'Escolha uma seção do portfólio.';
  abas.forEach(aba => aba.disabled = false);
});
target.addEventListener('targetLost', () => {
  if (!ativo) return;
  mensagem('Cartão perdido. Aponte novamente.');
  instrucao.textContent = 'Mantenha o cartão visível.';
  abas.forEach(aba => aba.disabled = true);
});

// Troca a textura do painel ancorado, sem alterar o target.
abas.forEach(aba => aba.addEventListener('click', () => {
  painel.setAttribute('material', 'src', '#' + aba.dataset.painel);
  abas.forEach(item => item.setAttribute('aria-pressed', String(item === aba)));
}));

function voltarInicio(texto) {
  if (ativo) {
    ativo = false;
    try { arSystem.stop(); } catch (erro) { console.warn(erro); }
  }
  controles.hidden = true;
  inicio.hidden = false;
  iniciar.disabled = false;
  parar.disabled = true;
  abas.forEach(aba => {
    aba.disabled = true;
    aba.setAttribute('aria-pressed', String(aba.dataset.painel === 'img-perfil'));
  });
  painel.setAttribute('material', 'src', '#img-perfil');
  instrucao.textContent = 'Aponte para o cartão para visualizar o conteúdo.';
  mensagem(texto);
}
parar.addEventListener('click', () => voltarInicio('Câmera encerrada.'));
