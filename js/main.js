document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const slider = document.querySelector('.slider');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // 更新active状态
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // 移动滑块
            slider.style.transform = `translateX(${index * 100}%)`;

            // 切换内容
            contents.forEach(content => content.classList.remove('active'));
            contents[index].classList.add('active');
        });
    });
}); 