function filterDatasets() {
    let input = document.getElementById('search').value.toLowerCase();
    let items = document.querySelectorAll('.dataset-item');

    items.forEach(item => {
        let text = item.textContent.toLowerCase();
        item.style.display = text.includes(input) ? 'flex' : 'none';
    });
}

