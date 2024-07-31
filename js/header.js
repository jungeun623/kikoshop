window.addEventListener("load", function () {
  // 모바일바 클릭했을때
  const navMb = this.document.querySelector(".nav-mb");
  //   const htmlRoot = this.document.querySelector("html");
  mbt.addEventListener("click", function () {
    // 현재 ani클래스가 있는지 없는지 파악
    const state = this.classList.contains("ani");
    if (state) {
      this.classList.remove("ani");
      navMb.classList.remove("active");
      //   htmlRoot.classList.remove("active");
    } else {
      this.classList.add("ani");
      navMb.classList.add("active");
      //   htmlRoot.classList.add("active");
    }
  });
});
