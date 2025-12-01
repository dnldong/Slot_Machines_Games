
// Get Vue functions from global window object
const { createApp, ref, computed, watch, onMounted, onUnmounted } = Vue;

// --- Default Data ---
const DEFAULT_DATA = `Nguyễn Văn An | 16789
Trần Thị Bích | 88888
Lê Văn Cường | 20266
Phạm Thị Dung | 79797
Hoàng Văn Em | 12345
Vũ Thị Mai | 68686
Đặng Văn Giàu | 99999
Bùi Thị Hoa | 00001
Đỗ Văn Hùng | 55555
Hồ Thị Lan | 24680
Phan Văn Khải | 11223
Lý Thị Mộng | 33445
Trương Tam Phong | 77889
Hoàng Phi Hồng | 99887
Diệp Vấn | 10101
Lý Tiểu Long | 50505
Châu Tinh Trì | 95270
Lưu Đức Hoa | 66666
Quách Phú Thành | 88899
Trương Học Hữu | 12312`;

// --- Components ---

const HorseWatermark = {
  template: `
    <svg viewBox="0 0 500 500" class="w-full h-full opacity-30">
       <defs>
         <linearGradient id="horseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
           <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
           <stop offset="100%" style="stop-color:#DAA520;stop-opacity:1" />
         </linearGradient>
       </defs>
       <path d="M420,150 C400,100 350,50 300,40 C280,35 260,60 270,90 C250,80 230,80 210,100 C180,130 180,160 200,190 C150,180 100,200 80,250 C60,300 100,350 150,380 L140,450 Q160,460 180,420 L220,380 C240,390 260,390 280,380 L320,440 Q350,450 360,400 L340,350 C380,330 420,280 440,220 C450,190 440,170 420,150 Z" fill="url(#horseGrad)" />
       <path d="M300,40 Q320,10 360,20 M310,50 Q340,30 380,50 M320,80 Q350,70 390,90" stroke="#FFD700" stroke-width="4" fill="none" stroke-linecap="round"/>
       <path d="M80,250 Q40,250 20,300 Q10,350 40,380" stroke="url(#horseGrad)" stroke-width="8" fill="none" stroke-linecap="round" />
    </svg>
  `
};

const HorseHerd = {
  template: `
    <div class="fixed top-1/2 left-0 w-full h-64 pointer-events-none z-40 transform -translate-y-1/2 overflow-hidden">
        <div class="absolute w-[200%] h-full flex items-center animate-gallop opacity-90">
            <svg viewBox="0 0 500 500" class="h-32 md:h-64 w-auto transform scale-x-[-1] text-[#FFD700] drop-shadow-lg mx-4"><use href="#running-horse"/></svg>
            <svg viewBox="0 0 500 500" class="h-24 md:h-48 w-auto transform scale-x-[-1] text-[#DAA520] drop-shadow-lg mx-8 mt-12"><use href="#running-horse"/></svg>
            <svg viewBox="0 0 500 500" class="h-28 md:h-56 w-auto transform scale-x-[-1] text-[#FFA500] drop-shadow-lg mx-2 -mt-8"><use href="#running-horse"/></svg>
            <svg viewBox="0 0 500 500" class="h-32 md:h-64 w-auto transform scale-x-[-1] text-[#FFD700] drop-shadow-lg mx-12"><use href="#running-horse"/></svg>
        </div>
        <svg class="hidden">
           <defs>
             <g id="running-horse">
               <path d="M420,150 C400,100 350,50 300,40 C280,35 260,60 270,90 C250,80 230,80 210,100 C180,130 180,160 200,190 C150,180 100,200 80,250 C60,300 100,350 150,380 L140,450 Q160,460 180,420 L220,380 C240,390 260,390 280,380 L320,440 Q350,450 360,400 L340,350 C380,330 420,280 440,220 C450,190 440,170 420,150 Z" fill="currentColor" />
               <path d="M300,40 Q320,10 360,20 M310,50 Q340,30 380,50 M320,80 Q350,70 390,90" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round"/>
               <path d="M80,250 Q40,250 20,300 Q10,350 40,380" stroke="currentColor" stroke-width="8" fill="none" stroke-linecap="round" />
             </g>
           </defs>
        </svg>
    </div>
  `
};

