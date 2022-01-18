<template>
    <div class="flex min-h-screen">
        <div class="flex flex-col justify-between  bg-violet-600 text-white w-64">
            <div>
                <!-- logo -->
                <div class="flex justify-center items-center h-16">
                    <heroicons-outline-book-open class="w-10 h-10 mr-2" />
                    <span class="text-xl font-medium">yaoshou press</span>
                </div>
                <!-- 主要選單 -->
                <ul>
                    <li>
                        <RouterLink to="/" class="flex items-center px-5 py-3 text-white">
                            <heroicons-outline-home class="w-5 h-5 mr-2" />首頁
                        </RouterLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <RouterLink
                            to="/"
                            class="flex items-center px-5 py-3 text-violet-400 hover:text-white"
                        >
                            <heroicons-outline-document-text class="w-5 h-5 mr-2" />文章
                        </RouterLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <RouterLink
                            to="/"
                            class="flex items-center px-5 py-3 text-violet-400 hover:text-white"
                        >
                            <heroicons-outline-user class="w-5 h-5 mr-2" />個人資料
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <!-- 用戶名稱 -->
            <div class="flex justify-between items-center px-5 placeholder-sky-300 border-b border-violet-400">
                <div class="flex items-center">
                    <img class="w-8 h-8 rounded-full mr-2" src="https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_640.jpg" alt="">
                    <div class="tracking-wide font-medium">Jasonwu</div>
                </div>
                <button class="flex justify-center items-center w-7 h-7 hover:bg-violet-200 rounded transition-colors duration-100 " type="button">
                     <heroicons-outline-dots-vertical class="w-5 h-5 " />
                </button>
            </div>
        </div>

        <div class="flex-grow min-w-0">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>