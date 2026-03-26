document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 스무스 스크롤 (Smooth Scroll) 기능 삭제
    // CSS의 scroll-behavior: smooth 와 scroll-padding-top이 훨씬 효율적으로 동작하므로 해당 로직을 제외했습니다.

    // 2. 폼 제출 방지 및 알림 (UI 데모용)
    const applyForm = document.getElementById('applyForm');
    
    if (applyForm) {
        applyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // 버튼 상태 변경 
            const submitBtn = applyForm.querySelector('.btn-submit');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = '전송 중...';
            submitBtn.style.backgroundColor = '#4338ca';
            
            // 실제 서버 통신을 흉내내는 setTimeout
            setTimeout(() => {
                alert('상담 예약이 성공적으로 접수되었습니다. 빠르게 연락드리겠습니다!');
                applyForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.style.backgroundColor = '';
            }, 1000);
        });
    }
});