const ApricotBranch = {
  template: `
    <svg viewBox="0 0 400 300" class="w-full h-full drop-shadow-2xl">
      <path d="M0,300 C50,250 100,280 150,220 C180,180 120,150 160,100 C200,50 280,80 350,20" fill="none" stroke="#4a3728" stroke-width="12" stroke-linecap="round" />
      <path d="M150,220 C200,200 250,230 300,200" fill="none" stroke="#4a3728" stroke-width="8" stroke-linecap="round" />
      <path d="M160,100 C200,120 230,90 260,110" fill="none" stroke="#4a3728" stroke-width="6" stroke-linecap="round" />
      <defs>
        <g id="mai-flower">
          <path d="M0,0 C-5,-10 -15,-10 -20,0 C-15,10 -5,10 0,0" fill="#FFD700" transform="rotate(0) translate(0,-5)" />
          <path d="M0,0 C-5,-10 -15,-10 -20,0 C-15,10 -5,10 0,0" fill="#FFD700" transform="rotate(72) translate(0,-5)" />
          <path d="M0,0 C-5,-10 -15,-10 -20,0 C-15,10 -5,10 0,0" fill="#FFD700" transform="rotate(144) translate(0,-5)" />
          <path d="M0,0 C-5,-10 -15,-10 -20,0 C-15,10 -5,10 0,0" fill="#FFD700" transform="rotate(216) translate(0,-5)" />
          <path d="M0,0 C-5,-10 -15,-10 -20,0 C-15,10 -5,10 0,0" fill="#FFD700" transform="rotate(288) translate(0,-5)" />
          <circle r="3" fill="#D32F2F" />
          <circle r="1.5" fill="#FFFF00" />
        </g>
      </defs>
      <use href="#mai-flower" x="350" y="20" transform="scale(1.2)" />
      <use href="#mai-flower" x="300" y="200" transform="scale(1.0) rotate(20)" />
      <use href="#mai-flower" x="260" y="110" transform="scale(0.9) rotate(-10)" />
      <use href="#mai-flower" x="180" y="150" transform="scale(0.8) rotate(45)" />
      <use href="#mai-flower" x="220" y="210" transform="scale(0.7) rotate(15)" />
      <use href="#mai-flower" x="120" y="180" transform="scale(0.6) rotate(-30)" />
      <use href="#mai-flower" x="200" y="80" transform="scale(0.8)" />
      <use href="#mai-flower" x="280" y="50" transform="scale(1.1) rotate(10)" />
      <circle cx="280" cy="220" r="4" fill="#8BC34A" />
      <circle cx="240" cy="130" r="3" fill="#8BC34A" />
      <circle cx="320" cy="40" r="3" fill="#8BC34A" />
    </svg>
  `
};

const PeachBranch = {
  template: `
    <svg viewBox="0 0 400 300" class="w-full h-full drop-shadow-2xl">
      <g transform="scale(-1, 1) translate(-400, 0)">
        <path d="M0,300 C50,250 100,280 150,220 C180,180 120,150 160,100 C200,50 280,80 350,20" fill="none" stroke="#3E2723" stroke-width="12" stroke-linecap="round" />
        <path d="M150,220 C200,200 250,230 300,200" fill="none" stroke="#3E2723" stroke-width="8" stroke-linecap="round" />
        <path d="M160,100 C200,120 230,90 260,110" fill="none" stroke="#3E2723" stroke-width="6" stroke-linecap="round" />
        <defs>
          <g id="dao-flower-detailed">
            <path d="M0,0 C-5,-10 -15,-10 -20,0 C-15,10 -5,10 0,0" fill="#FF69B4" transform="rotate(0) translate(0,-5)" />
            <path d="M0,0 C-5,-10 -15,-10 -20,0 C-15,10 -5,10 0,0" fill="#FF69B4" transform="rotate(72) translate(0,-5)" />
            <path d="M0,0 C-5,-10 -15,-10 -20,0 C-15,10 -5,10 0,0" fill="#FF69B4" transform="rotate(144) translate(0,-5)" />
            <path d="M0,0 C-5,-10 -15,-10 -20,0 C-15,10 -5,10 0,0" fill="#FF69B4" transform="rotate(216) translate(0,-5)" />
            <path d="M0,0 C-5,-10 -15,-10 -20,0 C-15,10 -5,10 0,0" fill="#FF69B4" transform="rotate(288) translate(0,-5)" />
            <circle r="3" fill="#C2185B" />
            <circle r="1.5" fill="#FFEB3B" />
          </g>
        </defs>
        <use href="#dao-flower-detailed" x="350" y="20" transform="scale(1.2)" />
        <use href="#dao-flower-detailed" x="300" y="200" transform="scale(1.0) rotate(20)" />
        <use href="#dao-flower-detailed" x="260" y="110" transform="scale(0.9) rotate(-10)" />
        <use href="#dao-flower-detailed" x="180" y="150" transform="scale(0.8) rotate(45)" />
        <use href="#dao-flower-detailed" x="220" y="210" transform="scale(0.7) rotate(15)" />
        <use href="#dao-flower-detailed" x="120" y="180" transform="scale(0.6) rotate(-30)" />
        <use href="#dao-flower-detailed" x="200" y="80" transform="scale(0.8)" />
        <use href="#dao-flower-detailed" x="280" y="50" transform="scale(1.1) rotate(10)" />
        <circle cx="280" cy="220" r="4" fill="#66BB6A" />
        <circle cx="240" cy="130" r="3" fill="#66BB6A" />
        <circle cx="320" cy="40" r="3" fill="#66BB6A" />
      </g>
    </svg>
  `
};

