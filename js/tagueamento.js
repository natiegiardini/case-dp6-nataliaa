// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

document.querySelectorAll('a[href*="contato"]').forEach(link => {
  link.addEventListener('click', () => {
    gtag('event', 'click', {
      page_location: window.location.href,
      element_name: 'entre_em_contato',
      element_group: 'menu'
    });
  });
});


document.querySelectorAll('a[href$=".pdf"]').forEach(link => {
  link.addEventListener('click', () => {
    gtag('event', 'file_download', {
      page_location: window.location.href,
      element_name: 'download_pdf',
      element_group: 'menu'
    });
  });
});

document.querySelectorAll('.botao-vermais').forEach(botao => {
  botao.addEventListener('click', () => {
    gtag('event', 'click', {
      page_location: window.location.href,
      element_name: botao.textContent.trim().toLowerCase(),
      element_group: 'ver_mais'
    });
  });
});


const form = document.querySelector('form');
if (form) {
  form.addEventListener('focusin', () => {
    gtag('event', 'form_start', {
      page_location: window.location.href,
      form_id: form.id,
      form_name: form.name,
      form_destination: form.action
    });
  }, { once: true });

  form.addEventListener('submit', () => {
    gtag('event', 'form_submit', {
      page_location: window.location.href,
      form_id: form.id,
      form_name: form.name,
      form_destination: form.action,
      form_submit_text: form.querySelector('button[type="submit"]').textContent
    });

    setTimeout(() => {
      exibirPopupSucesso();
    }, 500);
  });
}

function exibirPopupSucesso() {
  gtag('event', 'view_form_success', {
    page_location: window.location.href,
    form_id: form.id,
    form_name: form.name
  });
}
