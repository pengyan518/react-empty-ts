function appendHtml(el: HTMLElement | null, str: string) {
  const div = document.createElement('div')
  div.innerHTML = str
  while (div.children.length > 0) {
    if (el) el.appendChild(div.children[0])
  }
}

export function prependHtml(el: {insertBefore: (arg0: Element, arg1: any) => void; firstChild: any}, str: string) {
  const div = document.createElement('div')
  div.innerHTML = str
  while (div.children.length > 0) {
    el.insertBefore(div.children[0], el.firstChild)
  }
}

export default appendHtml