const Lantern = {
  template: `
    <svg viewBox="0 0 100 140" class="w-full h-full filter drop-shadow-lg">
      <line x1="50" y1="0" x2="50" y2="20" stroke="#FFD700" stroke-width="4" />
      <path d="M20 20 H80 L90 40 V90 L80 110 H20 L10 90 V40 Z" fill="#D00202" stroke="#FFD700" stroke-width="3" />
      <path d="M20 40 H80 M20 90 H80" stroke="#900000" stroke-width="2" />
      <path d="M50 110 V140" stroke="#FFD700" stroke-width="3" />
      <circle cx="50" cy="135" r="5" fill="red" />
      <text x="50" y="75" text-anchor="middle" fill="#FFD700" font-size="30" font-weight="bold" font-family="serif">福</text>
    </svg>
  `
};

// --- Fireworks Utility ---
class FireworkSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.animationId = null;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticle(x, y, color) {
    const particleCount = 40;
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 6 + 2;
      this.particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color,
        decay: Math.random() * 0.015 + 0.005
      });
    }
  }

  launch() {
    const x = Math.random() * this.canvas.width;
    const y = Math.random() * (this.canvas.height / 1.5);
    const colors = ['#FFD700', '#FF0000', '#00FF00', '#00FFFF', '#FF00FF'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    this.createParticle(x, y, color);
  }

  animate() {
    if (!this.ctx) return;
    this.ctx.globalCompositeOperation = 'destination-out';
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.globalCompositeOperation = 'lighter';

    this.particles = this.particles.filter(p => p.alpha > 0);

    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.08; // gravity
      p.alpha -= p.decay;
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillStyle = p.color;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
      this.ctx.fill();
    });

    if (Math.random() < 0.08) this.launch(); 

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  start() {
    if (!this.animationId) this.animate();
  }

  stop() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    this.particles = [];
  }
}

