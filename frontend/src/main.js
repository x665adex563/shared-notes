
import './styles.css'

// 側邊欄資料夾開合
document.addEventListener('click', (event) => {
  const label = event.target.closest(
    '.md-sidebar--primary label.md-nav__link[for]'
  )

  if (!label) return

  const toggle = document.getElementById(label.htmlFor)
  if (!(toggle instanceof HTMLInputElement)) return

  // 僅處理側邊欄的資料夾 checkbox
  if (!toggle.matches('.md-nav__toggle')) return

  // 讓瀏覽器先完成原生 label 點擊行為，不自行改寫狀態
})
