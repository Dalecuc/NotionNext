import { siteConfig } from '@/lib/config'
import { loadExternalResource } from '@/lib/utils'
import { useEffect } from 'react'

/**
 * Artalk 自托管评论系统 @see https://artalk.js.org/
 * @returns {JSX.Element}
 * @constructor
 */

const Artalk = ({ siteInfo }) => {
  const artalkCss = siteConfig('COMMENT_ARTALK_CSS')
  const artalkServer = siteConfig('COMMENT_ARTALK_SERVER')
  const artalkLocale = siteConfig('LANG')
  const site = siteConfig('TITLE')

  useEffect(() => {
    initArtalk()
    
    // 监听系统主题变化
    const darkModeObserver = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark')
      window?.Artalk?.ctx?.setDarkMode?.(isDark)
    })

    darkModeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => {
      darkModeObserver.disconnect()
    }
  }, [])

  const initArtalk = async () => {
    await loadExternalResource(artalkCss, 'css')
    window?.Artalk?.init({
      server: artalkServer,
      el: '#artalk',
      locale: artalkLocale,
      site: site,
      // 初始化时设置夜间模式
      darkMode: document.documentElement.classList.contains('dark')
    })
  }
  return (
        <div id="artalk"></div>
  )
}

export default Artalk