// --- Main App ---
const App = {
  components: { ApricotBranch, PeachBranch, Lantern, HorseWatermark, HorseHerd },
  setup() {
    // State
    const employees = ref([]);
    const winnersHistory = ref([]);
    const reels = ref(['2', '0', '2', '6', '🐎']);
    const isSpinning = ref(false);
    const spinningReels = ref([false, false, false, false, false]); 
    const stoppingReels = ref([false, false, false, false, false]);
    const showIntroHorses = ref(true);
    const spinCount = ref(1);
    
    // Settings
    const showSettings = ref(false);
    const settingsText = ref("");
    
    // Result
    const currentWinners = ref([]);
    const showWinnerModal = ref(false);

    // Audio/Effects
    const fireworkSystem = ref(null);
    const canvasRef = ref(null);

    // Initialize
    onMounted(() => {
      initData();
      if (canvasRef.value) {
        fireworkSystem.value = new FireworkSystem(canvasRef.value);
        fireworkSystem.value.start();
        
        setTimeout(() => {
            fireworkSystem.value?.stop();
            showIntroHorses.value = false;
        }, 4000);
      }
    });

    onUnmounted(() => {
      fireworkSystem.value?.stop();
    });

    const initData = () => {
       const lines = DEFAULT_DATA.split('\n');
       employees.value = parseLines(lines);
    };

    const parseLines = (lines) => {
      return lines
        .filter(line => line.trim() !== '')
        .map((line, index) => {
          const parts = line.split('|');
          const name = parts[0].trim();
          let rawCode = parts[1] ? parts[1].trim() : '';
          
          if (!rawCode) {
             rawCode = Math.floor(10000 + Math.random() * 90000).toString();
          } else {
             if (rawCode.length < 5) rawCode = rawCode.padStart(5, '0');
             if (rawCode.length > 5) rawCode = rawCode.substring(0, 5);
          }

          return {
            id: index + 1,
            name,
            code: rawCode.toUpperCase()
          };
        });
    };

    const maxSpinCount = computed(() => employees.value.length);
    
    watch(spinCount, (val) => {
        if(val < 1) spinCount.value = 1;
        if(val > employees.value.length) spinCount.value = employees.value.length;
    });

    // Methods
    const openSettings = () => {
      settingsText.value = employees.value
        .map(e => `${e.name} | ${e.code}`)
        .join('\n');
      showSettings.value = true;
    };

    const saveSettings = () => {
      const lines = settingsText.value.split('\n');
      employees.value = parseLines(lines);
      showSettings.value = false;
      currentWinners.value = [];
      showWinnerModal.value = false;
      fireworkSystem.value?.stop();
    };

    const spin = async () => {
      if (isSpinning.value || employees.value.length === 0) return;
      
      const count = Math.min(spinCount.value, employees.value.length);
      if (count <= 0) return;

      isSpinning.value = true;
      currentWinners.value = [];
      showWinnerModal.value = false;
      fireworkSystem.value?.stop();
      spinningReels.value = [true, true, true, true, true]; 
      stoppingReels.value = [false, false, false, false, false];

      let tempEmployees = [...employees.value];
      let selected = [];
      
      for(let i=0; i<count; i++) {
        if(tempEmployees.length === 0) break;
        const randomIndex = Math.floor(Math.random() * tempEmployees.length);
        selected.push(tempEmployees[randomIndex]);
        tempEmployees.splice(randomIndex, 1);
      }
      
      const targetCode = selected[0].code.split('');

      // Spinning Delay
      await new Promise(resolve => setTimeout(resolve, 3000));

      for (let i = 0; i < 5; i++) {
        reels.value[i] = targetCode[i];
        spinningReels.value[i] = false;
        stoppingReels.value[i] = true; 
      }
      
      setTimeout(() => {
          stoppingReels.value = [false, false, false, false, false];
      }, 600);

      setTimeout(() => {
        isSpinning.value = false;
        currentWinners.value = selected;
        showWinnerModal.value = true;
        fireworkSystem.value?.start();
      }, 800);
    };

    const confirmReward = () => {
      if (currentWinners.value.length > 0) {
        winnersHistory.value.unshift(...currentWinners.value);
        const winnerIds = new Set(currentWinners.value.map(w => w.id));
        employees.value = employees.value.filter(e => !winnerIds.has(e.id));
        if (spinCount.value > employees.value.length) {
            spinCount.value = Math.max(1, employees.value.length);
        }
      }
      closeWinnerModal();
    };

    const closeWinnerModal = () => {
      showWinnerModal.value = false;
      fireworkSystem.value?.stop();
    };

    return {
      employees,
      reels,
      spinningReels,
      stoppingReels,
      isSpinning,
      spin,
      currentWinners,
      showWinnerModal,
      closeWinnerModal,
      confirmReward,
      showSettings,
      settingsText,
      saveSettings,
      openSettings,
      canvasRef,
      showIntroHorses,
      spinCount,
      maxSpinCount,
      winnersHistory
    };
  },
  template: `
    <div class="w-full min-h-screen bg-[#500000] font-sans text-white overflow-x-hidden flex flex-col items-center bg-tet-pattern relative">
      <HorseHerd v-if="showIntroHorses" />
      <div class="falling-petals"></div>
      <canvas ref="canvasRef" class="fixed inset-0 pointer-events-none z-50"></canvas>
      
      <div class="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
         <div class="w-[80vw] h-[80vh] md:w-[600px] md:h-[600px]">
           <HorseWatermark />
         </div>
      </div>

      <div class="absolute top-0 left-0 w-48 h-48 md:w-96 md:h-96 pointer-events-none z-20">
         <div class="w-full h-full animate-sway-slow origin-top-left">
             <ApricotBranch />
         </div>
      </div>

      <div class="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 pointer-events-none z-20">
         <div class="w-full h-full animate-sway-slow-reverse origin-top-right">
             <PeachBranch />
         </div>
      </div>

      <div class="w-full text-center pt-8 md:pt-12 pb-2 relative z-30 px-2">
        <h2 class="text-[#FFD700] font-dancing text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-2">
          CHÚC MỪNG NĂM MỚI • 新年快樂
        </h2>
        <h1 class="text-3xl sm:text-4xl md:text-7xl font-black text-[#FFFF00] uppercase tracking-wider font-header drop-shadow-[0_4px_0_#990000] md:drop-shadow-[0_6px_0_#990000] stroke-text mb-4">
          XUÂN BÍNH NGỌ 2026<br class="block sm:hidden"/> • 2026 丙午年
        </h1>
        
        <div class="flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-4 text-white text-sm md:text-lg font-bold bg-[#800000]/80 inline-flex px-6 py-3 rounded-2xl backdrop-blur-md border border-[#FFD700] shadow-[0_4px_10px_rgba(0,0,0,0.5)] transform hover:scale-105 transition duration-300">
           <div class="flex items-center gap-2"><span>Tấn Tài Tấn Lộc</span> <span class="text-yellow-300">招財進寶</span></div>
           <span class="hidden sm:block text-[#FFD700]">•</span>
           <div class="flex items-center gap-2"><span>Vạn Sự Như Ý</span> <span class="text-yellow-300">萬事如意</span></div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 lg:gap-12 w-full max-w-7xl px-2 sm:px-4 py-4 md:py-8 mt-6 md:mt-12 relative z-10">
        
        <div class="w-full max-w-3xl flex justify-center">
           <div class="relative w-full max-w-lg lg:max-w-2xl">
              <div class="absolute -left-4 md:-left-12 top-6 md:top-10 w-16 h-20 md:w-24 md:h-32 animate-swing z-20 hidden sm:block">
                 <Lantern />
              </div>
              <div class="absolute -right-4 md:-right-12 top-6 md:top-10 w-16 h-20 md:w-24 md:h-32 animate-swing-delay z-20 hidden sm:block">
                 <Lantern />
              </div>

              <div class="absolute -top-10 md:-top-16 left-1/2 -translate-x-1/2 w-[110%] h-16 md:h-24 bg-[#800000] z-0 flex justify-center items-end" style="clip-path: polygon(10% 0, 90% 0, 100% 100%, 0% 100%);">
                  <div class="w-[98%] h-[90%] bg-[#a00000] flex justify-center items-center border-b-2 md:border-b-4 border-[#FFD700] flex-col leading-tight pb-1 shadow-inner">
                      <div class="text-[#FFD700] font-dancing text-xl md:text-3xl font-bold">Vòng Quay May Mắn</div>
                      <div class="text-[#FFD700] text-xs md:text-base opacity-90">幸運輪盤</div>
                  </div>
              </div>

              <div class="bg-[#3e0b0b] p-2 sm:p-4 md:p-6 rounded-b-[20px] rounded-t-[5px] shadow-[0_10px_30px_rgba(0,0,0,0.6)] border-x-[4px] border-b-[4px] md:border-x-[8px] md:border-b-[8px] border-[#8B4513] relative mt-2 md:mt-4">
                  <div class="absolute left-1 md:left-2 top-0 bottom-4 w-2 md:w-4 bg-gradient-to-r from-[#FFD700] to-[#B8860B] rounded-full opacity-80"></div>
                  <div class="absolute right-1 md:right-2 top-0 bottom-4 w-2 md:w-4 bg-gradient-to-r from-[#B8860B] to-[#FFD700] rounded-full opacity-80"></div>

                  <div class="bg-[#1a0505] border-[3px] md:border-[6px] border-[#FFD700] rounded-[10px] md:rounded-[15px] p-2 sm:p-4 md:p-6 mx-2 md:mx-4 mb-4 md:mb-8 flex justify-center gap-1 sm:gap-2 md:gap-4 relative overflow-hidden shadow-inner transition-shadow duration-300" :class="{'shadow-[0_0_20px_#FFD700]': isSpinning}">
                      <div class="absolute top-1/2 left-0 w-full h-0.5 md:h-1 bg-red-500/50 z-10 shadow-[0_0_15px_red]" :class="{'animate-pulse-fast': isSpinning}"></div>

                      <div 
                        v-for="(char, index) in reels" 
                        :key="index"
                        class="relative w-10 h-16 sm:w-14 sm:h-24 md:w-24 md:h-36 bg-[#fff8e1] rounded border-[1px] md:border-[2px] border-[#8B4513] shadow-[inset_0_2px_5px_rgba(0,0,0,0.3)] flex items-center justify-center overflow-hidden flex-shrink-0"
                      >
                         <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 pointer-events-none z-10"></div>
                         
                         <div v-if="spinningReels[index]" class="absolute top-0 left-0 w-full animate-slot-scroll opacity-90">
                             <div class="reel-strip flex flex-col items-center justify-center w-full">
                                <span v-for="n in 10" :key="'a'+n" class="flex items-center justify-center w-full font-bold text-[#D00202] text-3xl sm:text-5xl md:text-7xl h-16 sm:h-24 md:h-36">{{ n-1 }}</span>
                                <span v-for="n in 10" :key="'b'+n" class="flex items-center justify-center w-full font-bold text-[#D00202] text-3xl sm:text-5xl md:text-7xl h-16 sm:h-24 md:h-36">{{ n-1 }}</span>
                             </div>
                         </div>

                         <div 
                           v-else
                           class="flex items-center justify-center w-full h-full transform transition-transform"
                           :class="{
                              'animate-reel-stop': stoppingReels[index]
                           }"
                         >
                            <span class="text-3xl sm:text-5xl md:text-7xl font-bold text-[#D00202]">
                              {{ char }}
                            </span>
                         </div>
                      </div>
                  </div>

                  <div class="bg-[#5a1515] p-3 md:p-4 rounded-xl border-t-2 md:border-t-4 border-[#800000] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 shadow-lg">
                     
                     <div class="flex flex-col items-center">
                         <label class="text-[#FFD700] text-xs uppercase font-bold mb-1">Số lượng / 數量</label>
                         <div class="flex items-center bg-black/40 rounded-lg p-1 border border-[#FFD700]/50">
                             <button @click="spinCount > 1 && spinCount--" class="w-8 h-8 text-[#FFD700] font-bold hover:bg-white/10 rounded">-</button>
                             <input type="number" v-model="spinCount" min="1" :max="maxSpinCount" class="w-12 bg-transparent text-center text-white font-bold text-lg outline-none appearance-none" />
                             <button @click="spinCount < maxSpinCount && spinCount++" class="w-8 h-8 text-[#FFD700] font-bold hover:bg-white/10 rounded">+</button>
                         </div>
                     </div>

                     <button 
                        @click="spin"
                        :disabled="isSpinning || employees.length === 0"
                        class="relative group"
                     >
                        <div class="absolute inset-0 bg-yellow-500 rounded-full blur-md opacity-50 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                        <div class="relative w-20 h-20 md:w-28 md:h-28 bg-gradient-to-b from-[#e60000] to-[#990000] rounded-full border-[4px] md:border-[6px] border-[#FFD700] shadow-[0_5px_15px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center transform active:translate-y-1 transition-all p-1">
                           <span class="text-lg md:text-2xl font-black text-white uppercase tracking-widest drop-shadow-md leading-none">
                             {{ isSpinning ? '...' : 'QUAY' }}
                           </span>
                           <span v-if="!isSpinning" class="text-[10px] md:text-xs text-yellow-200 font-bold mt-1">旋轉</span>
                        </div>
                     </button>
                  </div>

                  <button @click="openSettings" class="absolute bottom-2 left-2 md:bottom-4 md:left-4 text-[#8B4513] hover:text-[#FFD700] transition-colors p-2 bg-black/20 rounded-full z-20">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                  </button>
              </div>
           </div>
        </div>

        <div class="w-full max-w-md h-80 lg:h-[600px] flex flex-col relative z-10 shrink-0">
            <div class="bg-[#8B4513] p-3 md:p-4 rounded-t-xl border-b-[4px] border-[#5D4037] flex items-center justify-between shadow-lg">
               <h3 class="text-[#FFD700] font-bold text-base md:text-lg uppercase tracking-wide flex items-center gap-2">
                  <span>📜</span> 
                  <div>
                    <span>Danh Sách</span> <span class="text-xs opacity-80 block md:inline">名單</span>
                  </div>
               </h3>
               <div class="flex flex-col items-end">
                   <span class="bg-[#5D4037] text-white text-xs px-2 py-1 rounded">{{ employees.length }}</span>
                   <span class="text-[10px] text-yellow-200">người / 人</span>
               </div>
            </div>
            
            <div class="flex-1 bg-[#fff8e1] border-[4px] border-[#8B4513] border-t-0 rounded-b-xl overflow-hidden shadow-2xl relative">
                <div class="absolute inset-0 bg-tet-pattern opacity-10 pointer-events-none"></div>
                
                <div class="h-full overflow-y-auto p-2 md:p-4 space-y-2 md:space-y-3 custom-scrollbar relative z-10">
                    <div v-if="employees.length === 0" class="text-center text-gray-500 py-8 italic">
                        Danh sách trống<br/>名單為空
                    </div>
                    <div 
                      v-for="emp in employees" 
                      :key="emp.id"
                      :id="'emp-' + emp.id"
                      class="relative bg-white p-2 md:p-3 rounded-lg border border-gray-300 shadow-sm flex justify-between items-center group hover:border-[#FFD700] transition-all duration-300"
                    >
                      <div class="flex items-center gap-2 md:gap-3">
                        <div class="w-6 h-6 md:w-8 md:h-8 rounded-full bg-red-100 text-red-800 flex items-center justify-center font-bold text-[10px] md:text-xs border border-red-200 shrink-0">
                          {{ emp.id }}
                        </div>
                        <div class="min-w-0">
                          <div class="font-bold text-gray-800 text-sm md:text-base truncate">{{ emp.name }}</div>
                        </div>
                      </div>
                      <div class="font-mono font-bold text-[#D00202] text-sm md:text-lg tracking-widest bg-red-50 px-2 rounded border border-red-100 shrink-0">
                         {{ emp.code }}
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div v-if="winnersHistory.length > 0" class="w-full max-w-7xl px-4 pb-12 z-20">
          <div class="bg-[#5D4037] p-1 rounded-2xl shadow-2xl border-[3px] border-[#FFD700]">
             <div class="bg-[#3E2723] rounded-xl p-4 md:p-6 text-center">
                <h3 class="text-[#FFD700] font-dancing text-2xl md:text-3xl font-bold mb-4 drop-shadow-md">
                   🎊 Bảng Vàng Vinh Danh • 光榮榜 🎊
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-h-[400px] overflow-y-auto custom-scrollbar p-2">
                   <div 
                     v-for="(winner, idx) in winnersHistory" 
                     :key="'history-' + winner.id"
                     class="bg-[#fff8e1] rounded-lg border-l-[6px] border-[#D00202] p-3 flex items-center justify-between shadow-md transform hover:scale-[1.02] transition"
                   >
                       <div class="flex items-center gap-3">
                          <span class="w-8 h-8 rounded-full bg-[#FFD700] text-[#800000] font-bold flex items-center justify-center border border-[#B8860B] shadow-sm">
                             {{ winnersHistory.length - idx }}
                          </span>
                          <span class="text-[#3E2723] font-bold text-lg">{{ winner.name }}</span>
                       </div>
                       <span class="font-mono font-bold text-[#D00202] bg-white px-2 py-1 rounded border border-red-200">{{ winner.code }}</span>
                   </div>
                </div>
             </div>
          </div>
      </div>

      <div v-if="showWinnerModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
         <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="closeWinnerModal"></div>
         <div class="relative bg-[#fff] rounded-3xl p-1 max-w-2xl w-full text-center shadow-[0_0_60px_#FFD700] animate-bounce-in overflow-hidden max-h-[90vh] flex flex-col">
            <div class="bg-[#fff8e1] rounded-[20px] p-4 md:p-8 border-[4px] border-[#FFD700] border-dashed h-full flex flex-col items-center overflow-hidden">
                <div class="text-4xl md:text-5xl mb-2 animate-wiggle">🧧</div>
                <h3 class="text-lg md:text-xl text-[#8B4513] uppercase tracking-widest font-bold mb-1 font-dancing">Xin Chúc Mừng • 恭喜獲獎</h3>
                
                <div v-if="currentWinners.length === 1" class="w-full">
                     <h2 class="text-3xl md:text-5xl font-black text-[#D00202] mb-4 md:mb-6 drop-shadow-sm break-words w-full">{{ currentWinners[0].name }}</h2>
                     <div class="inline-block bg-gradient-to-r from-[#D00202] to-[#b30000] text-[#FFD700] text-2xl md:text-4xl font-mono font-bold py-3 md:py-4 px-8 md:px-12 rounded-2xl mb-6 md:mb-8 border-[4px] border-[#FFD700] shadow-lg transform rotate-[-2deg]">
                        {{ currentWinners[0].code }}
                     </div>
                </div>

                <div v-else class="w-full flex-1 overflow-y-auto custom-scrollbar my-4 border-y border-[#8B4513]/20 py-2">
                     <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div v-for="w in currentWinners" :key="w.id" class="bg-white p-3 rounded-lg border border-[#FFD700] shadow-sm flex justify-between items-center">
                             <span class="font-bold text-[#3E2723] text-lg truncate">{{ w.name }}</span>
                             <span class="font-mono font-bold text-[#D00202]">{{ w.code }}</span>
                        </div>
                     </div>
                </div>

                <div class="flex gap-4 mt-auto">
                  <button @click="closeWinnerModal" class="bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-bold hover:bg-gray-300 transition">
                    Đóng / 關閉
                  </button>
                  <button @click="confirmReward" class="bg-[#FFD700] text-[#800000] px-8 md:px-10 py-2 md:py-3 rounded-full font-bold text-base md:text-lg hover:bg-yellow-300 transition shadow-md uppercase tracking-wider flex flex-col items-center leading-none gap-1">
                    <span>Nhận Thưởng</span>
                    <span class="text-xs font-normal">領獎</span>
                  </button>
                </div>
            </div>
         </div>
      </div>

      <div v-if="showSettings" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div class="bg-white rounded-xl w-full max-w-4xl h-[90vh] p-0 shadow-2xl flex flex-col overflow-hidden">
          <div class="bg-[#800000] p-4 flex justify-between items-center">
             <h2 class="text-lg md:text-xl font-bold text-white flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                <span>⚙️ Cài Đặt Danh Sách</span>
                <span class="text-yellow-200 text-xs opacity-80 block md:inline">設定名單</span>
             </h2>
             <button @click="showSettings = false" class="text-white/70 hover:text-white">✕</button>
          </div>
          <div class="p-4 md:p-6 bg-gray-50 flex-1 overflow-hidden flex flex-col">
             <p class="text-xs md:text-sm text-gray-600 mb-2">
               Nhập danh sách theo định dạng: <code class="bg-gray-200 px-1 rounded">Tên | Mã Số</code>. Mỗi người một dòng.<br/>
               格式: <code class="bg-gray-200 px-1 rounded">姓名 | 號碼</code>. 每人一行.
             </p>
             <textarea 
                v-model="settingsText" 
                class="w-full h-full p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-[#800000] focus:border-transparent resize-none text-black bg-white"
                placeholder="Nguyễn Văn A | 12345&#10;Trần Thị B | 67890"
             ></textarea>
          </div>
          <div class="p-4 border-t bg-white flex justify-end gap-3">
             <button @click="showSettings = false" class="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 font-bold flex flex-col items-center leading-none">
                <span>Hủy</span> <span class="text-[10px]">取消</span>
             </button>
             <button @click="saveSettings" class="px-6 py-2 rounded-lg bg-[#800000] text-white hover:bg-[#a00000] font-bold flex flex-col items-center leading-none">
                <span>Lưu</span> <span class="text-[10px]">保存</span>
             </button>
          </div>
        </div>
      </div>

    </div>
  `
};

createApp(App).mount('#app');
