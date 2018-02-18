const link = document.createElement('link')

link.href = browser.extension.getURL('/styles/kr-sans.css')
link.rel = 'stylesheet'

document.head.appendChild(link)
