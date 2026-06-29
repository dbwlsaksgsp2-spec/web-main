document.addEventListener('DOMContentLoaded', () => {
    // ============================================================
    // 1. Initialize Lucide Icons
    // ============================================================
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // ============================================================
    // 2. DOM Elements
    // ============================================================
    const toggleBtn = document.getElementById('toggleBtn');
    const cardView = document.getElementById('cardView');
    const resumeView = document.getElementById('resumeView');
    const btnIcon = document.getElementById('btnIcon');
    const btnText = document.getElementById('btnText');

    // ============================================================
    // 3. View Toggle
    // ============================================================
    toggleBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const isResumeActive = resumeView.classList.contains('active');

        if (isResumeActive) {
            resumeView.classList.remove('active');
            cardView.classList.add('active');
            toggleBtn.classList.remove('btn-active');
            btnText.textContent = '이력서 보기';
            btnIcon.setAttribute('data-lucide', 'file-text');
        } else {
            cardView.classList.remove('active');
            resumeView.classList.add('active');
            toggleBtn.classList.add('btn-active');
            btnText.textContent = '명함 보기';
            btnIcon.setAttribute('data-lucide', 'credit-card');

            // Trigger skill bar and fade animations after view switch
            requestAnimationFrame(() => {
                animateSkillBars();
                observeFadeSections();
            });
        }

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    });

    // ============================================================
    // 4. Typing Animation
    // ============================================================
    const phrases = [
        '체계적인 문서 관리 경험과 AI 자동화 기술로 사무 생산성을 극대화합니다.',
        '반복 업무를 자동화하여 팀의 시간을 되돌려 드립니다.',
        'AI 에이전트와 함께 더 스마트한 오피스를 만듭니다.',
        '데이터 기반의 보고서를 자동으로 생성합니다.'
    ];

    const typingEl = document.getElementById('typingText');
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function typeLoop() {
        const current = phrases[phraseIdx];
        if (!isDeleting) {
            typingEl.textContent = current.slice(0, charIdx + 1);
            charIdx++;
            if (charIdx === current.length) {
                isDeleting = true;
                setTimeout(typeLoop, 2200); // Pause before deleting
                return;
            }
            setTimeout(typeLoop, 55);
        } else {
            typingEl.textContent = current.slice(0, charIdx - 1);
            charIdx--;
            if (charIdx === 0) {
                isDeleting = false;
                phraseIdx = (phraseIdx + 1) % phrases.length;
                setTimeout(typeLoop, 400);
                return;
            }
            setTimeout(typeLoop, 28);
        }
    }

    typeLoop();

    // ============================================================
    // 5. Counter Animation for Stat Numbers
    // ============================================================
    const statNumbers = document.querySelectorAll('.stat-number');

    function animateCounters() {
        statNumbers.forEach(el => {
            const target = parseInt(el.dataset.count, 10);
            const duration = 1200;
            const start = performance.now();

            function step(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                // Ease-out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.round(target * eased);
                if (progress < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
        });
    }

    // Run counter animation when card view is visible on load
    setTimeout(animateCounters, 600);

    // ============================================================
    // 6. Skill Bar Fill Animation
    // ============================================================
    function animateSkillBars() {
        document.querySelectorAll('.skill-bar-fill').forEach(bar => {
            const width = bar.dataset.width;
            // Reset then animate
            bar.style.width = '0%';
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    bar.style.width = width + '%';
                });
            });
        });
    }

    // ============================================================
    // 7. Intersection Observer for Fade-in Sections
    // ============================================================
    function observeFadeSections() {
        const sections = document.querySelectorAll('.fade-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, idx) => {
                if (entry.isIntersecting) {
                    // Stagger the animation
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, idx * 80);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        sections.forEach(s => {
            s.classList.remove('visible');
            observer.observe(s);
        });
    }

    // ============================================================
    // 8. Particle Background
    // ============================================================
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        const PARTICLE_COUNT = 50;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function createParticles() {
            particles = [];
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    size: Math.random() * 1.5 + 0.5,
                    opacity: Math.random() * 0.4 + 0.1
                });
            }
        }

        function drawParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(192, 132, 252, ${p.opacity})`;
                ctx.fill();
            });

            // Draw faint connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(129, 140, 248, ${0.06 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(drawParticles);
        }

        resizeCanvas();
        createParticles();
        drawParticles();
        window.addEventListener('resize', () => {
            resizeCanvas();
            createParticles();
        });
    }
});
