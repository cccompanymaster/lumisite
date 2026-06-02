// LUMI - Auth & Membership (localStorage 기반 데모)
(function () {
  const USERS_KEY = 'lumi.users';
  const SESSION_KEY = 'lumi.session';

  const GRADES = [
    { id: 'gold', name: 'GOLD', min: 200000, discount: 0.10, pointsRate: 0.15, color: '#d4af37', desc: '누적 구매 20만원 이상' },
    { id: 'vip',  name: 'VIP',  min: 500000, discount: 0.15, pointsRate: 0.15, color: '#9c5050', desc: '누적 구매 50만원 이상' },
    { id: 'vvip', name: 'VVIP', min: 1000000, discount: 0.25, pointsRate: 0.15, color: '#1c130f', desc: '누적 구매 100만원 이상' }
  ];

  function readUsers() {
    try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; }
    catch (e) { return []; }
  }
  function writeUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
  function hash(s) {
    // 데모용 간이 해시 — 실서비스 금지
    let h = 0;
    for (let i = 0; i < s.length; i++) { h = (h << 5) - h + s.charCodeAt(i); h |= 0; }
    return 'h' + h.toString(36);
  }

  const Auth = {
    GRADES,
    BASE_GRADE: { id: 'member', name: 'MEMBER', min: 0, discount: 0, pointsRate: 0, color: '#9aa3ad', desc: '일반 회원' },
    gradeOf(totalPurchase) {
      let result = this.BASE_GRADE;
      for (const g of GRADES) if (totalPurchase >= g.min) result = g;
      return result;
    },
    signup({ email, password, name, phone, marketing }) {
      const users = readUsers();
      if (users.some(u => u.email === email)) {
        throw new Error('이미 가입된 이메일입니다.');
      }
      const user = {
        id: 'u_' + Date.now(),
        email, name, phone,
        pw: hash(password),
        marketing: !!marketing,
        totalPurchase: 0,
        points: 10000, // 가입 축하 적립금
        orders: [],
        createdAt: new Date().toISOString()
      };
      users.push(user);
      writeUsers(users);
      this.login(email, password);
      return user;
    },
    login(email, password) {
      const users = readUsers();
      const user = users.find(u => u.email === email && u.pw === hash(password));
      if (!user) throw new Error('이메일 또는 비밀번호가 일치하지 않습니다.');
      localStorage.setItem(SESSION_KEY, JSON.stringify({ id: user.id, at: Date.now() }));
      return user;
    },
    logout() {
      localStorage.removeItem(SESSION_KEY);
    },
    current() {
      const s = localStorage.getItem(SESSION_KEY);
      if (!s) return null;
      try {
        const sess = JSON.parse(s);
        const users = readUsers();
        return users.find(u => u.id === sess.id) || null;
      } catch (e) { return null; }
    },
    updateUser(updater) {
      const cur = this.current();
      if (!cur) return null;
      const users = readUsers();
      const idx = users.findIndex(u => u.id === cur.id);
      if (idx < 0) return null;
      users[idx] = updater({ ...users[idx] });
      writeUsers(users);
      return users[idx];
    },
    addOrder(order) {
      return this.updateUser(u => {
        u.orders = u.orders || [];
        u.orders.unshift(order);
        u.totalPurchase = (u.totalPurchase || 0) + (order.totalPaid || 0);
        u.points = (u.points || 0) + Math.floor((order.totalPaid || 0) * 0.01) - (order.usedPoints || 0);
        if (u.points < 0) u.points = 0;
        return u;
      });
    }
  };

  window.LumiAuth = Auth;

  // 헤더 회원 영역 갱신 헬퍼
  window.renderAuthMenu = function (selector) {
    const el = document.querySelector(selector);
    if (!el) return;
    const P = window.LUMI_PREFIX || './';
    const u = Auth.current();
    if (u) {
      const g = Auth.gradeOf(u.totalPurchase || 0);
      el.innerHTML = `
        <a href="${P}pages/mypage.html" class="auth-name"><span class="grade-pill" style="background:${g.color}">${g.name}</span> ${u.name}님</a>
        <a href="#" class="auth-logout">로그아웃</a>
      `;
      el.querySelector('.auth-logout').addEventListener('click', (e) => {
        e.preventDefault();
        Auth.logout();
        location.reload();
      });
    } else {
      el.innerHTML = `
        <a href="${P}pages/login.html">로그인</a>
        <a href="${P}pages/signup.html">회원가입</a>
      `;
    }
  };
})();
