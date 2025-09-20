export default function clickOutside(node) {
    function handleClick(e) {
        if (!(e.target instanceof Node) || !node.contains(e.target)) {
            node.dispatchEvent(new CustomEvent('outsideclick'));
        }
    }
    window.addEventListener('click', handleClick);
    return {
        destroy() {
            window.removeEventListener('click', handleClick);
        },
    };
}
//# sourceMappingURL=clickOutside.js.map