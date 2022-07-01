function editElement(reference, match, replecer) {
    // TODO
    let pattern = new RegExp(match, 'g');
    reference.textContent = reference.textContent.replace(pattern, replecer);
    console.log(reference.textContent)
}