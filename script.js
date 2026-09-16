// GitHub Pages용 최소 이벤트 로깅.
// 현재는 console에만 남깁니다. GA4/Plausible 등을 붙이면 여기서 이벤트를 전송하세요.
document.querySelectorAll('.js-cta').forEach((el) => {
  el.addEventListener('click', () => console.log('event: consultation_cta_clicked'));
});

const consult = document.getElementById('consultButton');
consult?.addEventListener('click', (e) => {
  if (consult.getAttribute('href') === 'YOUR_FORM_URL') {
    e.preventDefault();
    alert('index.html의 YOUR_FORM_URL을 실제 상담 폼 주소로 교체해주세요.');
    return;
  }
  console.log('event: consultation_form_opened');
});
