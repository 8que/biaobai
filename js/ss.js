const searchIcon = document.getElementById('search-icon');
        const searchBox = document.getElementById('search-box');

        // 添加按下回车键的事件监听
        searchBox.addEventListener('keydown', (event) => {
            if (event.keyCode === 13) { // 回车键的键码是 13
                performSearch();
            }
        });

        // 点击图标或按下回车键时执行搜索
        searchIcon.addEventListener('click', performSearch);

        function performSearch() {
            const searchText = searchBox.value;
            const bingSearchUrl = `https://www.bing.com/search?q=${encodeURIComponent(searchText)}`;
            window.open(bingSearchUrl, '_blank'); // 在新标签页中打开搜索结果
        }