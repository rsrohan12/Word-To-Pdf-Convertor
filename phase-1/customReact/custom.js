function customRender(reactElements, container){
    // without loop
    /*const domElement = document.createElement(reactElements.type)
    domElement.innerHTML = reactElements.children
    domElement.setAttribute('href', reactElements.props.href)
    domElement.setAttribute('target', reactElements.props.target)

    container.appendChild(domElement)*/
    
    // with loop
    const domElement = document.createElement(reactElements.type)
    domElement.innerHTML = reactElements.children
    for(const prop in reactElements.props){
        domElement.setAttribute(prop, reactElements.props[prop])
    }
    container.appendChild(domElement)
}

const reactElements = {
    type: 'a',
    props: {
        href: 'htttps://google.com',
        target: '_blank'
    },
    children: 'Tap me to visit'
}

const mainContainer = document.querySelector('#root')

customRender(reactElements, mainContainer) // it is used to inject reactElements in root i.e. mainContiner