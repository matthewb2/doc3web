import { 
  FileText, 
  Zap, 
  ShieldCheck, 
  Download, 
  Globe, 
  Sparkles, 
  Bot, 
  Wand2, 
  FileSearch 
} from 'lucide-react';

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
            <a href="#ai-assistant" className="hover:text-blue-600 transition flex items-center gap-1 font-semibold text-blue-600">
              <Sparkles className="w-3.5 h-3.5" />
              AI 어시스턴트
            </a>
            <a href="#formats" className="hover:text-blue-600 transition">지원 포맷</a>
            <a href="#features" className="hover:text-blue-600 transition">주요 기능</a>
          </nav>
          <div className="flex items-center space-x-3">
            {/* 웹버전 바로가기 링크 */}
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
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-blue-50/70 via-indigo-50/30 to-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-blue-100/80 border border-blue-200/60 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>AI 어시스턴트 연동으로 더욱 스마트해진 오픈 워드프로세서</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            가벼움에 지능을 더하다 <br className="hidden sm:block" />
            <span className="text-blue-600">DOC3d</span>와 함께 시작하세요
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            무거웠던 기존 워드프로세서에서 벗어나세요. 초경량 편집 환경에 내장된 <strong>AI 어시스턴트</strong>가 초안 작성부터 요약, 문장 교정까지 빠르고 쾌적하게 도와줍니다.
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
            {/* 윈도우즈 버전 다운로드 버튼 */}
            <a 
              href="https://drive.google.com/file/d/1ahF23nER6zs0JIstQhtnsLK1LBpTzD3i/view?usp=sharing" 
              download
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl font-semibold transition shadow-lg shadow-slate-900/20"
            >
              <Download className="w-5 h-5" />
              <span>윈도우즈 버전 다운로드</span>
            </a>
          </div>
        </div>
      </section>

      {/* AI 어시스턴트 하이라이트 섹션 (신규 추가) */}
      <section id="ai-assistant" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 rounded-3xl p-8 md:p-14 text-white shadow-xl overflow-hidden relative">
            <div className="max-w-3xl space-y-4 mb-12">
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                <Bot className="w-4 h-4" />
                <span>DOC3 AI Assistant</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                문서 작업의 흐름을 끊지 않는 AI 비서
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                별도의 AI 툴을 오가며 복사·붙여넣기 할 필요가 없습니다. 에디터 안에서 바로 질문하고, 문서를 다듬으며 작업 속도를 획기적으로 높여보세요.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl space-y-3">
                <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center">
                  <Wand2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">스마트 초안 및 문장 교정</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  간단한 키워드나 메모만 입력하면 보고서, 이메일, 기획안 초안을 즉시 작성하고 문맥에 맞게 자연스럽게 다듬어 줍니다.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl space-y-3">
                <div className="w-10 h-10 bg-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center">
                  <FileSearch className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">긴 문서 핵심 요약 및 분석</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  분량이 많은 HWP, DOCX 문서를 열어 핵심 내용만 빠르게 요약하거나 필요한 정보를 대화하듯 질문하여 찾을 수 있습니다.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl space-y-3">
                <div className="w-10 h-10 bg-sky-500/20 text-sky-400 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">다국어 번역 및 톤앤매너 변환</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  작성 중인 문단을 비즈니스 격식체로 바꾸거나, 자연스러운 외국어로 번역하여 문서에 바로 반영할 수 있습니다.
                </p>
              </div>
            </div>
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
              <h3 className="text-xl font-bold text-slate-900">한글 문서 (HWP/HWPX)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">공공기관 및 국내 업무 환경에서 필수적인 HWP 포맷을 완벽하게 지원하여 호환성 문제를 해결합니다. HWP와 개방형 문서 포맷인 HWPX를 모두 지원합니다.</p>
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
            <p className="text-slate-600">가볍고 직관적인 설계에 최신 AI 기술까지 더해 누구나 부담 없이 쓸 수 있습니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col space-y-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-slate-900 text-lg">초경량 퍼포먼스</h3>
                <p className="text-slate-600 text-sm leading-relaxed">불필요한 무거운 리소스를 걷어내어 시스템 자원을 거의 소모하지 않으며 즉시 실행됩니다.</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4 p-6 rounded-2xl bg-blue-50/60 border border-blue-100">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-slate-900 text-lg">통합 AI 어시스턴트</h3>
                <p className="text-slate-600 text-sm leading-relaxed">초안 작성, 문서 요약, 문장 다듬기 등 강력한 AI 기능을 문서 편집기 내에서 바로 활용할 수 있습니다.</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
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
          <p className="text-sm text-slate-500">© 2026 DOC3 Project. 엠케이솔루션 제공 All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <a href="https://webdoc3.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">웹버전</a>
            <a href="https://github.com/matthewb2/webdoc3.git" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}