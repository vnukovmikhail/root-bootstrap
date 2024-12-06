const catalog = document.querySelector('.catalog div div')

for (let i = 0; i < 36; i++) {
    const item = document.createElement('div')
    item.style.padding = '5px'
    item.classList.add('border')
    item.innerHTML = `
    <div class="col d-flex flex-column gap-0">
        <div class="text-success"><h6>aviable</h6></div> 
        <img src="src/150x150.png" class="img-fluid" alt="...">
        <div class="text-warning font-weight-bold">s s s s s</div>
        <div class="text-truncate-s">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</div>
        <div>
            <div class="text-secondary" style="text-decoration: line-through;"><h6>$499</h6></div>
            <div><h4>$500</h4></div>
        </div>
    </div>
    `

    catalog.appendChild(item)
}