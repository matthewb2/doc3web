import { FileText, Zap, ShieldCheck, Download, CheckCircle2, ArrowRight, Globe } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 내비게이션 바 */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white p-2 rounded-xl font-bold flex items-center justify-center shadow-md shadow-blue-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900">DOC3</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-blue-600 transition">주요 기능</a>
            <a href="#formats" className="hover:text-blue-600 transition">지원 포맷</a>
            <a href="#about" className="hover:text-blue-600 transition">소개</a>
          </nav>
          <div className="flex items-center space-x-3">
            {/* 웹버전 바로가기 링크 추가 */}
            <a 
              href="https://webdoc3.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition shadow-sm shadow-blue-500/20"
            >
              <Globe className="w-4 h-4" />
              <span>웹버전 실행</span>
            </a>
            <a 
              href="https://github.com/matthewb2/webdoc3.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl text-sm font-medium transition shadow-sm"
            >
              {/* GitHub SVG 아이콘 */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-blue-50/50 via-white to-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>가볍고 빠른 오픈 워드프로세서 대안</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            복잡함을 덜어낸 혁신적인 문서 편집,<br />
            <span className="text-blue-600">DOC3</span>와 함께 시작하세요.
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-normal">
            무거웠던 기존 워드프로세서에서 벗어나세요. DOC3는 꼭 필요한 기본 기능만을 담아 빠르고 쾌적한 문서 작성 경험을 선사합니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* 히어로 영역 웹버전 바로가기 버튼 */}
            <a 
              href="https://webdoc3.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold transition shadow-lg shadow-blue-600/20"
            >
              <Globe className="w-5 h-5" />
              <span>웹버전 바로 사용해보기</span>
            </a>
            <a 
              href="https://github.com/matthewb2/webdoc3.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-slate-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold transition shadow-lg shadow-blue-600/20"
       >
              {/* GitHub SVG 아이콘 */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* 문서 포맷 지원 섹션 */}
      <section id="formats" className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">완벽한 문서 호환성</h2>
            <p className="text-slate-600">자주 쓰이는 주요 문서 포맷을 제약 없이 자유롭게 다룰 수 있습니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg">HWP</div>
              <h3 className="text-xl font-bold text-slate-900">한글 문서 (HWP)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">공공기관 및 국내 업무 환경에서 필수적인 HWP 포맷을 완벽하게 지원하여 호환성 문제를 해결합니다.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg">DOCX</div>
              <h3 className="text-xl font-bold text-slate-900">MS Word (DOCX)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">전 세계 표준인 마이크로소프트 워드 문서 포맷과 뛰어난 호환성을 자랑합니다.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg">ODT</div>
              <h3 className="text-xl font-bold text-slate-900">오픈 문서 (ODT)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">개방형 오피스 문서 표준 포맷인 ODT를 지원하여 오픈소스 생태계와 발맞춰 나갑니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 특징 섹션 */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">왜 DOC3를 선택해야 할까요?</h2>
            <p className="text-slate-600">가볍고 직관적인 설계로 누구나 부담 없이 쓸 수 있습니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex space-x-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-lg">초경량 퍼포먼스</h3>
                <p className="text-slate-600 text-sm leading-relaxed">불필요한 무거운 리소스를 걷어내어 시스템 자원을 거의 소모하지 않으며 즉시 실행됩니다.</p>
              </div>
            </div>
            <div className="flex space-x-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-lg">완전 무료 & 오픈소스</h3>
                <p className="text-slate-600 text-sm leading-relaxed">비용 부담 없이 누구나 자유롭게 이용할 수 있으며, 투명하게 공개되어 안심하고 사용할 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg font-bold flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">DOC3</span>
          </div>
          <p className="text-sm text-slate-500">© 2026 DOC3 Project. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <a href="https://webdoc3.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">웹버전</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}