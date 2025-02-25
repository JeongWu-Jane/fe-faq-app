const Header = () => {
  return (
    <header>
      <div className="inner">
        <a className="logo" href="/">
          Wible BIZ
        </a>
        <nav>
          <ul>
            <li>
              <a href="/Guide">서비스 소개</a>
            </li>
            <li className="active">
              <a href="/FAQ">자주 묻는 질문</a>
            </li>
            <li>
              <a href="/News">새소식</a>
            </li>
            <li>
              <a href="/Counsel">상담문의</a>
            </li>
          </ul>
        </nav>
        <span className="util">
          <button type="button" className="nav" data-ui-click="nav-toggle">
            메뉴 열기/닫기
          </button>
        </span>
      </div>
    </header>
  );
};

export default Header;
