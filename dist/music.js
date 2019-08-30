const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false, //自动播放
    listFolded: true, //播放列表默认折叠
    listMaxHeight: 90, //播放列表最大高度
    order: 'list', //音频循环顺序, 可选值: 'list', 'random'
    loop: 'all', //音频循环播放, 可选值: 'all', 'one', 'none'
    theme: '#e9e9e9', //切换音频时的主题色，优先级低于audio.theme
    preload: 'none', //音频预加载，可选值: 'none', 'metadata', 'auto'
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    lrcType: 3, //歌词格式，可选值：3（LRC文件歌词格式），1（JS字符串歌词格式）
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    fixed: false, //吸底模式（fixed:true），迷你模式（mini:true），普通模式（注释此行或者设置fixed:false）
    audio: [
      {
        name: '千与千寻',
        artist: '木村弓',
        url: 'http://m10.music.126.net/20190830212834/d3d41e2c43230573a0c8a5765313a74d/ymusic/8786/ddc4/17a2/3884ffebfbe5fab07c8a795924e44566.mp3',
        cover: 'http://p2.music.126.net/Job7uTX8IWi3huhpJbuljQ==/109951163345986508.jpg?param=300x300',
      },
      {
        name: '千与千寻纯音乐',
        artist: '久石让',
        url: 'http://m10.music.126.net/20190830212834/858d3deee714a8e1b00ef5b51eeb203b/ymusic/3221/5daf/f974/ff1fc0aee3a281a81a06d830f25676b5.mp3',
        cover: 'http://p2.music.126.net/Fqtvy5xAQvnitsRa9j4HlA==/109951163345962194.jpg',
      },
      {
        name: '雷顿教授主题曲',
        artist: '西浦智仁',
        url: 'http://m10.music.126.net/20190830213403/1b8537bd8242396c0489e086e2281d76/ymusic/555c/5559/555e/b6b985a625b3808ccbbdb4ea41713a3f.mp3',
        cover: 'http://p1.music.126.net/cGdEqppOQBq89zwCTHwQug==/109951164240750009.jpg?param=300x300',
      },
      {
        name: "Theme of the Last Time Travel",
        artist: '西浦智仁',
        url: 'http://m10.music.126.net/20190830213403/22c5f58aeb70802bb8e6f93ea257be69/ymusic/91cf/90ce/319a/a30bed81f31b3a2a6ffa9eef4988a30d.mp3',
        cover: 'http://p2.music.126.net/E5h9E0HInwOun35o74qQKQ==/774056185966233.jpg?param=300x300',
      },
      {
        name: '只要有你的地方',
        artist: '林俊杰',
        url: 'http://m10.music.126.net/20190830213524/91c1530a7085b61d690fe1ee9e1da4b8/ymusic/5839/42ca/79f5/2a9ee2319b92e7973fe1e637491a027e.mp3',
        cover: 'http://p2.music.126.net/_zKTrWkGCYlp1WX_WbU92A==/3417282139968567.jpg?param=300x300',
      }
    ]
});