export function handleScroll(e){
  // const h = document.documentElement.offsetHeight;
  
  // console.log(h - window.scrollY);
}
export function handleClick(e){
  const aside = document.querySelector('.aside');
  aside && aside.classList.remove('active');
}
export function handleGoBack(e){
  window.history.go(-1);
}